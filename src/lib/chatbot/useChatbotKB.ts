"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { fetchCourseCmsAction, fetchUniversityCmsAction } from "./action";
import { detectCourseSlug } from "./course-match";
import { isCounsellorIntent } from "./counsellor-intent";
import { buildKnowledgeBase, getBotReply as scoreKB } from "./kb-builder";
import { buildCourseSummaries } from "./normalize";
import { CourseSummary, KBEntry, RawCourse, RawUniversity } from "./types";

interface UseChatbotKBResult {
  ready: boolean;
  courses: CourseSummary[];
  getBotReply: (text: string) => Promise<KBEntry>;
  isCounsellorIntent: (text: string) => boolean;
}

/**
 * @param universitySlug e.g. "ignou"
 * @param courseSlug the slug of the course page the widget is currently
 *   mounted on, if any (e.g. "online-mba"). Pass this reactively — if it's
 *   coming from a persistent layout that doesn't remount on navigation
 *   (e.g. derived from usePathname), this hook picks up changes to it.
 */
export function useChatbotKB(
  universitySlug: string,
  courseSlug?: string
): UseChatbotKBResult {
  const [ready, setReady] = useState(false);
  const [courses, setCourses] = useState<CourseSummary[]>([]);

  const universityRef = useRef<RawUniversity | null>(null);
  const activeCourseSlugRef = useRef<string | undefined>(courseSlug);
  const courseCacheRef = useRef<Map<string, RawCourse | null>>(new Map());
  const kbCacheRef = useRef<Map<string, KBEntry[]>>(new Map());

  // Load the university once, plus the initial course if one was given.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      const university = await fetchUniversityCmsAction(universitySlug);
      if (cancelled || !university) return;

      universityRef.current = university;
      setCourses(buildCourseSummaries(university.course_data));

      if (courseSlug) {
        const course = await fetchCourseCmsAction(universitySlug, courseSlug);
        if (cancelled) return;
        courseCacheRef.current.set(courseSlug, course);
      }

      if (!cancelled) setReady(true);
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [universitySlug]);

  // The layout hosting <ChatBot /> persists across course-to-course
  // navigation (Next.js doesn't remount a shared layout), so courseSlug
  // can change on us after mount — keep the active course in sync.
  useEffect(() => {
    if (courseSlug) activeCourseSlugRef.current = courseSlug;
  }, [courseSlug]);

  const getKbFor = useCallback(async (courseSlug: string | undefined): Promise<KBEntry[]> => {
    const cacheKey = courseSlug ?? "__university_only__";
    const cached = kbCacheRef.current.get(cacheKey);
    if (cached) return cached;

    let course: RawCourse | null = null;
    if (courseSlug) {
      if (!courseCacheRef.current.has(courseSlug)) {
        course = await fetchCourseCmsAction(universitySlug, courseSlug);
        courseCacheRef.current.set(courseSlug, course);
      } else {
        course = courseCacheRef.current.get(courseSlug) ?? null;
      }
    }

    const kb = buildKnowledgeBase({ university: universityRef.current as RawUniversity, course });
    kbCacheRef.current.set(cacheKey, kb);
    return kb;
  }, [universitySlug]);

  const getBotReply = useCallback(
    async (text: string): Promise<KBEntry> => {
      const detected = detectCourseSlug(text, courses);
      if (detected) activeCourseSlugRef.current = detected;

      const activeCourse = activeCourseSlugRef.current;
      const kb = await getKbFor(activeCourse);
      return scoreKB(text, kb, { activeCourse });
    },
    [courses, getKbFor]
  );

  return { ready, courses, getBotReply, isCounsellorIntent };
}