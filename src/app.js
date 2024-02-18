/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  //write your code here
  let who = ["My dog", "My cat", "My Girlfriend", "My bird"];
  let action = [" hid", " torn", " spoiled", " broke"];
  let what = [" homework", " my bag", " the key", " my airpods"];
  let when = [
    " before class.",
    " when I finished.",
    " during my lunch.",
    " this morning."
  ];
  // new variable to get each random piece generated
  let whoR = who[Math.floor(Math.random() * who.length)];
  let actionR = action[Math.floor(Math.random() * action.length)];
  let whatR = what[Math.floor(Math.random() * what.length)];
  let whenR = when[Math.floor(Math.random() * when.length)];
  //the final variable to concat them
  let finalp = whoR.concat(actionR, whatR, whenR);
  // And finally we assign tag P the new value
  document.getElementById("randomp").innerHTML = finalp;
};
