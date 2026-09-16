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

{% assign all_symposiums = site.data.symposium | sort: "date" %}
{% assign latest_symposium = all_symposiums | last %}
{% assign today_ts = 'now' | date: "%s" %}

{% if latest_symposium %}
  {% assign ended = false %}
  {% if latest_symposium.ending %}
    {% assign ending_ts = latest_symposium.ending | date: "%s" %}
    {% if today_ts > ending_ts %}
      {% assign ended = true %}
    {% endif %}
  {% endif %}

<p>
<strong>{{ latest_symposium.date }} Edition</strong>
&nbsp;&nbsp;
<a href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ latest_symposium.date }}.pdf"
   target="_blank"
   class="badge">Details</a><br>
{% if ended %}
Stay tuned
{% else %}
{{ latest_symposium.starting | date: "%d %B %Y" }} - {{ latest_symposium.ending | date: "%d %B %Y" }}
{% endif %}
</p>

{% else %}
<p>No upcoming symposium.</p>
{% endif %}

**Past Symposiums**

{::nomarkdown}
<!--<label for="symposium-year">Select symposium year:</label>-->

<select id="symposium-year"
        class="msc-year-select"
        onchange="if (this.value) window.open(this.value, '_blank');">

<option value="">Select Symposium Year</option>

{% for symposium in site.data.symposium %}
{% assign include_in_past = false %}
{% if symposium.ending %}
{% assign sym_ending_ts = symposium.ending | date: "%s" %}
{% if today_ts > sym_ending_ts %}
{% assign include_in_past = true %}
{% endif %}
{% elsif symposium.status == "past" %}
{% assign include_in_past = true %}
{% endif %}
{% if include_in_past %}
<option value="{{ site.baseurl }}/assets/pdfs/symposiums/{{ symposium.date }}.pdf">
{{ symposium.date }}
</option>
{% endif %}
{% endfor %}

</select>
{:/nomarkdown}




Physics Journal Club
------

The research scholars of the Department of Physics conduct a journal club where interesting ideas in Physics are discussed among the Department members. The Journal club talks are typically scheduled twice a month within a semester.
