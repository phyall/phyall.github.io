---
layout: archive
permalink: /mscstudents/
title: "M.Sc. Students"
sidebar: quicklinks
---

{% assign batch_keys = "" | split: "" %}

{% for item in site.data %}
  {% assign key = item[0] %}
  {% assign prefix = key | slice: 0, 8 %}
  {% if prefix == "list_msc" %}
    {% assign batch_keys = batch_keys | push: key %}
  {% endif %}
{% endfor %}

{% assign batch_keys = batch_keys | sort %}

{% assign current_key = batch_keys | last %}
{% assign previous_key = batch_keys | slice: -2, 1 | first %}

<h2>First Year</h2>

{% include msc-table.html students=site.data[current_key] %}

<h2>Second Year</h2>

{% include msc-table.html students=site.data[previous_key] %}
