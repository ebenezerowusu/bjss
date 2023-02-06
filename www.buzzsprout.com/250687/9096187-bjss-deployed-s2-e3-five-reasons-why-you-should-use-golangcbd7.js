
  var containerId = "buzzsprout-player-9096187"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/9096187-bjss-deployed-s2-e3-five-reasons-why-you-should-use-golang?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F9096187-bjss-deployed-s2-e3-five-reasons-why-you-should-use-golang.js%3Fcontainer_id%3Dbuzzsprout-player-9096187%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - S2 E3 - Five Reasons Why You Should Use Golang\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

