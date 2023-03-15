const cardTop = document.querySelector('#cardTop').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
const imgMX =document.getElementById('MX')
const imgUSA =document.getElementById('USA')
const imgJP =document.getElementById('JP')
const imgBRA =document.getElementById('BRA')
const imgES =document.getElementById('ES')
const imgFRA =document.getElementById('FRA')
const inputAlbum = document.getElementById('inputAlbum')
const btnBuscarAlbum = document.getElementById('btnBuscar')
const canciones = document.getElementById('canciones')
const album = document.getElementById('album').content
const disco = document.getElementById('disco').content
let topTwoHundred = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusicData()
})

imgMX.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=MX', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));       
})

imgUSA.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=US', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));    
})

imgJP.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=JP', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));    
})

imgBRA.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=BR', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));    
})

imgES.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=ES', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));    
})

imgFRA.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks?country=FR', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));    
})

const loadMusicData = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9eb1a8a2b0msh747098d7c19c8d3p1e90e9jsne57836a08604',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch('https://spotify81.p.rapidapi.com/top_200_tracks', options)
        .then(response => response.json())
        .then(response => { 
            topTwoHundred = response
            creaCards(topTwoHundred)
            console.log('canciones', topTwoHundred)
        })
        .catch(err => console.error(err));
}

const creaCards = (musica) => {
    contenido.innerHTML = ''
    musica.forEach((song) => {
        cardTop.querySelector('img').setAttribute('src', song.trackMetadata.displayImageUri)
        cardTop.querySelector('.songname').textContent = song.trackMetadata.trackName
        let artists = ''
        let size = song.trackMetadata.artists.length
        song.trackMetadata.artists.forEach((item, index) => {
//            console.log(index, size)
            if (index === size -1) {
                artists += item.name 
            } else {
                artists += item.name + ' / '
            }
        })
        cardTop.querySelector('.artistname').textContent = artists

        const clone = cardTop.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

btnBuscar.addEventListener('keyup', () => {
    console.log('tecla', btnBuscar.value)
    let temp = []
    temp = topTwoHundred.filter((item) => item.trackMetadata.trackName.includes(btnBuscar.value))
    creaCards(temp)
})

btnBuscarAlbum.addEventListener('click', () => {
    const request = inputAlbum.value.toLowerCase()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f59cadc299mshae65d89657d1bcfp1bb45bjsn516ac710bedb',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/search?q=${request}&type=multi&offset=0&limit=10&numberOfTopResults=5`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response.albums.items)
            pintaNombre(response.albums.items)     
        })
        .catch(err => console.error(err));
})

const pintaNombre = (songs) => {
    canciones.innerHTML = ''
    songs.forEach((item) => {
        album.querySelector('li').textContent = item.data.name
        let tmp = item.data.uri.split(':')
        //album.querySelector('p').textContent = tmp[2]
        album.querySelector('button').dataset.id = tmp[2]

        const clone = album.cloneNode(true)
        fragment.appendChild(clone)
    })
    canciones.appendChild(fragment)
}

canciones.addEventListener('click', e => {
    if( e.target.className == 'btn' ) {
        obtenerAlbum(e.target.dataset.id)
    }
    e.preventDefault()
})

const obtenerAlbum = (id) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f59cadc299mshae65d89657d1bcfp1bb45bjsn516ac710bedb',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };
    
    fetch(`https://spotify81.p.rapidapi.com/albums?ids=${id}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

const dibujaDisco = (album) => {
        contenido.innerHTML = ''
        disco.querySelector('img').setAttribute('src', album.albums[0].images[0].url)
        disco.querySelectorAll('p')[0].textContent = album.albums[0].name
        disco.querySelectorAll('p')[1].textContent = album.albums[0].popularity

        const clone = disco.cloneNode(true)
        fragment.appendChild(clone)
        contenido.appendChild(fragment)
}