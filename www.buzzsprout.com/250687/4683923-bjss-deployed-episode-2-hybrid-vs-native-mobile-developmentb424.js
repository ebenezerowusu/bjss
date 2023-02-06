
  var containerId = "buzzsprout-player-4683923"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/4683923-bjss-deployed-episode-2-hybrid-vs-native-mobile-development?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F4683923-bjss-deployed-episode-2-hybrid-vs-native-mobile-development.js%3Fcontainer_id%3Dbuzzsprout-player-4683923%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - Episode 2: Hybrid vs Native Mobile Development\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

