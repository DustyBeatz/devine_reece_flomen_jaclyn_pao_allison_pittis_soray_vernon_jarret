(function() {
	"use strict";
	console.log("SEAF fired");

  var hot = document.getElementById('hot');
  var cold = document.querySelector("#cold");


function changeTempHot() {
  console.log();
  document.querySelector('#tempNumber').innerHTML = (i=20, i++);
}

  hot.addEventListener("click", changeTempHot, false);


	var kitchen = document.getElementById('Kitchen');
	function openKitchen() {
		console.log()
	  document.querySelector('#kitchenOpen').style.display = "block";
	}
	kitchen.addEventListener("click", openKitchen, false);

}());
