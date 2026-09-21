---
layout: archive
permalink: /postdocs/
title: "Postdocs in Physics"
sidebar: quicklinks
---

{% assign associated_postdocs = site.data.all_postdocs
    | where: "status", "ongoing"
    | where: "guide_affiliation", "secondary" %}

## Hosted by Regular Faculty

{% include postdoc_table.html postdocs=site.data.all_postdocs affiliation="primary" %}

{% if associated_postdocs.size > 0 %}
## Hosted by Associated Faculty

{% include postdoc_table.html postdocs=site.data.all_postdocs affiliation="secondary" %}
{% endif %}
