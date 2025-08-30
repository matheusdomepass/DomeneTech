document.querySelectorAll('.navbar-items a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbar = document.querySelector('.navbar-container'); 
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;

                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
    const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('transparent');
    } else {
      nav.classList.remove('transparent');
    }
  });
