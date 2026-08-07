---
layout: archive
title: "M.Sc. Course Catalogue"
permalink: /msccourses/
sidebar: quicklinks
---

{% assign approved_core_courses = site.data.msc_courses
    | where: "program", "msc"
    | where: "category", "core"
    | where: "status", "approved"
    | sort: "code" %}

{% assign proposed_core_courses = site.data.msc_courses
    | where: "program", "msc"
    | where: "category", "core"
    | where: "status", "proposed"
    | sort: "code" %}


**Senate-approved Core Courses**

{% include course-table.html courses=approved_core_courses %}


**Proposed Core Courses**

{% if proposed_core_courses.size > 0 %}

  {% include course-table.html courses=proposed_core_courses %}

{% else %}

Currently no proposed core courses.

{% endif %}


**Core Courses**

{% include msc-core-course-table.html %}

**Elective Courses**

**NPTEL Courses**
