document.getElementById("copyright-year").textContent = new Date().getFullYear();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll("[data-required-image]").forEach((image) => {
  image.addEventListener("error", () => {
    image.closest(".iphone-screen")?.classList.add("is-missing-image");
  });
  image.addEventListener("load", () => {
    image.closest(".iphone-screen")?.classList.remove("is-missing-image");
  });
});

const tutorialPreview = document.getElementById("tutorial-preview");
const tutorialCards = document.querySelectorAll(".tutorial-card");

function buildTutorialContent(src, title) {
  if (src.includes("placeholder")) {
    const placeholder = document.createElement("div");
    placeholder.className = "video-placeholder";
    placeholder.innerHTML = `
      <span data-icon="video"></span>
      <strong>${title}</strong>
      <small>Sustituye este enlace por un vídeo vertical real.</small>
    `;
    return placeholder;
  }

  if (src.includes("youtube.com") || src.includes("youtu.be") || src.includes("vimeo.com")) {
    const iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.title = title;
    iframe.allow = "autoplay; encrypted-media";
    iframe.loading = "lazy";
    return iframe;
  }

  const video = document.createElement("video");
  video.src = src;
  video.controls = true;
  video.controlsList = "nodownload nofullscreen noremoteplayback";
  video.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback");
  video.disablePictureInPicture = true;
  video.setAttribute("disablepictureinpicture", "");
  video.playsInline = true;
  video.setAttribute("playsinline", "");
  video.preload = "metadata";
  return video;
}

function selectTutorial(button) {
  tutorialCards.forEach((card) => {
    card.classList.toggle("is-selected", card === button);
    card.setAttribute("aria-pressed", String(card === button));
  });
  tutorialPreview.replaceChildren(buildTutorialContent(button.dataset.video, button.dataset.title));
}

tutorialCards.forEach((button) => {
  button.addEventListener("click", () => selectTutorial(button));
});

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {
  heroVideo.loop = false;
  heroVideo.addEventListener("ended", () => {
    heroVideo.pause();
  });
}

if (tutorialCards[0]) selectTutorial(tutorialCards[0]);

const canvas = document.getElementById("tactical-grid");
const ctx = canvas?.getContext("2d", { alpha: true });
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let width = 0;
let height = 0;
let pixelRatio = 1;
let animationFrame = 0;
let time = 0;

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  width = Math.floor(rect.width);
  height = Math.floor(rect.height);
  canvas.width = Math.floor(width * pixelRatio);
  canvas.height = Math.floor(height * pixelRatio);
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
}

