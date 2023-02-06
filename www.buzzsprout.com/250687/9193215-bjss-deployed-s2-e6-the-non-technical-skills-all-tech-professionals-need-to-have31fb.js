
  var containerId = "buzzsprout-player-9193215"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/9193215-bjss-deployed-s2-e6-the-non-technical-skills-all-tech-professionals-need-to-have?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F9193215-bjss-deployed-s2-e6-the-non-technical-skills-all-tech-professionals-need-to-have.js%3Fcontainer_id%3Dbuzzsprout-player-9193215%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - S2 E6 - The Non-Technical Skills All Tech Professionals Need To Have\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

