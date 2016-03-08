window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
			var naziv = opomnik.querySelector(".naziv_opomnika").innerHTML;
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if(cas === 0) {
				alert("Opomnik!\n\nZadolžitev '" + naziv + "' je potekla!");
				document.querySelector("#opomniki").removeChild(opomnik);
			} else {
				cas--;
				opomnik.querySelector("span").innerHTML = cas;
			}
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});