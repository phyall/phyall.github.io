---
layout: archive
permalink: /mscstudents/
title: "M.Sc. Students"
sidebar: quicklinks
---


{% assign msc_files = site.data.msc | sort %}

{% assign current_batch = msc_files | last %}
{% assign previous_batch = msc_files[msc_files.size | minus: 2] %}

<h3>First Year</h3>

{% include msc-table.html students=current_batch[1] %}

<h3>Second Year</h3>

{% include msc-table.html students=previous_batch[1] %}
