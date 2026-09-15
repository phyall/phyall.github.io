---
layout: archive
permalink: /topic-wise/
title: Topic-wise groups of Faculty
sidebar: quicklinks
---

{% assign research_groups = site.data.research_groups | sort: "alphabet" %}

{% for group in research_groups %}

### {{ group.title }}

{% assign primary = site.data.faculty_details
  | where_exp: "item", "item.area contains group.id"
  | where: "affiliation", "primary"
  | where: "status", "current"
  | sort: "last_name" %}

{% if primary.size > 0 %}
{% for faculty in primary %}
{% include faculty-card-simple.html faculty=faculty %}
{% endfor %}
{% endif %}

{% endfor %}
