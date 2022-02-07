const player = document.querySelector('.player'),
      playBtn = document.querySelector('.play'),
      backBtn = document.querySelector('.back'),
      forwardBtn = document.querySelector('.forward'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress_container'),
      progress = document.querySelector('.progress'),
      titel = document.querySelector('.title_song'),
      cover = document.querySelector('.cover_img'),
      imgSrc = document.querySelector('.img_src'),
      time = document.querySelector('.time')
      background = document.querySelector('.background2')
      
      document.querySelector('#volume').oninput = volume

const songs = ['Love Beans - Who Is She', 
              'Sudan Archives - Come Meh Way', 
              'The Architect - Crétin De Terrien', 
              'The Weeknd - Blinding Lights', 
              'Ed Nash (feat. Liz Lawrence) - Mad World', 
              'Virgil Arles - Roller Skates', 
              'Plastic Bertrand - Ca Plane Pour Moi', 
              'Buntspecht - Unter den Masken', 
              'David Rawlings - Cumberland Gap', 
              'Rivière Monk - Voyage']

let songIndex = 0

function volume() {
  let v = this.value;
  audio.volume = v / 100;
}

function initSong(song) {
 titel.innerHTML = song
 audio.src = `./assets/audio/${song}.mp3`
 cover.src = `./assets/image/cover${songIndex + 1}.png`
 background.src = `./assets/image/background${songIndex + 1}.jpg`
 console.log(background.src)
}
initSong(songs[songIndex])

function playSong() {
  player.classList.add('play')
  cover.classList.add('active')
  background.classList.add('active')
  imgSrc.src = './assets/svg/pause.svg'
  audio.play()
}

function pauseSong() {
  player.classList.remove('play')
  cover.classList.remove('active')
  background.classList.remove('active')
  imgSrc.src = './assets/svg/play.svg'
  audio.pause()
}

playBtn.addEventListener('click', () => {
  const isPlaying = player.classList.contains('play')
  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

function nextSong() {
  songIndex++
  if (songIndex > songs.length -1) {
    songIndex = 0
  }
  initSong(songs[songIndex])
  playSong()
}
forwardBtn.addEventListener('click', nextSong)

function backSong() {
  songIndex--
  if (songIndex < 0) {
    songIndex = songs.length -1
  }
  initSong(songs[songIndex])
  playSong()
}
backBtn.addEventListener('click', backSong)

function updateProgress(event) {
  const {duration, currentTime} = event.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

function setProgress(event) {
  const width = this.clientWidth
  const clickX = event.offsetX
  const duration = audio.duration

  audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)

function setTime() {
  progress.value = (audio.currentTime / audio.duration) * 100
  // console.log(progress.value)
  let minutes = Math.floor(audio.currentTime / 60) 
  if (minutes < 10) {
    minutes = '0' + String(minutes)
  }

  let seconds = Math.floor(audio.currentTime % 60)
  if (seconds < 10) {
    seconds = '0' + String(seconds)
  }

  time.innerHTML = `${minutes}:${seconds}`
}
audio.addEventListener('timeupdate', setTime)



/* СДЕЛАТЬ:
-ВИЗУАЛИЗАЦИЮ
-ФОН
-ГРОМКОСТЬ */