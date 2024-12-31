/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let mensaje =
    getTextValue(who) +
    " " +
    getTextValue(action) +
    " " +
    getTextValue(what) +
    " " +
    getTextValue(when);
  console.log(mensaje);

  const heading = document.getElementById("excuse");

  // Set the innerHTML property with a new value
  heading.innerText = mensaje;
};

function getTextValue(p_array) {
  let index = getRandomIndex(p_array);
  return p_array[index];
}

function getRandomIndex(p_array) {
  return Math.floor(Math.random() * p_array.length);
}
