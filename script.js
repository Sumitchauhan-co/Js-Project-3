let b;
let n = 0;
let songs = [];
let songs2 = [];
let resize = false;
let playlistPlay = false;

let playBtn = document.querySelector(".footer-page .container-2 .upper .mid");
let playBtnSvg1 = document.querySelector(
  ".footer-page .container-2 .upper .mid svg:nth-child(1)"
);
let playBtnSvg2 = document.querySelector(
  ".footer-page .container-2 .upper .mid svg:nth-child(2)"
);
let page1playBtn = document.querySelector(
  ".section-2 .page-1 .header-function .left .play-pause"
);
let page1PlayBtnSvg1 = document.querySelector(
  ".section-2 .page-1 .header-function .left .play-pause svg:nth-child(1)"
);
let page1PlayBtnSvg2 = document.querySelector(
  ".section-2 .page-1 .header-function .left .play-pause svg:nth-child(2)"
);
let page2playBtn = document.querySelector(
  ".section-2 .page-2 .header-function .left .play-pause"
);
let page2PlayBtnSvg1 = document.querySelector(
  ".section-2 .page-2 .header-function .left .play-pause svg:nth-child(1)"
);
let page2PlayBtnSvg2 = document.querySelector(
  ".section-2 .page-2 .header-function .left .play-pause svg:nth-child(2)"
);
let nextBtn = document.querySelector(
  ".footer-page .container-2 .upper .end .first"
);
let prevBtn = document.querySelector(
  ".footer-page .container-2 .upper .start .second"
);
let currentTime = document.querySelector(
  ".footer-page .container-2 .lower .current"
);
let container = document.querySelector(
  ".footer-page .container-2 .lower .progress-container"
);
let bar = document.querySelector(
  ".footer-page .container-2 .lower .progress-container .progress-bar"
);
let imgCover = document.querySelector(".footer-page .container-1 .img");
let songName = document.querySelector(
  ".footer-page .container-1 .content .content-1"
);
let artistName = document.querySelector(
  ".footer-page .container-1 .content .content-2"
);
let songsContainer = document.querySelector(
  ".section-2 .page-1 .songs-container"
);
let phoneSongsContainer = document.querySelector(
  ".section-2 .page-1-phone .phone-songs-container"
);
let sec2 = document.querySelector(".main .section-2");
let sec3 = document.querySelector(".main .section-3");
let page = document.querySelector(".section-2 .homePage");
let page1 = document.querySelector(".section-2 .page-1");
let page2 = document.querySelector(".section-2 .page-2");
let pagePlayCont1Btn1 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-1 .content .play-button"
);
let pagePlayCont1Btn2 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-2 .content .play-button"
);
let pageChange1PlayBtn1 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-1"
);
let pageChange1PlayBtn2 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-2"
);
let phonePageChange1 = document.querySelector(
  ".section-2 .homePage-phone .phone-container-class .playlists-container .div-1"
);
let phonePageChange2 = document.querySelector(
  ".section-2 .homePage-phone .phone-container-class .playlists-container .div-2"
);
let pagePlay1Svg1 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-1 .content .play-button .play svg:nth-child(1)"
);
let pagePlay1Svg2 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-1 .content .play-button .play svg:nth-child(2)"
);
let pagePlay2Svg1 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-2 .content .play-button .play svg:nth-child(1)"
);
let pagePlay2Svg2 = document.querySelector(
  ".section-2 .homePage .container-class .playlists-container .div-2 .content .play-button .play svg:nth-child(2)"
);
let pagePlayCont2 = document.querySelector(
  ".section-2 .homePage .recently-played .content-container .playlist-1"
);
let phonePagePlayCont2 = document.querySelector(
  ".section-2 .homePage-phone .recently-played .content-container .playlist-1"
);
let pagePlayCont2Btn1 = document.querySelector(
  ".section-2 .homePage .recently-played .content-container .playlist-1 .play-button"
);
let pagePlayCont2Svg1 = document.querySelector(
  ".section-2 .homePage .recently-played .content-container .playlist-1 .play-button .play svg:nth-child(1)"
);
let pagePlayCont2Svg2 = document.querySelector(
  ".section-2 .homePage .recently-played .content-container .playlist-1 .play-button .play svg:nth-child(2)"
);
let randomPlay = document.querySelector(
  ".footer-page .container-2 .upper .start .first"
);

let playlist1 = 0;
let playlist2 = 0;

