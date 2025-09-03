function validaremail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  return regex.test(email)
}
function validarpassword(password) {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
  return regex.test(password)
}
function validaredad(edad) {
  return Number.isInteger(edad) && edad > 0
}
function validarproducto(producto) {
  return (
    producto &&
    typeof producto.id === "number" &&
    typeof producto.nombre === "string" &&
    typeof producto.precio === "number" &&
    typeof producto.categoria === "string" &&
    typeof producto.stock === "number"
  )
}
console.log("email válido:", validaremail("usuario@correo.com"))
console.log("email inválido:", validaremail("usuario.com"))

console.log("password válido:", validarpassword("Clave123!"))
console.log("password inválido:", validarpassword("clave"))

console.log("edad válida:", validaredad(25))
console.log("edad inválida:", validaredad(-5))

console.log(
  "producto válido:",
  validarproducto({ id: 1, nombre: "camisa", precio: 50000, categoria: "ropa", stock: 10 })
)

console.log(
  "producto inválido:",
  validarproducto({ id: "a1", nombre: 123, precio: "caro" })
)