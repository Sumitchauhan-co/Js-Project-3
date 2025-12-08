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
let s1, s2, s3, s4;
let list = [s1, s2, s3, s4];

for (let i = 0; i < list.length; i++) {
  list[i] = document.querySelector(`#volume-icon-${i + 1}`);
}

s1 = list[0];
s2 = list[1];
s3 = list[2];
s4 = list[3];

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
    s1.classList.remove("display-none");
  } else if (currentVol * 100 > 33.3) {
    s2.classList.remove("display-none");
  } else if (currentVol * 100 > 0) {
    s3.classList.remove("display-none");
  } else if (currentVol * 100 == 0) {
    s4.classList.remove("display-none");
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
    // console.log(window.innerHeight,window.innerWidth)
    if (window.innerWidth < 340) {
      document.querySelector(".not-available").style.display = "grid";
      document.querySelector(".not-available").style.textAlign = "center";
    } else if (window.innerWidth > 1025 && window.innerWidth < 1150) {
      document.querySelector(".not-available").style.display = "grid";
      document.querySelector(".not-available").style.textAlign = "center";
    } else if (window.innerWidth > 715 && window.innerWidth < 894) {
      document.querySelector(".not-available").style.display = "grid";
      document.querySelector(".not-available").style.textAlign = "center";
    } else {
      document.querySelector(".not-available").style.display = "none";
    }
  });
});


// Average color

let listSrc = [];
let avgColor = [];

async function bgCover() {
  if(window.innerWidth < 1025) return;
  if(window.innerWidth < 1500 && window.innerWidth > 1575) return;

  let a = await fetch("json/section1.json");
  let playlists = await a.json();

  for (let i = 0; i < playlists.length; i++) {
    listSrc[i] = playlists[i].cover;
  }

  for (let i = 0; i < listSrc.length; i++) {
    avgColor[i] = await getAverageFromUrl(listSrc[i]);
  }


  const avgColorContainer = document.querySelector(
    ".section-2 .header-container"
  );
  const divs = document.querySelectorAll(
    ".section-2 .container-class .playlists-container > div"
  );

  const defaultBg = "#111111";

  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("mouseenter", () => {
      avgColorContainer.style.background = `linear-gradient(180deg, ${avgColor[i]}, #111111)`
    });

    divs[i].addEventListener("mouseleave", () => {
      // avgColorContainer.style.background = defaultBg;
    });
  }
}

bgCover();

function getAverageColor(imgEl) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = imgEl.naturalWidth;
  canvas.height = imgEl.naturalHeight;

  ctx.drawImage(imgEl, 0, 0);

  const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

  let r = 0,
    g = 0,
    b = 0;
  a = 0;
  let count = data.length / 4;

  for (let i = 0; i < data.length; i += 4) {
    r += data[i];
    g += data[i + 1];
    b += data[i + 2];
    a += data[i + 3];
  }

  r = Math.round(r / count);
  g = Math.round(g / count);
  b = Math.round(b / count);
  a = (a / (count * 255)).toFixed(2);

  return `rgba(${r}, ${g}, ${b}, ${a*0.75})`;
}

async function getAverageFromUrl(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;

    img.onload = () => {
      const avg = getAverageColor(img);
      resolve(avg);
    };
    img.onerror = () => reject("Image failed to load");
  });
}
