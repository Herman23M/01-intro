const estudiantes =[
  { nombre: "valentina", curso: "javascript", nota: 91, edad: 20 },
  { nombre: "mateo", curso: "python", nota: 73, edad: 22 },
  { nombre: "camila", curso: "javascript", nota: 84, edad: 25 },
  { nombre: "daniel", curso: "java", nota: 65, edad: 19 },
  { nombre: "isabella", curso: "javascript", nota: 77, edad: 23 },
  { nombre: "sebastián", curso: "javascript", nota: "89", edad: 21 },
  { nombre: "lucía", curso: "python", nota: 95, edad: 24 },
];

function filtrarjsconnotamayora(lista, minnota = 80) {
  return lista.filter(est =>
    est &&
    est.curso === "javascript" &&
    (typeof est.nota === "number" ? est.nota > minnota : Number(est.nota) > minnota)
 )
 function calcularpromedionotas(lista) {
  if (!Array.isArray(lista) || lista.length === 0) return 0

  const { suma, cantidad } = lista.reduce(
    (acc, est) => {
      const n = Number(est && est.nota)
      if (Number.isFinite(n)) {
        acc.suma += n
        acc.cantidad += 1
      }
      return acc
    },
    { suma: 0, cantidad: 0 }
  )
   if (cantidad === 0) return 0
  return +((suma / cantidad).toFixed(2))
}
function nombresmayoresque(lista, edadminima = 20) {
  return lista
    .filter(est => est && typeof est.edad === "number" && est.edad > edadminima)
    .map(est => est.nombre)
}
function encontrarmejorestudiante(lista) {
  if (!Array.isArray(lista) || lista.length === 0) return null

  return lista.reduce((mejor, est) => {
    if (!est) return mejor
    const n = Number(est.nota)
    if (!Number.isFinite(n)) return mejor
    if (!mejor || n > Number(mejor.nota)) return est
    return mejor
  }, null)
}
}

