---
layout: archive
permalink: /
sidebar: 
title: 
redirect_from:
  - /about/
  - /about.html
---

<!-- ============================================================
     (The hero banner now lives in the department header itself —
     see _includes/department_header.html — instead of repeating
     "Department of Physics" a second time here.)
     ============================================================ -->

<!-- ============================================================
     Stats strip (counts are computed live from site data)
     ============================================================ -->

{% assign current_primary_faculty = site.data.all_faculty | where: "affiliation", "primary" | where: "status", "current" %}
{% assign regular_faculty_count = current_primary_faculty | size %}

{% assign current_associated_faculty = site.data.all_faculty | where: "affiliation", "secondary" | where: "status", "current" %}
{% assign associated_faculty_count = current_associated_faculty | size %}

{% assign current_phd_ongoing = site.data.all_phd_students | where: "status", "ongoing" %}
{% assign current_phd_submitted = site.data.all_phd_students | where: "status", "submitted" %}
{% assign current_phd = current_phd_ongoing | concat: current_phd_submitted %}

{% assign current_ms_ongoing = site.data.all_ms_students | where: "status", "ongoing" %}
{% assign current_ms_submitted = site.data.all_ms_students | where: "status", "submitted" %}
{% assign current_ms = current_ms_ongoing | concat: current_ms_submitted %}

{% assign current_postdocs = site.data.all_postdocs | where: "status", "ongoing" %}
{% assign current_scholars = current_phd | concat: current_ms %}
{% assign scholar_count = current_scholars | size %}

{% assign msc_current_year = site.time | date: "%Y" | plus: 0 %}
{% assign msc_previous_year = msc_current_year | minus: 1 %}
{% assign msc_first_year = site.data.all_msc_students | where: "year_joined", msc_current_year %}
{% assign msc_second_year = site.data.all_msc_students | where: "year_joined", msc_previous_year %}
{% assign msc_count = msc_first_year.size | plus: msc_second_year.size %}

<section class="home-stats">
  <div class="home-stats-grid">
    <div class="home-stat">
      <div class="home-stat-number">{{ regular_faculty_count }}</div>
      <div class="home-stat-label">Regular Faculty</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ associated_faculty_count }}</div>
      <div class="home-stat-label">Associated Faculty</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ scholar_count }}</div>
      <div class="home-stat-label">PhD &amp; MS Scholars</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ msc_count }}</div>
      <div class="home-stat-label">MSc Students</div>
    </div>
  </div>
</section>

<!-- ============================================================
     Slideshow + Announcements
     ============================================================ -->

<section class="home-section">
  <div class="home-section-inner">

    <div class="home-media-row">

      <div class="home-media-row-slideshow">
        {% include slideshow.html %}
      </div>

      <div class="home-media-row-announcements">

        <h2 class="home-section-title">Announcements</h2>

        <div class="announce-stack">

          <div class="announce-card">
            <h3 class="announce-card-title">Colloquia</h3>
            {% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
            {% assign upcoming_colloquia = site.data.all_colloquia | sort: "datestamp" %}
            {% assign found = false %}
            {% for colloquium in upcoming_colloquia %}
              {% assign colloquium_date = colloquium.datestamp | plus: 0 %}
              {% if colloquium_date >= today %}
                {% assign found = true %}
                <div class="announce-item">
                  <div class="announce-item-row">
                    <span class="announce-speaker">{{ colloquium.speaker }}</span>
                    <span class="announce-detail-wrap">
                      <span class="announce-sep">|</span>
                      <a class="announce-detail-link" href="{{ site.baseurl }}/physics-colloquium/{{ colloquium.datestamp }}">Details</a>
                    </span>
                  </div>
                  <div class="announce-item-meta">{{ colloquium.affiliation }} &middot; {{ colloquium.date | date: "%d %b %Y" }}</div>
                </div>
              {% endif %}
            {% endfor %}
            {% unless found %}
              <p class="announce-empty">No upcoming colloquia</p>
            {% endunless %}
          </div>

          <div class="announce-card">
            <h3 class="announce-card-title">Seminars</h3>
            {% assign today = site.time | date: "%Y%m%d" | plus: 0 %}
            {% assign upcoming_seminars = site.data.all_seminars | sort: "datestamp" %}
            {% assign found = false %}
            {% for seminar in upcoming_seminars %}
              {% assign seminar_date = seminar.datestamp | plus: 0 %}
              {% if seminar_date >= today %}
                {% assign found = true %}
                <div class="announce-item">
                  <div class="announce-item-row">
                    <span class="announce-speaker">{{ seminar.speaker }}</span>
                    <span class="announce-detail-wrap">
                      <span class="announce-sep">|</span>
                      <a class="announce-detail-link" href="{{ site.baseurl }}/physics-seminar/{{ seminar.datestamp }}">Details</a>
                    </span>
                  </div>
                  <div class="announce-item-meta">{{ seminar.affiliation }} &middot; {{ seminar.date | date: "%d %b %Y" }}</div>
                </div>
              {% endif %}
            {% endfor %}
            {% unless found %}
              <p class="announce-empty">No upcoming seminars</p>
            {% endunless %}
          </div>

          <div class="announce-card">
            <h3 class="announce-card-title">Department Symposiums</h3>
            {% assign all_symposiums = site.data.all_symposia | sort: "date" %}
            {% assign latest_symposium = all_symposiums | last %}
            {% if latest_symposium %}
              {% assign today_ts = 'now' | date: "%s" %}
              {% assign ended = false %}
              {% if latest_symposium.ending %}
                {% assign ending_ts = latest_symposium.ending | date: "%s" %}
                {% if today_ts > ending_ts %}
                  {% assign ended = true %}
                {% endif %}
              {% endif %}
              <div class="announce-item">
                <div class="announce-item-row">
                  <span class="announce-speaker">{{ latest_symposium.date }} Edition</span>
                  <span class="announce-detail-wrap">
                    <span class="announce-sep">|</span>
                    <a class="announce-detail-link" href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ latest_symposium.date }}.pdf">Details</a>
                  </span>
                </div>
                {% if ended %}
                  <div class="announce-item-meta">Stay tuned for the next edition</div>
                {% else %}
                  <div class="announce-item-meta">{{ latest_symposium.starting | date: "%d %b %Y" }} &ndash; {{ latest_symposium.ending | date: "%d %b %Y" }}</div>
                {% endif %}
              </div>
            {% else %}
              <p class="announce-empty">No symposium information available</p>
            {% endif %}
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

