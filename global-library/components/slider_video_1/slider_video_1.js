{/* <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script> */}


(function () {
  // ---------- POPUP ----------
  const popup = document.getElementById('videoPopup');
  const video = document.getElementById('popupVideo');

  function openPopup(src) {
    if (!src) return;

    video.src = src;
    video.currentTime = 0;
    video.play();

    popup.classList.add('active');
  }

  function closePopup() {
    video.pause();
    video.removeAttribute('src');
    video.load();

    popup.classList.remove('active');
  }

  document.addEventListener('click', (e) => {
    // відкриття popup
    const trigger = e.target.closest('.slider_video_1-trigger');
    if (trigger) {
      const src = trigger.dataset.videoSrc;
      openPopup(src);
      return;
    }

    // закриття popup
    if (
      e.target.classList.contains('slider_video_1-popup-overlay') ||
      e.target.classList.contains('slider_video_1-popup-close')
    ) {
      closePopup();
    }
  });

  // ---------- SLICK ----------
  $(document).ready(function () {
    initSlider(
      '.slider_video_1-slider',
      '.slider_video_1-buttons-prev',
      '.slider_video_1-buttons-next'
    );
  });

  function initSlider(slider, prev, next) {
    $(slider).slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,

      arrows: true,
      prevArrow: $(prev),
      nextArrow: $(next),

      autoplay: true,
      autoplaySpeed: 3000,

      pauseOnHover: true,
      pauseOnFocus: true,

      fade: false,
      cssEase: 'ease-in-out',
      speed: 500,
    });
  }
})();
