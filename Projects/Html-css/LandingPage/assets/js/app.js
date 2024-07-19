document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav__item');
  const semicircle = document.querySelector('.header-circle');
  const nav = document.querySelector('.header_nav');

  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          const activeLink = document.querySelector('.nav__item.active');
          if (activeLink) {
              activeLink.classList.remove('active');
          }

          event.currentTarget.classList.add('active');

          const offset = event.currentTarget.offsetLeft + (event.currentTarget.offsetWidth / 2) - (semicircle.offsetWidth / 2);
          const maxOffset = nav.offsetWidth - semicircle.offsetWidth;

          semicircle.style.left = `${Math.min(Math.max(0, offset), maxOffset)}px`;
      });
  });

  // Inicializar la posición del semicírculo al cargar la página
  const activeLink = document.querySelector('.nav__item.active');
  if (activeLink) {
      const offset = activeLink.offsetLeft + (activeLink.offsetWidth / 2) - (semicircle.offsetWidth / 2);
      const maxOffset = nav.offsetWidth - semicircle.offsetWidth;

      semicircle.style.left = `${Math.min(Math.max(0, offset), maxOffset)}px`;
  }
});