const Startup = require('./startup');

document.addEventListener("DOMContentLoaded", function() {
  const MainDiv = document.getElementById("mainDiv");
  const StartupGo = new Startup(MainDiv);
  StartupGo.goForLaunch();
})
