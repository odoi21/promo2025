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
    <div class="image">
        <img src="${card.img_url}" alt="${card.instagram}" class="text" />
    </div>
    <span class="title">
        <a href="https://instagram.com/${card.instagram}" target="_blank" rel="noopener noreferrer">
    @${card.instagram}
        </a>
    </span>
    `
        contenedor.appendChild(div)
    })
}

cargarEgresados()