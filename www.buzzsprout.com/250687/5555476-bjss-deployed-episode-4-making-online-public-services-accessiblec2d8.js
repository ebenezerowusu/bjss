
  var containerId = "buzzsprout-player-5555476"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/5555476-bjss-deployed-episode-4-making-online-public-services-accessible?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F5555476-bjss-deployed-episode-4-making-online-public-services-accessible.js%3Fcontainer_id%3Dbuzzsprout-player-5555476%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - Episode 4: Making online public services accessible\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

