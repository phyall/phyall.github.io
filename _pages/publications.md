---
layout: archive
permalink: /publications/
title: Publications
sidebar: quicklinks
---

{% assign by_year = site.data.all_publications | group_by: "year" | sort: "name" | reverse %}

{% for group in by_year %}

<h2 class="pub-year-subheading">{{ group.name }}</h2>

<ol class="pub-list">
  {% assign items = group.items | sort: "sort" | reverse %}
  {% for pub in items %}
    <li class="pub-item">
      {{ pub.title }}, {{ pub.authors }},
      {% if pub.doi %}
        <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">{{ pub.journal }}</a>
      {% else %}
        {{ pub.journal }}
      {% endif %}
      ({{ pub.year }}).
    </li>
  {% endfor %}
</ol>

{% endfor %}
