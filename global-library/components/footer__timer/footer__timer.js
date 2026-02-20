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

export default footer__timer;