"use strict";


const input = document.querySelector("input"),
  button = document.querySelector("button"),
  capital = document.querySelector(".capital h3"),
  flag = document.querySelector(".right"),
  population = document.querySelector(".population h3"),
  region = document.querySelector(".region h3"),
  currency = document.querySelector(".currency h3"),
  img = document.querySelector("img");


button.addEventListener("click", function() {
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then(response => response.json())
    .then(data => {
      capital.textContent = data[0].capital;
      population.textContent = data[0].population;
      region.textContent = data[0].region;
      flag.style.backgroundImage = data[0].coatOfArms.png;
      img.src = data[0].coatOfArms.png;

      for(let key in data[0].currencies) {
        currency.textContent = `${key} ${data[0].currencies[key].symbol}`;
      }

    })
});