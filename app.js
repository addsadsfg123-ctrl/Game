function showMessage(text){

const box=document.getElementById("messageBox");

box.classList.add("show");

box.innerHTML=text;

}
async function typeText(text){

const story=document.getElementById("story");

story.innerHTML="";

for(let i=0;i<text.length;i++){

story.innerHTML+=text[i];

await new Promise(resolve=>setTimeout(resolve,20));

}

}
async function typeText(text){

const story = document.getElementById("story");

story.innerHTML = "";

for(let i = 0; i < text.length; i++){

story.innerHTML += text[i];

await new Promise(resolve => setTimeout(resolve,20));

}

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
typeText(scene.text);

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

const roll=rollDice();

const total=roll+player.agility;

if(total>=15){

showMessage(
`
🎲 Выпало <b>${roll}</b><br><br>

Ловкость: ${player.agility}<br>

Итого: <b>${total}</b><br><br>

✅ Успех!
`
);

setTimeout(()=>{

showScene("hideSuccess");

},2200);

}else{

showMessage(
`
🎲 Выпало <b>${roll}</b><br><br>

Ловкость: ${player.agility}<br>

Итого: <b>${total}</b><br><br>

❌ Провал!
`
);

setTimeout(()=>{

showScene("hideFail");

},2200);

}

}

