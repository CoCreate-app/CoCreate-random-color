let defaultSaturation = 75;
let defaultLightness = 58;
let defaultAlpha = 1;


function updateRandomColor(){
  let avatars = document.querySelectorAll("[data-background_color='random']");
  for(let el of avatars){
    el.style.backgroundColor = randomHSLColor();
  }
}

function randomHSLColor(){
  var hash = Math.floor(Math.random() * (360));
  return 'hsla('+hash+', '+defaultSaturation+'%, '+defaultLightness+'%, '+defaultAlpha+')';
}
