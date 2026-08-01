---
layout: archive
title: "M.Sc. Course Catalogue"
permalink: /msccourses/
sidebar: quicklinks
---

{% assign msc = site.data.msc_courses | where: "program", "msc" %}

## Core Courses

{% assign core = msc | where: "category", "core" %}

{% include course_table.html courses=core %}

## Elective Courses

**Department Electives**

{% assign dept = msc
   | where: "category", "elective"
   | where: "offered_by", "dop" %}

{% include course_table.html courses=dept %}

**NPTEL Electives**

{% assign nptel = msc
   | where: "category", "elective"
   | where: "offered_by", "nptel" %}

{% include course_table.html courses=nptel %}