<!-- ============================================================
     Research areas
     ============================================================ -->

<section class="home-section home-section-alt">
  <div class="home-section-inner">

    <div class="home-section-header">
      <h2 class="home-section-title">Research Areas</h2>
      <a class="home-section-link-inline" href="{{ '/topics/' | relative_url }}">View all research areas &rarr;</a>
    </div>

    {% assign research_groups_sorted = site.data.research_groups | sort: "alphabet" %}

    <!-- Conveyor-belt: the full set of cards is rendered twice in a
         row inside one flex track, which is then animated leftward
         forever. Because the content repeats exactly once, the
         moment it has scrolled through the first copy it's lined up
         perfectly with the second -- so the loop point is invisible
         and the belt looks endless. The second copy is hidden from
         assistive tech and the keyboard (it's a visual duplicate,
         not new content). -->
    <div class="marquee-wrap home-research-marquee">
      <div class="marquee-track">
        {% for group in research_groups_sorted %}
          {% if group.slug %}
            {% assign group_faculty_count = current_primary_faculty | where_exp: "item", "item.area contains group.id" | size %}
            {% if group_faculty_count > 0 %}
              {% assign group_postdoc_count = current_postdocs | where_exp: "item", "item.research_area contains group.id" | size %}
              {% assign group_phd_count = current_phd | where_exp: "item", "item.research_area contains group.id" | size %}
              {% assign group_ms_count = current_ms | where_exp: "item", "item.research_area contains group.id" | size %}
              {% assign group_people_count = group_faculty_count | plus: group_postdoc_count | plus: group_phd_count | plus: group_ms_count %}
              <a class="home-research-card" href="{{ '/topics/' | append: group.slug | append: '/' | relative_url }}">
                <h3>{{ group.title }}</h3>
                <p>{{ group_people_count }} member{% if group_people_count != 1 %}s{% endif %}</p>
              </a>
            {% endif %}
          {% endif %}
        {% endfor %}
        {% for group in research_groups_sorted %}
          {% if group.slug %}
            {% assign group_faculty_count = current_primary_faculty | where_exp: "item", "item.area contains group.id" | size %}
            {% if group_faculty_count > 0 %}
              {% assign group_postdoc_count = current_postdocs | where_exp: "item", "item.research_area contains group.id" | size %}
              {% assign group_phd_count = current_phd | where_exp: "item", "item.research_area contains group.id" | size %}
              {% assign group_ms_count = current_ms | where_exp: "item", "item.research_area contains group.id" | size %}
              {% assign group_people_count = group_faculty_count | plus: group_postdoc_count | plus: group_phd_count | plus: group_ms_count %}
              <a class="home-research-card" href="{{ '/topics/' | append: group.slug | append: '/' | relative_url }}" aria-hidden="true" tabindex="-1">
                <h3>{{ group.title }}</h3>
                <p>{{ group_people_count }} member{% if group_people_count != 1 %}s{% endif %}</p>
              </a>
            {% endif %}
          {% endif %}
        {% endfor %}
      </div>
    </div>

  </div>
