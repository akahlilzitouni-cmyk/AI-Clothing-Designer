document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // 1. تأثيرات الظهور عند التمرير (Scroll Fade-In Effects)
    // ----------------------------------------------------

    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px" // تبدأ بالظهور قبل 100 بكسل من نهاية الشاشة
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // ----------------------------------------------------
    // 2. معرض الملابس التفاعلي (Interactive Gallery)
    // ----------------------------------------------------
    
    const mainImage = document.getElementById('main-clothing-image');
    const galleryButtons = document.querySelectorAll('.gallery-btn');

    galleryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newImageSrc = button.getAttribute('data-image');
            
            // تطبيق تأثير تلاشي (Fade-out)
            mainImage.style.opacity = 0;

            // الانتظار قليلاً لتطبيق التلاشي، ثم تغيير الصورة وتطبيق (Fade-in)
            setTimeout(() => {
                mainImage.src = newImageSrc;
                mainImage.style.opacity = 1;
            }, 300); // 300 مللي ثانية تتوافق مع سرعة انتقال الصورة في CSS
        });
    });

});