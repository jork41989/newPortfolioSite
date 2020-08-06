import {Startup} from "../src/startup"

document.addEventListener("DOMContentLoaded", function() {
  const MainDiv = document.getElementById("mainDiv");
  const StartupGo = new Startup();
  StartupGo.goForLaunch();
})
