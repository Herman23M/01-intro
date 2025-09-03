Taller de Paradigmas

ejercicio 1

tenemos estudiantes con nombre, materia y nota 

necesitaba

filtrar los qque estudiaban con Js con nota mayor a 3,5 

obtener solo su nombre 

calcular el promedio de las notas 



// filter -> recorre la lista y devuelve solo los que cumplen la condición

// map -> transforma la lista y devuelve solo los nombres

// reduce -> acumula todas las notas y luego las divide por la cantida











Ejercicio 2

teniamos una tienda cada producto tiene nombre, precio y stock se necesiataba aplicar descuentos y mostar informacion

&nbsp;this.nombre = nombre     // propiedad nombre

&nbsp;   this.precio = precio     // propiedad precio

&nbsp;   this.stock = stock       // propiedad stock

&nbsp;   // método que calcula el precio con descuento

&nbsp; descuento(porcentaje) 

&nbsp;   return this.precio - (this.precio \* porcentaje / 100)

&nbsp;   // método que devuelve la información en texto

&nbsp; info() {

&nbsp;   return `${this.nombre} - $${this.precio} - stock: ${this.stock}`

&nbsp; }







&nbsp; Ejercicio 3

&nbsp; validar datos basicos de un formulario 

&nbsp; el corredo debe tener @ 

&nbsp; la contraseña debe tener minimo 8 caracteres 

&nbsp; edad debe ser positiva 

&nbsp; function validar\_email(email) {

&nbsp; //includes revisa si el texto tiene el carácter "@"

&nbsp; return email.includes("@")

}

function validar\_email(email) {

&nbsp; // includes revisa si el texto tiene el carácter "@"

&nbsp; return email.includes("@")

}

function validar\_edad(edad) {

&nbsp; // debe ser un número mayor que 0

&nbsp; return edad > 0

}









ejercicio 4

en un inventario queremos buscar 

productos de un rango de precios 

agruparlos por categorias 

function filtrar\_precio(lista, min, max) {

&nbsp; // filter devuelve solo los productos con precio entre min y max

&nbsp; return lista.filter(p => p.precio >= min \&\& p.precio <= max)

}

function agrupar\_categoria(lista) {

&nbsp; // reduce crea un objeto donde cada clave es una categoría

&nbsp; return lista.reduce((grupo, p) => {

&nbsp;   if (!grupo\[p.categoria]) grupo\[p.categoria] = \[]

&nbsp;   grupo\[p.categoria].push(p)

&nbsp;   return grupo

&nbsp; }, {})

}









Ejercicio 5 

queriamos agregar el iva (19%)



function transformar(lista) {

&nbsp; // map devuelve una nueva lista con cambios

&nbsp; return lista.map(p => ({

&nbsp;   ...p, // copia el producto original

&nbsp;   precio\_con\_iva: p.precio \* 1.19, // agrega iva

&nbsp;   estado: p.stock > 10 ? "alto" : "bajo" // condición ternaria

&nbsp; }))

}





