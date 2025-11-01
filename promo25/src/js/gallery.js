import { supabase } from './supabase.js'
import 'fslightbox'

const fotosContainer = document.getElementById('fotos-container')

async function cargarGaleria() {
    const { data, error } = await supabase
        .from('galeria')
        .select('*')

    if (error) {
        console.error('Error al traer galeria:', error)
        return
    }

    const grid = document.createElement('div')
    grid.classList.add('fotos-grid')

    data.forEach(({ fiesta, url }) => {
        const card = document.createElement('a')
        card.href = url
        card.setAttribute('data-fslightbox', 'cursos')

        const imagen = document.createElement('img')
        imagen.src = url
        imagen.alt = `imagen ${fiesta}`
        imagen.loading = 'lazy'
        const texto = document.createTextNode(fiesta)

        card.appendChild(imagen)
        card.appendChild(texto)
        grid.appendChild(card)
    })

    fotosContainer.innerHTML = ''
    fotosContainer.appendChild(grid)
    refreshFsLightbox();
}

cargarGaleria()

