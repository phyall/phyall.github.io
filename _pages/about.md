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
{% assign faculty_count = current_primary_faculty | size %}

{% assign current_phd = site.data.all_phd_students | where: "status", "ongoing" %}
{% assign current_ms = site.data.all_ms_students | where: "status", "ongoing" %}
{% assign current_postdocs = site.data.all_postdocs | where: "status", "ongoing" %}
{% assign current_scholars = current_phd | concat: current_ms %}
{% assign scholar_count = current_scholars | size %}

{% assign pub_count = site.data.all_publications | size %}

<section class="home-stats">
  <div class="home-stats-grid">
    <div class="home-stat">
      <div class="home-stat-number">{{ faculty_count }}</div>
      <div class="home-stat-label">Faculty Members</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ scholar_count }}</div>
      <div class="home-stat-label">PhD &amp; MS Scholars</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">{{ pub_count }}</div>
      <div class="home-stat-label">Publications</div>
    </div>
    <div class="home-stat">
      <div class="home-stat-number">2015</div>
      <div class="home-stat-label">Established</div>
    </div>
  </div>
</section>

<!-- ============================================================
     Research areas
     ============================================================ -->

<section class="home-section">
  <div class="home-section-inner">

    <h2 class="home-section-title">Research Areas</h2>
    <p class="home-section-sub">A snapshot of the department's active research groups &mdash; refresh the page to see others.</p>

    {% assign research_groups_sorted = site.data.research_groups | sort: "alphabet" %}

    <div class="home-research-grid" id="home-research-grid" data-randomize="3">
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
    </div>

    <div class="home-section-link">
      <a href="{{ '/topics/' | relative_url }}">View all research areas &rarr;</a>
    </div>

  </div>
</section>

<!-- ============================================================
     Announcements
     ============================================================ -->

<section class="home-section home-section-alt">
  <div class="home-section-inner">

    <h2 class="home-section-title">Announcements</h2>

    <div class="announce-grid">

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
                <a class="announce-detail-link" href="{{ site.baseurl }}/physics-colloquium/{{ colloquium.datestamp }}">Details</a>
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
                <a class="announce-detail-link" href="{{ site.baseurl }}/physics-seminar/{{ seminar.datestamp }}">Details</a>
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
              <a class="announce-detail-link" href="{{ site.baseurl }}/assets/pdfs/symposiums/{{ latest_symposium.date }}.pdf">Details</a>
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

      <div class="announce-card">
        <h3 class="announce-card-title">Other Department Events</h3>
        {% assign today = 'now' | date: "%Y%m%d" | plus: 0 %}
        {% assign upcoming_events = site.data.all_events | sort: "date" %}
        {% assign found = false %}
        {% for event in upcoming_events %}
          {% if event.date %}
            {% assign event_date = event.date | date: "%Y%m%d" | plus: 0 %}
            {% if event_date >= today %}
              {% assign found = true %}
              <div class="announce-item">
                <div class="announce-item-title">{{ event.title }}</div>
                <div class="announce-item-meta">
                  {{ event.date | date: "%d %b %Y" }}
                  {% if event.time %}&middot; {{ event.time }}{% endif %}
                  {% if event.venue %}&middot; {{ event.venue }}{% endif %}
                </div>
              </div>
            {% endif %}
          {% endif %}
        {% endfor %}
        {% unless found %}
          <p class="announce-empty">No upcoming department event</p>
        {% endunless %}
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

    <div class="faculty-mini-grid home-faculty-grid" id="home-faculty-grid" data-randomize="4">
      {% for person in spotlight_faculty %}
        <a class="faculty-mini-card" href="{{ '/faculty/' | append: person.slug | append: '/' | relative_url }}">
          <div class="faculty-mini-photo">
            <img src="{{ '/images/faculty/' | relative_url }}{{ person.photo }}" alt="{{ person.name }}" loading="lazy">
          </div>
          <div class="faculty-mini-info">
            <h3 class="faculty-mini-name">{{ person.name }}</h3>
            <div class="faculty-mini-designation">{{ person.designation }}</div>
          </div>
        </a>
      {% endfor %}
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

    {% assign current_year_num = site.time | date: "%Y" | plus: 0 %}
    {% assign current_year_pub_count = site.data.all_publications | where: "year", current_year_num | size %}
    {% assign pub_show_count = 5 %}
    {% if current_year_pub_count > 5 %}
      {% assign pub_show_count = current_year_pub_count %}
    {% endif %}

    <ol class="home-pub-list">
      {% for pub in recent_pubs %}
        {% if forloop.index > pub_show_count %}{% break %}{% endif %}
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

<!-- ============================================================
     Randomize the Research Areas and Meet Our Faculty picks on
     every page load. Both grids render their FULL real list above
     (so nothing is missing with JS off) -- this just narrows each
     down to a handful, chosen fresh each visit.
     ============================================================ -->

<script>
document.addEventListener('DOMContentLoaded', function () {
  function randomizeGrid(containerId, cardSelector) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var count = parseInt(container.getAttribute('data-randomize'), 10) || 3;
    var cards = Array.prototype.slice.call(container.querySelectorAll(cardSelector));
    if (cards.length <= count) return;
    for (var i = cards.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = cards[i];
      cards[i] = cards[j];
      cards[j] = tmp;
    }
    cards.forEach(function (card) { card.style.display = 'none'; });
    cards.slice(0, count).forEach(function (card) { card.style.display = ''; });
  }

  randomizeGrid('home-research-grid', '.home-research-card');
  randomizeGrid('home-faculty-grid', '.faculty-mini-card');
});
</script>
