---
layout: archive
permalink: /formermsc/
title: Former MSc Students
sidebar: quicklinks
---

{::nomarkdown}
<div class="msc-year-nav">
  <label for="msc-year" class="msc-year-nav__label">Browse by graduating batch</label>
  <div class="msc-year-select-wrap">
    <select id="msc-year" class="msc-year-select" onchange="if (this.value) window.location.href=this.value;">
      <option value="">Select graduation year</option>
      {% assign pages = site.msc_alumni | sort: "year" | reverse %}
      {% for p in pages %}
      <option value="{{ p.url | relative_url }}">{{ p.year }}</option>
      {% endfor %}
    </select>
  </div>
</div>
{:/nomarkdown}
