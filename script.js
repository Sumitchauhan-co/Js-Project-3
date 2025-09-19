let b;
let n = 0;
let songs = [];

let playBtn = document.querySelector(".footer-page .container-2 .upper .mid");
let page2playBtn = document.querySelector(
  ".section-2 .page-2 .header-function .left .play-pause"
);
let playBtn2Svg1 = document.querySelector(
  ".section-2 .page-2 .header-function .left .play-pause svg:nth-child(1)"
);
let playBtn2Svg2 = document.querySelector(
  ".section-2 .page-2 .header-function .left .play-pause svg:nth-child(2)"
);
let playBtnSvg1 = document.querySelector(
  ".footer-page .container-2 .upper .mid svg:nth-child(1)"
);
let playBtnSvg2 = document.querySelector(
  ".footer-page .container-2 .upper .mid svg:nth-child(2)"
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
let songsContainer = document.querySelector(".section-2 .songs-container");
let phoneSongsContainer = document.querySelector(
  ".section-2 .phone-songs-container"
);
let playlist1 = document.querySelector(
  ".section-1 .playlist-container .playlist-1"
);
let sec2 = document.querySelector(".section-2");
let page1 = document.querySelector(".section-2 .page-1");
let page2 = document.querySelector(".section-2 .page-2");
let page1PlayBtn1 = document.querySelector(
  ".section-2 .page-1 .container-class .playlists-container .div-1 .content .play-button"
);
let pageChange1PlayBtn1 = document.querySelector(
  ".section-2 .page-1 .container-class .playlists-container .div-1"
);
let page1Play1Svg1 = document.querySelector(
  ".section-2 .page-1 .container-class .playlists-container .div-1 .content .play-button .play svg:nth-child(1)"
);
let page1Play1Svg2 = document.querySelector(
  ".section-2 .page-1 .container-class .playlists-container .div-1 .content .play-button .play svg:nth-child(2)"
);
// let page1PlayBtn2 = document.querySelector(".section-2 .page-1 .recently-played .content-container .playlist-1 .play-button");
// let page1Play2Svg1 = document.querySelector(".section-2 .page-1 .recently-played .content-container .playlist-1 .play-button .play svg:nth-child(1)");
// let page1Play2Svg2 = document.querySelector(".section-2 .page-1 .recently-played .content-container .playlist-1 .play-button .play svg:nth-child(2)");
let page2Song1 = document.querySelector(
  ".section-2 .page-2 .songs-container .song-1"
);
let randomPlay = document.querySelector(
  ".footer-page .container-2 .upper .start .first"
);

const resizer = document.querySelector(".resize");
const sec1PlaylistContent = document.querySelectorAll(
  ".section-1 .playlist-container .content-container"
);
const sec1Container = document.querySelector(
  ".section-1 .sec1-header-container"
);
// const sec1Header = document.querySelector(".section-1 .sec1-header-container");
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
const sec2HeaderDivs = document.querySelector(
  ".section-2 .page-1 .container-class .playlists-container"
);
let isResizing = false;

// header

const header = document.querySelector(".header"),
  headerLeftSvg = document.querySelector(".header .left-header svg"),
  headerLeft = document.querySelector(".header .left-header"),
  headerMid1Svg = document.querySelector(
    ".header .mid-header .home-button svg"
  ),
  headerMid = document.querySelector(".header .mid-header"),
  headerMid1 = document.querySelector(".header .mid-header .home-button"),
  headerMid2 = document.querySelector(".header .mid-header .search"),
  headerMid21 = document.querySelector(
    ".header .mid-header .search .svg-search-container"
  ),
  headerMid22 = document.querySelector(
    ".header .mid-header .search .search-bar"
  ),
  headerMid23 = document.querySelector(".header .mid-header .search .browse"),
  headerRight1 = document.querySelector(
    ".header .right-header .premium-button"
  ),
  headerRight2 = document.querySelector(".header .right-header .install"),
  headerRight3 = document.querySelector(".header .right-header .notification"),
  headerRight4 = document.querySelector(".header .right-header .activity"),
  headerRight5 = document.querySelector(
    ".header .right-header .profile-button span"
  );

// Footer

const footerPage = document.querySelector(".footer-page"),
  footerPageCont1 = document.querySelector(".footer-page .container-1"),
  footerPageCont2 = document.querySelector(".footer-page .container-2"),
  footerPageCont1Img = document.querySelector(".footer-page .container-1 .img"),
  footerPageCont1Content = document.querySelector(
    ".footer-page .container-1 .content"
  ),
  footerPageCont1Add = document.querySelector(".footer-page .container-1 .add"),
  footerPageCont2UpperMid = document.querySelector(
    ".footer-page .container-2 .upper .mid"
  ),
  footerPageCont2UpperMidSvg = document.querySelector(
    ".footer-page .container-2 .upper .mid svg"
  ),
  footerPageCont2UpperStartFirstSvg = document.querySelector(
    ".footer-page .container-2 .upper .start .first svg"
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
footerPageCont2LowerProgressContainer = document.querySelector(
  ".footer-page .container-2 .lower .progress-container"
);

const mainSection = document.querySelector(".main");
const sec2Page1Phone = document.querySelector(".section-2 .page-1-phone");
const sec2Page2Phone = document.querySelector(".section-2 .page-2-phone");
const Page1 = document.querySelector(".section-2 .page-1");

function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

async function main() {
  let a = await fetch("songs2.json"); //songs2.json
  songs = await a.json();
  loadSong(n);

  //songs display
  // for (let index = 0; index < songs.length; index++) {
  //   let c = new Audio(songs[index].src);
  //   c.addEventListener("loadedmetadata", () => {
  //     let d = formatTime(c.duration);
  //     songsContainer.insertAdjacentHTML(
  //       "beforeend",
  //       `<div class="song-${songs[index].id}" data-id="${index}">
  //       <div class="num">${songs[index].id}</div>
  //       <div class="cover" style="background-image: url(${songs[index].cover});")></div>
  //       <div class="song-details">
  //         <div class="song-name">${songs[index].title}</div>
  //         <div class="song-artist">${songs[index].artist}</div>
  //       </div>
  //       <div class="song-name">${songs[index].title}</div>
  //       <div class="date">25 Sep,2025</div>
  //       <div class="duration">${d}</div>
  //     </div>`
  //     );
  //   });
  // }
  songs.forEach((element) => {
    let c = new Audio(element.src);
    console.log(element.src);
    songsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="song-${element.id}" data-id="${element.id}">
      <div class="num">${element.id}</div>
      <div class="cover" style="background-image: url(${element.cover});"></div>
      <div class="song-details">
        <div class="song-name">${element.title}</div>
        <div class="song-artist">${element.artist}</div>
      </div>
      <div class="song-name">${element.title}</div>
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
      <div class="song-name">${element.title}</div>
      <div class="date">25 Sep, 2025</div>
      <div class="duration" id="duration-${element.id}">--:--</div>
    </div>`
    );
    c.addEventListener("loadedmetadata", () => {
      let d = formatTime(c.duration);
      document.querySelector(`#duration-${element.id}`).textContent = d;
      console.log(d);
    });
    c.addEventListener("loadedmetadata", () => {
      let e = formatTime(c.duration);
      document.querySelector(`#duration-${element.id}`).textContent = e;
      console.log(e);
    });
  });
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

  // page1Play2Svg1.classList.add("display-none");
  // page1Play2Svg2.classList.remove("display-none");
}

