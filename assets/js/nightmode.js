(function () {
  // IIT Palakkad coordinates, used to compute today's real sunrise/sunset
  var LAT = 10.7867, LON = 76.6548;
 
  function isNightAtPalakkad() {
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
 
    var latRad = LAT * rad;
    var zenith = 90.833 * rad;
 
    var cosHA = (Math.cos(zenith) / (Math.cos(latRad) * Math.cos(decl))) - (Math.tan(latRad) * Math.tan(decl));
    cosHA = Math.max(-1, Math.min(1, cosHA));
    var ha = Math.acos(cosHA) / rad;
 
    var solarNoon = 720 - 4 * LON - eqTime;
    var sunriseUTC = solarNoon - 4 * ha;
    var sunsetUTC = solarNoon + 4 * ha;
    var nowUTCMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
 
    return (nowUTCMinutes < sunriseUTC || nowUTCMinutes > sunsetUTC);
  }
 
  function init() {
    var toggleBtn = document.getElementById("nightmode-toggle");
    if (!toggleBtn) {
      return; // button not on this page for some reason
    }
 
    function applyMode(mode) {
      if (mode === "on") {
        document.documentElement.setAttribute("data-nightmode", "on");
        toggleBtn.textContent = "☀️";
      } else {
        document.documentElement.removeAttribute("data-nightmode");
        toggleBtn.textContent = "🌙";
      }
    }
 
    var saved = localStorage.getItem("nightmode");
    applyMode(saved || (isNightAtPalakkad() ? "on" : "off"));
 
    toggleBtn.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-nightmode") === "on" ? "on" : "off";
      var next = current === "on" ? "off" : "on";
      localStorage.setItem("nightmode", next);
      applyMode(next);
    });
  }
 
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
