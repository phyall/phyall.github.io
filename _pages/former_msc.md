---
layout: archive
permalink: /formermsc/
title: Former MSc Students
sidebar: quicklinks
---

Number of pages: {{ site.msc_alumni | size }}

<ul>
{% for p in site.msc_alumni %}
<li>{{ p.title }}</li>
{% endfor %}
</ul>
