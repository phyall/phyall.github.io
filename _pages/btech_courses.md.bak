---
layout: archive
title: "B.Tech. Course Catalogue"
permalink: /btechcourses/
sidebar: quicklinks
---

{% assign btech = site.data.btech_courses | where: "program", "btech" %}

## Core Courses

{% assign core = btech | where: "category", "core" %}

{% include course_table.html courses=core %}

## Elective Courses

{% assign dept = btech
   | where: "category", "elective"
   | where: "offered_by", "dop" %}

{% include course_table.html courses=dept %}
