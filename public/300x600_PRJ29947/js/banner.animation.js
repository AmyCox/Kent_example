'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/logo1.svg'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 0.5, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {

  // var copyTl = new TimelineMax ()

  var stroke1 = new TimelineMax();

  stroke1.from(".stroke1", 0.2, {
    drawSVG: 0
  });

  var stroke2 = new TimelineMax();

  stroke2.from(".stroke2", 0.2, {
    drawSVG: 0
  });

  var stroke3 = new TimelineMax();

  stroke3.from(".stroke3", 0.2, {
    drawSVG: 0
  });

  var stroke4 = new TimelineMax();

  stroke4.from(".stroke4", 0.2, {
    drawSVG: 0
  });

  var copyTl = new TimelineMax();

  copyTl.from(".word-1", 0.3, {
    opacity: 0,
    y: -5
  });
  copyTl.from(".word-2", 0.3, {
    opacity: 0,
    y: -5
  });
  copyTl.from(".word-3", 0.3, {
    opacity: 0,
    y: -5
  });

  var imageTl = new TimelineMax();

  imageTl.from(".image1", 0.4, {
    y: 600,
    opacity: 0
  });
  imageTl.from(".white-stroke", 0.5, {
    drawSVG: 0
  });

  var imgScale = new TimelineMax();
  imgScale.to("#theImage", 2.5, {
    scale: 1.1,
    transformOrigin: "80% 50%"
  });

  var second = new TimelineMax();

  second.to("#imageSection", 0.4, {
    y: -180,
    delay: -0.4
  });

  var copy1 = new TimelineMax();

  copy1.to(".firstframe", 0.6, {
    y: -320
  });

  var stroke2a = new TimelineMax();

  stroke2a.from(".stroke2a", 0.2, {
    drawSVG: 0
  });

  var stroke2b = new TimelineMax();

  stroke2b.from(".stroke2b", 0.2, {
    drawSVG: 0
  });

  var stroke2c = new TimelineMax();

  stroke2c.from(".stroke2c", 0.2, {
    drawSVG: 0
  });

  var stroke2d = new TimelineMax();

  stroke2d.from(".stroke2d", 0.2, {
    drawSVG: 0
  });

  var copy2Tl = new TimelineMax();

  copy2Tl.from("#line1", 0.3, {
    opacity: 0,
    y: -5
  });
  copy2Tl.from("#line2", 0.3, {
    opacity: 0,
    y: -5
  });
  copy2Tl.from("#line3", 0.3, {
    opacity: 0,
    y: -5
  });

  var moveCopy2 = new TimelineMax();

  moveCopy2.to(".logo1", 0.6, {
    y: -250
  });

  moveCopy2.to(".copy2cont", 0.6, {
    y: -600,
    delay: -0.6
  });

  moveCopy2.to(".white-stroke", 0.2, {
    drawSVG: 0,
    delay: -0.6
  });

  moveCopy2.to("#imageSection", 0.2, {
    y: -600,
    delay: -0.6
  });

  var finalFrame = new TimelineMax();

  finalFrame.from(".blueBg", 0.6, {
    y: 600

  });
  finalFrame.from(".logo2, .applynow", 0.6, {
    opacity: 0,
    delay: -0.2,
    y: 5
  });
  finalFrame.from(".teflogo", 0.6, {
    x: 5,
    opacity: 0
  });

  var outline = new TimelineMax();

  outline.from(".outline-stroke-color", 0.5, {
    drawSVG: 0
  });

  var outro = new TimelineMax();

  outro.to(".lastframe", 0.4, {
    delay: 1,
    y: -600
  });

  var loops = 0;
  var maxLoops = 1;
  var masterTimeline = new TimelineMax({
    repeat: maxLoops
  });
  masterTimeline.add(stroke1, 0.1).add(stroke2, 0).add(stroke3, 0.9).add(stroke4, 0.8).add(copyTl, 0.2).add(imageTl, 1.0).add(imgScale, 1.0).add(copy1, 3.9).add(second, 3.9).add(stroke2a, 4.2).add(stroke2b, 4.5).add(stroke2c, 5.4).add(stroke2d, 5.3).add(copy2Tl, 4.7).add(moveCopy2, 7.7).add(finalFrame, 7.8).add(outline, 8).call(function () {
    if (loops === maxLoops) {
      masterTimeline.pause();
    }
    loops++;
  }).add(outro);

  var ctahov = document.querySelector(".banner");
  ctahov.onmouseover = function () {
    TweenLite.to(".cta", 0.77, {
      ease: Back.easeOut,
      scale: 1.02,
      y: -2
    });
  };
  ctahov.onmouseout = function () {
    TweenLite.to(".cta", 0.77, {
      ease: Back.easeOut,
      scale: 1,
      y: 0
    });
  };

  // Replay code if needed 

  // var replayhov = document.querySelector(".replay");
  // replayhov.onmouseover = function () {
  //   TweenLite.to(".replay", 0.77, {
  //     rotation: -90,
  //     ease: Expo.easeOut
  //   });
  // };
  // replayhov.onmouseout = function () {
  //   TweenLite.to(".replay", 0.77, {
  //     ease: Back.easeOut,
  //     rotation: 0,
  //     ease: Expo.easeOut
  //   });
  // };

  // document.getElementById("replay").onclick = function() {
  //   masterTimeline.restart();
  // }

};