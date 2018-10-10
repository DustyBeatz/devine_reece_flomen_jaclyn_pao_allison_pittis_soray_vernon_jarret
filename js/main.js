(function() {
	"use strict";
	console.log("SEAF fired");

  var hot = document.getElementById('hot');
  var cold = document.querySelector("#cold");
	var temp = document.getElementById('tempNumber');

function changeTempHot() {
  console.log();
	for(var i=20; i<temp.value; i++){
		hot[i].addEventListener("click", changeTempHot, false);
	}
}

function changeTempCold(evt) {
  console.log(evt);
	for(var i=20; i<temp.value; i--){
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
