
/* ============================================================
   SCRIPT PRINCIPAL — JUANJO MASAJES
   Cada función controla una sección puntual de la landing.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing Spa lista');

  initMenuHamburguesa();  // Header: abre/cierra el menú en mobile
  initCarruselHero();     // Hero (#inicio): rota la palabra clave y la historia
  initCarruselReviews();  // Reseñas: mueve el carrusel manual (si existe)
  initAnimacionScroll();  // Bienestar corporativo: fade-in al scrollear
});

/* --------------------------------------------------------
   1) MENÚ HAMBURGUESA
   -------------------------------------------------------- */
function initMenuHamburguesa() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a');

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Ocultar el menú al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

/* --------------------------------------------------------
   2) CARRUSELES (HERO & STORIES)
   -------------------------------------------------------- */
function initCarruselHero() {
  // Carrusel 1: Palabras clave (Hero)
  const palabras = ["respirar", "relajar", "reconectar"];
  let i = 0;
  const texto = document.getElementById('carousel-text');

  if (texto) {
    setInterval(() => {
      texto.style.opacity = 0;
      setTimeout(() => {
        i = (i + 1) % palabras.length;
        texto.textContent = palabras[i];
        texto.style.opacity = 1;
      }, 800);
    }, 3000);
  } else {
    console.warn("ADVERTENCIA: Elemento con ID 'carousel-text' no encontrado.");
  }

  // Carrusel 2: Stories ("Quién Soy")
  const palabras2 = [
    "Desde que tengo memoria recuerdo como un impulso, algo totalmente intuitivo, cómo de forma lúdica me subía a un banquito y practicaba en los hombros de mi tía o de mi mamá ciertos golpecitos corporales que intentaban ser una sesión de masajes.",
    "De adulto seguí practicando esos intentos con mis seres queridos, con las personas más cercanas. Esa motivación por brindar un bienestar a los otros continuó, aunque mi profesión fue por el camino de las relaciones públicas, del periodismo y de la comunicación.",
    "Luego de mucho tiempo, decidí reencontrarme con ese camino y estudiar. Decidí ponerle formalidad, teoría y profesionalismo a ese impulso inherente y llevarlo a cabo como una nueva forma de vida.",
    "La comunicación y la realización de masajes me parecían recorridos muy distintos, pero alguien con buen tino me dijo que la motivación por hacerle un bien al otro es también comunicarse, es conectar..."
  ];
  let j = 0;
  const texto2 = document.getElementById('carousel-text1');

  if (texto2) {
    setInterval(() => {
      texto2.style.opacity = 0;
      setTimeout(() => {
        j = (j + 1) % palabras2.length;
        texto2.textContent = palabras2[j];
        texto2.style.opacity = 1;
      }, 900);
    }, 10000);
  } else {
    console.warn("ADVERTENCIA: Elemento con ID 'carousel-text1' no encontrado.");
  }
}

/* --------------------------------------------------------
   3) CARRUSEL DE RESEÑAS (Manual)
   -------------------------------------------------------- */
function initCarruselReviews() {
  const carousel = document.querySelector('.review-carousel');
  const items = document.querySelectorAll('.review-item');
  if (!carousel || items.length === 0) return;

  const totalItems = items.length;
  const intervalTime = 4000;
  let currentIndex = 0;

  function nextReview() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  let carouselInterval = setInterval(nextReview, intervalTime);

  carousel.addEventListener('mouseenter', () => clearInterval(carouselInterval));
  carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextReview, intervalTime);
  });
}

/* --------------------------------------------------------
   4) ANIMACIÓN AL SCROLLEAR — BENEFICIOS CORPORATIVOS
   -------------------------------------------------------- */
function initAnimacionScroll() {
  const imagenesScroll = document.querySelectorAll('.scroll-img');
  if (imagenesScroll.length === 0) return;

  const opciones = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const observerBeneficios = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
      }
    });
  }, opciones);

  imagenesScroll.forEach(img => observerBeneficios.observe(img));
}
