---
layout: archive
permalink: /topics/
title: Research Areas
sidebar: quicklinks
---

<!--{% include faculty-area-chart.html %}-->

Faculty in the Department of Physics perform state-of-the-art research in diverse directions. The set of broad research directions existing in the Department are as follows.

<ul class="topics-list">
  {% assign research_groups = site.data.research_groups | sort: "alphabet" %}
  {% assign current_primary_faculty = site.data.faculty_details
    | where: "affiliation", "primary"
    | where: "status", "current" %}
  {% for group in research_groups %}
    {% if group.slug %}
      {% assign group_faculty_count = current_primary_faculty | where_exp: "item", "item.area contains group.id" | size %}
      {% if group_faculty_count > 0 %}
        <li><span class="topic-name">{{ group.title }}</span><a class="topic-side-link" href="{{ site.baseurl }}/topics/{{ group.slug }}/">Faculty &rarr;</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}
</ul>

<!--See [here]({{ site.baseurl }}/topic-wise/) for a research area-wise grouping of faculty.-->
