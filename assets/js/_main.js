/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */
 
$(document).ready(function () {
 
  // --------------------------------------------------------------------
  // Auto dark-mode after sundown (IIT Palakkad coordinates)
  // Only used as a DEFAULT when the visitor hasn't manually chosen a
  // theme yet (i.e. no "theme" key saved in localStorage). Once someone
  // clicks the sun/moon toggle, their choice is remembered and this
  // calculation is skipped for them from then on.
  // --------------------------------------------------------------------
  var isNightAtPalakkad = function () {
    var lat = 10.7867, lon = 76.6548; // IIT Palakkad
    var now = new Date();
 
    var start = new Date(now.getFullYear(), 0, 0);
    var dayOfYear = Math.floor((now - start) / 86400000);
 
    var rad = Math.PI / 180;
    var fracYear = (2 * Math.PI / 365) * (dayOfYear - 1 + (now.getUTCHours() - 12) / 24);
 
    var eqTime = 229.18 * (0.000075 + 0.001868 * Math.cos(fracYear) - 0.032077 * Math.sin(fracYear)
      - 0.014615 * Math.cos(2 * fracYear) - 0.040849 * Math.sin(2 * fracYear));
 
    var decl = 0.006918 - 0.399912 * Math.cos(fracYear) + 0.070257 * Math.sin(fracYear)
      - 0.006758 * Math.cos(2 * fracYear) + 0.000907 * Math.sin(2 * fracYear)
      - 0.002697 * Math.cos(3 * fracYear) + 0.00148 * Math.sin(3 * fracYear);
 
    var latRad = lat * rad;
    var zenith = 90.833 * rad; // standard sunrise/sunset zenith (refraction + solar disk)
 
    var cosHA = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - (Math.tan(latRad) * Math.tan(decl));
    cosHA = Math.max(-1, Math.min(1, cosHA)); // safety clamp
    var ha = Math.acos(cosHA) / rad; // hour angle, degrees
 
    var solarNoon = 720 - 4 * lon - eqTime;   // minutes, UTC
    var sunriseUTC = solarNoon - 4 * ha;
    var sunsetUTC = solarNoon + 4 * ha;
 
    var nowUTCMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
 
    return (nowUTCMinutes < sunriseUTC || nowUTCMinutes > sunsetUTC);
  };
 
  // Set the theme on page load
  var setTheme = function (theme) {
    const use_theme = theme || localStorage.getItem("theme") || (isNightAtPalakkad() ? "dark" : "light");
 
    if (use_theme === "dark") {
      $("html").attr("data-theme", "dark");
      $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
    } else if (use_theme === "light") {
      $("html").removeAttr("data-theme");
      $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
  }
  setTheme();
 
  // Toggle the theme
  var toggleTheme = function () {
    const current_theme = $("html").attr("data-theme");
    const new_theme = current_theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", new_theme);
    setTheme(new_theme);
  }
  $('#theme-toggle').on('click', function () {
    toggleTheme();
  });
 
  // These should be the same as the settings in _variables.scss
  const scssLarge = 925; // pixels
 
  // Sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  },
    didResize = false;
 
  bumpIt();
 
  $(window).resize(function () {
    didResize = true;
  });
 
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
 
  // FitVids init
  fitvids();
 
  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });
 
  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });
 
  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({ offset: -65 });
 
  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");
 
  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
});
