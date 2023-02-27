export const formatearFecha = fecha => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
        year: 'numeric'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones)
}