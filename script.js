let slides = document.querySelector(".slides");
let slideImg = document.querySelectorAll(".slides .item");
currentIdx = 0;
slideCount = (slideImg.length) - 5;
// slideCount = 12;
prev = document.querySelector(".prev");
next = document.querySelector(".next");
slideWidth = 230;
slideMargin = 10;

makeClone();
initfunction();

function makeClone(){
  let cloneSlide_first = slideImg[0].cloneNode(true); //slideImg.firstElementChild.cloneNode(true);
  let cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first); 
  slides.insertBefore(cloneSlide_last,slides.firstElementChild);
}

function initfunction(){
  slides.style.width = (slideWidth + slideMargin) * (slideCount+2) + "px";
  slides.style.left = -(slideWidth + slideMargin) + "px";
}

next.addEventListener('click', function () {
  if (currentIdx <= slideCount-1) {
    slides.style.left = -(currentIdx+2) * (slideWidth+slideMargin) + "px";
    slides.style.transition = `${1}s ease-out`;
  }if (currentIdx === slideCount-1){
    setTimeout(function(){
      slides.style.left = -(slideWidth + slideMargin) + "px";
      slides.style.transition = `${0}s ease-out`;
    },250);
    currentIdx = -1;
    } 
    currentIdx+=1;
  }
);

prev.addEventListener('click', function () {
  console.log(currentIdx);
    if (currentIdx >= 0) {
      slides.style.left = -(currentIdx) * (slideWidth + slideMargin) + "px";
      slides.style.transition = `${1}s ease-out`;
    }if (currentIdx === 0){
      setTimeout(function(){
        slides.style.left = -(slideCount) * (slideWidth + slideMargin)+ "px";
        slides.style.transition = `${0}s ease-out`;
      },250);
      currentIdx=slideCount;
      } 
      currentIdx-=1;
    }
);


  // const slides = document.querySelector(".slides");
  // const slideImg = document.querySelectorAll(".slides .item");
  // let currentIdx = 0;
  // const slideCount = (slideImg.length) - 5;
  // // const slideCount = 19;
  // console.log(slideCount)
  // const prev = document.querySelector(".prev");
  // const next = document.querySelector(".next");
  // const slideWidth = 230;
  // const slideMargin = 10;

  // slides.style.width = (slideWidth + slideMargin) * slideCount + "px";

  // function moveSlide(num) {
  //     slides.style.left = -num * 240 + "px";
  //     currentIdx = num;
  // }

  // prev.addEventListener("click", function() {
  //     if (currentIdx !==0) moveSlide(currentIdx - 1);
  // }
  // );

  // next.addEventListener("click", function() {
  //     if (currentIdx !== slideCount - 1) {
  //         console.log('a');
  //         moveSlide(currentIdx + 1);            
  //     }
  // }
  // );