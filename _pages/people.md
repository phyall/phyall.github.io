---
layout: archive
title: "People"
permalink: /people/
author_profile: true
---

{% assign faculty = site.data.faculty_details | sort: "date_joined" %}

<div class="faculty-grid">
  {% for person in faculty %}
    {% include faculty-card.html person=person %}
  {% endfor %}
</div>
