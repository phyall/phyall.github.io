---
layout: archive
permalink: /formermsc/
title: "Former MSc Students"
sidebar: quicklinks
---


Below are the graduating MSc batches.

<div class="year-badges">

{% assign pages = site.msc_alumni | sort: "year" | reverse %}

{% for p in pages %}
<a class="year-badge" href="{{ p.url | relative_url }}">
{{ p.year }}
</a>
{% endfor %}

</div>
