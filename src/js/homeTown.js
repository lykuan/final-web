const swiper = document.querySelector(".homeTown__swiper");

const cards = document.querySelectorAll(".card");
swiper.addEventListener("animationiteration", function (e) {
  const active = this.querySelector(".active") || swiper.firstElementChild;
  active.classList.remove("active");
  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    swiper.firstElementChild.classList.add("active");
  }
});
swiper.addEventListener("click", function (e) {
  const active = this.querySelector(".active") || swiper.firstElementChild;
  active.classList.remove("active");
  e.target.closest("li").classList.add("active");
});

// document.documentElement.scrollIntoView({ behavior: "smooth" });
function callback(entries) {
  entries.forEach((entry) => {
    const [cover, content] = entry.target.children;
    if (!entry.isIntersecting) {
      cover.classList.remove("cover_transform");
      content.classList.remove("content_transform");
    }
    if (entry.isIntersecting) {
      cover.classList.add("cover_transform");
      content.classList.add("content_transform");
    }
  });
}
const opt = { root: null, threshold: 0.8 };
const observer = new IntersectionObserver(callback, opt);
cards.forEach((item) => {
  observer.observe(item);
});
