

window.onload=function(){

  const hamburger = document.querySelector(".hamburger");
  const headerList = document.querySelector(".header-list");
  const logo = document.querySelector(".header-logo");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
    logo.classList.toggle("active");
  })



  let http = new XMLHttpRequest();

  http.open('get', 'pets.json', true);

  http.send();

  http.onload = function(){

    if(this.readyState == 4 && this.status == 200){
      let pets = JSON.parse(this.responseText);

      let output = '';

      for(let item of pets){
        output += `
        <div class="our-friends-card item swiper-slide">
              <img src="${item.img}" alt="${item.img}" class="our-friends-img">
                <div class="container-our-friends">
                <h3 class="our-friends-name">${item.name}</h3>
                <button type="button" onclick="" class="our-friends-learn-button">Learn more</button>
              </div>
            </div>
          `;
      }

      document.querySelector(".our-friends-three").innerHTML = output;
    }
  }
}

//swiper start
  

function next(t){
    let elm = t.parentElement.children[1];
    let item = elm.getElementsByClassName("item");
    elm.append(item[0]);
}

function prev(t){
  let elm = t.parentElement.children[1];
  let item = elm.getElementsByClassName("item");
  elm.prepend(item[item.length - 1]);
}
