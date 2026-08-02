---
layout: archive
permalink: /research/
title: "Research"
sidebar: quicklinks
---

Faculty in the Department of Physics perform state-of-the-art research in diverse topics. A broad classification of these topics are given below. 

{% for group in site.data.research_groups %}

<h3 class="faculty-mini-group-title">
  {{ group.title }}
</h3>

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

<h4 class="faculty-mini-associated-title">
  Associated Faculty
</h4>

<div class="faculty-mini-grid">

  {% for faculty in secondary %}
    {% include faculty-mini-card.html faculty=faculty %}
  {% endfor %}

</div>

{% endif %}

{% endfor %}
