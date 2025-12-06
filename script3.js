// 1. block screen rotate

const warning = document.getElementById("rotate-warning");

function isMobileDevice() {
  return window.matchMedia("(max-width: 1025px)").matches;
}

function handleOrientationChange() {
  if (!isMobileDevice()) {
    warning.style.display = "none";
    return;
  }

  const isLandscape = window.matchMedia("(orientation: landscape)").matches;
  warning.style.display = isLandscape ? "flex" : "none";
}

handleOrientationChange();

if (screen.orientation && screen.orientation.addEventListener) {
  screen.orientation.addEventListener("change", handleOrientationChange);
} else {
  window.addEventListener("orientationchange", handleOrientationChange);
}

window.addEventListener("resize", handleOrientationChange);

// 2. Full screen

let fullScreenSvg1 = document.querySelector(".full-screen svg:nth-child(1)"),
  fullScreenSvg2 = document.querySelector(".full-screen svg:nth-child(2)");

document.querySelector(".full-screen").addEventListener("click", async () => {
  try {
    if (document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    }
    await screen.orientation.lock("portrait");
  } catch (err) {
    console.warn("⚠ Orientation lock failed:", err);
  }
});

document.querySelector(".full-screen").addEventListener("click", () => {
  try {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  } catch (err) {
    console.warn("⚠ exit failed:", err);
  }
});

document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    fullScreenSvg1.classList.add("display-none");
    fullScreenSvg2.classList.remove("display-none");
  } else {
    fullScreenSvg2.classList.add("display-none");
    fullScreenSvg1.classList.remove("display-none");
  }
});

// 3. Volume Control
let s1,s2,s3,s4;
let list = [s1,s2,s3,s4]

for (let i = 0; i < list.length; i++) {
  list[i] = document.querySelector(`#volume-icon-${i + 1}`);
}

s1=list[0]
s2=list[1]
s3=list[2]
s4=list[3]

const volumeSlider = document.querySelector("#volume-slider");
let currentVol = 1.0;

volumeSlider.addEventListener("input", (e) => {
  currentVol = parseFloat(e.target.value);
  if (b) b.volume = currentVol;
  e.target.style.setProperty("--volume-progress", currentVol * 100 + "%");
  list.forEach((e) => {
    e.classList.add("display-none");
  });
  if (currentVol * 100 > 66.6) {
    s1.classList.remove("display-none")
  }
  else if(currentVol * 100 > 33.3){
    s2.classList.remove("display-none")
  }
  else if(currentVol * 100 > 0){
    s3.classList.remove("display-none")
  }
  else if(currentVol * 100 == 0){
    s4.classList.remove("display-none")
  }
});

// screen load

// window.addEventListener("load", () => {
//   const preloader = document.getElementById("preloader");
//   preloader.style.opacity = "0";
//   preloader.addEventListener("transitionend", () => {
//     preloader.remove();
//   });
// });

// Promise.all([
//   fetch("json/songs2.json"),
//   fetch("json/songs3.json"),
//   fetch("json/section1.json"),
// ]).then(() => {
//   window.dispatchEvent(new Event("load"));
// });

document.onreadystatechange = () => {
  const preloader = document.getElementById("preloader");

  if (document.readyState !== "complete") {
    preloader.style.display = "flex";
    document.body.style.overflow = "hidden"; // prevent scroll during load
  } else {
    document.body.style.overflow = "revert";
    document.body.style.height = "100vh";
    preloader.style.opacity = "0";
    preloader.addEventListener("transitionend", () => {
      preloader.remove();
    });
  }
};

// Tab device unavailable

["resize", "load"].forEach((evt) => {
  window.addEventListener(evt, () => {
    if (window.innerWidth < 340) {
      document.querySelector(".not-available").style.display = "grid";
    } else if (window.innerWidth > 1025 && window.innerWidth < 1150) {
      document.querySelector(".not-available").style.display = "grid";
    } else if (window.innerWidth > 715 && window.innerWidth < 894) {
      document.querySelector(".not-available").style.display = "grid";
    } else {
      document.querySelector(".not-available").style.display = "none";
    }
  });
});

// console.log(window.innerHeight, window.innerWidth);
