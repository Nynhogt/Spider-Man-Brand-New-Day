const scene = document.querySelector(".scene-3d");

if (scene) {
  scene.addEventListener("mousemove", (event) => {
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    scene.style.setProperty("--mx", `${x * 40}px`);
    scene.style.setProperty("--my", `${y * 40}px`);
    scene.style.setProperty("--rx", `${y * -6}deg`);
    scene.style.setProperty("--ry", `${x * 8}deg`);
  });

  scene.addEventListener("mouseleave", () => {
    scene.style.setProperty("--mx", "0px");
    scene.style.setProperty("--my", "0px");
    scene.style.setProperty("--rx", "0deg");
    scene.style.setProperty("--ry", "0deg");
  });
}

const filters = document.querySelectorAll(".gallery-filter");
const items = document.querySelectorAll("#gallery-grid figure");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filters.forEach((btn) => {
      btn.classList.remove("bg-accent", "text-accent-foreground", "border-accent");
      btn.classList.add("border-border", "text-foreground/60");
    });

    button.classList.add("bg-accent", "text-accent-foreground", "border-accent");
    button.classList.remove("border-border", "text-foreground/60");

    items.forEach((item) => {
      const category = item.dataset.category;
      const show = filter === "todos" || category === filter;
      item.classList.toggle("hidden-item", !show);
    });
  });
});

document.getElementById("btn-trailer")?.addEventListener("click", () => {
  document.getElementById("trailer")?.scrollIntoView({ behavior: "smooth" });
});

const dots = document.querySelectorAll("#carousel-dots span");
let activeDot = 0;

document.querySelector('[aria-label="Próximo"]')?.addEventListener("click", () => {
  activeDot = (activeDot + 1) % dots.length;
  updateDots();
});

document.querySelector('[aria-label="Anterior"]')?.addEventListener("click", () => {
  activeDot = (activeDot - 1 + dots.length) % dots.length;
  updateDots();
});

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("w-8", index === activeDot);
    dot.classList.toggle("bg-accent", index === activeDot);
    dot.classList.toggle("w-4", index !== activeDot);
    dot.classList.toggle("bg-foreground/20", index !== activeDot);
  });
}
