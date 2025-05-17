  document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const total = slides.length;

    function mostrarSlide(n) {
      slides.forEach((slide, i) => {
        slide.classList.remove('activo');
        if (i === n) {
          slide.classList.add('activo');
        }
      });
    }

    function siguienteSlide() {
      index = (index + 1) % total;
      mostrarSlide(index);
    }

    function anteriorSlide() {
      index = (index - 1 + total) % total;
      mostrarSlide(index);
    }

    // Eventos de las flechas
    document.querySelector('.flecha.derecha').addEventListener('click', () => {
      siguienteSlide();
    });

    document.querySelector('.flecha.izquierda').addEventListener('click', () => {
      anteriorSlide();
    });

    mostrarSlide(index);
    setInterval(siguienteSlide, 2000); // 3 segundos
  });