let resizer = document.querySelectorAll(".resize");
let sec1PlaylistContent = 0;
const sec1HeaderContainer = document.querySelector(
  ".section-1 .sec1-header-container"
);
const sec1PlaylistContainer = document.querySelector(
  ".section-1 .playlist-container"
);
let sec1PlaylistContainerDiv = 0;
let sec1PlaylistContainerDivImg = 0;
let sec1PlaylistContainerDivImgSvg = 0;
const sec1CloseIcons = document.querySelector(".section-1 .sidebar-functions");
const sec1OpenPLaylists = document.querySelector(
  ".section-1 .sidebar-functions .open-playlists"
);
const sec1Bar = document.querySelector(".section-1 .bar");
const midBtnSpan = document.querySelector(
  ".section-1 .sec1-header-container .sec1-header .right-container .mid-button span"
);
const midBtn = document.querySelector(
  ".section-1 .sec1-header-container .sec1-header .right-container .mid-button"
);
const sec1 = document.querySelector(".section-1");
const sec2Divs = document.querySelectorAll(
  ".section-2 .container-class .recently-played .content-container>div"
);
const sec2Header = document.querySelector(
  ".section-2 .container-class .playlists-container"
);
const sec2HeaderDivsPlayBtn = document.querySelectorAll(
    ".section-2 .container-class .playlists-container .content .play-button"
  ),
  sec2HeaderDivsPlayBtnOverlay = document.querySelectorAll(
    ".section-2 .container-class .playlists-container .content .play-button .overlay"
  ),
  sec2HeaderDivsPlayBtnSvgs = document.querySelectorAll(
    ".section-2 .container-class .playlists-container .content .play-button .play svg"
  ),
  sec2HeaderDivsPlayBtnPlay = document.querySelectorAll(
    ".section-2 .container-class .playlists-container .content .play-button .play"
  ),
  sec2Recent = document.querySelector(".container-class .recently-played"),
  sec2RecentPlaylistPlayBtn = document.querySelectorAll(
    ".section-2 .recently-played .content-container .play-button"
  ),
  sec2RecentPlaylistPlayBtnOverlay = document.querySelectorAll(
    ".section-2 .recently-played .content-container .play-button .overlay"
  ),
  sec2RecentPlaylistPlayBtnPlay = document.querySelectorAll(
    ".section-2 .recently-played .content-container .play-button .play"
  ),
  sec2RecentPlaylistPlayBtnSvgs = document.querySelectorAll(
    ".section-2 .recently-played .content-container .play-button .play svg"
  ),
  sec2RecentPlaylists = document.querySelectorAll(
    ".section-2 .recently-played .content-container > div"
  ),
  sec2HomePageBanner = document.querySelectorAll(
    ".section-2 .recently-played .content-container > div .img"
  ),
  sec2HomePageContent = document.querySelectorAll(
    ".section-2 .recently-played .content-container > div .content"
  ),
  sec2PagesBanner = document.querySelectorAll(
    ".section-2 .header-container2 .img"
  ),
  sec2PagesBtn = document.querySelectorAll(
    ".section-2 .header-function .left .play-pause"
  ),
  sec2PagesBtnSvgs = document.querySelectorAll(
    ".section-2 .header-function .left .play-pause svg"
  );

let sec2ScrollContainer = 0;
let sec2ScrollName = 0;

let isResizing = false;
let isResizing2 = false;

// section-3

let imgBanner = document.querySelector(".section-3 .banner .img"),
  sec3Artist = document.querySelector(".section-3 .song-detail .first .artist"),
  sec3SongName = document.querySelectorAll(
    ".section-3 .song-detail .first .name, .section-3 .sec3-header .first .name"
  );

let sec3ScrollContainer = document.querySelector(
  ".section-3 .song-detail .first"
);
let sec3ScrollName = document.querySelectorAll(
  ".section-3 .song-detail .first .name, .section-3 .song-detail .first .artist"
);

// header

let header = document.querySelector(".header"),
  headerLeftSvg = document.querySelector(".header .left-header svg"),
  headerLeft = document.querySelector(".header .left-header"),
  headerMid1Svg = document.querySelector(
    ".header .mid-header .home-button svg"
  ),
  headerMid = document.querySelector(".header .mid-header"),
  headerMid1 = document.querySelector(".header .mid-header .home-button"),
  headerMid2 = document.querySelector(".header .mid-header .search"),
  headerMid2a = document.querySelector(
    ".header .mid-header .search .svg-search-container"
  ),
  headerMid2b = document.querySelector(
    ".header .mid-header .search .search-bar"
  ),
  headerMid2c = document.querySelector(".header .mid-header .search .browse"),
  headerRight1 = document.querySelector(
    ".header .right-header .premium-button"
  ),
  headerRight2 = document.querySelector(".header .right-header .install"),
  headerRight3 = document.querySelector(".header .right-header .notification"),
  headerRight4 = document.querySelector(".header .right-header .activity"),
  headerRight5 = document.querySelector(
    ".header .right-header .profile-button span"
  ),
  headerRight5a = document.querySelector(
    ".header .right-header .profile-button"
  ),
  headerRight5b = document.querySelector(
    ".header .right-header .profile-button .profile"
  );

// Footer

let footerPage = document.querySelector(".footer-page"),
  footerPageCont1 = document.querySelector(".footer-page .container-1"),
  footerPageCont2 = document.querySelector(".footer-page .container-2"),
  footerPageCont3 = document.querySelector(".footer-page .container-3"),
  footerPageCont1Img = document.querySelector(".footer-page .container-1 .img"),
  footerPageCont1Content = document.querySelector(
    ".footer-page .container-1 .content"
  ),
  footerPageCont1Add = document.querySelector(".footer-page .container-1 .add"),
  footerPageCont2UpperMid = document.querySelector(
    ".footer-page .container-2 .upper .mid"
  ),
  footerPageCont2UpperMidSvg = document.querySelector(
    ".footer-page .container-2 .upper .mid svg:nth-child(1)"
  ),
  footerPageCont2UpperMidSvg2 = document.querySelector(
    ".footer-page .container-2 .upper .mid svg:nth-child(2)"
  ),
  footerPageCont2UpperStart = document.querySelector(
    ".footer-page .container-2 .upper .start"
  ),
  footerPageCont2UpperStartFirstSvg = document.querySelector(
    ".footer-page .container-2 .upper .start .first svg"
  ),
  footerPageCont2UpperEnd = document.querySelector(
    ".footer-page .container-2 .upper .end"
  ),
  footerPageCont2UpperStartSecondSvg = document.querySelector(
    ".footer-page .container-2 .upper .start .second svg"
  ),
  footerPageCont2UpperEndFirstSvg = document.querySelector(
    ".footer-page .container-2 .upper .end .first svg"
  ),
  footerPageCont2UpperEndSecondSvg = document.querySelector(
    ".footer-page .container-2 .upper .end .second svg"
  );
