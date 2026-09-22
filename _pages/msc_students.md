---
layout: archive
permalink: /mscstudents/
title: "M.Sc. Students"
sidebar: quicklinks
---

{% assign current_year = site.time | date: '%Y' | plus: 0 %}
{% assign previous_year = current_year | minus: 1 %}

{% assign first_year_students = site.data.all_msc_students | where: "year_joined", current_year %}
{% assign second_year_students = site.data.all_msc_students | where: "year_joined", previous_year %}

## First Year Students

{% include msc-table.html students=first_year_students %}

## Second Year Students

{% include msc-table.html students=second_year_students %}
