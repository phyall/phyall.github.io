---
layout: archive
permalink: /phdstudents/
title: "Ph.D. Students"
sidebar: quicklinks
---

**Current PhD students in the Departments**

{% assign current = site.data.phd_students
    | where: "status", "ongoing" %}

{% include phd_student_table.html students=current %}
