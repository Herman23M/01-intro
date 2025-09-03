class producto {
  constructor(id, nombre, precio, categoria, stock) {
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.stock = stock
  }
  actualizarstock(nuevo_stock) {
    this.stock = nuevo_stock
  }
  calculardescuento(porcentaje) {
    const descuento = this.precio * (porcentaje / 100)
    return this.precio - descuento
  }
  obtenerinfo() {
    return `producto: ${this.nombre}, precio: $${this.precio}, categoria: ${this.categoria}, stock: ${this.stock}`
  }

  static valortotal(productos) {
    return productos.reduce((total, p) => total + (p.precio * p.stock), 0)
  }
}
const p1 = new producto(1, "camisa", 50000, "ropa", 10)
const p2 = new producto(2, "pantalon", 80000, "ropa", 5)
const p3 = new producto(3, "celular", 1200000, "tecnologia", 3)
const p4 = new producto(4, "portatil", 3500000, "tecnologia", 2)
const p5 = new producto(5, "cafetera", 250000, "electrodomestico", 4)

const inventario = [p1, p2, p3, p4, p5]

console.log(p1.obtenerinfo())
console.log("precio con 20% de descuento:", p1.calculardescuento(20))

p1.actualizarstock(15)
console.log("nuevo stock camisa:", p1.stock)

console.log("valor total del inventario:", producto.valortotal(inventario))