function pauseSvg() {
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  playBtn2Svg2.classList.add("display-none");
  playBtn2Svg1.classList.remove("display-none");

  page1Play1Svg2.classList.add("display-none");
  page1Play1Svg1.classList.remove("display-none");

  // page1Play2Svg2.classList.add("display-none");
  // page1Play2Svg1.classList.remove("display-none");
}

randomPlay.addEventListener("click", () => {
  let r = Math.floor(Math.random() * 7);
  n = r;
  b.play();
  playSvg();
  loadSong(n);
  songDetails();
});

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

// page1PlayBtn2.addEventListener("click", () => {
//   if (b.paused) {
//     b.play();
//     playSvg();
//     console.log("Song is played");
//   } else {
//     b.pause();
//     pauseSvg();
//     console.log("Song is paused");
//   }
// });

songsContainer.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  console.log(id);
  n = id;
  loadSong(n);
  playSvg();
  songDetails();
  console.log(`url(${songs[n].cover})`);
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

function prevSong() {
  n--;
  if (n < 0) {
    n = songs.length - 1;
  }
  if (b.paused) {
    playSvg();
  }
  loadSong(n);
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

function nextSong() {
  n++;
  if (n >= songs.length) {
    n = 0;
  }
  if (b.paused) {
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

playlist1.addEventListener("click", () => {
  if (page2.classList.contains("display-none")) {
    page1.classList.add("display-none");
    page2.classList.remove("display-none");
  } else {
    page2.classList.add("display-none");
    page1.classList.remove("display-none");
  }
});

pageChange1PlayBtn1.addEventListener("click", () => {
  if (page2.classList.contains("display-none")) {
    page1.classList.add("display-none");
    page2.classList.remove("display-none");
  }
});

resizer.addEventListener("mousedown", () => {
  isResizing = true;
});

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;

  let newWidth = Math.min(Math.max(e.pageX, 60), 365);
  document.documentElement.style.setProperty(
    "--section-1-width",
    newWidth + "px"
  );

  if (newWidth < 350) {
    midBtnSpan.textContent = "";
    midBtn.classList.add("change");
  } else if (newWidth > 350) {
    midBtnSpan.textContent = "Create";
    midBtn.classList.remove("change");
  }
  if (newWidth < 285) {
    document.documentElement.style.setProperty("--section-1-width", 75 + "px");
    sec1PlaylistContent.forEach((element) => {
      element.classList.add("display-none");
    });
    // sec1Header.style.display = "none";
    sec1Container.style.display = "none";
    sec1Bar.style.display = "none";
    sec1CloseIcons.classList.remove("display-none");
    console.log(sec2Divs);
    sec2Divs.forEach((element) => {
      element.style.height = "105%";
    });
    console.log(sec2HeaderDivs);
    sec2HeaderDivs.style.height = "25%";
  } else if (newWidth > 285) {
    document.documentElement.style.setProperty(
      "--section-1-width",
      newWidth + "px"
    );
    sec1PlaylistContent.forEach((element) => {
      element.classList.remove("display-none");
    });
    // sec1Header.style.display = "flex";
    sec1Container.style.display = "block";
    sec1Bar.style.display = "flex";
    sec1CloseIcons.classList.add("display-none");
    sec2Divs.forEach((element) => {
      element.style.height = "90%";
    });
    sec2HeaderDivs.style.height = "20%";
  }
});

document.addEventListener("mouseup", () => {
  isResizing = false;
});

sec1OpenPLaylists.addEventListener("click", () => {
  document.documentElement.style.setProperty("--section-1-width", 400 + "px");
  sec1PlaylistContent.forEach((element) => {
    element.classList.remove("display-none");
  });
  // sec1Header.style.display = "flex";
  sec1Container.style.display = "block";
  sec1Bar.style.display = "flex";
  sec1CloseIcons.classList.add("display-none");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    document.documentElement.style.setProperty("--section-1-width", 68 + "px");
    sec1PlaylistContent.forEach((element) => {
      element.classList.add("display-none");
    });
    sec1Container.style.display = "none";
    sec1Bar.style.display = "none";
    sec1CloseIcons.classList.remove("display-none");
  } else {
    document.documentElement.style.setProperty("--section-1-width", 360 + "px");
    sec1PlaylistContent.forEach((element) => {
      element.classList.remove("display-none");
    });
    sec1Container.style.display = "block";
    sec1Bar.style.display = "flex";
    sec1CloseIcons.classList.add("display-none");
  }
});

