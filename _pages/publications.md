---
layout: archive
permalink: /publications/
title: Publications
sidebar: quicklinks
---

{% assign by_year = site.data.publications | group_by: "year" | sort: "name" | reverse %}

{% for group in by_year %}

<h2 class="pub-year-heading">{{ group.name }}</h2>

<div class="pub-list">
  {% assign items = group.items | sort: "sort" | reverse %}
  {% for pub in items %}
    <div class="pub-item">
      <p class="pub-title">
        {% if pub.doi %}
          <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">{{ pub.title }}</a>
        {% else %}
          {{ pub.title }}
        {% endif %}
      </p>
      <p class="pub-authors">{{ pub.authors }}</p>
      <p class="pub-journal">{{ pub.journal }}{% if pub.year %} ({{ pub.year }}){% endif %}</p>
    </div>
  {% endfor %}
</div>

{% endfor %}
