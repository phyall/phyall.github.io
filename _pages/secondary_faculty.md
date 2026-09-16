---
layout: archive
title: "Associated Faculty"
permalink: /associated-faculty/
sidebar: quicklinks
---

**Faculty members with secondary affiliation to the Department of Physics, IIT Palakkad**

{% assign secondary_faculty = site.data.faculty_details
   | where: "affiliation", "secondary"
   | where: "status", "current"
   | sort: "date_joined" %}


<div class="faculty-grid">
{% for person in secondary_faculty %}
    {% include faculty-card.html person=person %}
{% endfor %}
</div>

