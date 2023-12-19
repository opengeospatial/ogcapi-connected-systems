//= require ./lib/_energize
//= require ./app/_copy
//= require ./app/_toc
//= require ./app/_lang

function adjustLanguageSelectorWidth() {
  const elem = $('.dark-box > .lang-selector');
  elem.width(elem.parent().width());
}

$(function() {
  loadToc($('#toc'), '.toc-link', '.toc-list-h2', 10);
  setupLanguages($('body').data('languages'));
  $('.content').imagesLoaded( function() {
    window.recacheHeights();
    window.refreshToc();
  });

  $(window).resize(function() {
    adjustLanguageSelectorWidth();
  });
  adjustLanguageSelectorWidth();
});

window.onpopstate = function() {
  activateLanguage(getLanguageFromQueryString());
};

$(function() {
  var $rainbowPopup = $('<div class="rainbow-popup">').hide().appendTo($('body'));

  var showRainbowPopup = function($elem) {
    var position = $elem.offset();
    $rainbowPopup.show()
      .css({
        'left': position.left,
        'top': position.top + $elem.outerHeight(),
      });
  };

  var activeRainbow = null;

  $('[data-rainbow-uri]').on('mouseover', function(e) {
    var definitionPred = 'http://www.w3.org/2004/02/skos/core#definition';
    var $this = $(this),
      rainbowContent = $this.data('rainbow-content');

    if (rainbowContent === false) {
      // Failed
      return;
    }

    if (rainbowContent) {
      $rainbowPopup.html(rainbowContent);
      showRainbowPopup($this);
      return;
    }
    // Fetch rainbow
    var uri = $this.data('rainbow-uri') || $this.attr('href');
    if (!uri) {
      $this.data('rainbow-content', false);
      return;
    }
    activeRainbow = uri;
    $rainbowPopup.html('').addClass('loading');
    showRainbowPopup($this);
    var jsonldUrl = 'https://defs.opengis.net/vocprez/object?uri=' + encodeURIComponent(uri) + '&_mediatype=application/ld+json';
    $.ajax(jsonldUrl, {
        'headers': {
          'Accept': 'application/json',
        },
        'datatype': 'json',
      })
      .then(function(data) {
        // Assume data is expanded JSON-LD
        if (!Array.isArray(data)) {
          data = [data];
        }
        var i, resource;
        for (i = 0; i < data.length; i++) {
          if (data[i]['@id'] === uri) {
            resource = data[i];
            break;
          }
        }
        if (!resource || !resource[definitionPred]) {
          $this.data('rainbow-content', false);
          return;
        }
        var definitions = Array.isArray(resource[definitionPred])
          ? resource[definitionPred]
          : [resource[definitionPred]],
          definition;
        for (i = 0; i < definitions.length; i++) {
          if (definitions[i]['@value']) {
            definition = definitions[i]['@value'];
            break;
          }
        }
        if (!definition) {
          $this.data('rainbow-content', false);
          return;
        }
        var contentFunc = definition[0] === '<' ? 'html' : 'text',
          $contentT = $('<div class="title">').text($this.text()),
          $contentP = $('<p>')[contentFunc](definition),
          content = $('<div>').append($contentT).append($contentP).prop('innerHTML');
        $this.data('rainbow-content', content);
        if (activeRainbow === uri) {
          $rainbowPopup.removeClass('loading').html(content);
        }
      });
  }).on('mouseout', function() {
    activeRainbow = null;
    $rainbowPopup.hide();
  });
});