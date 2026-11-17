---
layout: archive
title: "Regular Faculty"
permalink: /faculty/
sidebar: 
---

{% assign primary_faculty = site.data.all_faculty
   | where: "affiliation", "primary"
   | where: "status", "current"
   | sort: "date_joined" %}

<div style="text-align: right; margin-bottom: 1.5rem;">
  <a class="topic-side-link" href="{{ site.baseurl }}/formerfaculty/">Former Faculty &rarr;</a>
</div>   

<!--{% assign secondary_faculty = site.data.all_faculty
   | where: "affiliation", "secondary"
   | where: "status", "current"
   | sort: "date_joined" %}-->


<div class="faculty-grid">
{% for person in primary_faculty %}
    {% include faculty-card.html person=person %}
{% endfor %}
</div>

<!--{% if secondary_faculty.size > 0 %}

<h3 style="margin-top:3rem;">Secondary Affiliation</h3>

<div class="faculty-grid">
{% for person in secondary_faculty %}
    {% include faculty-card.html person=person %}
{% endfor %}
</div>

{% endif %}-->
