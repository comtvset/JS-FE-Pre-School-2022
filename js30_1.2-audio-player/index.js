const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      backBtn = document.querySelector('.back'),
      forwardBtn = document.querySelector('.forward'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress_container'),
      progress = document.querySelector('.progress'),
      titel = document.querySelector('.title_song'),
      cover = document.querySelector('.cover_img'),
      imgSrc = document.querySelector('.img_src')

const songs = ['The Architect - Cretin De Terrien', 'Sudan Archives - Come Meh Way', 'Love Beans - Who Is She']

let songIndex = 0

function initSong(song) {
 titel.innerHTML = song
 audio.src = `./assets/audio/${song}.mp3`
//  cover.src = `./assets/img/${songIndex}.jpg`
}
initSong(songs[songIndex])

function playSong() {
  audio.play()
}

function pauseSong() {
  audio.pause()
}

playBtn.addEventListener('click', () => {
  playSong()
})