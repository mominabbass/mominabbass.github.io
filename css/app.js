window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const navLinks = document.querySelectorAll('nav li a');

    // Function to handle smooth scrolling
    const smoothScroll = (target) => {
        const targetElement = document.querySelector(target);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    // Function to handle section activation
    const activateSection = () => {
        const scrollPosition = window.scrollY;
        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop - 300) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    // Function to handle footer appearance
    const toggleFooter = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
            footer.style.transform = 'translateY(0)';
        } else {
            footer.style.transform = 'translateY(100%)';
        }
    };

    // Add event listener to each nav link for smooth scrolling
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Add event listener to handle section activation and footer appearance on scroll
    window.addEventListener('scroll', () => {
        activateSection();
        toggleFooter();
    });

    // Trigger section activation and footer appearance on page load
    activateSection();
    toggleFooter();
});