footerPageCont2UpperEndSecond = document.querySelector(
  ".footer-page .container-2 .upper .end .second"
);
footerPageCont2LowerProgressContainer = document.querySelector(
  ".footer-page .container-2 .lower .progress-container"
);
footerPageCont2LowerCurrent = document.querySelector(
  ".footer-page .container-2 .lower .current"
);
footerPageCont2LowerDuration = document.querySelector(
  ".footer-page .container-2 .lower .duration"
);

const mainSection = document.querySelector(".main");
const pagePhone = document.querySelector(".section-2 .homePage-phone");
const page1Phone = document.querySelector(".section-2 .page-1-phone");
const page2Phone = document.querySelector(".section-2 .page-2-phone");

let page1PhonePlay = document.querySelector(
  ".section-2 .page-1-phone .phone-header-function .left .play-pause"
);
let page1PhonePlaySvg1 = document.querySelector(
  ".section-2 .page-1-phone .phone-header-function .left .play-pause svg:nth-child(1)"
);
let page1PhonePlaySvg2 = document.querySelector(
  ".section-2 .page-1-phone .phone-header-function .left .play-pause svg:nth-child(2)"
);

let page2PhonePlay = document.querySelector(
  ".section-2 .page-2-phone .phone-header-function .left .play-pause"
);
let page2PhonePlaySvg1 = document.querySelector(
  ".section-2 .page-2-phone .phone-header-function .left .play-pause svg:nth-child(1)"
);
let page2PhonePlaySvg2 = document.querySelector(
  ".section-2 .page-2-phone .phone-header-function .left .play-pause svg:nth-child(2)"
);

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

let audio = document.querySelector(
  ".footer-page .container-3 .volume-control audio"
);

let isHideHit = false;
let sec2PageSongs = 0;
// let currentVol = 1.0;
// let i = 0

async function main() {
  let a = await fetch("json/songs2.json"); //http://127.0.0.1:5500/songs2.json
  songs = await a.json();
  loadSong(n);
  // i++

  songs.forEach((element) => {
    let c = new Audio(element.src);

    songsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="song-${element.id}" data-id="${element.id}">
      <div class="num">${element.id}</div>
      <div class="cover" style="background-image: url(${element.cover});"></div>
      <div class="song-details">
        <div class="song-name">${element.title}</div>
        <div class="song-artist">${element.artist}</div>
      </div>
      <div class="name">${element.title}</div>
      <div class="date">25 Sep, 2025</div>
      <div class="duration" id="duration-${element.id}">--:--</div>
    </div>`
    );
    phoneSongsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="song-${element.id}" data-id="${element.id}">
      <div class="num">${element.id}</div>
      <div class="cover" style="background-image: url(${element.cover});"></div>
      <div class="song-details">
        <div class="song-name">${element.title}</div>
        <div class="song-artist">${element.artist}</div>
      </div>
      <div class="duration" id="duration-phone-${element.id}">--:--</div>
    </div>`
    );

    c.addEventListener("loadedmetadata", () => {
      let d = formatTime(c.duration);
      document.querySelector(`#duration-${element.id}`).textContent = d;
    });
    c.addEventListener("loadedmetadata", () => {
      let e = formatTime(c.duration);
      document.querySelector(`#duration-phone-${element.id}`).textContent = e;
    });
    sec2PageSongs = document.querySelectorAll(
      ".section-2 .songs-container > div "
    );
    sec2ScrollContainer = document.querySelectorAll(
      ".section-2 .songs-container div > div:nth-child(3)"
    );
    sec2ScrollName = document.querySelectorAll(
      ".section-2 .songs-container div > div:nth-child(3) > div:nth-child(1)"
    );
  });
}

main();

let playlistContainer = document.querySelector(
  ".section-1 .playlist-container"
);

