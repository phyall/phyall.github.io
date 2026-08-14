---
layout: archive
permalink: /events/
title: "Department Events and Activities"
sidebar: quicklinks
---

Physics Symposium
------

The Department of Physics organises a yearly in-house Physics symposium to provide a platform to the researchers in the department for showcasing their research. The event typically spans over two, or three days with keynote addresses from distinguished Physicists in India. 

**Upcoming Symposiums**

{% assign found = false %}

{% for symposium in site.data.symposium %}

{% if symposium.status == "upcoming" %}

{% assign found = true %}

<p>
<strong>Physics Symposium ({{ symposium.date }})</strong><br>
{{ symposium.duration }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ symposium.date }}.pdf"
   target="_blank"
   class="badge">Details</a>
</p>

{% endif %}

{% endfor %}

{% unless found %}
<p>No upcoming symposium.</p>
{% endunless %}



**Past Symposiums**

{% for symposium in site.data.symposium %}

{% if symposium.status == "past" %}

<p>
{{ symposium.date }}
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ symposium.date }}.pdf"
   target="_blank"
   class="badge">Details</a>
</p>

{% endif %}

{% endfor %}


Physics Journal Club
------

The research scholars of the Department of Physics conduct a journal club where interesting ideas in Physics are discussed among the Department members. The Journal club talks are typically scheduled twice a month within a semester. 
