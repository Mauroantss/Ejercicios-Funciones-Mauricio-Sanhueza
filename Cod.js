// Funcion de saludo
console.log("--------------Saludo------------")
function saludarConNombre(nombre) {
  return "¡Hola, " + nombre + "! Bienvenido."
}

const nombreUsuario = prompt("Por favor, introduce tu nombre:")
const saludo = saludarConNombre(nombreUsuario)
console.log(saludo)

//   Funcion de multiplicar

console.log("--------------Multiplicacion------------")

function multiplicar(a, b) {
    return a * b
  }

  let resultado = multiplicar(5, 3)
  console.log(resultado)

// Funcion area de un triangulo

console.log("--------------Area triangulo------------")

function areaTriangulo(base, altura) {
    return (base * altura)
  }
  let baseTriangulo = 5
  let alturaTriangulo = 3
  let area = areaTriangulo(baseTriangulo, alturaTriangulo)
  console.log("El área del triángulo es: " + area)

  console.log("--------------Perimetro triangulo------------")

//   Perimetro de un triangulo

  function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
  }
  let ladoA = 4
  let ladoB = 5
  let ladoC = 6
  let perimetro = perimetroTriangulo(ladoA, ladoB, ladoC)
  console.log("El perímetro del triángulo es: " + perimetro)
  

//   Precio
console.log("--------------Precio------------")

function calcularPrecio(precio, cantidad) {
    let precioTotal = precio * cantidad
  
    if (cantidad >= 10 && cantidad < 20) {
      precioTotal *= 0.9
    } else if (cantidad >= 20) {
      precioTotal *= 0.8
    }
  
    return precioTotal;
  }

 let precioProducto = 100
 let cantidadProducto1 = 15
 let cantidadProducto2 = 20
 let cantidadProducto3 = 25
  
 let precioTotal1 = calcularPrecio(precioProducto, cantidadProducto1)
 let precioTotal2 = calcularPrecio(precioProducto, cantidadProducto2)
 let precioTotal3 = calcularPrecio(precioProducto, cantidadProducto3)
  
  console.log("Precio total 1: " + precioTotal1) // Sin descuento
  console.log("Precio total 2: " + precioTotal2) // Descuento del 10%
  console.log("Precio total 3: " + precioTotal3) // Descuento del 20%

// Mayor de edad
console.log("--------------Mayor de edad------------")

function verificarEdad(edad) {
  if (edad >= 18) {
    return "Eres mayor de edad."
  } else {
    return "Eres menor de edad."
  }
}

const edadUsuario = parseInt(prompt("Por favor, ingresa tu edad:"))

if (isNaN(edadUsuario)) {
  console.log("Por favor, ingresa un valor numérico válido.")
} else {
  const resultado = verificarEdad(edadUsuario);
  console.log(resultado)
}
  
  // Impuestos
  console.log("--------------Mayor de edad------------")
  
  function calcularImpuesto(ingresoAnual) {
    if (ingresoAnual <= 10000) {
        return ingresoAnual * 0.1;
    } else if (ingresoAnual <= 20000) {
        return ingresoAnual * 0.15 
    } else {
        return ingresoAnual * 0.2 
    }
}
console.log("Impuesto para $8000:", calcularImpuesto(8000));
console.log("Impuesto para $15000:", calcularImpuesto(15000));
console.log("Impuesto para $25000:", calcularImpuesto(25000));

// Verificar día
console.log("--------------Dia de la semana------------")

function verificarDiaLaboral(dia) {
  const diaNormalizado = dia.toLowerCase();
  
  switch (diaNormalizado) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
      
    return "Es un día laboral.";
  
    case "sabado":
    case "domingo":
    return "Es fin de semana.";
    default:
    return "Día no válido. Por favor, ingresa un día de la semana válido.";
  }
}

const diaUsuario = prompt("Por favor, ingresa un día de la semana:");
const dia = verificarDiaLaboral(diaUsuario);
console.log(dia);



