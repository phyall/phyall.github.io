---
layout: archive
permalink: /research/
title: "Research"
sidebar: quicklinks
---

{% for group in site.data.research_groups %}

<h2 class="faculty-mini-group-title">
  {{ group.title }}
</h2>

{% assign primary = site.data.faculty_details
  | where: "area", group.id
  | where: "affiliation", "primary"
  | sort: "date_joined" %}

{% if primary.size > 0 %}

<div class="faculty-mini-grid">

  {% for faculty in primary %}
    {% include faculty-mini-card.html faculty=faculty %}
  {% endfor %}

</div>

{% endif %}

{% assign secondary = site.data.faculty_details
  | where: "area", group.id
  | where: "affiliation", "secondary"
  | sort: "name" %}

{% if secondary.size > 0 %}

<h3 class="faculty-mini-associated-title">
  Associated Faculty
</h3>

<div class="faculty-mini-grid">

  {% for faculty in secondary %}
    {% include faculty-mini-card.html faculty=faculty %}
  {% endfor %}

</div>

{% endif %}

{% endfor %}
