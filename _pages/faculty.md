---
layout: archive
title: "Faculty"
permalink: /faculty/
sidebar: quicklinks
author_profile: true
---

{% assign primary_faculty = site.data.faculty_details
   | where: "affiliation", "primary"
   | sort: "date_joined" %}

{% assign secondary_faculty = site.data.faculty_details
   | where: "affiliation", "secondary"
   | sort: "date_joined" %}


<div class="faculty-grid">
{% for person in primary_faculty %}
    {% include faculty-card.html person=person %}
{% endfor %}
</div>

{% if secondary_faculty.size > 0 %}

<h3 style="margin-top:3rem;">Secondary Affiliation</h3>

<div class="faculty-grid">
{% for person in secondary_faculty %}
    {% include faculty-card.html person=person %}
{% endfor %}
</div>

{% endif %}
