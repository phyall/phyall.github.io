---
layout: archive
permalink: /research/
title: "Research"
sidebar: quicklinks
---

{% for group in site.data.research_groups %}

<h2>{{ group.title }}</h2>

<div class="faculty-mini-grid">

{% assign members = site.data.faculty_details
    | where:"area",group.id
    | where:"affiliation","primary"
    | sort:"date_joined" %}

{% for faculty in members %}

{% include faculty-mini-card.html faculty=faculty %}

{% endfor %}

</div>

{% endfor %}
