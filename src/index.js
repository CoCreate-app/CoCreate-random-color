let defaultSaturation = 75;
let defaultLightness = 58;
let defaultAlpha = 1;


function updateRandomColor(){
  let elements = document.querySelectorAll("[background-color='random']");
  for(let el of elements){
    el.style.backgroundColor = randomHSLColor();
  }
}

function randomHSLColor(){
  var hash = Math.floor(Math.random() * (360));
  return 'hsla('+hash+', '+defaultSaturation+'%, '+defaultLightness+'%, '+defaultAlpha+')';
}

const CoCreateRandomColor = { randomHSLColor, randomHSLColor };
export default CoCreateRandomColor;
