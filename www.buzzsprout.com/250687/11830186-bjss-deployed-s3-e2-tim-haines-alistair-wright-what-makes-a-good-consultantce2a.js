
  var containerId = "buzzsprout-player-11830186"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/250687/11830186-bjss-deployed-s3-e2-tim-haines-alistair-wright-what-makes-a-good-consultant?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F250687%2F11830186-bjss-deployed-s3-e2-tim-haines-alistair-wright-what-makes-a-good-consultant.js%3Fcontainer_id%3Dbuzzsprout-player-11830186%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"The BJSS Podcasts, BJSS Deployed - S3 E2 - Tim Haines &amp; Alistair Wright - What makes a good consultant?\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

