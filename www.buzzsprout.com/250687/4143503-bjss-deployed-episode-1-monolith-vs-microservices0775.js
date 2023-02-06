
  var containerId = "buzzsprout-player-4143503"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/4143503-bjss-deployed-episode-1-monolith-vs-microservices?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F4143503-bjss-deployed-episode-1-monolith-vs-microservices.js%3Fcontainer_id%3Dbuzzsprout-player-4143503%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - Episode 1: Monolith vs Microservices\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

