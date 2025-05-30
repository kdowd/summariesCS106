

let theme = localStorage.getItem("theme") || "light";
const thegroup = document.querySelector(".surface-samples ");

if (!!thegroup) {
  thegroup.addEventListener("click", setInfo);
}

function setInfo(evt) {
  let t = evt.target;
  let n = t.closest("div");
  let attr = n.getAttribute("data-group");

  if (typeof attr == "string") {
    hideAllInformation();
    showSingleInformation(attr);
    n.classList.add("hilight-button");
  }

  let temp = Array.from(n.parentElement.children);

  temp.forEach((el) => {
    if (el != n) {
      el.classList.remove("hilight-button");
    }


  });
}

function showSingleInformation(s) {
  //data-information="jason"

  let target = document.querySelector(`section[data-information="${s}"`);

  console.log(target);

  if (!!target) {
    target.classList.remove("hide-information");
    target.classList.add("show-information");

    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    if (mediaQueryList.matches) {
      target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }


  }

  //let theList = document.querySelectorAll('section[data-information');
}

function hideAllInformation() {
  let theList = document.querySelectorAll("section[data-information");
  theList.forEach((e) => {
    e.classList.remove("show-information");
    e.classList.add("hide-information");
  });
}
