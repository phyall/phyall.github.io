---
layout: archive
permalink: /formermsc/
title: Former MSc Students
sidebar: quicklinks
---

{% assign pages = site.msc_alumni | sort: "title" %}
{% for p in pages reversed %}
  <a class="year-badge" href="{{ p.url | relative_url }}">
    {{ p.year }}
  </a>
{% endfor %}



{::nomarkdown}
<label for="msc-year">Select graduating year:</label>

<select id="msc-year" class="msc-year-select" onchange="if (this.value) window.location.href=this.value;">
<option value="">Select</option>
{% assign pages = site.msc_alumni | sort: "year" | reverse %}
{% for p in pages %}
<option value="{{ p.url | relative_url }}">{{ p.year }}</option>
{% endfor %}
</select>
{:/nomarkdown}
