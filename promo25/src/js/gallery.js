import { supabase } from './supabase.js'
import 'fslightbox'

const fotosContainer = document.getElementById('fotos-container')

async function cargarGaleria() {
    const { data, error } = await supabase
        .from('galeria')
        .select('*')
        .order('fiesta', { ascending: true })
        
    if (error) {
        console.error('Error al traer galeria:', error)
        return
    }

    // Agrupamos por fiesta
    const galerias = {}
    data.forEach(({ fiesta, url }) => {
        if (!galerias[fiesta]) galerias[fiesta] = []
        galerias[fiesta].push(url)
    })

    // Orden personalizado (opcional)
    const ordenFiestas = ['4TO', '5TO', '6TO', 'BRC', 'UPD', 'FDE']
    const fiestasOrdenadas = Object.keys(galerias).sort(
        (a, b) => ordenFiestas.indexOf(a) - ordenFiestas.indexOf(b)
    )

    const grid = document.createElement('div')
    grid.classList.add('fotos-grid')

    // Creamos una sola card por fiesta
    fiestasOrdenadas.forEach(fiesta => {
        const urls = galerias[fiesta]
        const portada = urls[0] // primera imagen de cada grupo

        const card = document.createElement('a')
        card.href = portada
        card.setAttribute('data-fslightbox', `galeria-${fiesta}`)

        const imagen = document.createElement('img')
        imagen.src = portada
        imagen.alt = fiesta

        const texto = document.createElement('p')
        texto.textContent = fiesta

        card.appendChild(imagen)
        card.appendChild(texto)
        grid.appendChild(card)

        // Agregamos las otras imágenes al mismo grupo de lightbox
        urls.slice(1).forEach(url => {
            const hiddenLink = document.createElement('a')
            hiddenLink.href = url
            hiddenLink.setAttribute('data-fslightbox', `galeria-${fiesta}`)
            hiddenLink.style.display = 'none'
            grid.appendChild(hiddenLink)
        })
    })

    fotosContainer.innerHTML = ''
    fotosContainer.appendChild(grid)

    refreshFsLightbox()
}

cargarGaleria()


