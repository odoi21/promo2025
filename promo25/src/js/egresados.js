import { supabase } from './supabase.js'

async function cargarEgresados() {
    const { data, error } = await supabase.from('egresados').select('*')
    if (error) {
        console.error('Error al cargar egresados:', error)
        return
    }

    const contenedor = document.getElementById('egresados-container')
    if (!contenedor) {
        console.error('No se encontró el contenedor #egresados')
        return
    }

    data.forEach(card => {
        const div = document.createElement('div')
        div.className = 'card'
        div.innerHTML = `
        <a href="https://instagram.com/${card.instagram}" target="_blank" rel="noopener noreferrer">
    <div class="image">
        <img src="${card.img_url}" alt="${card.instagram}" loading="lazy" class="text" />
    </div>
    <span class="title">
        <p>
    @${card.instagram}
        <p/>
    </span>
    </a>
    `
        contenedor.appendChild(div)
    })
}

cargarEgresados()