window.addEventListener("resize", () => {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    // header

    mainSection.style.height = "75vh";
    mainSection.style.gridTemplateColumns =
      "var(--section-1-width, 0.7fr) 0.001fr 1.5fr";
    header.style.height = "5vh";
    headerLeft.style.margin = "10px 20px";
    headerLeftSvg.style.height = "25px";
    headerMid1.style.height = "30px";
    headerMid1.style.width = "30px";
    headerMid1Svg.style.height = "45%";
    headerMid2.style.borderRadius = "15px";
    headerMid21.style.height = "60%";
    headerMid22.style.fontSize = "12px";
    headerMid23.style.height = "60%";
    headerMid.style.width = "65vw";
    headerRight1.classList.add("display-none");
    headerRight2.classList.add("display-none");
    headerRight3.style.width = "30%";
    headerRight4.style.width = "30%";
    headerRight3.style.height = "45%";
    headerRight4.style.height = "45%";
    headerRight5.style.fontSize = "12px";

    // Footer

    footerPage.style.gap = "3%";
    footerPage.style.marginTop = "5%";
    footerPage.style.flexDirection = "column";
    footerPageCont1.style.width = "30%";
    footerPageCont1.style.height = "90%";
    footerPageCont2.style.width = "110%";
    footerPageCont2.style.width = "100%";
    footerPageCont1Img.style.width = "35%";
    footerPageCont1Img.style.height = "75%";
    footerPageCont1Content.style.width = "60%";
    footerPageCont1Add.style.width = "20%";
    footerPageCont1Add.style.width = "20%";
    footerPageCont2UpperMid.style.margin = "0";
    footerPageCont2UpperMid.style.height = "20px";
    footerPageCont2UpperMid.style.width = "20px";
    footerPageCont2UpperMidSvg.style.width = "12px";
    footerPageCont2UpperMidSvg.style.height = "12px";
    footerPageCont2UpperStartFirstSvg.style.height = "15px";
    footerPageCont2UpperStartFirstSvg.style.width = "15px";
    footerPageCont2UpperStartSecondSvg.style.height = "15px";
    footerPageCont2UpperStartSecondSvg.style.width = "15px";
    footerPageCont2UpperEndFirstSvg.style.height = "15px";
    footerPageCont2UpperEndSecondSvg.style.width = "15px";
    footerPageCont2LowerProgressContainer.style.width = "50%";

    sec2Page1Phone.classList.remove("display-none");
    page1.style.display = "none";
    page2.style.display = "none";

    playlist1.addEventListener("click", () => {
      document.documentElement.style.setProperty(
        "--section-1-width",
        68 + "px"
      );
      sec1PlaylistContent.forEach((element) => {
        element.classList.add("display-none");
      });
      sec1Container.style.display = "none";
      sec1Bar.style.display = "none";
      sec1CloseIcons.classList.remove("display-none");

      // const page1Hidden = sec2Page1Phone.classList.contains("display-none");

      // sec2Page1Phone.classList.toggle("display-none",!page1Hidden)
      // sec2Page2Phone.classList.toggle("display-none",page1Hidden)
      if (sec2Page2Phone.classList.contains("display-none")) {
        sec2Page1Phone.classList.add("display-none");
        sec2Page2Phone.classList.remove("display-none");
      } else if (sec2Page1Phone.classList.contains("display-none")) {
        sec2Page1Phone.classList.remove("display-none");
        sec2Page2Phone.classList.add("display-none");
      }
    });
  } else {
    // header

    mainSection.style.height = "80vh";
    mainSection.style.gridTemplateColumns =
      "var(--section-1-width, 0.7fr) 0.001fr 1.5fr 0.001fr 0.7fr";
    header.style.height = "8vh";
    headerLeft.style.margin = "15px 30px";
    headerLeftSvg.style.height = "30px";
    headerMid1.style.height = "45px";
    headerMid1.style.width = "45px";
    headerMid1Svg.style.height = "55%";
    headerMid2.style.borderRadius = "20px";
    headerMid21.style.height = "85%";
    headerMid22.style.fontSize = "15px";
    headerMid23.style.height = "85%";
    headerMid.style.width = "35vw";
    headerRight1.classList.remove("display-none");
    headerRight2.classList.remove("display-none");
    headerRight3.style.width = "10%";
    headerRight4.style.width = "10%";
    headerRight3.style.height = "65%";
    headerRight4.style.height = "65%";
    headerRight5.style.fontSize = "17px";

    // Footer

    footerPage.style.gap = "0";
    footerPage.style.marginTop = "0";
    footerPage.style.flexDirection = "row";
    footerPageCont1.style.width = "20%";
    footerPageCont1.style.height = "100%";
    footerPageCont2.style.width = "35%";
    footerPageCont2.style.height = "100%";
    footerPageCont1Img.style.width = "17%";
    footerPageCont1Img.style.height = "90%";
    footerPageCont1Content.style.width = "25%";
    footerPageCont1Add.style.width = "10%";
    footerPageCont2UpperMid.style.margin = "0 10px";
    footerPageCont2UpperMid.style.height = "29px";
    footerPageCont2UpperMid.style.width = "29px";
    footerPageCont2UpperMidSvg.style.width = "15px";
    footerPageCont2UpperMidSvg.style.height = "15px";
    footerPageCont2UpperStartFirstSvg.style.height = "17px";
    footerPageCont2UpperStartFirstSvg.style.width = "17px";
    footerPageCont2UpperStartSecondSvg.style.height = "17px";
    footerPageCont2UpperStartSecondSvg.style.width = "17px";
    footerPageCont2UpperEndFirstSvg.style.height = "17px";
    footerPageCont2UpperEndFirstSvg.style.width = "17px";
    footerPageCont2UpperEndSecondSvg.style.height = "17px";
    footerPageCont2UpperEndSecondSvg.style.width = "17px";
    footerPageCont2LowerProgressContainer.style.width = "80%";

    sec2Page1Phone.classList.add("display-none");
    sec2Page2Phone.classList.add("display-none");
    page1.style.display = "revert";
    page2.style.display = "none";
  }

  // playlist1.addEventListener("click", ()=> {
  //   document.documentElement.style.setProperty("--section-1-width", 68 + "px");
  //   sec1PlaylistContent.forEach(element => {
  //     element.classList.add("display-none")
  //   });
  //   sec1Container.style.display = "none";
  //   sec1Bar.style.display = "none";
  //   sec1CloseIcons.classList.remove("display-none");

  //   // const page1Hidden = sec2Page1Phone.classList.contains("display-none");

  //   // sec2Page1Phone.classList.toggle("display-none",!page1Hidden)
  //   // sec2Page2Phone.classList.toggle("display-none",page1Hidden)
  //   if (sec2Page2Phone.classList.contains("display-none")) {
  //     sec2Page1Phone.classList.add("display-none");
  //     sec2Page2Phone.classList.remove("display-none");
  //   }
  //   else if(sec2Page1Phone.classList.contains("display-none")){
  //     sec2Page1Phone.classList.remove("display-none");
  //     sec2Page2Phone.classList.add("display-none");
  //   }
  // });
});
