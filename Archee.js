// making the navbar appear and disappear when scrolling

var prevScroll = window.pageYOffset;
window.addEventListener("scroll", function () {
  var currentScroll = window.pageYOffset;
  var header = document.querySelector("nav");
  if (prevScroll > currentScroll) {
    header.style.visibility = "visible";
  } else {
    header.style.visibility = "hidden";
  }
  prevScroll = currentScroll;
});

// progressBar
var progressBar = document.querySelector(".ideas .seo .level span");
var progressStep = 5; // Set the fixed progress increment here
var maxProgress = 90; // Set the maximum progress here
window.addEventListener("scroll", function () {
  var scrollTop = document.documentElement.scrollTop;
  var windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var progress = Math.min(
    Math.floor(((scrollTop / windowHeight) * 100) / progressStep) *
      progressStep,
    maxProgress
  );
  progressBar.style.width = progress + "%";
});

let parentSection = document.querySelector(".ideas");
var counterValue = 0;

var progressStep = 5; // Set the fixed progress increment here
var maxProgress = 90; // Set the maximum progress here

window.onscroll = function () {
  let skillOffsetTop = parentSection.offsetTop;
  let skillOuterHeight = parentSection.offsetHeight;
  let windowHeight1 = this.innerHeight;
  let windowScrollTop = this.pageYOffset;

  var scrollTop = document.documentElement.scrollTop;
  var windowHeight2 =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  var numcounter = skillOffsetTop + skillOuterHeight - windowHeight1;
  console.log(numcounter);
  var progress = Math.min(
    Math.floor(((scrollTop / windowHeight2) * 100) / progressStep) *
      2 *
      progressStep,
    numcounter
  );
  var progress2 =
    Math.min(
      Math.floor(((scrollTop / windowHeight2) * 100) / progressStep) *
        2 *
        progressStep,
      numcounter
    ) + 30;
  if (windowScrollTop > skillOffsetTop + skillOuterHeight - windowHeight1) {
    let progressBar = document.querySelectorAll(" .ideas .level span");
    let counter = document.querySelector(".ideas .seo .num");
    let counter2 = document.querySelector(".ideas .web .num");

    progressBar.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
    counterValue = progress;
    counter.innerHTML = counterValue + "%";
    counter2.innerHTML = progress2 + "%";
  }
};

// change the AverageNum
let progressAverage = document.querySelectorAll(" .average  span");
var averageNum = 1;

window.addEventListener("scroll", function () {
  progressAverage.forEach((aver) => {
    averageNum = averageNum + 20;
    aver.innerHTML = averageNum;
  });
});

// toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  this.classList.toggle("fa-spin");
  this.classList.toggle("spin");
  document.querySelector(".settings-box").classList.toggle("open");
};

//  set colors in localstorage
if (localStorage.getItem("colorProperty") != null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("colorProperty")
  );

  // add active to the element
  document.querySelectorAll(" .colors-list li").forEach((element) => {
    element.classList.remove("active");

    if (localStorage.getItem("colorProperty") === element.dataset.color) {
      element.classList.add("active");
    }
  });
}

// switch colors
const clolorsli = document.querySelectorAll(".colors-list li");

clolorsli.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    localStorage.setItem("colorProperty", e.target.dataset.color);
    e.target.parentElement.querySelectorAll(".active").forEach((ele) => {
      ele.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
let backgroundOption = true;
let backgroundInterval;

// reset button
document.querySelector(".reset-options").addEventListener("click", function () {
  localStorage.removeItem("bulletDispaly");
  localStorage.removeItem("background-option");
  localStorage.removeItem("colorProperty");
  window.location.reload();
});

// loading page

var loadingPage = document.querySelector(".loading-page");

window.onload = function () {
  setTimeout(function () {
    loadingPage.style.display = "none";
  }, 3000);
};

// cursor animation
document.onmousemove = function (e) {
  var spin = document.querySelector("#spin");
  spin.style.left = e.clientX - "17" + "px";
  spin.style.top = e.clientY - "17" + "px";
};
