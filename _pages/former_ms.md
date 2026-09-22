---
layout: archive
permalink: /formerms/
title: Former MS by Research Students
sidebar: quicklinks
---

{% assign finished_students = site.data.all_ms_students | where: "status", "finished" %}

{% assign associated_students = finished_students | where: "guide_affiliation", "secondary" %}
{% assign other_students = finished_students | where: "guide_affiliation", "other" %}

## Supervised by Regular Faculty

{% include former_ms_table.html students=site.data.all_ms_students affiliation="primary" %}

{% if associated_students.size > 0 %}
## Supervised by Associated Faculty

{% include former_ms_table.html students=site.data.all_ms_students affiliation="secondary" %}
{% endif %}

{% if other_students.size > 0 %}
## Externally Supervised

{% include former_ms_table.html students=site.data.all_ms_students affiliation="other" %}
{% endif %}

(Year implies graduation year)
