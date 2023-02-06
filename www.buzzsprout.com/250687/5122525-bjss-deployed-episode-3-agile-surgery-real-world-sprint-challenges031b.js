
  var containerId = "buzzsprout-player-5122525"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/5122525-bjss-deployed-episode-3-agile-surgery-real-world-sprint-challenges?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F5122525-bjss-deployed-episode-3-agile-surgery-real-world-sprint-challenges.js%3Fcontainer_id%3Dbuzzsprout-player-5122525%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - Episode 3: Agile Surgery, Real-World Sprint Challenges  \"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

