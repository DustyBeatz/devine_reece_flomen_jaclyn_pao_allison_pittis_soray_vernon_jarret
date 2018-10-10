(function() {
	"use strict";
	console.log("SEAF fired");

  var hot = document.querySelector("#hot");
  var cold = document.querySelector("#cold");
  var temp = document.querySelector("#tempNumber");


function changeTempHot() {
  console.log();
  temp.value.innerHTML = (i=20, i++);
}

  hot.addEventListener("click", changeTempHot, false);
