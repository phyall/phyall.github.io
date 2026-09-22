---
layout: archive
title: "Staff"
permalink: /staff/
sidebar: quicklinks
---


<div class="staff-grid">

{% assign staff = site.data.all_staff | sort: "position" %}

{% for person in staff %}
    {% include staff-card.html person=person %}
{% endfor %}

</div>
