
  var containerId = "buzzsprout-player-6768169"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/6768169-bjss-deployed-episode-5-the-re-invent-2020-partner-keynote?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F6768169-bjss-deployed-episode-5-the-re-invent-2020-partner-keynote.js%3Fcontainer_id%3Dbuzzsprout-player-6768169%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - Episode 5: The re:Invent 2020 Partner Keynote \"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

