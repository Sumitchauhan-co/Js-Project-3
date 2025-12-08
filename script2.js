let m = 0;
let repeatMode = false;
let playlist2Play = false;
let clickTimes = 2;
let repeatPlay = document.querySelector(
  ".footer-page .container-2 .upper .end .second"
);
let home = document.querySelector(".header .home-button");
// let sec2Page2Songs = 0;
let songsContainer2 = document.querySelector(
  ".section-2 .page-2 .songs-container"
);
let phoneSongsContainer2 = document.querySelector(
  ".section-2 .page-2-phone .phone-songs-container"
);

async function main2() {
  let a = await fetch("json/songs3.json");
  songs2 = await a.json();
  loadSong(n);

  songs2.forEach((element) => {
    let c = new Audio(element.src);

    songsContainer2.insertAdjacentHTML(
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
    phoneSongsContainer2.insertAdjacentHTML(
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

main2();

function songDetails2() {
  imgCover.style.backgroundImage = `url(${songs2[m].cover})`;
  imgBanner.style.backgroundImage = `url(${songs2[m].cover})`;
  songName.textContent = songs2[m].title;
  artistName.textContent = songs2[m].artist;
  sec3SongName.forEach((element) => {
    element.textContent = songs2[m].title;
  });
  sec3Artist.textContent = songs2[m].artist;
}

function loadSong2(index) {
  if (b) b.pause();

  b = new Audio(songs2[index].src);
  playlist2Play = true;
  playlistPlay = false;

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
  });

  addTORecent();
  phoneAddTORecent();
  songDetails2();
  b.play();
}

function loadSong2type(index) {
  if (b) b.pause();

  b = new Audio(songs2[index].src);
  playlist2Play = true;
  playlistPlay = false;

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
  });

  addTORecent();
  phoneAddTORecent();
  songDetails2();
}

function scroll() {
  sec3ScrollName.forEach((element) => {
    if (element.scrollWidth > sec3ScrollContainer.clientWidth) {
      element.classList.add("scrolling");
    } else {
      element.classList.remove("scrolling");
    }
    for (let i = 0; i < element.length; i++) {
      for (let j = 0; j < sec2ScrollContainer.length; j++) {
        if (i === j) {
          if (element[i].scrollWidth > sec2ScrollContainer[j].clientWidth) {
            element[i].classList.add("scrolling");
            break;
          } else {
            element[i].classList.remove("scrolling");
            break;
          }
        }
      }
    }
  });
}

function playSvg2() {
  // footer play
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 2
  page2PlayBtnSvg1.classList.add("display-none");
  page2PlayBtnSvg2.classList.remove("display-none");

  // home page upper playlist 2
  pagePlay2Svg1.classList.add("display-none");
  pagePlay2Svg2.classList.remove("display-none");

  // home page lower playlist 1
  pagePlayCont2Svg1.classList.add("display-none");
  pagePlayCont2Svg2.classList.remove("display-none");
}

function pauseSvg2() {
  // footer play
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 2
  page2PlayBtnSvg2.classList.add("display-none");
  page2PlayBtnSvg1.classList.remove("display-none");

  // home page upper playlist 2
  pagePlay2Svg2.classList.add("display-none");
  pagePlay2Svg1.classList.remove("display-none");

  // home page lower playlist 1
  pagePlayCont2Svg2.classList.add("display-none");
  pagePlayCont2Svg1.classList.remove("display-none");
}

function phonePlaySvg2() {
  // footer
  playBtnSvg1.classList.add("display-none");
  playBtnSvg2.classList.remove("display-none");

  // page 2
  page2PhonePlaySvg1.classList.add("display-none");
  page2PhonePlaySvg2.classList.remove("display-none");
}

function phonePauseSvg2() {
  // footer
  playBtnSvg2.classList.add("display-none");
  playBtnSvg1.classList.remove("display-none");

  // page 2
  page2PhonePlaySvg2.classList.add("display-none");
  page2PhonePlaySvg1.classList.remove("display-none");
}

songsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  m = id;
  loadSong2(m);
  playSvg2();
  songDetails2();
  scroll();
});

