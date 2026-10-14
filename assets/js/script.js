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

    const drag = { active: false, started: false, pointerId: null, startX: 0, startY: 0, dx: 0 };
    let suppressClick = false;

    const setTrackOffset = (px) => {
        const step = getSlideStep();
        track.style.transform = `translateX(${-currentIndex * step + px}px)`;
    };

    const onPointerDown = (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        drag.active = true;
        drag.started = false;
        drag.pointerId = event.pointerId;
        drag.startX = event.clientX;
        drag.startY = event.clientY;
        drag.dx = 0;
        clearInterval(autoPlayId);
    };

    const onPointerMove = (event) => {
        if (!drag.active || event.pointerId !== drag.pointerId) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (!drag.started) {
            if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy)) return;
            drag.started = true;
            track.style.transition = 'none';
            carousel.classList.add('is-dragging');
            try { viewport.setPointerCapture(event.pointerId); } catch (error) {}
        }
        drag.dx = dx;
        if (event.cancelable) event.preventDefault();
        setTrackOffset(dx);
    };

    const endDrag = (event) => {
        if (!drag.active || (event && event.pointerId !== drag.pointerId)) return;
        const wasDragging = drag.started;
        const dx = drag.dx;
        drag.active = false;
        drag.started = false;
        track.style.transition = '';
        carousel.classList.remove('is-dragging');
        if (wasDragging) {
            const step = getSlideStep();
            const threshold = Math.min(60, step * 0.15);
            suppressClick = true;
            if (dx <= -threshold) {
                goToSlide(currentIndex + 1);
            } else if (dx >= threshold) {
                goToSlide(currentIndex - 1);
            } else {
                updateCarousel();
            }
        }
        drag.dx = 0;
        startAutoplay();
    };

    viewport.addEventListener('pointerdown', onPointerDown);
    viewport.addEventListener('pointermove', onPointerMove);
    viewport.addEventListener('pointerup', endDrag);
    viewport.addEventListener('pointercancel', endDrag);
    window.addEventListener('pointerup', endDrag);
    window.addEventListener('pointercancel', endDrag);
    viewport.addEventListener('click', (event) => {
        if (!suppressClick) return;
        suppressClick = false;
        event.preventDefault();
        event.stopPropagation();
    }, true);

    carousel.addEventListener('mouseenter', () => clearInterval(autoPlayId));
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', () => clearInterval(autoPlayId));
    carousel.addEventListener('focusout', startAutoplay);
    window.addEventListener('resize', updateCarousel);
    window.addEventListener('load', updateCarousel);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(updateCarousel);
    }

    updateCarousel();
    startAutoplay();
}

window.addEventListener('DOMContentLoaded', initExperienceCarousel);