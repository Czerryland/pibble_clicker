const pibbclick = document.getElementById("pibbclick");
const pointdisplay = document.getElementById("point-display");
const displayUpgrades = document.getElementById("upgrades");
const upgradeList = document.getElementById("upgrade-list");
const returnbtn = document.getElementById("return");
const animbox = document.getElementById("animbox");

let score = 0;

pibbclick.addEventListener('click',()=>{
    score += 1;
    pointdisplay.textContent = "Pibbs: "+score;
    animbox.classList.remove('pibbClickAnim');



    void animbox.offsetWidth; 



    animbox.classList.add('pibbClickAnim');
});

displayUpgrades.addEventListener('click',()=>{
    upgradeList.style.display = 'inline'
});

returnbtn.addEventListener('click',()=>{
    upgradeList.style.display = 'none'
});