phoneSongsContainer2.addEventListener("click", (e) => {
  let songDiv = e.target.closest("[data-id]");
  if (!songDiv) return;

  let id = songDiv.dataset.id - 1;
  m = id;
  loadSong2(m);
  phonePlaySvg2();
  songDetails2();
  scroll();
});

page2PhonePlay.addEventListener("click", () => {
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    phonePauseSvg();
    phonePlaySvg2();
  } else {
    b.pause();
    phonePauseSvg2();
  }
});

page2playBtn.addEventListener("click", () => {
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    pauseSvg();
    playSvg2();
  } else {
    b.pause();
    pauseSvg2();
  }
});

function showPage(pageSelector, defaultSelector) {
  let page = document.querySelector(pageSelector);
  let defaultPage = document.querySelector(defaultSelector);
  let isVisible = page && !page.classList.contains("display-none");

  // Hide all pages
  document.querySelectorAll(".section-2 > div").forEach((page) => {
    page.classList.add("display-none");
  });
  if (window.innerWidth > 1025) {
    if (isVisible) {
      // If already visible, show default page
      page.classList.add("display-none");
      if (defaultPage) defaultPage.classList.remove("display-none");
    } else if (page) {
      // Show the selected page
      page.classList.remove("display-none");
      defaultPage.classList.add("display-none");
    }
  } else {
    if (isVisible) {
      // If already visible, show default page
      page.classList.add("display-none");
      if (defaultPage) defaultPage.classList.remove("display-none");
    } else if (page) {
      // Show the selected page
      page.classList.remove("display-none");
      defaultPage.classList.add("display-none");
    }
  }
}

pagePlayCont2Btn1.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    pauseSvg();
    playSvg2();
  } else {
    b.pause();
    pauseSvg2();
  }
});

pagePlayCont2.addEventListener("click", () => {
  showPage(".page-2", ".homePage");
});

phonePagePlayCont2.addEventListener("click", () => {
  showPage(".page-2-phone", ".homePage-phone");
});

pagePlayCont1Btn2.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!playlist2Play) {
    loadSong2type(m);
    scroll();
  }
  if (b.paused) {
    b.play();
    pauseSvg();
    playSvg2();
  } else {
    b.pause();
    pauseSvg2();
  }
});

pageChange1PlayBtn2.addEventListener("click", () => showChangePage(".page-2"));

phonePageChange2.addEventListener("click", () =>
  showChangePage(".page-2-phone")
);

playBtn.addEventListener("click", () => {
  if (b.paused) {
    b.play();
    if (playlistPlay) {
      pauseSvg2();
      phonePauseSvg2();
      playSvg();
      phonePlaySvg();
    } else if (playlist2Play) {
      pauseSvg();
      phonePauseSvg();
      playSvg2();
      phonePlaySvg2();
    }
  } else {
    b.pause();
    if (playlistPlay) {
      pauseSvg();
      phonePauseSvg();
      pauseSvg2();
      phonePauseSvg2();
    } else if (playlist2Play) {
      pauseSvg2();
      phonePauseSvg2();
      pauseSvg();
      phonePauseSvg();
    }
  }
});

randomPlay.addEventListener("click", () => {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      let r = Math.floor(Math.random() * 7);
      n = r;
      b.play();
      playSvg();
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      let r = Math.floor(Math.random() * 34);
      m = r;
      b.play();
      playSvg2();
      loadSong2(n);
      scroll();
    }
  } else {
    if (playlistPlay) {
      let r = Math.floor(Math.random() * 7);
      n = r;
      b.play();
      playSvg();
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      let r = Math.floor(Math.random() * 34);
      m = r;
      b.play();
      playSvg2();
      loadSong2(n);
      scroll();
    }
  }
});

home.addEventListener("click", () => {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    showChangePage(".homePage-phone");

    document.documentElement.style.setProperty("--section-1-width", 50 + "px");
    pagesBg.forEach((element) => {
      element.style.display = "flex";
    });
    sec2.style.display = "block";
    resizer.forEach((element) => {
      element.style.display = "block";
    });
    resizer[1].style.display = "none";
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
  } else {
    showChangePage(".homePage");
  }
});

