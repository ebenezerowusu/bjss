
  var containerId = "buzzsprout-player-9019561"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/9019561-bjss-deployed-s2-e2-careers-in-tech-what-i-wish-i-knew-before-starting-a-career-in-tech?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F9019561-bjss-deployed-s2-e2-careers-in-tech-what-i-wish-i-knew-before-starting-a-career-in-tech.js%3Fcontainer_id%3Dbuzzsprout-player-9019561%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - S2 E2 - Careers in Tech: What I wish I knew before starting a career in tech\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

