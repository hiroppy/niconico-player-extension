'use strict';

(function() {
  var controlPlayButton = function() {
    var display                  = document.querySelector('#UadPlayer');
    var playButton               = document.querySelector('.PlayerPlayButton');
    var pauseButton              = document.querySelector('.PlayerPauseButton');
    var enableFullscreenButton   = document.querySelector('.EnableFullScreenButton');
    var disabledFullscreenButton = document.querySelector('.DisableFullScreenButton');

    display.addEventListener('click', function() {
      if (playButton.getAttribute('hidden') == null) playButton.click();
      else pauseButton.click();
    }, false);

    display.addEventListener('dblclick', function() {
      if (enableFullscreenButton.getAttribute('hidden') == null) enableFullscreenButton.click();
      else disabledFullscreenButton.click();
    }, false);
  };

  var main = function() {
    controlPlayButton();
  };

  window.addEventListener('load', main, false);
})();
