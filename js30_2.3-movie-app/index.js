const API_KEY = 'api_key=777585fbebf15d52dbd4b5ca80f9bac1'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const resource = document.getElementById('container')

getMovies(API_URL)

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results)
        // console.log(data)
    })
   
}

function showMovies(data) {
    resource.innerHTML = ''

    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie
        // console.log(parseFloat(vote_average).toFixed(1))
        const movieElement = document.createElement('div')
        movieElement.classList.add('movies')
        movieElement.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${movie.title.toUpperCase()}">
        <div class="rating ${getColor(vote_average)}">${parseFloat(vote_average).toFixed(1)}</div>
                <div class="info">
                    <h2>${movie.title.toUpperCase()}</h2>                    
                </div>
                <div class="description">${overview}</div>                
            </div>
        `
        resource.appendChild(movieElement)
    })
}

function getColor(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >=5) {
        return 'orange'
    } else {
        return 'red'
    }
}