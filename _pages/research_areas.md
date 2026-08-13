---
layout: archive
permalink: /research-areas/
title: "Research Areas"
sidebar: quicklinks
---

{% assign research_groups = site.data.research_groups | sort: "alphabet" %}

{% for group in research_groups %}

<h3 class="faculty-mini-group-title">
  {{ group.title }}
</h3>

{% assign primary = site.data.faculty_details
  | where: "area", group.id
  | where: "affiliation", "primary"
  | where: "status", "current"
  | sort: "last_name" %}

{% if primary.size > 0 %}

<div class="faculty-mini-grid">

  {% for faculty in primary %}
    {% include faculty-card-simple.html faculty=faculty %}
  {% endfor %}

</div>

{% endif %}

{% assign secondary = site.data.faculty_details
  | where: "area", group.id
  | where: "affiliation", "secondary"
  | where: "status", "current"
  | sort: "last_name" %}

{% if secondary.size > 0 %}

<h4 class="faculty-mini-associated-title">
  Associated Faculty
</h4>

<div class="faculty-mini-grid">

  {% for faculty in secondary %}
    {% include faculty-card-simple.html faculty=faculty %}
  {% endfor %}

</div>

{% endif %}

{% endfor %}
