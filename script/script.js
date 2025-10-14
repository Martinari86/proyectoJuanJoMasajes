document.addEventListener('DOMContentLoaded', () => {
  console.log('Landing Spa lista');

  // --- Menú hamburguesa ---
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // --- Carrusel de palabras ---
  const palabras = ["Respirar", "Relajar", "Reconectar"];
  let i = 0;
  const texto = document.getElementById('carousel-text');

  setInterval(() => {
    texto.style.opacity = 0;
    setTimeout(() => {
      i = (i + 1) % palabras.length;
      texto.textContent = palabras[i];
      texto.style.opacity = 1;
    }, 800);
  }, 3000);
});