function drawTacticalGrid() {
  time += 0.0045;
  ctx.clearRect(0, 0, width, height);

  const gridSize = width < 640 ? 38 : 52;
  const offsetX = (time * 12) % gridSize;
  const offsetY = (time * 7) % gridSize;
  const minorGrid = gridSize / 4;

  ctx.lineWidth = 1.6;
  for (let x = -minorGrid; x < width + minorGrid; x += minorGrid) {
    const lineX = x + ((time * 5) % minorGrid);
    ctx.strokeStyle = "rgba(12, 122, 57, 0.34)";
    ctx.beginPath();
    ctx.moveTo(lineX, 0);
    ctx.lineTo(lineX, height);
    ctx.stroke();
  }

  for (let y = -minorGrid; y < height + minorGrid; y += minorGrid) {
    const lineY = y + ((time * 3.5) % minorGrid);
    ctx.strokeStyle = "rgba(12, 122, 57, 0.31)";
    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(width, lineY);
    ctx.stroke();
  }

  ctx.lineWidth = 1.6;
  for (let x = -gridSize; x < width + gridSize; x += gridSize) {
    const lineX = x + offsetX;
    ctx.strokeStyle = Math.round(lineX / gridSize) % 4 === 0 ? "rgba(12, 122, 57, 0.62)" : "rgba(12, 122, 57, 0.36)";
    ctx.beginPath();
    ctx.moveTo(lineX, 0);
    ctx.lineTo(lineX, height);
    ctx.stroke();
  }

  for (let y = -gridSize; y < height + gridSize; y += gridSize) {
    const lineY = y + offsetY;
    ctx.strokeStyle = Math.round(lineY / gridSize) % 4 === 0 ? "rgba(67, 191, 224, 0.52)" : "rgba(12, 122, 57, 0.32)";
    ctx.beginPath();
    ctx.moveTo(0, lineY);
    ctx.lineTo(width, lineY);
    ctx.stroke();
  }

  const points = [
    [0.18, 0.34, 0],
    [0.42, 0.22, 1.8],
    [0.67, 0.52, 3.2],
    [0.82, 0.3, 5.1],
    [0.28, 0.72, 2.4],
  ];

  points.forEach(([x, y, phase]) => {
    const blink = (Math.sin(time * 8 + phase) + 1) / 2;
    const pulse = 18 + blink * 28;
    const px = x * width + Math.sin(time + phase) * 16;
    const py = y * height + Math.cos(time * 0.8 + phase) * 12;

    ctx.fillStyle = `rgba(255, 255, 255, ${0.56 + blink * 0.24})`;
    ctx.beginPath();
    ctx.arc(px, py, 13 + blink * 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = `rgba(25, 185, 87, ${0.92 + blink * 0.08})`;
    ctx.beginPath();
    ctx.arc(px, py, 7 + blink * 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = `rgba(25, 185, 87, ${0.36 + blink * 0.38})`;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(px, py, pulse, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = `rgba(25, 185, 87, ${0.78 + blink * 0.22})`;
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.moveTo(px - 20, py);
    ctx.lineTo(px + 20, py);
    ctx.moveTo(px, py - 20);
    ctx.lineTo(px, py + 20);
    ctx.stroke();
  });

  const routes = [
    {
      color: "rgba(241, 200, 68, 1)",
      glow: "rgba(241, 200, 68, 0.28)",
      width: 7,
      points: [
        [0.12, 0.68],
        [0.28, 0.42],
        [0.48, 0.31],
        [0.76, 0.48],
        [0.9, 0.28],
      ],
      phase: 0,
    },
    {
      color: "rgba(25, 185, 87, 0.98)",
      glow: "rgba(25, 185, 87, 0.24)",
      width: 6,
      points: [
        [0.08, 0.28],
        [0.24, 0.2],
        [0.52, 0.26],
        [0.72, 0.16],
      ],
      phase: 2.1,
    },
    {
      color: "rgba(67, 191, 224, 0.98)",
      glow: "rgba(67, 191, 224, 0.24)",
      width: 6,
      points: [
        [0.34, 0.82],
        [0.46, 0.62],
        [0.64, 0.68],
        [0.86, 0.58],
      ],
      phase: 4.2,
    },
  ];

  routes.forEach((route) => {
    const routeProgress = (Math.sin(time * 0.85 + route.phase) + 1) / 2;
    const visibleSegments = Math.max(2, Math.ceil(route.points.length * routeProgress));
    const visiblePoints = route.points.slice(0, visibleSegments).map(([x, y]) => [
      x * width,
      y * height,
    ]);

    ctx.save();
    ctx.strokeStyle = route.glow;
    ctx.lineWidth = route.width + 12;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    visiblePoints.forEach(([px, py], index) => {
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();

    ctx.strokeStyle = route.color;
    ctx.lineWidth = route.width;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.setLineDash([24, 12]);
    ctx.lineDashOffset = -(time * 170 + route.phase * 20);
    ctx.beginPath();
    visiblePoints.forEach(([px, py], index) => {
      if (index === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();

    ctx.setLineDash([]);
    visiblePoints.forEach(([px, py], index) => {
      const dotPulse = (Math.sin(time * 10 + route.phase + index) + 1) / 2;
      ctx.fillStyle = "rgba(255, 255, 255, 0.92)";
      ctx.beginPath();
      ctx.arc(px, py, 5 + dotPulse * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = route.color;
      ctx.beginPath();
      ctx.arc(px, py, 2.8 + dotPulse, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  });

  const symbols = [
    { x: 0.23, y: 0.58, label: "ALFA", color: "rgba(67, 191, 224, 0.95)" },
    { x: 0.62, y: 0.36, label: "BRAVO", color: "rgba(25, 185, 87, 0.95)" },
    { x: 0.78, y: 0.66, label: "OBJ", color: "rgba(243, 52, 82, 0.92)" },
  ];

  symbols.forEach((symbol, index) => {
    const px = symbol.x * width + Math.sin(time * 1.2 + index) * 10;
    const py = symbol.y * height + Math.cos(time * 1.1 + index) * 8;
    ctx.save();
    ctx.translate(px, py);
    ctx.strokeStyle = symbol.color;
    ctx.fillStyle = symbol.color;
    ctx.lineWidth = 3;
    ctx.fillStyle = "rgba(255, 255, 255, 0.88)";
    ctx.fillRect(-15, -15, 30, 30);
    ctx.strokeStyle = symbol.color;
    ctx.strokeRect(-14, -14, 28, 28);
    ctx.fillStyle = symbol.color;
    ctx.font = "900 14px ui-sans-serif, system-ui, sans-serif";
    ctx.fillText(symbol.label, 20, 5);
    ctx.restore();
  });

  ctx.save();
  ctx.fillStyle = "rgba(12, 122, 57, 0.66)";
  ctx.font = "700 11px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  for (let x = gridSize; x < width; x += gridSize * 2) {
    ctx.fillText(String(Math.round(x)).padStart(4, "0"), x + 4, 18);
  }
  for (let y = gridSize; y < height; y += gridSize * 2) {
    ctx.fillText(String(Math.round(y)).padStart(4, "0"), 10, y - 4);
  }
  ctx.restore();

  const sweepX = (time * 140) % (width + 220) - 110;
  const gradient = ctx.createLinearGradient(sweepX - 80, 0, sweepX + 80, 0);
  gradient.addColorStop(0, "rgba(25, 185, 87, 0)");
  gradient.addColorStop(0.5, "rgba(25, 185, 87, 0.28)");
  gradient.addColorStop(1, "rgba(25, 185, 87, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(sweepX - 80, 0, 160, height);

  if (!motionQuery.matches) {
    animationFrame = requestAnimationFrame(drawTacticalGrid);
  }
}

function startGrid() {
  if (!canvas || !ctx) return;
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  drawTacticalGrid();
}

window.addEventListener("resize", startGrid);
motionQuery.addEventListener("change", startGrid);
startGrid();