</section>

<!-- ============================================================
     Faculty spotlight
     ============================================================ -->

<section class="home-section">
  <div class="home-section-inner">

    <div class="home-section-header">
      <h2 class="home-section-title">Meet Our Faculty</h2>
      <a class="home-section-link-inline" href="{{ '/faculty/' | relative_url }}">View all members &rarr;</a>
    </div>

    {% assign spotlight_faculty = current_primary_faculty | sort: "date_joined" %}

    <!-- Same conveyor-belt technique as the Research Areas section
         above: the full faculty list rendered twice in one flex
         track, animated leftward on a continuous loop. The second
         copy is hidden from assistive tech and the keyboard. -->
    <div class="marquee-wrap home-faculty-marquee">
      <div class="marquee-track">
        {% for person in spotlight_faculty %}
          {% assign person_area_groups = site.data.research_groups | where_exp: "grp", "person.area contains grp.id" %}
          {% assign person_area_titles = person_area_groups | map: "title" | join: ", " %}
          <a class="faculty-mini-card" href="{{ '/faculty/' | append: person.slug | append: '/' | relative_url }}">
            <div class="faculty-mini-photo">
              <img src="{{ '/images/faculty/' | relative_url }}{{ person.photo }}" alt="{{ person.name }}" loading="lazy">
            </div>
            <div class="faculty-mini-info">
              <h3 class="faculty-mini-name">{{ person.name }}</h3>
              <div class="faculty-mini-designation">{{ person.designation }}</div>
              {% if person_area_titles != "" %}
                <div class="faculty-mini-area">{{ person_area_titles }}</div>
              {% endif %}
            </div>
          </a>
        {% endfor %}
        {% for person in spotlight_faculty %}
          {% assign person_area_groups = site.data.research_groups | where_exp: "grp", "person.area contains grp.id" %}
          {% assign person_area_titles = person_area_groups | map: "title" | join: ", " %}
          <a class="faculty-mini-card" href="{{ '/faculty/' | append: person.slug | append: '/' | relative_url }}" aria-hidden="true" tabindex="-1">
            <div class="faculty-mini-photo">
              <img src="{{ '/images/faculty/' | relative_url }}{{ person.photo }}" alt="" loading="lazy">
            </div>
            <div class="faculty-mini-info">
              <h3 class="faculty-mini-name">{{ person.name }}</h3>
              <div class="faculty-mini-designation">{{ person.designation }}</div>
              {% if person_area_titles != "" %}
                <div class="faculty-mini-area">{{ person_area_titles }}</div>
              {% endif %}
            </div>
          </a>
        {% endfor %}
      </div>
    </div>

  </div>
</section>

<!-- ============================================================
     Recent publications
     ============================================================ -->

<section class="home-section home-section-alt">
  <div class="home-section-inner">

    <div class="home-section-header">
      <h2 class="home-section-title">Recent Publications</h2>
      <a class="home-section-link-inline" href="{{ '/publications/' | relative_url }}">View all publications &rarr;</a>
    </div>

    {% assign recent_pubs = site.data.all_publications | sort: "sort" | reverse %}

    <!-- One publication per research area: the most recent paper
         tagged with each currently-active area (same areas shown
         in the Research Areas section above), so the count here
         always matches the number of research areas. An area with
         no publications yet simply contributes none. -->
    {% assign pubs_to_show = "" | split: "," %}
    {% for group in research_groups_sorted %}
      {% if group.slug %}
        {% assign group_active_faculty_count = current_primary_faculty | where_exp: "item", "item.area contains group.id" | size %}
        {% if group_active_faculty_count > 0 %}
          {% assign group_pubs = recent_pubs | where_exp: "item", "item.areas contains group.id" %}
          {% assign latest_group_pub = group_pubs | slice: 0, 1 %}
          {% assign pubs_to_show = pubs_to_show | concat: latest_group_pub %}
        {% endif %}
      {% endif %}
    {% endfor %}
    {% assign pubs_to_show = pubs_to_show | sort: "sort" | reverse %}

    <ol class="home-pub-list">
      {% for pub in pubs_to_show %}
        <li class="home-pub-item">
          <div class="home-pub-year">{{ pub.year }}</div>
          <div>
            <p class="home-pub-title">{{ pub.authors }}, &ldquo;{{ pub.title }}.&rdquo;</p>
            <p class="home-pub-journal">
              {% if pub.doi %}
                <a href="https://doi.org/{{ pub.doi }}" target="_blank" rel="noopener">{{ pub.journal }}</a>
              {% else %}
                {{ pub.journal }}
              {% endif %}
            </p>
          </div>
        </li>
      {% endfor %}
    </ol>

  </div>
</section>
