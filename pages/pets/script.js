

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
      let popup = '';

      for(let item of pets){
        output += `
        <div class="our-friends-card item swiper-slide">
              <img src="${item.img}" alt="${item.img}" class="our-friends-img">
                <div class="container-our-friends">
                <h3 class="our-friends-name">${item.name}</h3>
                <button type="button" onclick="" class="our-friends-learn-button"><a href="#popup__${item.name}">Learn more</a></button>
              </div>
            </div>
          `;

      }


      document.querySelector(".our-friends-wrapper-flex1").innerHTML = output;

      for(let pop of pets){
        popup += `
        <div class="popup" id="popup__${pop.name}">


          <div class="popup__body">
            <button type="button" class="popup__cross"><a href="#" class="popup__close">.</a></button>
        <div class="popup__content popup__${pop.name}">
        <div class="popup__img">
          <img src="${pop.img}" alt="${pop.name}" class="popup__img">
        </div>

        <div class="popup__text">
          <div class="popup__title">${pop.name}</div>
            <div class="type__breed">
              <div class="popup__type">${pop.type} -&nbsp</div>

              <div class="popup__breed">${pop.breed}</div>
            </div>
          <div class="popup__description">
            ${pop.description}
          </div>
          <div class="popup__info">

              <li class="popup__info__list">Age: <span class="popup__info__data">${pop.age}</span></li>
              <li class="popup__info__list">Inoculations: <span class="popup__info__data">${pop.inoculations}</span></li>
              <li class="popup__info__list">Diseases: <span class="popup__info__data">${pop.diseases}</span></li>
              <li class="popup__info__list">Parasites: <span class="popup__info__data">${pop.parasites}</span></li>

          </div>
        </div>
        </div>
          `;
      }

      document.querySelector(".popup__overall").innerHTML = popup;
    }
  }
}
