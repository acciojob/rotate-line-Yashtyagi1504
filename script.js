let line = document.querySelector("#line");
let degree = 0;

function linee() {
	setInterval(()=>{
		line.style.transform = `rotate(${degree}deg)`;
		degree += 2;
	},20)
}

linee();