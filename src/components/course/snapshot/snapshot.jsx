"use client";

import {
  GraduationCap,
  Building2,
  Clock3,
  Monitor,
  BadgeCheck,
  ClipboardCheck,
  BookOpen,
  Award,
  Briefcase,
  UserCheck,
  LibraryBig,
  FileText,
} from "lucide-react";

import SnapshotGroup from "./snapshot-group";

export default function Snapshot({ data }) {
  const s = data.snapshot;

  const groups = [
    {
      title: "Programme",
      items: [
        {
          icon: GraduationCap,
          label: "Programme Name",
          value: s.programmeName,
        },
        s.degreeLevel && {
          icon: Award,
          label: "Degree Level",
          value: s.degreeLevel,
        },
        {
          icon: Building2,
          label: "University",
          value: s.university,
        },
        {
          icon: Clock3,
          label: "Duration",
          value: s.duration,
        },
        {
          icon: Monitor,
          label: "Mode of Learning",
          value: s.modeOfLearning,
        },
      ].filter(Boolean),
    },

    {
      title: "Admissions",
      items: [
        {
          icon: UserCheck,
          label: "Eligibility",
          value: s.eligibility,
        },
        {
          icon: ClipboardCheck,
          label: "Entrance Test",
          value: s.entranceTest,
        },
        {
          icon: FileText,
          label: "Admission Process",
          value: s.admissionProcess,
        },
      ],
    },

    {
      title: "Recognition",
      items: [
        {
          icon: BadgeCheck,
          label: "Approvals & Rankings",
          value: s.approvals,
        },
        s.topSpecializations && {
          icon: Award,
          label: "Specializations",
          value: s.topSpecializations,
        },
      ].filter(Boolean),
    },

    {
      title: "Learning",
      items: [
        {
          icon: LibraryBig,
          label: "LMS",
          value: s.lms,
        },
        {
          icon: BookOpen,
          label: "Examination",
          value: s.examinations,
        },
      ],
    },

    {
      title: "Career",
      items: [
        {
          icon: Briefcase,
          label: "Placement Assistance",
          value: s.placement,
        },
        {
          icon: GraduationCap,
          label: "Top Job Roles",
          value: s.topRoles,
        },
      ],
    },
  ];

  return (
    <section
      id="overview"
      className="py-8"
    >
      <div className="mx-auto max-w-7xl px-6">

        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
          Course Snapshot
        </span>

        <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
          Course Highlights & Benefits
        </h2>

        <p className="mt-3 max-w-3xl leading-8 text-muted-foreground">
          Everything you need to know about the programme in one place.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">

          <div className="lg:col-span-2">
            <SnapshotGroup 
              title={groups[0].title}
              items={groups[0].items}
              columns={2}
            />
          </div>

          <SnapshotGroup
            title={groups[1].title}
            items={groups[1].items}
          />

          <SnapshotGroup
            title={groups[2].title}
            items={groups[2].items}
          />

          <SnapshotGroup
            title={groups[3].title}
            items={groups[3].items}
          />

          <SnapshotGroup
            title={groups[4].title}
            items={groups[4].items}
          />

        </div>

      </div>
    </section>
  );
}