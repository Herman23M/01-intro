const productos = [
  { id: 1, nombre: "camisa", precio: 50000, categoria: "ropa", marca: "nike", stock: 10 },
  { id: 2, nombre: "pantalon", precio: 80000, categoria: "ropa", marca: "adidas", stock: 5 },
  { id: 3, nombre: "celular", precio: 1200000, categoria: "tecnologia", marca: "samsung", stock: 3 },
  { id: 4, nombre: "portatil", precio: 3500000, categoria: "tecnologia", marca: "lenovo", stock: 2 },
  { id: 5, nombre: "cafetera", precio: 250000, categoria: "electrodomestico", marca: "oster", stock: 4 },
  { id: 6, nombre: "zapatillas", precio: 300000, categoria: "calzado", marca: "nike", stock: 7 }
]
function filtrarporprecio(lista, min, max) {
  return lista.filter(p => p.precio >= min && p.precio <= max)
}
function agruparporcategoria(lista) {
  return lista.reduce((grupo, p) => {
    if (!grupo[p.categoria]) {
      grupo[p.categoria] = []
    }
    grupo[p.categoria].push(p)
    return grupo
  }, {})
}
function productospormarca(lista, marca) {
  return lista.filter(p => p.marca.toLowerCase() === marca.toLowerCase())
}
function estadisticasporcategoria(lista) {
  return lista.reduce((estadisticas, p) => {
    if (!estadisticas[p.categoria]) {
      estadisticas[p.categoria] = { totalprecio: 0, totalstock: 0, cantidad: 0 }
    }
    estadisticas[p.categoria].totalprecio += p.precio
    estadisticas[p.categoria].totalstock += p.stock
    estadisticas[p.categoria].cantidad += 1
    return estadisticas
  }, {})
}
console.log("1) productos entre 100000 y 500000:", filtrarporprecio(productos, 100000, 500000))
console.log("2) productos agrupados por categoría:", agruparporcategoria(productos))
console.log("3) productos de marca nike:", productospormarca(productos, "nike"))
console.log("4) estadísticas por categoría:", estadisticasporcategoria(productos))

