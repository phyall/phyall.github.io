---
layout: archive
permalink: /postdocs/
title: "Postdocs in Physics"
sidebar: quicklinks
---


## Current Postdoctoral Researchers

{% assign current = site.data.postdocs | where: "status", "ongoing" %}

{% include postdoc_table.html postdocs=current %}

## Former Postdoctoral Researchers

{% assign former = site.data.postdocs
    | where: "status", "finished"
    | sort: "finishing_year"
    | reverse %}

{% include postdoc_table.html postdocs=former %}
