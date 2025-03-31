import observer from "@cocreate/observer";

function init() {
	let elements = document.querySelectorAll("[background-color='random']");
	initElements(elements);
}

function initElements(elements) {
	for (let el of elements) {
		el.style.backgroundColor = randomColor();
	}
}

export function randomColor() {
	let defaultSaturation = 75;
	let defaultLightness = 58;
	let defaultAlpha = 1;
	let hash = Math.floor(Math.random() * 360);
	return (
		"hsla(" +
		hash +
		", " +
		defaultSaturation +
		"%, " +
		defaultLightness +
		"%, " +
		defaultAlpha +
		")"
	);
}

observer.init({
	name: "CoCreateRandomColor",
	types: ["addedNodes"],
	selector: '[background-color="random"]',
	callback: (mutation) => {
		init(mutation.target);
	}
});

init();

export default { randomColor };
