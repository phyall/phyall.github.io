---
layout: archive
permalink: /events/
title: "Department Events"
sidebar: quicklinks
---

Physics Symposium
------

{% if symposium.status == "past" %}
<strong>Department of Physics Symposium ({{ symposium.date }})</strong>
<a href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ symposium.date }}.pdf"
   target="_blank" class="badge">PDF</a>
{% endif %}
