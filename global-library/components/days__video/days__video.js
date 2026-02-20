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

export default days__video;