---
layout: archive
title: "Former Faculty"
permalink: /formerfaculty/
sidebar: quicklinks
---


{% assign former_faculty = site.data.faculty_details
   | where: "status", "former"
   | sort: "date_joined" %}

<div class="faculty-grid">
{% for faculty in former_faculty %}
    {% include faculty-card-former.html faculty=faculty %}
{% endfor %}
</div>
