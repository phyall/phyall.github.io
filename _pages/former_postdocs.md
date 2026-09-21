---
layout: archive
permalink: /formerpostdocs/
title: "Former Postdocs in Physics"
sidebar: quicklinks
---

## Hosted by Regular Faculty

{% include former-postdoc-table.html postdocs=site.data.all_postdocs affiliation="primary" %}

{% assign associated_postdocs = site.data.all_postdocs
    | where: "status", "finished"
    | where: "guide_affiliation", "secondary" %}

{% if associated_postdocs.size > 0 %}
## Hosted by Associated Faculty

{% include former-postdoc-table.html postdocs=site.data.all_postdocs affiliation="secondary" %}
{% endif %}
