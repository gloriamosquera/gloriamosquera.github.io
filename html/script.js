let currentIndex = 0;

function toggleCarousel() {
  const carousel = document.getElementById('carousel');
  const button = document.querySelector('.carousel-toggle');
  
  if (carousel.style.display === 'none' || carousel.style.display === '') {
    carousel.style.display = 'block';
    button.textContent = 'Ocultar Carrusel';
  } else {
    carousel.style.display = 'none';
    button.textContent = 'Mostrar Carrusel';
  }
}

function moveCarousel(direction) {
  const carouselContainer = document.querySelector('.carousel-container');
  const images = document.querySelectorAll('.carousel-container img');
  
  if (direction === 'left') {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
  } else {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }

  const offset = -currentIndex * 100;  // Mueve el carrusel de acuerdo al índice
  carouselContainer.style.transform = `translateX(${offset}%)`;
}
