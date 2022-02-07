"use strict";


const input = document.querySelector("input"),
  button = document.querySelector("button"),
  Capital = document.querySelector(".capital h3"),
  Flag = document.querySelector(".right"),
  Population = document.querySelector(".population h3"),
  Region = document.querySelector(".region h3"),
  Currency = document.querySelector(".currency h3"),
  Img = document.querySelector("img");

button.addEventListener("click", function(e) {
  e.preventDefault();
  fetch(`https://restcountries.com/v3.1/name/${input.value}`)
    .then(response => response.json())
    .then(data => {
      const { capital, population, region, coatOfArms, currencies } = data[0]
      Capital.textContent = capital;
      Population.textContent = population;
      Region.textContent = region;
      Flag.style.backgroundImage = coatOfArms.png;
      Img.src = coatOfArms.png;

      for(let key in currencies) {
        Currency.textContent = `${key} ${currencies[key].symbol}`;
      }

      console.log(data);

    })
});