/*MANU*/

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguesa-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function initExperienceCarousel() {
    const carousel = document.querySelector('.experience-carousel');
    if (!carousel) return;

    const track = carousel.querySelector('.experience-track');
    const slides = Array.from(track.children);
    const viewport = carousel.querySelector('.experience-carousel__viewport');
    const prevButton = carousel.querySelector('.experience-carousel__button--prev');
    const nextButton = carousel.querySelector('.experience-carousel__button--next');
    const dotsContainer = carousel.querySelector('.experience-carousel__dots');

    if (!track || !viewport || slides.length === 0 || !prevButton || !nextButton) return;

    let currentIndex = 0;
    let autoPlayId;

    const dots = slides.map((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'experience-carousel__dot';
        dot.setAttribute('aria-label', `Ir a la experiencia ${index + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(index);
            startAutoplay();
        });
        if (dotsContainer) dotsContainer.appendChild(dot);
        return dot;
    });

    const getSlideStep = () => {
        const firstSlide = slides[0];
        const trackStyle = window.getComputedStyle(track);
        const gap = parseFloat(trackStyle.gap || '0');
        return firstSlide.getBoundingClientRect().width + gap;
    };

    const syncViewportHeight = () => {
        const active = slides[currentIndex];
        if (!active) return;
        const viewportStyle = window.getComputedStyle(viewport);
        const padding =
            parseFloat(viewportStyle.paddingTop || '0') +
            parseFloat(viewportStyle.paddingBottom || '0');
        viewport.style.height = `${active.offsetHeight + padding}px`;
    };

    const updateCarousel = () => {
        const step = getSlideStep();
        track.style.transform = `translateX(-${currentIndex * step}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('is-active', index === currentIndex);
            dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
        });
        syncViewportHeight();
    };

    const goToSlide = (index) => {
        currentIndex = (index + slides.length) % slides.length;
        updateCarousel();
    };

    const startAutoplay = () => {
        clearInterval(autoPlayId);
        autoPlayId = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 14000);
    };

    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoplay();
    });

    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoplay();
    });

    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayId));
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', () => clearInterval(autoPlayId));
    carousel.addEventListener('focusout', startAutoplay);
    window.addEventListener('resize', updateCarousel);
    window.addEventListener('load', updateCarousel);

    updateCarousel();
    startAutoplay();
}

window.addEventListener('DOMContentLoaded', initExperienceCarousel);