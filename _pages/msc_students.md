---
layout: archive
permalink: /mscstudents/
title: "M.Sc. Students"
sidebar: quicklinks
---


{% assign current_students = site.data[site.data.msc_batches.current] %}
{% assign previous_students = site.data[site.data.msc_batches.previous] %}

## First Year

{% include msc-table.html students=current_students %}

## Second Year

{% include msc-table.html students=previous_students %}
