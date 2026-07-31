---
layout: archive
title: "People"
permalink: /people/
author_profile: true
---


{% assign faculty = site.data.faculty_details
   | sort: "date_joined" %}

<div class="people-grid">
  {% for person in faculty %}
    {% include person-card.html person=person %}
  {% endfor %}
</div>
