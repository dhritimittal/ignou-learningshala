# LearningShala Design System v1.0

---

# Philosophy

LearningShala is not a university website.

It is a premium educational platform whose primary objective is to help students confidently choose and enroll in online degree programmes.

The design should reduce cognitive load while increasing trust and conversions.

Every component should answer one user question.

Never add UI simply because it looks attractive.

---

# Core Design Principles

1. Information before decoration.

2. Every section answers one question.

3. One primary CTA per viewport.

4. Reduce cognitive load.

5. White space is part of the design.

6. Motion should guide attention, not entertain.

7. Blue represents actions.

8. Yellow represents trust and important information.

9. Every page should be SEO friendly.

10. Every component should eventually be CRM driven.

---

# Visual Personality

Professional

Modern

Editorial

Premium

Minimal

Confident

Accessible

Not corporate.

Not overly playful.

---

# Brand Colors

## Primary

Navy

#061122

Used for

- Footer
- Dark CTA
- Hero overlays
- Strong contrast backgrounds

---

Blue

#0B6089

Used for

- Primary buttons
- Links
- Icons
- Active states
- Highlights

---

Light Blue

#4A9FC0

Used for

- Gradients
- Decorative graphics
- Secondary accents

---

## Accent

Yellow

#F6C94A

Used for

- Deadlines
- Timelines
- Progress
- Accreditation
- Important statistics

Never use yellow as a page background.

Never use yellow for body text.

---

Gold

#C79A22

Used for

- Small headings
- Trust badges
- Recognition labels

---

## Neutral

Background

#FCFDFE

Surface

#FFFFFF

Soft Section

#FFF8E7

Primary Text

#0F172A

Secondary Text

#475569

Borders

#E2E8F0

---

# Color Rules

Blue = Action

Yellow = Trust

White = Reading

Cream = Highlight

Navy = Final Conversion

---

# Typography

Font Family

Geist

Fallback

Inter

---

Display

64px

900

Line Height

1.05

Hero only.

---

H1

52px

800

---

H2

42px

800

---

H3

30px

700

---

Body Large

18px

500

---

Body

16px

400

---

Caption

14px

500

---

Typography Rules

Maximum heading length

2 lines

Maximum paragraph

4 lines

Maximum bullets

6

Avoid long paragraphs.

---

# Spacing

Desktop

Section

112px

Tablet

88px

Mobile

64px

---

Container

max-width

1280px

---

Grid Gap

Small

24px

Medium

40px

Large

64px

Never invent arbitrary spacing.

---

# Border Radius

Small

12px

Medium

20px

Large

28px

Pill

999px

---

# Shadows

Soft

Cards

Medium

Floating UI

Large

Hero Image

No harsh shadows.

---

# Buttons

Primary

Blue

Filled

Used once per viewport.

---

Secondary

White

Blue Border

Supporting actions.

---

Ghost

Text only.

---

Accent

Yellow

Only for

Deadlines

Special campaigns

Never as default CTA.

---

# Badges

Admissions Open

UGC Approved

NAAC A++

AICTE

Deadline

New

Limited Seats

Badges should be small.

Never dominate the layout.

---

# Section Order

Every course page follows

Navbar
Hero
Overview
Highlights
Fees
Eligibility
Specializations
Curriculum
LMS
Examination
Degree
Careers
Faculty
Reviews
Admission
RelatedCourses
CTAFooter

Never randomly reorder sections.

---

# Layout Principles

Every section must answer ONE question.

Example

Hero

Why should I care?

Overview

What is this course?

Fees

Can I afford it?

Eligibility

Can I apply?

Curriculum

What will I study?

Careers

What happens afterwards?

Reviews

Can I trust this?

FAQ

What doubts remain?

CTA

Ready to apply?

---

# Components

Reusable Components

Button

Heading

Badge

Section

Container

Reveal

Counter

Timeline

Accordion

Tabs

Stat

Divider

Everything else is composed from these.

---

# Cards

Cards are not the default layout.

Prefer

Editorial layouts

Timelines

Tables

Split layouts

Comparison blocks

Use cards only when they improve readability.

---

# Motion

Animations should feel invisible.

Fade Up

0.5s

Distance

20px

---

Images

Scale

1.03

↓

1

---

Headings

Word stagger

Only for major headings.

---

Counters

1.2s

Ease Out

---

Never

Bounce

Rotate

Spin

Flash

---

# Icons

Lucide React

Stroke only.

No filled icon packs.

---

# Imagery

Large.

Clean.

Real students.

Real campus.

Real certificates.

Avoid stock images whenever possible.

---

# Illustration Rules

Use

Subtle gradients

Soft blobs

Thin outlines

Avoid

Heavy abstract graphics

Excessive decoration

---

# Accessibility

Minimum contrast

WCAG AA

Keyboard navigation

Required

Visible focus states

Required

Alt text

Required

Semantic headings

Required

---

# SEO Rules

Every section contains

One H2

Supporting paragraph

Visual component

CTA (if appropriate)

No important content hidden inside tabs.

FAQs use schema.

Breadcrumbs use schema.

Metadata generated dynamically.

---

# Content Rules

Never use filler text.

Use bullets whenever scanning is easier.

Keep reading effort low.

Every section should answer a question immediately.

---

# Responsive Rules

Desktop

Editorial layouts

Tablet

2 columns

Mobile

Single column

Never horizontal scrolling.

---

# CRM Rules

UI never depends directly on CRM fields.

CRM

↓

Mapper

↓

Course Model

↓

Components

Components only receive clean props.

---

# File Structure

components/

layout/

home/

course/

shared/

ui/

Course pages only assemble components.

Business logic belongs in lib/.

---

# Future Expansion

The same design system must support

Homepage

Course Pages

College Pages

University Pages

Blog

AI Counsellor

Search

Comparison Pages

without introducing new visual languages.

---

# Success Criteria

If a new page is built using only this document,
it should feel like a native part of the LearningShala platform.
