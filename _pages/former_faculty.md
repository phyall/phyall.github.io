---
layout: archive
title: "Former Faculty"
permalink: /formerfaculty/
sidebar: quicklinks
---

{% assign former_regular = site.data.faculty_details
   | where: "status", "former"
   | where: "position", "regular"
   | sort: "date_joined" %}

{% assign former_temporary = site.data.faculty_details
   | where: "status", "former"
   | where: "position", "temporary"
   | sort: "date_joined" %}

{% if former_regular.size > 0 %}
<div class="faculty-grid">
{% for faculty in former_regular %}
    {% include faculty-card-former.html faculty=faculty %}
{% endfor %}
</div>
{% endif %}

{% if former_temporary.size > 0 %}

<h3 class="topic-associated-title">Temporary Faculty</h3>

<div class="faculty-grid">
{% for faculty in former_temporary %}
    {% include faculty-card-former.html faculty=faculty %}
{% endfor %}
</div>

{% endif %}
