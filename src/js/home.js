const sideSpan = document.querySelectorAll(".side__close>span");
const sideClose = document.querySelector(".side__close");
const sideMenu = document.querySelector(".side");
const sections = document.querySelectorAll(".hidden");
const nav = document.querySelector(".nav");

sideClose.addEventListener("click", function (e) {
  let tag = false;
  if (this.dataset.checked == "false") tag = !false;
  else tag = !true;
  this.dataset.checked = tag;
  if (this.dataset["checked"] == "true") {
    this.classList.add("ani-openSide");
    sideMenu.classList.add("ani-showSide");
  } else {
    this.classList.remove("ani-openSide");
    sideMenu.classList.remove("ani-showSide");
  }
});

const optObj = {
  root: null,
  threshold: 0.1,
  rootMargin: "30px",
};

const observer = new IntersectionObserver(observerCall, optObj);
sections.forEach((section) => observer.observe(section));

function observerCall(entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
}
