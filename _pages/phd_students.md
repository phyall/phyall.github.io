---
layout: archive
permalink: /phdstudents/
title: "Ph.D. Students"
sidebar: quicklinks
---

{% assign ongoing_key = "ongoing" %}
{% assign submitted_key = "submitted" %}
{% assign primary_key = "primary" %}
{% assign secondary_key = "secondary" %}

{% assign current_students = site.data.all_phd_students | where_exp: "s", "s.status == ongoing_key or s.status == submitted_key" %}

{% assign associated_students = current_students | where: "guide_affiliation", "secondary" %}

{% assign other_students = current_students | where_exp: "s", "s.guide_affiliation != primary_key and s.guide_affiliation != secondary_key" %}

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
