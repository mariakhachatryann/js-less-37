"use strict";
// 1. js - ով ստուգում ենք անում, որ յուզեռը ամեն 100 պիքսելը մեկ սքրոլ անելուց բոդօօ գույնը 
// փոխվի, բոդիի բարձրությունը դնում եք 1000 պիքսել, այսինքն որ 10 անգամ բոդիյի գույնը փոխվի

// 2․ գույների համար ստեղծում եք ֆունկցիա, որը գեներացնելու ա ռանդոմ գույներ

// 3․ էնպես եք անում, որ երբ որ յուզեռը սքրոլ անի մինչև ամենավերջ կնոպկա հայտնվի, որը թույլ 
// կտա որ յուզեռը վերադառնա սկիզբ

const body = document.body;
const up = document.querySelector("[data-up]");

function randomColors(){
  const red = parseInt(Math.random() * 256).toString(16);
  const green = parseInt(Math.random() * 256).toString(16);
  const blue = parseInt(Math.random() * 256).toString(16);
  const color = "#" + red + green + blue;

  return color;
}

body.onscroll = function () {
  let scr = window.pageYOffset;
  for(let i = 0; i < scr; i += 100){
    body.style.backgroundColor = `${randomColors()}`; 
  } 
  up.style.display = scr >= body.scrollHeight - 700 ? "block" : "none";
};

up.addEventListener("click", ()=>{
  document.documentElement.scrollTop = 0;
});

