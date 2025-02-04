document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");
    
    // Configurare animație
    const animationConfig = {
        duration: '1s',
        easing: 'ease-in-out',
        delay: '0.2s'
    };

    // Aplică stiluri CSS pentru animație
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = `opacity ${animationConfig.duration} ${animationConfig.easing} ${animationConfig.delay}`;
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Adaugă clasa și aplică animația
                    entry.target.classList.add("visible");
                    entry.target.style.opacity = '1';
                    
                    // Opțional: elimină observarea după ce elementul devine vizibil
                    observer.unobserve(entry.target);
                } else {
                    // Opțional: resetează animația când elementul iese din viewport
                    entry.target.classList.remove("visible");
                    entry.target.style.opacity = '0';
                }
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px', // Adaugă margin pentru declanșarea mai devreme/târzie
        }
    );

    // Inițializează observarea pentru fiecare element
    elements.forEach((el) => {
        observer.observe(el);
        
        // Adaugă evenimente pentru efecte hover (opțional)
        el.addEventListener('mouseenter', () => {
            el.style.transform = 'scale(1.05)';
            el.style.transition = 'transform 0.3s ease';
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'scale(1)';
        });
    });
});
