const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const staus = document.getElementById('statusOfSwitch');

let isLightOn = false;

lightswitch.addEventListener('click', function(){
    if(isLightOn) {
        lightbulb.src = "lightOff.png";
        lightbulb.src = "switchOff.png";
        staus.textContent ="TURN ON THE LIGHT";
    }else{
        lightbulb.src ="lightOn.png" ;
        lightswitch.src = "switchOn.png";
        status.textContent="YOU DID IT! Now, Turn OFF the Lights"
    }
   isLightOn = !isLightOn; 
}

);