document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".contact-sec");
  const slideElements = section.querySelectorAll(".slide-left");
  const rightImage = section.querySelector(".slide-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /* LEFT SIDE STAGGER ANIMATION */
          slideElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("animate");
            }, index * 250);
          });

          /* RIGHT IMAGE ANIMATION */
          setTimeout(() => {
            rightImage.classList.add("animate");
          }, 400);
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  observer.observe(section);
});

/* PARALLAX EFFECT */
document.addEventListener("DOMContentLoaded", function () {
  const imgs = document.querySelectorAll(
    ".image-container img, .about-img img, .hero-student-img img",
  );

  document.addEventListener("mousemove", function (e) {
    let x = (window.innerWidth / 2 - e.clientX) / 60;
    let y = (window.innerHeight / 2 - e.clientY) / 60;

    imgs.forEach((img) => {
      img.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
});

// yellow rise up animation
const aboutImg = document.querySelector(".about-img");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutImg.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

observer.observe(aboutImg);

// section appeared slowly
const aboutSection = document.querySelector(".bbt-dp-about");

const appeared = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

appeared.observe(aboutSection);

// right to left about section appeared
document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".bbt-dp-about");
  const aboutText = document.querySelector(".animate-text");
  const aboutBtn = document.querySelector(".animate-btn");

  if (!aboutSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutText.classList.add("show");

          setTimeout(() => {
            aboutBtn.classList.add("show");
          }, 800);
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(aboutSection);
});

const footer = document.querySelector(".bbt-FA-main-footer");

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        footer.classList.add("animate");
      }
    });
  },
  {
    threshold: 0.4,
  },
);

footerObserver.observe(footer);

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 },
);

document
  .querySelectorAll(".section-title, .award")
  .forEach((el) => scrollObserver.observe(el));

const recognitionSection = document.querySelector(".recognition-sec");
const awards = document.querySelectorAll(".award");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        awards.forEach((award) => {
          award.classList.add("show");
        });
      }
    });
  },
  { threshold: 0.35 },
);

sectionObserver.observe(recognitionSection);

// hero section
// const bg = document.querySelector(".burgundy-bg");
// const hero = document.querySelector(".bbt-dp-hero");

// window.addEventListener("scroll", () => {
//   const rect = hero.getBoundingClientRect();
//   const windowHeight = window.innerHeight;

//   let progress = 1 - rect.bottom / (windowHeight + rect.height);

//   progress = Math.max(0, Math.min(progress, 1));

//   let width = 40 + progress * 60; // from 40vw → 100vw

//   bg.style.width = width + "vw";
// });

// hero txt
const text = "Indian leaders";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// zoom in out on scroll
const title = document.querySelector(".main-title");

let scale = 1;

window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    // scroll down → zoom in
    scale += 0.05;
    title.style.opacity = "0.5";
  } else {
    // scroll up → zoom out
    scale -= 0.05;
    title.style.opacity = "1";
  }

  // limit zoom
  scale = Math.max(1, Math.min(scale, 1.3));

  title.style.transform = `scale(${scale})`;
});
