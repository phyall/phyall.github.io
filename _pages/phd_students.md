---
layout: archive
permalink: /phdstudents/
title: "Ph.D. Students"
sidebar: quicklinks
---

{% assign ongoing_students = site.data.all_phd_students | where: "status", "ongoing" %}
{% assign submitted_students = site.data.all_phd_students | where: "status", "submitted" %}
{% assign current_students = ongoing_students | concat: submitted_students %}

{% assign associated_students = current_students | where: "guide_affiliation", "secondary" %}
{% assign other_students = current_students | where: "guide_affiliation", "other" %}

## Supervised by Regular Faculty

{% include phd_student_table.html students=site.data.all_phd_students affiliation="primary" %}

{% if associated_students.size > 0 %}
## Supervised by Associated Faculty

{% include phd_student_table.html students=site.data.all_phd_students affiliation="secondary" %}
{% endif %}

{% if other_students.size > 0 %}
## Externally Supervised

{% include phd_student_table.html students=site.data.all_phd_students affiliation="other" %}
{% endif %}
