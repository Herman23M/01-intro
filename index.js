function crearlibro (titulo, autor, genero,isbn) {
    return {
        id: Date.now(),
        titulo,
        autor,
        genero,
        isbn,
        disponible: true,
        prestado: null,
        fechadelprestamo: null,
        fechadelvencimiento: null,
        creadoen: new Date()

    };
}  
const libroprueba = crearlibro("cien años de soledad", "gabriel garcia marquez", "novella", "123456789");
console.log(libroprueba);

function agregarlibroabiblioteca(biblioteca,  titulo, autor, genero, isbn){
    const nuevolibro= crearlibro(titulo, autor, genero, isbn);
    biblioteca.push(nuevolibro);
    return nuevolibro;

}
let biblioteca = [];
agregarlibroabiblioteca(biblioteca, " el coronel no tiene quien le escriba ", " gabriel garcia marquez", "novela", "978-84-376-0495-4");
console.log(biblioteca);


function eliminarbiblioteca(biblioteca, id){
    const indice = biblioteca.findIndex(libro=> libro.id == id); 
    
    if (indice !== -1){
        const eliminado = biblioteca.splice(indice, 1)[0];
        return eliminado;

    }

    return null;
}


const libro1 = agregarlibroabiblioteca(biblioteca, " el coronel no tiene quien le escriba ", " gabriel  garcia marquez ", "novela", "978-84-376-0495-4");
const libro2= agregarlibroabiblioteca(biblioteca, "pedro paramo", "juan rulfo", "novela", "978-84-376-1234-5.");


console.log("biblioteca antes de eliminar:", biblioteca );

const eliminado = eliminarbiblioteca(biblioteca, libro1.id);
console.log("libro eliminado: ", eliminado);
console.log("biblioteca desoues de eliminar:", biblioteca);

function buscarlibroportitulo(biblioteca, titulo){
    return biblioteca.filter(libro =>
        libro.titulo.toLowerCase().includes(titulo.toLowerCase)

    );

}
console.log(" buscar 'coronel':", buscarlibroportitulo(biblioteca, "coronel"));

function prestarlibro(biblioteca, id, persona){
    const libro = biblioteca.find(libro=> libro.id === id);
    if(libro && libro.disponible) {
        libro.disponible = false;
        libro.prestado = persona;
        libro.fechadelprestamo = new Date();
        libro.fechadelvencimiento = new Date();
        libro.fechadelvencimiento.setDate(libro.fechadelprestamo.getDate() + 15); 
    return libro;
    }
return null;
}
function devolverlibro(biblioteca, id) {
    const libro = biblioteca.find(libro => libro.id === id);
    if (libro && !libro.disponible) {
        libro.disponible = true;
        libro.prestado = null;
        libro.fechadelprestamo = null;
        libro.fechadelvencimiento = null;
        return libro;
    }
    return null;
}

const prestado = prestarlibro(biblioteca, libro2.id, "juan perez");
console.log("libro prestado:" , prestado);

function listadisponible(bibilioteca){


    return bibilioteca.filter(libro => libro.disponible);


}
 console.log("libros disponibles:" , listadisponible(bibilioteca));
 
function agregarlibroabiblioteca(bibilioteca, titulo, autor, genero, isbn) {
    const existe = bibilioteca.some(libro => libro.isbn === isbn);

    if(existe) {
        console.log("el libro no existe en esta biblioteca." );
        return null;

    }
    const nuevolibro =  crearlibro(titulo, autor, genero, isbn);
    bibilioteca.push(nuevolibro);
    return nuevolibro;

}
function contarLibros(biblioteca) {
    return {
        total: biblioteca.length,
        disponibles: biblioteca.filter(l => l.disponible).length,
        prestados: biblioteca.filter(l => !l.disponible).length
    };
}
console.log("estadisticas: ", contarLibros(bibilioteca));

{}
