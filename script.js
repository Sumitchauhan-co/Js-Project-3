let b;
let n = 0;
let songs = [];

let playBtn = document.querySelector(".footer-page .container-2 .upper .mid");
let page2playBtn = document.querySelector(".section-2 .page-2 .header-function .left .play-pause");
let playBtn2Svg1 = document.querySelector(".section-2 .page-2 .header-function .left .play-pause svg:nth-child(1)");
let playBtn2Svg2 = document.querySelector(".section-2 .page-2 .header-function .left .play-pause svg:nth-child(2)");
let playBtnSvg1 = document.querySelector(
  ".footer-page .container-2 .upper .mid svg:nth-child(1)"
);
let playBtnSvg2 = document.querySelector(
  ".footer-page .container-2 .upper .mid svg:nth-child(2)"
);
let nextBtn = document.querySelector(".footer-page .container-2 .upper .end .first");
let prevBtn = document.querySelector(".footer-page .container-2 .upper .start .second");
let currentTime = document.querySelector(".footer-page .container-2 .lower .current");
let container = document.querySelector(".footer-page .container-2 .lower .progress-container");
let bar = document.querySelector(".footer-page .container-2 .lower .progress-container .progress-bar");
let imgCover = document.querySelector(".footer-page .container-1 .img");
let songName = document.querySelector(".footer-page .container-1 .content .content-1");
let artistName = document.querySelector(".footer-page .container-1 .content .content-2");
let songsContainer = document.querySelector(".section-2 .songs-container");
let playlist1 = document.querySelector(".section-1 .playlist-container .playlist-1");
let sec2 = document.querySelector(".section-2");
let page1 = document.querySelector(".section-2 .page-1");
let page2 = document.querySelector(".section-2 .page-2");
let page1PlayBtn1 = document.querySelector(".section-2 .page-1 .container-class .playlists-container .div-1 .content .play-button");
let pageChange1PlayBtn1 = document.querySelector(".section-2 .page-1 .container-class .playlists-container .div-1");
let page1Play1Svg1 = document.querySelector(".section-2 .page-1 .container-class .playlists-container .div-1 .content .play-button .play svg:nth-child(1)");
let page1Play1Svg2 = document.querySelector(".section-2 .page-1 .container-class .playlists-container .div-1 .content .play-button .play svg:nth-child(2)");
let page1PlayBtn2 = document.querySelector(".section-2 .page-1 .recently-played .content-container .playlist-1 .play-button");
let page1Play2Svg1 = document.querySelector(".section-2 .page-1 .recently-played .content-container .playlist-1 .play-button .play svg:nth-child(1)");
let page1Play2Svg2 = document.querySelector(".section-2 .page-1 .recently-played .content-container .playlist-1 .play-button .play svg:nth-child(2)");

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

async function main() {
  let a = await fetch("http://127.0.0.1:5500/songs2.json");
  songs = await a.json();
  loadSong(n);

  //songs display
  for (let index = 0; index < songs.length; index++) {
    let c = new Audio(songs[index].src);
    c.addEventListener("loadedmetadata", ()=>{
      let d = formatTime(c.duration);
      songsContainer.insertAdjacentHTML("beforeend",
      `<div class="song-${songs[index].id}">
        <div class="num">${songs[index].id}</div>
        <div class="cover" style="background-image: url(${songs[index].cover});")></div>
        <div class="song-details">
          <div class="song-name">${songs[index].title}</div>
          <div class="song-artist">${songs[index].artist}</div>
        </div>
        <div class="song-name">${songs[index].title}</div>
        <div class="date">25 Sep,2025</div>
        <div class="duration">${d}</div>
      </div>`);
    });
  }
}

main();

function songDetails() {
    imgCover.style.backgroundImage = `url(${songs[n].cover})`;
    songName.textContent = songs[n].title;
    artistName.textContent = songs[n].artist;
}

function loadSong(index) {
  if (b) b.pause();

  b = new Audio(songs[index].src);

  b.addEventListener("loadedmetadata", () => {
    document.querySelector(".lower .duration").textContent = formatTime(b.duration);
  });

  b.addEventListener("timeupdate", () => {
    document.querySelector(".lower .current").textContent = formatTime(b.currentTime);
    let percent = (b.currentTime / b.duration) * 100;
    bar.style.width = percent + "%";
  });

  b.addEventListener("ended", () => {
    nextSong();
  });
  songDetails();

  b.play();
}

function playSvg() {
    playBtnSvg1.classList.add("display-none");
    playBtnSvg2.classList.remove("display-none");

    playBtn2Svg1.classList.add("display-none");
    playBtn2Svg2.classList.remove("display-none");

    page1Play1Svg1.classList.add("display-none");
    page1Play1Svg2.classList.remove("display-none");

    page1Play2Svg1.classList.add("display-none");
    page1Play2Svg2.classList.remove("display-none");
}

function pauseSvg() {
    playBtnSvg2.classList.add("display-none");
    playBtnSvg1.classList.remove("display-none");

    playBtn2Svg2.classList.add("display-none");
    playBtn2Svg1.classList.remove("display-none");

    page1Play1Svg2.classList.add("display-none");
    page1Play1Svg1.classList.remove("display-none");

    page1Play2Svg2.classList.add("display-none");
    page1Play2Svg1.classList.remove("display-none");
}

playBtn.addEventListener("click", () => {
  if (b.paused) {
    b.play();
    playSvg();
    console.log("Song is played");
  } else {
    b.pause();
    pauseSvg();
    console.log("Song is paused");
  }
});

page2playBtn.addEventListener("click", () => {
  if (b.paused) {
    b.play();
    playSvg();
    console.log("Song is played");
  } else {
    b.pause();
    pauseSvg();
    console.log("Song is paused");
  }
});

page1PlayBtn1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (b.paused) {
    b.play();
    playSvg();
    console.log("Song is played");
  } else {
    b.pause();
    pauseSvg();
    console.log("Song is paused");
  }
});

page1PlayBtn2.addEventListener("click", () => {
  if (b.paused) {
    b.play();
    playSvg();
    console.log("Song is played");
  } else {
    b.pause();
    pauseSvg();
    console.log("Song is paused");
  }
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

function prevSong(){
  n--;
  if (n < 0) {
    n = songs.length - 1;
  }
  if(b.paused) {
    playSvg();
  }
  loadSong(n);
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

function nextSong(){
  n++;
  if (n >= songs.length) {
    n = 0;
  }
  if(b.paused) {
    playSvg();
  }
  loadSong(n);
}

container.addEventListener("click", (e) => {
  let rect = container.getBoundingClientRect();
  let clickX = e.clientX - rect.left;
  let width = rect.width;
  let newTime = (clickX / width) * b.duration;
  b.currentTime = newTime;
});

playlist1.addEventListener("click",()=>{
  if(page2.classList.contains("display-none")){
    page1.classList.add("display-none");
    page2.classList.remove("display-none");
  } else {
    page2.classList.add("display-none");
    page1.classList.remove("display-none");
  }
})

pageChange1PlayBtn1.addEventListener("click",()=>{
  if(page2.classList.contains("display-none")){
    page1.classList.add("display-none");
    page2.classList.remove("display-none");
  }
})

