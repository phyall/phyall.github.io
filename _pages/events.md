---
layout: archive
permalink: /events/
title: "Department Events"
sidebar: quicklinks
---

Physics Symposium
------
{% for symposium in site.data.symposium %}

{% if symposium.status == "past" %}

<p>
<strong>Department of Physics Symposium ({{ symposium.date }})</strong>
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ symposium.date }}.pdf"
   target="_blank"
   class="badge">PDF</a>
</p>

{% endif %}

{% endfor %}
