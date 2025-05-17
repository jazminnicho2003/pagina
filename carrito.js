document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cartIcon');
  const cartDropdown = document.getElementById('cartDropdown');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  let carrito = [];

  // Mostrar/ocultar carrito al hacer click en el icono
  cartIcon.addEventListener('click', () => {
    if (cartDropdown.style.display === 'block') {
      cartDropdown.style.display = 'none';
    } else {
      cartDropdown.style.display = 'block';
    }
  });

  // Función para agregar producto al carrito
  function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    actualizarCarrito();
  }

  // Función para eliminar producto del carrito
  function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }

  // Función para actualizar la vista del carrito
  function actualizarCarrito() {
    cartItems.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${producto.nombre} - $${producto.precio.toFixed(2)}</span>
        <button class="remove" onclick="eliminarDelCarrito(${index})">❌</button>
      `;
      cartItems.appendChild(li);
      total += producto.precio;
    });

    cartTotal.textContent = total.toFixed(2);
  }

  // Capturamos todos los botones "Agregar al carrito"
  const botonesAgregar = document.querySelectorAll('.agregar-carrito');

  botonesAgregar.forEach(boton => {
    boton.addEventListener('click', function(event) {
      event.preventDefault();

      // Obtenemos el contenedor del producto
      const productoDiv = boton.closest('.product');

      // Extraemos nombre y precio
      const nombre = productoDiv.querySelector('h3').textContent;
      const precioTexto = productoDiv.querySelector('.precio').textContent;
      const precio = parseFloat(precioTexto.replace('$', ''));

      agregarAlCarrito(nombre, precio);

      // Abrir el carrito automáticamente al agregar un producto
      cartDropdown.style.display = 'block';
    });
  });
});
