---
layout: archive
title: "Staff"
permalink: /staff/
sidebar: quicklinks
---


<div class="staff-grid">

{% assign staff = site.data.staff_details | sort: "position" %}

{% for person in staff %}
    {% include staff-card.html person=person %}
{% endfor %}

</div>
