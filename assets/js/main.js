// ===================dark-modeSwitch=================
const lightMode = document.querySelector(".label");

lightMode.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
});

// ===================active==========================
const isActive = document.querySelectorAll(".sidebar__link");
const container = document.querySelectorAll(".container");

isActive.forEach((e) => {
  e.addEventListener("click", () => {
    // remove active
    isActive.forEach((c) => c.classList.remove("is-active"));

    // remove show
    container.forEach((e) => e.classList.remove("show"));
    e.classList.add("is-active");

    //add value id
    const mainShow = document.querySelector(`#${e.id}__content`);
    mainShow.classList.add("show");
  });
});
// ===================play__video==========================
const videos = document.querySelectorAll(".video");

videos.forEach((e) => {
  e.addEventListener("mouseover", () => {
    const vid = e.querySelector("video");

    vid.play();
  });

  e.addEventListener("mouseleave", () => {
    const vid = e.querySelector("video");
    vid.pause();
  });
});

//  ==================Click video====================
// ===================show-menu-dropdown==============