repeatPlay.addEventListener("click", () => {
  if (clickTimes % 2 == 0) {
    footerPageCont2UpperEndSecond.style.fill = "#80006d";
    repeatMode = true;
  } else {
    footerPageCont2UpperEndSecond.style.fill = "#000";
    repeatMode = false;
  }
  clickTimes++;
});

prevBtn.addEventListener("click", () => {
  prevSong();
});

function prevSong() {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      n--;
      if (n < 0) {
        n = songs.length - 1;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m--;
      if (m < 0) {
        m = songs2.length - 1;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  } else {
    if (playlistPlay) {
      n--;
      if (n < 0) {
        n = songs.length - 1;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m--;
      if (m < 0) {
        m = songs2.length - 1;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  }
}

nextBtn.addEventListener("click", () => {
  nextSong();
});

function nextSong() {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      n++;
      if (n >= songs.length) {
        n = 0;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      playSvg();
      scroll();
    } else if (playlist2Play) {
      m++;
      if (m >= songs2.length) {
        m = 0;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      playSvg2();
      scroll();
    }
  } else {
    if (playlistPlay) {
      n++;
      if (n >= songs.length) {
        n = 0;
      }
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      m++;
      if (m >= songs2.length) {
        m = 0;
      }
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  }
}

function currentSong() {
  if (
    window.innerWidth <= 1025 &&
    window.innerWidth > 350 &&
    window.innerHeight <= 1375 &&
    window.innerHeight > 600
  ) {
    if (playlistPlay) {
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  } else {
    if (playlistPlay) {
      if (b.paused) {
        playSvg();
      }
      loadSong(n);
      scroll();
    } else if (playlist2Play) {
      if (b.paused) {
        playSvg2();
      }
      loadSong2(m);
      scroll();
    }
  }
}

// recent playlists

let playlists = document.querySelectorAll(
    ".homePage .container-class .recently-played .content-container>div"
  ),
  recentContainer = document.querySelector(
    ".homePage .container-class .recently-played"
  );

playlists.forEach((playlist) => {
  playlist.style.display = "none";
  recentContainer.style.display = "none";
});

function addTORecent() {
  if (playlist2Play) {
    playlists[0].style.display = "flex";
    recentContainer.style.display = "flex";
  }
}

let phonePlaylists = document.querySelectorAll(
    ".homePage-phone .phone-container-class .recently-played .content-container>div"
  ),
  phoneRecentContainer = document.querySelector(
    ".homePage-phone .phone-container-class .recently-played"
  );

phonePlaylists.forEach((playlist) => {
  playlist.style.display = "none";
  phoneRecentContainer.style.display = "none";
});

function phoneAddTORecent() {
  if (playlist2Play) {
    phonePlaylists[0].style.display = "flex";
    phoneRecentContainer.style.display = "flex";
  }
}

// hide section-3

let hideBtn = document.querySelector(
  ".section-3 .sec3-header .first .hide-btn"
);
let view = document.querySelector(".footer-page .container-3 .view");
let viewSvg = document.querySelector(".footer-page .container-3 .view svg");
let bg = document.querySelectorAll(".section-2 .header-container2 .bg");
let homeBg = document.querySelector(".section-2 .header-container");

hideBtn.addEventListener("click", () => {
  
  if (section1Closed) return
  isHideHit = true

  if (window.innerWidth > 1500 && window.innerWidth < 1575) {
    sec3.style.display = "none";
    sec2.style.position = "relative";
    sec2.style.width = "1150px";
    // sec2.style.left = "-190px";

    sec2Header.style.height = "26%";
    homeBg.style.width = "98%";
    sec2Header.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(250px, 1fr))";
    sec2HeaderDivsPlayBtn.forEach((element) => {
      element.style.height = "9%";
      element.style.top = "4%";
      // element.style.left = "20%";
      element.classList.add("center");
    });
    sec2HeaderDivsPlayBtn[0].style.left = "20%";
    sec2HeaderDivsPlayBtnOverlay.forEach((element) => {
      element.style.height = "55px";
      element.style.width = "55px";
    });
    sec2HeaderDivsPlayBtnPlay.forEach((element) => {
      element.style.height = "50px";
      element.style.width = "50px";
    });
    sec2HeaderDivsPlayBtnSvgs.forEach((element) => {
      element.style.height = "25px";
      element.style.width = "25px";
    });
    sec2RecentPlaylistPlayBtn.forEach((element) => {
      element.style.height = "12%";
      element.style.width = "6%";
      element.style.top = "70%";
      element.style.left = "18%";
    });
    sec2RecentPlaylistPlayBtnOverlay.forEach((element) => {
      element.style.height = "60px";
      element.style.width = "60px";
    });
    sec2RecentPlaylistPlayBtnPlay.forEach((element) => {
      element.style.height = "55px";
      element.style.width = "55px";
    });
    sec2RecentPlaylistPlayBtnSvgs.forEach((element) => {
      element.style.height = "27px";
      element.style.width = "27px";
    });
    sec2Recent.style.height = "60%";
    // sec2RecentPlaylistPlayBtn.forEach((element) => {
    //   element.style.top = "55%";
    // });
    sec2RecentPlaylists.forEach((element) => {
      element.style.height = "100%";
    });
    sec2HomePageBanner.forEach((element) => {
      element.style.width = "85%";
    });
    sec2HomePageContent.forEach((element) => {
      element.style.padding = "0 25px";
    });
    sec2PagesBanner.forEach((element) => {
      element.style.width = "20%";
    });
    sec2PagesBtnSvgs.forEach((element) => {
      element.style.width = "30px";
      element.style.height = "30px";
    });
    sec2PagesBtn.forEach((element) => {
      element.style.width = "60px";
      element.style.height = "60px";
    });
    bg.forEach((element) => {
      element.style.width = "100%";
      element.style.height = "60%";
    });
    resizer[0].style.cursor = "default";
    sec2PageSongs.forEach((element) => {
      element.style.height = "10vh";
    });
    viewSvg.style.fill = "#58cb58";
    // sec2Page2Songs.forEach((element) => {
    //   element.style.height = "10vh";
    // });
    mainSection.style.gridTemplateColumns =
      "var(--section-1-width, 0.7fr) 0.001fr 1fr";
  }
});

view.addEventListener("click", () => {
  if (sec3.style.display == "none") {
    sec3.style.display = "block";
    sec3.style.width = "300px";
    sec2.style.position = "relative";
    // sec2.style.width = "827px";
    sec2.style.width = "auto";

    sec2Header.style.height = "22%";
    homeBg.style.width = "100%";
    sec2Header.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(150px, 1fr))";
    sec2HeaderDivsPlayBtn.forEach((element) => {
      element.style.height = "7%";
      element.style.top = "3%";
    });
    sec2HeaderDivsPlayBtn[0].style.left = "22%";
    sec2HeaderDivsPlayBtnOverlay.forEach((element) => {
      element.style.height = "35px";
      element.style.width = "35px";
    });
    sec2HeaderDivsPlayBtnPlay.forEach((element) => {
      element.style.height = "35px";
      element.style.width = "35px";
    });
    sec2HeaderDivsPlayBtnSvgs.forEach((element) => {
      element.style.height = "17px";
      element.style.width = "17px";
    });
    sec2RecentPlaylistPlayBtn.forEach((element) => {
      element.style.height = "7%";
      element.style.width = "5%";
      element.style.top = "57%";
      element.style.left = "20%";
    });
    sec2RecentPlaylistPlayBtnOverlay.forEach((element) => {
      element.style.height = "50px";
      element.style.width = "50px";
    });
    sec2RecentPlaylistPlayBtnPlay.forEach((element) => {
      element.style.height = "47px";
      element.style.width = "47px";
    });
    sec2RecentPlaylistPlayBtnSvgs.forEach((element) => {
      element.style.height = "20px";
      element.style.width = "20px";
    });
    sec2Recent.style.height = "50%";
    sec2RecentPlaylists.forEach((element) => {
      element.style.height = "95%";
    });
    sec2HomePageBanner.forEach((element) => {
      element.style.width = "95%";
    });
    sec2HomePageContent.forEach((element) => {
      element.style.padding = "0 5px";
    });
    sec2PagesBanner.forEach((element) => {
      element.style.width = "25%";
    });
    sec2PagesBtnSvgs.forEach((element) => {
      element.style.width = "22px";
      element.style.height = "22px";
    });
    sec2PagesBtn.forEach((element) => {
      element.style.width = "50px";
      element.style.height = "50px";
    });
    bg.forEach((element) => {
      element.style.width = "100%";
      element.style.height = "33%";
    });
    sec2PageSongs.forEach((element) => {
      element.style.height = "8vh";
    });
    viewSvg.style.fill = "white";
    resizer[0].style.cursor = "ew-resize";
    // sec2Page2Songs.forEach((element) => {
    //   element.style.height = "8vh";
    // });
    mainSection.style.gridTemplateColumns =
      "var(--section-1-width, 0.7fr) 0.001fr 1.7fr 0.001fr var(--section-3-width, 0.6fr)";
  }
});

// document.addEventListener("mousemove", (e) => {
//   if (!isResizing2) return;

//   let newWidth = Math.min(Math.max(e.pageX, 60), 290);
//   document.documentElement.style.setProperty(
//     "--section-1-width",
//     newWidth + "px"
//   );

//   if (newWidth < 290) {

//     document.documentElement.style.setProperty("--section-1-width", 0 + "px");
//     sec3.style.display = "none";
//     sec2.style.position = "relative";
//     sec2.style.width = "1150px";
//     // sec2.style.left = "-190px";

//     sec2Header.style.height = "26%";
//     sec2Header.style.gridTemplateColumns =
//       "repeat(auto-fit, minmax(250px, 1fr))";
//     sec2HeaderDivsPlayBtn.forEach((element) => {
//       element.style.height = "9%";
//       element.style.top = "4%";
//       // element.style.left = "20%";
//       element.classList.add("center");
//     });
//     sec2HeaderDivsPlayBtn[0].style.left = "20%";
//     sec2HeaderDivsPlayBtnOverlay.forEach((element) => {
//       element.style.height = "55px";
//       element.style.width = "55px";
//     });
//     sec2HeaderDivsPlayBtnPlay.forEach((element) => {
//       element.style.height = "50px";
//       element.style.width = "50px";
//     });
//     sec2HeaderDivsPlayBtnSvgs.forEach((element) => {
//       element.style.height = "25px";
//       element.style.width = "25px";
//     });
//     sec2RecentPlaylistPlayBtn.forEach((element) => {
//       element.style.height = "12%";
//       element.style.width = "6%";
//       element.style.top = "70%";
//       element.style.left = "18%";
//     });
//     sec2RecentPlaylistPlayBtnOverlay.forEach((element) => {
//       element.style.height = "60px";
//       element.style.width = "60px";
//     });
//     sec2RecentPlaylistPlayBtnPlay.forEach((element) => {
//       element.style.height = "55px";
//       element.style.width = "55px";
//     });
//     sec2RecentPlaylistPlayBtnSvgs.forEach((element) => {
//       element.style.height = "27px";
//       element.style.width = "27px";
//     });
//     sec2Recent.style.height = "60%";
//     // sec2RecentPlaylistPlayBtn.forEach((element) => {
//     //   element.style.top = "55%";
//     // });
//     sec2RecentPlaylists.forEach((element) => {
//       element.style.height = "100%";
//     });
//     sec2HomePageBanner.forEach((element) => {
//       element.style.width = "85%";
//     });
//     sec2HomePageContent.forEach((element) => {
//       element.style.padding = "0 25px";
//     });
//     sec2PagesBanner.forEach((element) => {
//       element.style.width = "20%";
//     });
//     sec2PagesBtnSvgs.forEach((element) => {
//       element.style.width = "30px";
//       element.style.height = "30px";
//     });
//     sec2PagesBtn.forEach((element) => {
//       element.style.width = "60px";
//       element.style.height = "60px";
//     });
//     bg.forEach((element) => {
//       element.style.width = "100%";
//       element.style.height = "60%";
//     });
//     resizer[0].style.cursor = "default";
//     sec2PageSongs.forEach((element) => {
//       element.style.height = "10vh";
//     });
//     viewSvg.style.fill = "#58cb58";
//     // console.log(sec2Page2Songs)
//     sec2Page2Songs.forEach((element) => {
//       element.style.height = "10vh";
//     });
//     mainSection.style.gridTemplateColumns =
//       "var(--section-1-width, 0.7fr) 0.001fr 1fr";

//   } else if (newWidth > 290) {

//     document.documentElement.style.setProperty(
//       "--section-1-width",
//       290 + "px"
//     );
//     sec3.style.display = "block";
//     sec3.style.width = "300px";
//     sec2.style.position = "relative";
//     sec2.style.width = "827px";

//     sec2Header.style.height = "20%";
//     sec2Header.style.gridTemplateColumns =
//       "repeat(auto-fit, minmax(150px, 1fr))";
//     sec2HeaderDivsPlayBtn.forEach((element) => {
//       element.style.height = "7%";
//       element.style.top = "3%";
//     });
//     sec2HeaderDivsPlayBtn[0].style.left = "22%";
//     sec2HeaderDivsPlayBtnOverlay.forEach((element) => {
//       element.style.height = "35px";
//       element.style.width = "35px";
//     });
//     sec2HeaderDivsPlayBtnPlay.forEach((element) => {
//       element.style.height = "35px";
//       element.style.width = "35px";
//     });
//     sec2HeaderDivsPlayBtnSvgs.forEach((element) => {
//       element.style.height = "17px";
//       element.style.width = "17px";
//     });
//     sec2RecentPlaylistPlayBtn.forEach((element) => {
//       element.style.height = "7%";
//       element.style.width = "5%";
//       element.style.top = "57%";
//       element.style.left = "20%";
//     });
//     sec2RecentPlaylistPlayBtnOverlay.forEach((element) => {
//       element.style.height = "50px";
//       element.style.width = "50px";
//     });
//     sec2RecentPlaylistPlayBtnPlay.forEach((element) => {
//       element.style.height = "47px";
//       element.style.width = "47px";
//     });
//     sec2RecentPlaylistPlayBtnSvgs.forEach((element) => {
//       element.style.height = "20px";
//       element.style.width = "20px";
//     });
//     sec2Recent.style.height = "50%";
//     sec2RecentPlaylists.forEach((element) => {
//       element.style.height = "95%";
//     });
//     sec2HomePageBanner.forEach((element) => {
//       element.style.width = "95%";
//     });
//     sec2HomePageContent.forEach((element) => {
//       element.style.padding = "0 5px";
//     });
//     sec2PagesBanner.forEach((element) => {
//       element.style.width = "25%";
//     });
//     sec2PagesBtnSvgs.forEach((element) => {
//       element.style.width = "22px";
//       element.style.height = "22px";
//     });
//     sec2PagesBtn.forEach((element) => {
//       element.style.width = "50px";
//       element.style.height = "50px";
//     });
//     bg.forEach((element) => {
//       element.style.width = "100%";
//       element.style.height = "33%";
//     });
//     sec2PageSongs.forEach((element) => {
//       element.style.height = "8vh";
//     });
//     viewSvg.style.fill = "white";
//     resizer[0].style.cursor = "ew-resize";
//     // console.log(sec2Page2Songs);
//     sec2Page2Songs.forEach((element) => {
//       element.style.height = "8vh";
//     });
//     mainSection.style.gridTemplateColumns =
//       "var(--section-1-width, 0.7fr) 0.001fr 1.7fr 0.001fr var(--section-3-width, 0.6fr)";
//   }
// });

// document.addEventListener("mouseup", () => {
//   isResizing2 = false;
// });
