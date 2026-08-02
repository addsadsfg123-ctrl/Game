function showMessage(text){

const box=document.getElementById("messageBox");

box.classList.add("show");

box.innerHTML=text;

}
function renderPlayer() {

document.getElementById("playerBar").innerHTML = `
👤 ${player.name}<br><br>

❤️ ${player.hp}
&nbsp;&nbsp;
🪙 ${player.gold}
&nbsp;&nbsp;
🗡️ ${player.strength}
&nbsp;&nbsp;
🏃 ${player.agility}
&nbsp;&nbsp;
💬 ${player.charisma}
`;

}

function showScene(id) {

const scene = STORY[id];

document.getElementById("story").innerHTML = scene.text;

let html = "";

scene.choices.forEach(choice => {

if(choice.action){

html += `
<button onclick="${choice.action}()">
${choice.text}
</button>
`;

}else{

html += `
<button onclick="showScene('${choice.next}')">
${choice.text}
</button>
`;

}

});

document.getElementById("choices").innerHTML = html;

renderPlayer();

}

function startGame() {

const name = prompt("Введите имя героя:");

if (name && name.trim() !== "") {

player.name = name;

} else {

player.name = "Безымянный";

}

showScene("start");

}

startGame();
function rollDice(){

return Math.floor(Math.random()*20)+1;

}

function hide(){

const roll = rollDice();

alert("🎲 Выпало: " + roll);

const total = roll + player.agility;

if(total >= 15){

showScene("hideSuccess");

}else{

showScene("hideFail");

}

}
