(function() {
	"use strict";
	console.log("SEAF fired");

  var hot = document.getElementById('hot');
  var cold = document.getElementById('cold');
	var temp = document.getElementById('tempNumber').value;

function changeTempHot() {
  console.log();
	for(var i=0; i<temp.value; i++){
		hot[i].addEventListener("click", changeTempHot, false);
	}
}

function changeTempCold() {

	for(var i=0; i>20; i--){
		console.log(i);
		cold[i].addEventListener("click", changeTempCold, false);
	}
}


	var kitchen = document.getElementById('Kitchen');
	function openKitchen() {
		console.log()
	  document.querySelector('#kitchenOpen').style.display = "block";
	}
	kitchen.addEventListener("click", openKitchen, false);

}());
