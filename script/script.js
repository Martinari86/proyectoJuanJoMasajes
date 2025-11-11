document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing Spa lista');

  // --- Menú hamburguesa ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const navLinks = document.querySelectorAll('nav ul li a'); // Se agregan los enlaces

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Ocultar el menú al hacer clic en un enlace (nuevo)
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remover la clase 'active' para ocultar el menú
      navMenu.classList.remove('active');
    });
  });

  // --- Carrusel de palabras 1 (Inicio) ---
  const palabras = ["respirar", "relajar", "reconectar"];
  let i = 0;
  const texto = document.getElementById('carousel-text');

  // Aseguramos que el elemento exista antes de intentar manipularlo
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
      console.warn("ADVERTENCIA: Elemento con ID 'carousel-text' no encontrado. El carrusel 1 no funcionará.");
  }


  // --- Carrusel de stories 2 (Stories) ---
  const palabras2 = ["Desde que tengo memoria recuerdo como un impulso, algo totalmente intuitivo, cómo de forma lúdica me subía a un banquito y practicaba en los hombros de mi tía o de mi mamá ciertos golpecitos corporales que intentaban ser una sesión de masajes.",
                     "De adulto seguí practicando esos intentos con mis seres queridos, con las personas más cercanas. Esa motivación por brindar un bienestar a los otros continuó, aunque mi profesión fue por el camino de las relaciones públicas, del periodismo y de la comunicación.",
                     "Luego de mucho tiempo, decidí reencontrarme con ese camino y estudiar. Decidí ponerle formalidad, teoría y profesionalismo a ese impulso inherente y llevarlo a cabo como una nueva forma de vida.",
                    "La comunicación y la realización de masajes me parecían recorridos muy distintos, pero alguien con buen tino me dijo que la motivación por hacerle un bien al otro es también comunicarse, es conectar..."];
  let j = 0;
  // Asegúrate de que este ID ('carousel-text1') exista en tu HTML
  const texto2 = document.getElementById('carousel-text1');

  // Aseguramos que el elemento exista antes de intentar manipularlo
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
      console.warn("ADVERTENCIA: Elemento con ID 'carousel-text1' no encontrado. El carrusel de Stories no funcionará.");
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.review-carousel');
  const items = document.querySelectorAll('.review-item');
  const totalItems = items.length;
  let currentIndex = 0;

  // Establece la duración entre cada cambio (ej: 4000 milisegundos = 4 segundos)
  const intervalTime = 4000;

  function nextReview() {
    // Calcula el índice de la siguiente review
    currentIndex = (currentIndex + 1) % totalItems;

    // Mueve el carrusel horizontalmente
    const offset = -currentIndex * 100; // Mueve -100% por cada índice
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Inicia el movimiento automático
  let carouselInterval = setInterval(nextReview, intervalTime);

  // Opcional: Detener el carrusel al pasar el ratón
  carousel.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
  });

  // Opcional: Reanudar el carrusel al quitar el ratón
  carousel.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextReview, intervalTime);
  });

});