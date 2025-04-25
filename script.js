const pibbclick = document.getElementById("pibbclick");
const pointdisplay = document.getElementById("scorenum");
const animbox = document.getElementById("animbox");
const washingtonUpgrade = document.getElementById("washington-buy");
const emopibbUpgrade = document.getElementById("emopibble-buy");
const bigPibbleContainer = document.getElementById('pibble')


let score = 0;
let pibblePower = 1;
let pibbMultiplayer = 1;
let scoreSizeMultiplayer =1 ;


let emopibbs = 0;

function updateScore(increment){
    score += increment;
    pointdisplay.textContent = score;
    pointdisplay.style.transition = 'transform 0.3s ease';
    scoreSizeMultiplayer += (0.1);
    pointdisplay.style.transform = 'scale('+ scoreSizeMultiplayer +' )';
}

function descreaseScoreSize(){
    if (scoreSizeMultiplayer > 1){scoreSizeMultiplayer -= 0.1;}
    pointdisplay.style.transform = 'scale('+ (scoreSizeMultiplayer) +' )';
}

function idlePibbs(){
    updateScore(5 * emopibbs)
}

pibbclick.addEventListener('click',()=>{
    updateScore(pibblePower);
    animbox.classList.remove('pibbClickAnim');
    void animbox.offsetWidth; 
    animbox.classList.add('pibbClickAnim');

    var originalImage = document.querySelector('#pibbclick img');

    var clonedImage = originalImage.cloneNode(true);
    clonedImage.classList.add('pibblePlus');
    clonedImage.style.top = Math.random() * 100 + 'vh';
    clonedImage.style.left = Math.random() * 100 + 'vw';
    bigPibbleContainer.appendChild(clonedImage);
    setTimeout(function() {
        clonedImage.classList.add('fade-out'); 
        setTimeout(function() {
            animbox.removeChild(clonedImage);
        }, 1000); 
    }, 1000);
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
setInterval(descreaseScoreSize, 100)
