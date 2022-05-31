

window.onload=function(){

  const hamburger = document.querySelector(".hamburger");
  const headerList = document.querySelector(".header-list");
  const logo = document.querySelector(".header-logo");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
    logo.classList.toggle("active");
  })
}
