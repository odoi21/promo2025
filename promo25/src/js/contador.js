function iniciarContador() {
  const destino = new Date('2025-12-04T00:00:00')
  const contenedor = document.getElementById('contador')

  function actualizarContador() {
    const ahora = new Date()
    const diferencia = destino - ahora

    if (diferencia <= 0) {
      contenedor.innerHTML = '¡Llegó el día! 🎉'
      clearInterval(intervalo)
      return
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60)
    const segundos = Math.floor((diferencia / 1000) % 60)

    contenedor.innerHTML = `
      <span>${dias} días</span>
      <span>${horas} hs</span>
      <span>${minutos} min</span>
      <span>${segundos} seg</span>
    `
  }

  const intervalo = setInterval(actualizarContador, 1000)
  actualizarContador()
}

iniciarContador()