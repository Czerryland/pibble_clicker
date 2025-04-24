const pibbclick = document.getElementById("pibbclick");
const pointdisplay = document.getElementById("point-display");;
const animbox = document.getElementById("animbox");
const washingtonUpgrade = document.getElementById("washington-buy");
const emopibbUpgrade = document.getElementById("emopibble-buy");



let score = 0;
let pibblePower = 1;
let pibbMultiplayer = 1;

let emopibbs = 0;

function updateScore(increment){
    score += increment;
    pointdisplay.textContent = "Pibbs: "+score;
}

function idlePibbs(){
    updateScore(5 * emopibbs)
}

pibbclick.addEventListener('click',()=>{
    updateScore(pibblePower);
    animbox.classList.remove('pibbClickAnim');
    void animbox.offsetWidth; 
    animbox.classList.add('pibbClickAnim');
});

washingtonUpgrade.addEventListener('click',()=>{
    if (score >=10){
        updateScore(-10);
        pibblePower += 1;
    }
});

emopibbUpgrade.addEventListener('click',()=>{
    if (score >=15){
        updateScore(-15);
        emopibbs += 1;
    }
});

setInterval(idlePibbs, 5000)
