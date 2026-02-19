
/* ==========================================
   COMPONENT: days__video
   ========================================== */
(function(){
  try {
    // Шукаємо всі обгортки (контейнери) плеєра
const videoWrappers = document.querySelectorAll('.video-wrapper');

const days__video = () => {
    videoWrappers.forEach((wrapper) => {
        // Шукаємо елементи ТІЛЬКИ всередині поточної обгортки
        const video = wrapper.querySelector('.day__video-video');
        const playBtn = wrapper.querySelector('.play-btn');

        if (!video || !playBtn) return; // Пропускаємо, якщо чогось бракує

        // Початковий стан
        video.controls = false;

        const togglePlay = () => {
            if (video.paused) {
                video.controls = true;
                video.play();
            } else {
                video.pause();
            }
        };

        // Клік по кнопці
        playBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            togglePlay();
        });

        // Клік по самому відео (якщо хочеш паузу/плей по кліку на картинку)
        video.addEventListener('click', () => {
            if (video.controls) return; // Якщо контролери вже є, не заважаємо
            togglePlay();
        });

        video.addEventListener('play', () => {
            playBtn.style.opacity = '0';
            playBtn.style.pointerEvents = 'none'; // Щоб кнопка не перехоплювала кліки
            video.controls = true;
        });

        video.addEventListener('pause', () => {
            // Якщо відео зупинили на самому початку — повертаємо кнопку
            if (video.currentTime === 0) {
                playBtn.style.opacity = '1';
                playBtn.style.pointerEvents = 'all';
                video.controls = false;
            }
        });

        video.addEventListener('ended', () => {
            video.controls = false;
            video.currentTime = 0; // Скидаємо на початок
            playBtn.style.opacity = '1';
            playBtn.style.pointerEvents = 'all';
        });
    });
};



  if (typeof days__video === 'function') { days__video(); }
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [days__video]:', e);
  }
})();

/* ==========================================
   COMPONENT: footer__timer
   ========================================== */
(function(){
  try {
    const footer__timer = () => {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            footer.classList.add('active');
        } else {
            footer.classList.remove('active');
        }
    };

    // Додаємо слухач подій
    window.addEventListener('scroll', handleScroll);
    
    // Викликаємо один раз відразу, щоб перевірити стан при завантаженні
    handleScroll(); 
};



  if (typeof footer__timer === 'function') { footer__timer(); }
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [footer__timer]:', e);
  }
})();

/* ==========================================
   COMPONENT: header_component_1
   ========================================== */
(function(){
  try {
    const marquee = document.getElementById('marquee');
let speed = 0.3; // Швидкість (чим більше число, тим швидше)
let offset = 0;

// 1. Клонуємо контент для створення ілюзії нескінченності
marquee.innerHTML += marquee.innerHTML; 

function animate() {
    offset -= speed;
    
    // 2. Коли перша половина (оригінальні 3 фото) повністю пішла вліво
    // ми скидаємо offset на 0, щоб почати цикл заново непомітно
    if (Math.abs(offset) >= marquee.scrollWidth / 2) {
        offset = 0;
    }
    
    marquee.style.transform = `translateX(${offset}px)`;
    
    requestAnimationFrame(animate);
}

// Запускаємо конвеєр
animate();

// Опціонально: зупинка при наведенні мишки
marquee.addEventListener('mouseenter', () => speed = 0);
marquee.addEventListener('mouseleave', () => speed = 1);
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [header_component_1]:', e);
  }
})();

/* ==========================================
   COMPONENT: questions__main
   ========================================== */
(function(){
  try {
    const questions__main = () => {
  const items = document.querySelectorAll(".questionsContainer-item");
  
  items.forEach((item) => {
    const top = item.querySelector(".questionsContainer-item-top");
    const bottom = item.querySelector(".questionsContainer-item-bottom");
    const label = item.querySelector(".label");

    bottom.style.maxHeight = "0";
    bottom.style.overflow = "hidden";
    bottom.style.transition = "max-height 0.4s ease";

    top.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      items.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".questionsContainer-item-bottom").style.maxHeight = "0";
        el.querySelector(".label").textContent = "+";
      });

      if (!isActive) {
        item.classList.add("active");
        bottom.style.maxHeight = bottom.scrollHeight + "px";
        label.textContent = "–";
      }
    });
  });

}



  if (typeof questions__main === 'function') { questions__main(); }
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [questions__main]:', e);
  }
})();

/* ==========================================
   COMPONENT: slider_image_1
   ========================================== */
(function(){
  try {
    
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [slider_image_1]:', e);
  }
})();

/* ==========================================
   COMPONENT: slider_video_1
   ========================================== */
(function(){
  try {
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

  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [slider_video_1]:', e);
  }
})();

/* ==========================================
   COMPONENT: start_date_badge_1
   ========================================== */
(function(){
  try {
    document.addEventListener("DOMContentLoaded", () => {

    const dateBlock = document.querySelector('.badge_1_date-block');

    const months = [
        'January','February','March','April','May','June',
        'July','August','September','October','November','December'
    ];

    if (dateBlock) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const day = tomorrow.getDate();
        const month = months[tomorrow.getMonth()];

        dateBlock.textContent = `${day} ${month}`;
    }

});
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [start_date_badge_1]:', e);
  }
})();

/* ==========================================
   COMPONENT: start_date_badge_2
   ========================================== */
(function(){
  try {
    document.addEventListener("DOMContentLoaded", () => {

    const dateBlock = document.querySelector('.badge_2_date-block');

    const months = [
        'January','February','March','April','May','June',
        'July','August','September','October','November','December'
    ];

    if (dateBlock) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        const day = tomorrow.getDate();
        const month = months[tomorrow.getMonth()];

        dateBlock.textContent = `${day} ${month}`;
    }

});
  } catch(e) {
    console.error('❌ Помилка ініціалізації компонента [start_date_badge_2]:', e);
  }
})();
