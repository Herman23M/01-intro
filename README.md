sistema de biblioteca 
Ejercicio sencillo de javaScript que  simula como funciona una biblioteca que nlos permite agrgar libros, elimarlos, buscarrlos y tambien prestarlos 


que hace el programa.
-  agrega libros a la biblioteca
-  eliminar lir¿bros que ya ni estan
-  buscar libors por su titulo
-  prestar libros a una persona( se marcara como " no disponible")
-  ver que libros estan disponibles
-  mostrar cuantos libros hay en total, prestados yy disponibles

  Archivos principales 
  - index.js aquie esta todo el codigo del sistema 
  -package.json informacion del proyecto 
  - README.md 

  COmo usarlo 
  -aseguarme que tiene Node.js instalado
  abrir la carpeta del proyecto
  escribir el siguiente comando para ejecutar el programa 
  en la consola apareceran los resultados de las funciones, libros agregrado, prestados, etc..
  permite añadir un libro nuevo con:
  -titulo
  -autor
  -genero
  -isbn
  Nos permite elimnar libros utilizando su id

buscar un libro por su titulo 
Marca un libro como **no disponible** y guarda a quién se prestó.  
Además, guarda la fecha del prestamos y guarda a quien se presto, ademas guarda la fecha del prestamo y la fecha del vencimiento 
muestra todos lod libros disponibles 
tambien cuenta los libroos disponibles incluyendo los que estan prestados 
EJEMPLO DE USO

js 
let biblioteca = []
const libro1 = agregarlibroabiblioteca(biblioteca, "Cien años de soledad", "Gabriel García Márquez", "Novela", "123456789");

 Buscar libro
console.log(buscarlibroportitulo(biblioteca, "soledad"));

Prestar libro
console.log(prestarlibro(biblioteca, libro1.id, "Juan Pérez"));

resultado en consola
Libro agregado correctamente
Libro encontrado: "Cien años de soledad"
Libro prestado a Juan Pérez


