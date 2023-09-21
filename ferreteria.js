const carrito = [];

const Martillo = {
  nombre: "Martillo",
  precio: 1500,
  subtotal: 1500,
  cantidad: 1,
};

const Destornillador = {
  nombre: "Destornillador",
  precio: 2000,
  subtotal: 2000,
  cantidad: 1,
};

const Arandela = {
  nombre: "Arandela",
  precio: 100,
  subtotal: 100,
  cantidad: 1,
};

const Bordeadora = {
  nombre: "Bordeadora",
  precio: 10000,
  subtotal: 10000,
  cantidad: 1,
};

const Tornillo = {
  nombre: "Tornillo",
  precio: 150,
  subtotal: 150,
  cantidad: 1,
};

const Clavo = {
  nombre: "Clavo",
  precio: 50,
  subtotal: 50,
  cantidad: 1,
};

carrito.push(Martillo);
carrito.push(Destornillador);
carrito.push(Arandela);
carrito.push(Bordeadora);
carrito.push(Tornillo);
carrito.push(Clavo);

function enCarrito(nombrePrompt) {
  for (const producto of carrito) {
    if (producto.nombre == nombrePrompt) {
      return producto;
    }
  }
  return false;
}

function buscarCarrito() {
  const keyword = prompt("¿Qué producto desea buscar?");
  const arrayResultados = carrito.filter((el) =>
    el.nombre.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(arrayResultados);
}

function agregar() {
  const nombrePrompt = prompt("Introduzca el nombre del producto:");
  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    productoEncontrado.cantidad++;
    productoEncontrado.precio = productoEncontrado.precio;
    productoEncontrado.subtotal =
      productoEncontrado.precio * productoEncontrado.cantidad;
  } else {
    const nuevoProducto = {
      nombre: nombrePrompt,
      precio: productoEncontrado.precio,
      subtotal: productoEncontrado.subtotal,
      cantidad: 1,
    };
    carrito.push(nuevoProducto);
  }

  alert("El producto " + nombrePrompt + " fue agregado al carrito.");
  listarProductos();
}

function listarProductos() {
  console.clear();
  console.log("Productos en el carrito");

  carrito.forEach(function (elemento) {
    console.log("------------");
    console.log("Nombre: ", elemento.nombre);
    console.log("Precio: ", elemento.precio);
    console.log("Subtotal: ", elemento.subtotal);
    console.log("Cantidad: ", elemento.cantidad);
  });

  const totalCarrito = carrito.reduce((acu, el) => acu + el.subtotal, 0);
  console.log("TOTAL DEL CARRITO: $", totalCarrito);

  const preciosAct = carrito.map((producto) => {
    return {
      nombre: producto.nombre,
      precio: producto.precio * 1.25,
      cantidad: producto.cantidad,
    };
  });

  console.log("Precios actualizados:", preciosAct);

  const nuevoArrayReordenado = carrito.sort((el1, el2) => {
    if (el1.precio < el2.precio) {
      return 1;
    }
    if (el1.precio > el2.precio) {
      return -1;
    }
    return 0;
  });
  console.log("Nuevo array reordenado:", nuevoArrayReordenado);
}

function quitar() {
  const nombrePrompt = prompt("¿Qué producto querés quitar?");

  const productoEncontrado = enCarrito(nombrePrompt);

  if (productoEncontrado) {
    const indiceProducto = carrito.indexOf(productoEncontrado);
    carrito.splice(indiceProducto, 1);
    alert(
      "El producto " + productoEncontrado.nombre + " fue borrado del carrito."
    );
    listarProductos();
  } else {
    alert("No se encontró el producto " + nombrePrompt + " en el carrito.");
  }
}