async function sec1Main() {
  let a = await fetch("json/section1.json");
  let playlists = await a.json();

  playlists.forEach((element) => {
    playlistContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="playlist-${element.id} glow" id="p-${element.id}">
            <div class="img dark-img">
                <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline"
                    viewBox="0 0 16 16"
                    style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                    <path
                        d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z">
                    </path>
                </svg>
            </div>
            <div class="content-container">
                <div class="content">
                    <div class="content-1">
                        <p>${element.p1}</p>
                    </div>
                    <div class="content-2">
                        <p>${element.p2}</p>
                    </div>
                </div>
            </div>
        </div>
    `
    );

    sec1PlaylistContainerDivImg = document.querySelectorAll(
      ".section-1 > div .img"
    );
    sec1PlaylistContainerDivImgSvg = document.querySelectorAll(
      ".section-1 > div .img svg"
    );
    sec1PlaylistContainerDiv = document.querySelectorAll(
      ".section-1 .playlist-container > div"
    );
    sec1PlaylistContent = document.querySelectorAll(
      ".section-1 .playlist-container .content-container"
    );
    let playlistImg = document.querySelectorAll(
      ".section-1 .playlist-container > div:nth-last-child(1) .img"
    );
    playlistImg.forEach((e) => {
      e.style.backgroundImage = `url(${element.cover})`;
    });
    if (window.innerWidth < 768) {
      sec1PlaylistContainerDiv.forEach((element) => {
        element.style.padding = "0 5px";
        element.style.height = "40px";
      });
      sec1PlaylistContainerDivImg.forEach((element) => {
        element.style.minWidth = "40px";
      });
      sec1PlaylistContainerDivImgSvg.forEach((element) => {
        element.style.width = "20px";
      });
      sec1PlaylistContent.forEach((element) => {
        element.classList.add("display-none");
      });
    }
  });

  playlist1 = document.querySelector(
    ".section-1 .playlist-container .playlist-1"
  );
  playlist2 = document.querySelector(
    ".section-1 .playlist-container .playlist-2"
  );
  playlist1.addEventListener("click", () => {
    if (window.innerWidth > 1025) {
      showPage(".page-1", ".homePage");
    } else {
      showPage(".page-1-phone", ".homePage-phone");
    }
  });
  playlist2.addEventListener("click", () => {
    if (window.innerWidth > 1025) {
      showPage(".page-2", ".homePage");
    } else {
      showPage(".page-2-phone", ".homePage-phone");
    }
  });
  if (window.innerWidth < 768) {
    playlist1.addEventListener("click", () => {
      document.documentElement.style.setProperty(
        "--section-1-width",
        50 + "px"
      );
      sec2.style.display = "block";
      resizer.forEach((element) => {
        element.style.display = "block";
      });
      resizer[1].style.display = "none";
      pagesBg.forEach((element) => {
        element.style.display = "flex";
      });
      sec1PlaylistContent.forEach((element) => {
        element.classList.add("display-none");
      });
      sec1HeaderContainer.style.display = "none";
      sec1Bar.style.display = "none";
      sec1CloseIcons.classList.remove("display-none");
      sec1PlaylistContainer.style.gridAutoRows = "55px";
      sec1CloseIcons.style.paddingLeft = "5px";
      sec1PlaylistContainerDiv.forEach((element) => {
        element.style.padding = "0";
      });
      sec1PlaylistContainerDiv.forEach((element) => {
        element.style.height = "40px";
      });
      sec1PlaylistContainerDivImg.forEach((element) => {
        element.style.minWidth = "40px";
      });
      sec1PlaylistContainerDivImgSvg.forEach((element) => {
        element.style.width = "20px";
      });
    });
    playlist2.addEventListener("click", () => {
      document.documentElement.style.setProperty(
        "--section-1-width",
        50 + "px"
      );
      sec2.style.display = "block";
      resizer.forEach((element) => {
        element.style.display = "block";
      });
      resizer[1].style.display = "none";
      pagesBg.forEach((element) => {
        element.style.display = "flex";
      });
      sec1PlaylistContent.forEach((element) => {
        element.classList.add("display-none");
      });
      sec1HeaderContainer.style.display = "none";
      sec1Bar.style.display = "none";
      sec1CloseIcons.classList.remove("display-none");
      sec1PlaylistContainer.style.gridAutoRows = "55px";
      sec1CloseIcons.style.paddingLeft = "5px";
      sec1PlaylistContainerDiv.forEach((element) => {
        element.style.padding = "0";
      });
      sec1PlaylistContainerDiv.forEach((element) => {
        element.style.height = "40px";
      });
      sec1PlaylistContainerDivImg.forEach((element) => {
        element.style.minWidth = "40px";
      });
      sec1PlaylistContainerDivImgSvg.forEach((element) => {
        element.style.width = "20px";
      });
    });
  }
}

sec1Main();

function songDetails() {
  imgCover.style.backgroundImage = `url(${songs[n].cover})`;
  imgBanner.style.backgroundImage = `url(${songs[n].cover})`;
  artistName.textContent = songs[n].artist;
  songName.textContent = songs[n].title;
  sec3SongName.forEach((element) => {
    element.textContent = songs[n].title;
  });
  sec3Artist.textContent = songs[n].artist;
}

function loadSong(index) {
  if (b) b.pause();

  b = new Audio(songs[index].src);
  // audio.src = songs[index].src;
  b.volume = currentVol;
  playlistPlay = true;
  playlist2Play = false;

  b.addEventListener("loadedmetadata", () => {
    document.querySelector(".lower .duration").textContent = formatTime(
      b.duration
    );
  });

  b.addEventListener("timeupdate", () => {
    document.querySelector(".lower .current").textContent = formatTime(
      b.currentTime
    );
    let percent = (b.currentTime / b.duration) * 100;
    bar.style.width = percent + "%";
  });

  b.addEventListener("ended", () => {
    if (repeatMode) {
      currentSong();
    } else {
      nextSong();
    }
    repeatMode = false;
  });

  songDetails();
  b.play();
  // if(i == 0){
  //   playSvg();
  // }
}

function loadSongtype(index) {
  if (b) b.pause();

  b = new Audio(songs[index].src);
  // audio.src = songs[index].src;
  b.volume = currentVol;
  playlistPlay = true;
  playlist2Play = false;

  b.addEventListener("loadedmetadata", () => {
    document.querySelector(".lower .duration").textContent = formatTime(
      b.duration
    );
  });

  b.addEventListener("timeupdate", () => {
    document.querySelector(".lower .current").textContent = formatTime(
      b.currentTime
    );
    let percent = (b.currentTime / b.duration) * 100;
    bar.style.width = percent + "%";
  });

  b.addEventListener("ended", () => {
    if (repeatMode) {
      currentSong();
    } else {
      nextSong();
    }
    repeatMode = false;
  });

  songDetails();
}

function playSvg() {
  // footer play
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 1
  page1PlayBtnSvg1.classList.add("display-none");
  page1PlayBtnSvg2.classList.remove("display-none");

  // home page upper playlist 1
  pagePlay1Svg1.classList.add("display-none");
  pagePlay1Svg2.classList.remove("display-none");
}

function phonePlaySvg() {
  // footer
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 1
  page1PhonePlaySvg1.classList.add("display-none");
  page1PhonePlaySvg2.classList.remove("display-none");
}

function pauseSvg() {
  // footer play
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 1
  page1PlayBtnSvg2.classList.add("display-none");
  page1PlayBtnSvg1.classList.remove("display-none");

  // home page upper playlist 1
  pagePlay1Svg2.classList.add("display-none");
  pagePlay1Svg1.classList.remove("display-none");
}

function phonePauseSvg() {
  // footer
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 1
  page1PhonePlaySvg2.classList.add("display-none");
  page1PhonePlaySvg1.classList.remove("display-none");
}

page1playBtn.addEventListener("click", () => {
  if (!playlistPlay) {
    loadSongtype(n);
    scroll();
  }
  if (b.paused) {
    b.play();
    pauseSvg2();
    playSvg();
  } else {
    b.pause();
    pauseSvg();
  }
});

page1PhonePlay.addEventListener("click", () => {
  if (!playlistPlay) {
    loadSongtype(n);
    scroll();
  }
  if (b.paused) {
    b.play();
    phonePauseSvg2();
    phonePlaySvg();
  } else {
    b.pause();
    phonePauseSvg();
  }
});

pagePlayCont1Btn1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!playlistPlay) {
    loadSongtype(n);
    scroll();
  }
  if (b.paused) {
    b.play();
    pauseSvg2();
    playSvg();
  } else {
    b.pause();
    pauseSvg();
  }
});

// click and play

songsContainer.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  n = id;
  loadSong(n);
  playSvg();
  songDetails();
  scroll();
});

phoneSongsContainer.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  n = id;
  loadSong(n);
  phonePlaySvg();
  songDetails();
  scroll();
});

// change the music bar

container.addEventListener("click", (e) => {
  let rect = container.getBoundingClientRect();
  let clickX = e.clientX - rect.left;
  let width = rect.width;
  let newTime = (clickX / width) * b.duration;
  b.currentTime = newTime;
});

// change the background color

// const imgs = document.querySelectorAll(".homePage .container-class .playlists-container>div .img");
// console.log(imgs)
// console.log(document.querySelector(".homePage .header-container"))
// const colorThief = new ColorThief();

// imgs.forEach(img => {
//   img.addEventListener("click", () => {
//     const color = colorThief.getColor(img); // returns [R, G, B]
//     document.querySelector(".homePage .header-container").style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
//     console.log(`rgb(${color[0]}, ${color[1]}, ${color[2]})`)
//     console.log("done")
//   })
// })

function showChangePage(pageSelector) {
  let page = document.querySelector(pageSelector);

  // Hide all pages
  document.querySelectorAll(".section-2 > div").forEach((page) => {
    page.classList.add("display-none");
  });
  if (window.innerWidth > 1025) {
    // Show the selected page
    page.classList.remove("display-none");
  } else {
    // Show the selected page
    page.classList.remove("display-none");
  }
}

pageChange1PlayBtn1.addEventListener("click", () => showChangePage(".page-1"));

phonePageChange1.addEventListener("click", () =>
  showChangePage(".page-1-phone")
);

let homePageDivImg = document.querySelectorAll(
  ".section-2 .container-class .playlists-container > div .img"
);

resizer.forEach((element) => {
  element.addEventListener("mousedown", () => {
    // isResizing = true;
    if (window.innerWidth > 1500 && window.innerWidth < 1575) {
      isResizing = true;
    }
  });
});

let section1Closed = false;

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  let newWidth = Math.min(Math.max(e.pageX, 60), 365);
  document.documentElement.style.setProperty(
    "--section-1-width",
    newWidth + "px"
  );

  if (newWidth < 350) {
    section1Closed = false;
    sec3.style.width = "auto";
    document.querySelector(".section-3 .banner").style.height = "60%";
    midBtnSpan.textContent = "";
    midBtn.classList.add("change");
  } else if (newWidth > 350) {
    section1Closed = false;
    // sec3.style.width = "290px";
    sec3.style.width = "auto";
    document.querySelector(".section-3 .banner").style.height = "50%";
    midBtnSpan.textContent = "Create";
    midBtn.classList.remove("change");
    if (isHideHit) {
      bg.forEach((element) => {
        element.style.width = "100%";
        element.style.height = "33%";
      });
    } else {
      bg.forEach((element) => {
        element.style.width = "54%";
        element.style.height = "27%";
      });
    }
  }
  if (newWidth <= 285) {
    document.documentElement.style.setProperty("--section-1-width", 75 + "px");
    if (isHideHit) {
      bg.forEach((element) => {
        element.style.width = "100%";
        element.style.height = "33%";
      });
    } else {
      bg.forEach((element) => {
        element.style.width = "68%";
        element.style.height = "27%";
      });
    }
    sec2Header.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(200px, 1fr))";
    sec1PlaylistContent.forEach((element) => {
      element.classList.add("display-none");
    });
    sec1HeaderContainer.style.display = "none";
    sec1Bar.style.display = "none";
    sec1CloseIcons.classList.remove("display-none");
    sec2Divs.forEach((element) => {
      element.style.height = "105%";
    });
    sec2Header.style.height = "25%";
    sec2HeaderDivsPlayBtn.forEach((element) => {
      element.style.top = "5%";
    });
    sec2Recent.style.height = "55%";
    sec2RecentPlaylistPlayBtn.forEach((element) => {
      element.style.top = "67%";
    });
    sec2PagesBanner.forEach((element) => {
      element.style.width = "20%";
    });
    sec2PageSongs.forEach((element) => {
      element.style.height = "10vh";
    });
    section1Closed = true;
    // sec2Page2Songs.forEach((element) => {
    //   element.style.height = "10vh";
    // });
  } else if (newWidth > 285) {
    section1Closed = false;
    document.documentElement.style.setProperty(
      "--section-1-width",
      newWidth + "px"
    );
    if (isHideHit) {
      bg.forEach((element) => {
        element.style.width = "100%";
        element.style.height = "33%";
      });
    } else {
      bg.forEach((element) => {
        element.style.width = "54%";
        element.style.height = "27%";
      });
    }
    sec2Header.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(150px, 1fr))";
    sec1PlaylistContent.forEach((element) => {
      element.classList.remove("display-none");
    });
    sec1HeaderContainer.style.display = "block";
    sec1Bar.style.display = "flex";
    sec1CloseIcons.classList.add("display-none");
    sec2Divs.forEach((element) => {
      element.style.height = "90%";
    });
    sec2Header.style.height = "22%";
    sec2HeaderDivsPlayBtn.forEach((element) => {
      element.style.top = "3%";
    });
    sec2Recent.style.height = "50%";
    sec2RecentPlaylistPlayBtn.forEach((element) => {
      element.style.top = "55%";
    });
    sec2PagesBanner.forEach((element) => {
      element.style.width = "25%";
    });
    sec2PageSongs.forEach((element) => {
      element.style.height = "8vh";
    });
    // sec2Page2Songs.forEach((element) => {
    //   element.style.height = "8vh";
    // });
  }
});

let pagesBg = document.querySelectorAll(
  ".section-2 .phone-header-container2 .bg"
);

document.addEventListener("mouseup", () => {
  isResizing = false;
});

sec1OpenPLaylists.addEventListener("click", () => {
  if (
    window.innerWidth <= 400 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 350 + "px");
  } else if (
    window.innerWidth <= 450 &&
    window.innerWidth > 400 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 400 + "px");
  } else if (
    window.innerWidth <= 500 &&
    window.innerWidth > 450 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 450 + "px");
  } else if (
    window.innerWidth <= 550 &&
    window.innerWidth > 500 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 500 + "px");
  } else if (
    window.innerWidth <= 600 &&
    window.innerWidth > 550 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 525 + "px");
  } else if (
    window.innerWidth <= 650 &&
    window.innerWidth > 600 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 575 + "px");
  } else if (
    window.innerWidth <= 700 &&
    window.innerWidth > 650 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 625 + "px");
  } else if (
    window.innerWidth <= 750 &&
    window.innerWidth > 700 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    sec2.style.display = "none";
    resizer.forEach((element) => {
      element.style.display = "none";
    });
    pagesBg.forEach((element) => {
      element.style.display = "none";
    });
    document.documentElement.style.setProperty("--section-1-width", 650 + "px");
  } else {
    document.documentElement.style.setProperty("--section-1-width", 375 + "px");
  }
  section1Closed = false;
  sec3.style.width = "auto";
  document.querySelector(".section-3 .banner").style.height = "50%";
  if (isHideHit) {
    bg.forEach((element) => {
      element.style.width = "100%";
      element.style.height = "33%";
    });
  } else {
    bg.forEach((element) => {
      element.style.width = "54%";
      element.style.height = "27%";
    });
  }
  sec2Header.style.gridTemplateColumns = "repeat(auto-fit, minmax(150px, 1fr))";
  sec1PlaylistContent.forEach((element) => {
    element.classList.remove("display-none");
  });
  // sec1PlaylistContainer.style.gridAutoRows = "55px";
  sec1HeaderContainer.style.display = "block";
  sec1Bar.style.display = "flex";
  sec1CloseIcons.classList.add("display-none");
  sec2Divs.forEach((element) => {
    element.style.height = "90%";
  });
  sec1PlaylistContainer.style.gridAutoRows = "65px";
  sec1CloseIcons.style.paddingLeft = "0";
  sec1PlaylistContainerDiv.forEach((element) => {
    element.style.padding = "7px";
  });
  sec1PlaylistContainerDiv.forEach((element) => {
    element.style.height = "auto";
  });
  sec1PlaylistContainerDivImg.forEach((element) => {
    element.style.minWidth = "50px";
  });
  sec1PlaylistContainerDivImgSvg.forEach((element) => {
    element.style.width = "20px";
  });
  // sec1CloseIcons.style.paddingLeft = "5px";
  // sec1PlaylistContainerDiv.forEach((element) => {
  //   element.style.padding = "0";
  // });
  // sec1PlaylistContainerDiv.forEach((element) => {
  //   element.style.height = "40px";
  // });
  // sec1PlaylistContainerDivImg.forEach((element) => {
  //   element.style.minWidth = "40px";
  // });
  sec2Header.style.height = "22%";
  sec2HeaderDivsPlayBtn.forEach((element) => {
    element.style.top = "3%";
  });
  sec2Recent.style.height = "50%";
  sec2RecentPlaylistPlayBtn.forEach((element) => {
    element.style.top = "55%";
  });
  sec2PagesBanner.forEach((element) => {
    element.style.width = "27%";
  });
  sec2PageSongs.forEach((element) => {
    element.style.height = "8vh";
  });
  // sec2Page2Songs.forEach((element) => {
  //   element.style.height = "8vh";
  // });
});

["resize", "load"].forEach((evt) => {
  window.addEventListener(evt, () => {
    if (window.innerWidth <= 768) {
      document.documentElement.style.setProperty(
        "--section-1-width",
        50 + "px"
        // 68 + "px"
      );
      sec1HeaderContainer.style.display = "none";
      sec1Bar.style.display = "none";
      sec1CloseIcons.classList.remove("display-none");
      sec1PlaylistContainer.style.gridAutoRows = "55px";
      sec1CloseIcons.style.paddingLeft = "5px";
    } else {
      document.documentElement.style.setProperty(
        "--section-1-width",
        370 + "px"
      );
      sec1PlaylistContent.forEach((element) => {
        element.classList.remove("display-none");
      });
      sec1HeaderContainer.style.display = "block";
      sec1Bar.style.display = "flex";
      sec1CloseIcons.classList.add("display-none");
    }
  });
});

["resize", "load"].forEach((evt) => {
  window.addEventListener(evt, () => {
    if (
      window.innerWidth <= 1025 &&
      window.innerWidth > 350 &&
      window.innerHeight <= 1375 &&
      window.innerHeight > 600
    ) {
      resize = true;

      //main

      document.querySelector(".section-3").style.display = "none";
      document.querySelector(".footer-page .container-3").style.display =
        "none";
      mainSection.style.height = "63vh";
      document.querySelector(".resize").style.width = "1px";
      mainSection.style.gridTemplateColumns =
        "var(--section-1-width, 0.7fr) 0.001fr 1fr";

      // header

      header.style.height = "9vh";
      header.style.alignItems = "center";
      headerLeft.style.margin = "10px 20px";
      headerLeft.style.alignItems = "center";
      headerLeftSvg.style.height = "35px";
      headerMid.style.width = "72vw";
      headerMid.style.height = "80%";
      headerMid1.style.height = "40px";
      headerMid1.style.width = "45px";
      headerMid1Svg.style.height = "45%";
      headerMid2.style.borderRadius = "17px";
      headerMid2a.style.height = "60%";
      headerMid2a.style.width = "20%";
      headerMid2b.style.fontSize = "12px";
      headerMid2c.style.height = "60%";
      headerMid2c.style.width = "20%";
      headerRight1.classList.add("display-none");
      headerRight2.classList.add("display-none");
      headerRight3.classList.add("display-none");
      headerRight4.classList.add("display-none");
      headerRight5.style.fontSize = "13px";
      headerRight5a.style.height = "7vmin";
      headerRight5a.style.width = "7vmin";
      headerRight5b.style.height = "5vmin";
      headerRight5b.style.width = "5vmin";

      // Footer

      footerPage.style.height = "17vh";
      footerPage.style.gap = "5%";
      footerPage.style.marginTop = "5%";
      footerPage.style.flexDirection = "column";
      footerPageCont1.style.maxWidth = "70%";
      footerPageCont1.style.minWidth = "50%";
      footerPageCont1.style.height = "30%";
      footerPageCont2.style.width = "110%";
      footerPageCont2.style.height = "60%";
      footerPageCont3.style.height = "0%";
      footerPageCont1Img.style.minWidth = "25%";
      footerPageCont1Img.style.height = "115%";
      footerPageCont1Content.style.fontSize = "12px";
      footerPageCont1Content.style.height = "100%";
      footerPageCont1Content.style.minWidth = "60%";
      footerPageCont1Add.style.width = "20%";
      footerPageCont2UpperMid.style.margin = "0";
      footerPageCont2UpperMid.style.height = "35px";
      footerPageCont2UpperMid.style.width = "35px";
      footerPageCont2UpperMidSvg.style.width = "17px";
      footerPageCont2UpperMidSvg.style.height = "17px";
      footerPageCont2UpperMidSvg2.style.width = "17px";
      footerPageCont2UpperMidSvg2.style.height = "17px";
      footerPageCont2UpperStart.style.paddingRight = "15px";
      footerPageCont2UpperStartFirstSvg.style.height = "25px";
      footerPageCont2UpperStartFirstSvg.style.width = "25px";
      footerPageCont2UpperStartSecondSvg.style.height = "25px";
      footerPageCont2UpperStartSecondSvg.style.width = "25px";
      footerPageCont2UpperEnd.style.paddingLeft = "15px";
      footerPageCont2UpperEndFirstSvg.style.height = "25px";
      footerPageCont2UpperEndFirstSvg.style.width = "25px";
      footerPageCont2UpperEndSecondSvg.style.height = "25px";
      footerPageCont2UpperEndSecondSvg.style.width = "25px";
      footerPageCont2LowerProgressContainer.style.width = "60%";
      footerPageCont2LowerProgressContainer.style.height = "8px";
      footerPageCont2LowerCurrent.style.fontSize = "20px";
      footerPageCont2LowerDuration.style.fontSize = "20px";

      pagePhone.classList.remove("display-none");
      page.classList.add("display-none");
      page1.classList.add("display-none");
      page2.classList.add("display-none");
      page1Phone.classList.add("display-none");
      page2Phone.classList.add("display-none");

      // playlist1.addEventListener("click", () => {
      //   document.documentElement.style.setProperty(
      //     "--section-1-width",
      //     50 + "px"
      //   );
      //   sec2.style.display = "block";
      //   resizer.forEach((element) => {
      //     element.style.display = "block";
      //   });
      //   resizer[1].style.display = "none";
      //   pagesBg.forEach((element) => {
      //     element.style.display = "flex";
      //   });
      //   sec1PlaylistContent.forEach((element) => {
      //     element.classList.add("display-none");
      //   });
      //   sec1HeaderContainer.style.display = "none";
      //   sec1Bar.style.display = "none";
      //   sec1CloseIcons.classList.remove("display-none");
      //   sec1PlaylistContainer.style.gridAutoRows = "55px";
      //   sec1CloseIcons.style.paddingLeft = "5px";
      //   sec1PlaylistContainerDiv.forEach((element) => {
      //     element.style.padding = "0";
      //   });
      //   sec1PlaylistContainerDiv.forEach((element) => {
      //     element.style.height = "40px";
      //   });
      //   sec1PlaylistContainerDivImg.forEach((element) => {
      //     element.style.minWidth = "40px";
      //   });
      //   sec1PlaylistContainerDivImgSvg.forEach((element) => {
      //     element.style.width = "20px";
      //   });
      // });
      // playlist2.addEventListener("click", () => {
      //   document.documentElement.style.setProperty(
      //     "--section-1-width",
      //     50 + "px"
      //   );
      //   sec2.style.display = "block";
      //   resizer.forEach((element) => {
      //     element.style.display = "block";
      //   });
      //   resizer[1].style.display = "none";
      //   pagesBg.forEach((element) => {
      //     element.style.display = "flex";
      //   });
      //   sec1PlaylistContent.forEach((element) => {
      //     element.classList.add("display-none");
      //   });
      //   sec1HeaderContainer.style.display = "none";
      //   sec1Bar.style.display = "none";
      //   sec1CloseIcons.classList.remove("display-none");
      //   sec1PlaylistContainer.style.gridAutoRows = "55px";
      //   sec1CloseIcons.style.paddingLeft = "5px";
      //   sec1PlaylistContainerDiv.forEach((element) => {
      //     element.style.padding = "0";
      //   });
      //   sec1PlaylistContainerDiv.forEach((element) => {
      //     element.style.height = "40px";
      //   });
      //   sec1PlaylistContainerDivImg.forEach((element) => {
      //     element.style.minWidth = "40px";
      //   });
      //   sec1PlaylistContainerDivImgSvg.forEach((element) => {
      //     element.style.width = "20px";
      //   });
      // });
    } else {
      //main

      resizer[1].style.display = "block";
      document.querySelector(".footer-page .container-3").style.display =
        "flex";
      if (!sec3.classList.contains("display-none)")) {
        sec3.style.display = "block";
      } // issue
      mainSection.style.height = "80vh";
      mainSection.style.gridTemplateColumns =
        "var(--section-1-width, 0.7fr) 0.001fr 1.7fr 0.001fr var(--section-3-width, 0.6fr)";

      // header

      headerLeft.style.margin = "15px 30px";
      headerLeftSvg.style.height = "30px";
      headerMid.style.width = "35vw";
      headerMid.style.height = "100%";
      headerMid1.style.height = "45px";
      headerMid1.style.width = "45px";
      headerMid1Svg.style.height = "55%";
      headerMid2.style.borderRadius = "20px";
      headerMid2a.style.height = "85%";
      headerMid2b.style.fontSize = "15px";
      headerMid2c.style.height = "85%";
      headerRight1.classList.remove("display-none");
      headerRight2.classList.remove("display-none");
      headerRight3.classList.remove("display-none");
      headerRight4.classList.remove("display-none");
      headerRight3.style.width = "7%";
      headerRight3.style.height = "65%";
      headerRight4.style.width = "7%";
      headerRight4.style.height = "65%";
      headerRight5.style.fontSize = "17px";

      // Footer

      footerPage.style.height = "12vh";
      footerPage.style.gap = "0";
      footerPage.style.marginTop = "0";
      footerPage.style.flexDirection = "row";
      footerPageCont1.style.width = "20%";
      footerPageCont1.style.height = "100%";
      footerPageCont2.style.width = "40%";
      footerPageCont2.style.height = "100%";
      footerPageCont1Img.style.width = "20%";
      footerPageCont1Img.style.height = "90%";
      footerPageCont1.style.maxWidth = "revert";
      footerPageCont1.style.minWidth = "revert";
      footerPageCont1Content.style.height = "100%";
      footerPageCont1Content.style.fontSize = "15px";
      footerPageCont1Add.style.width = "10%";
      footerPageCont2UpperMid.style.margin = "0 10px";
      footerPageCont2UpperMid.style.height = "35px";
      footerPageCont2UpperMid.style.width = "35px";
      footerPageCont2UpperMidSvg.style.width = "17px";
      footerPageCont2UpperMidSvg.style.height = "17px";
      footerPageCont2UpperMidSvg2.style.width = "17px";
      footerPageCont2UpperMidSvg2.style.height = "17px";
      footerPageCont2UpperStartFirstSvg.style.height = "22px";
      footerPageCont2UpperStartFirstSvg.style.width = "22px";
      footerPageCont2UpperStartSecondSvg.style.height = "22px";
      footerPageCont2UpperStartSecondSvg.style.width = "22px";
      footerPageCont2UpperEndFirstSvg.style.height = "22px";
      footerPageCont2UpperEndFirstSvg.style.width = "22px";
      footerPageCont2UpperEndSecondSvg.style.height = "22px";
      footerPageCont2UpperEndSecondSvg.style.width = "22px";
      footerPageCont2LowerProgressContainer.style.width = "80%";
      footerPageCont2LowerCurrent.style.fontSize = "18px";
      footerPageCont2LowerDuration.style.fontSize = "18px";

      page.classList.remove("display-none");
      page1.classList.add("display-none");
      page2.classList.add("display-none");
      pagePhone.classList.add("display-none");
      page1Phone.classList.add("display-none");
      page2Phone.classList.add("display-none");
    }
  });
});
