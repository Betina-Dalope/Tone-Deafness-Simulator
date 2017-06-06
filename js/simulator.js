window.onload = function() {
	test();
	//simulator.init();
}
function test() {
	console.log("test");
}
var simulator = {
	interval: null,
	target: null,
	init: function() {
		effect.setPitchOffset(0);
		outputMix.gain.value = 0;
	},
	startSimulation: function() {
		var onButtons = document.getElementById("simulator").getElementsByClassName("on");
		// onButtons.forEach(function(item) {
		// 	item.classList.remove("on");
		// });
		for (var i = 0; i < onButtons.length; i++) {
			onButtons[i].classList.remove("on");
		}
		this.target.className += " on";
		outputMix.gain.value = 1;
		this.interval = null;
	},
	endSimulation: function() {
		this.target.classList.remove("on");
		outputMix.gain.value = 0;
		clearInterval(this.interval);
	},
	simulationIsOn: function(target) {
		this.target = target;
		console.log(this.target.classList.contains("on"))
		return this.target.classList.contains("on");
	},
	toggleNormal: function(target) {
		if (this.simulationIsOn(target)) {
			this.endSimulation();
		}
		else {
			this.startSimulation();
		}
	},
	toggleToneDeaf: function(target) {
		if (this.simulationIsOn(target)) {
			this.endSimulation();
		}
		else {
			this.startSimulation();

			var min = -0.2;
			var max = 0.2;
			
			this.interval = setInterval(function() {
				var rand = Math.random() * (max - min) + min;
				effect.setPitchOffset(rand);
			}, 3000);	
		}
	}


}