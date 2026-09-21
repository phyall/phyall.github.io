---
layout: archive
permalink: /phdstudents/
title: "Ph.D. Students"
sidebar: quicklinks
---

{% assign current_students = site.data.all_phd_students
    | where_exp: "s", "s.status == 'ongoing' or s.status == 'submitted'" %}

{% assign associated_students = current_students | where: "guide_affiliation", "secondary" %}

{% assign other_students = current_students
    | where_exp: "s", "s.guide_affiliation != 'primary' and s.guide_affiliation != 'secondary'" %}

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
