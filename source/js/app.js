'use strict';

// import $ from 'jquery';
// import throttle from 'lodash/throttle';

const homeVideo = document.querySelector('.video-home');

if (homeVideo) {
  new Plyr(homeVideo, {
    autoplay: true,
    muted: true,
  });
}

let artAudio = document.querySelector('.art-audio');

if (artAudio) {
  new Plyr(artAudio);
}
