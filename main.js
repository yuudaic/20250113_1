document.addEventListener('DOMContentLoaded', () => {
    
    // Hamburger Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('active');
        toggleMenu(!isOpen);
    });

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    function toggleMenu(open) {
        if (open) {
            mobileMenu.classList.add('active');
            hamburger.setAttribute('aria-expanded', 'true');
            // Animate hamburger lines if you want (CSS transform)
            hamburger.children[0].style.transform = 'translateY(9px) rotate(45deg)';
            hamburger.children[1].style.opacity = '0';
            hamburger.children[2].style.transform = 'translateY(-9px) rotate(-45deg)';
        } else {
            mobileMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.children[0].style.transform = 'none';
            hamburger.children[1].style.opacity = '1';
            hamburger.children[2].style.transform = 'none';
        }
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq__item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq__q');
        question.addEventListener('click', () => {
            // Close others (optional - standard accordion behavior)
            // faqItems.forEach(i => {
            //     if (i !== item) i.classList.remove('active');
            // });

            item.classList.toggle('active');
        });
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scroll for Anchors (Polyfill for old browsers not needed mostly, but robust)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
