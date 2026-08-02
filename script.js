let player = {

name:"",

strength:5,
agility:5,
charisma:5

};


const story = {


start: {

text:
"Ты просыпаешься в грязном переулке старого города. Над улицей висит туман. Рядом лежит чужой кинжал.",

choices:[

{
text:"Взять кинжал",
next:"knife"
},

{
text:"Осмотреть улицу",
next:"street"
}

]

},


knife:{

text:
"Ты берёшь кинжал. На рукояти выгравирован символ неизвестной гильдии.",

choices:[

{
text:"Искать владельца",
next:"owner"
},

{
text:"Продать его",
next:"sell"
}

]

},


street:{

text:
"Из тумана выходит человек в плаще.",

choices:[

{
text:"Поговорить",
next:"talk"
},

{
text:"Напасть первым",
next:"fight"
}

]

},


fight:{

text:
"Ты бросаешься вперёд.",

choices:[

{
text:"Бросить кубик",
next:"roll"
}

]

},


roll:{

text:"",

choices:[]

}

};


function showScene(scene){

let current=story[scene];

document.getElementById("story").innerHTML =
current.text;


let buttons="";

current.choices.forEach(choice=>{

buttons+=
`<button onclick="showScene('${choice.next}')">
${choice.text}
</button>`;

});


document.getElementById("choices").innerHTML=buttons;


showStats();

}



function showStats(){

document.getElementById("stats").innerHTML=

`
Сила: ${player.strength}
<br>
Ловкость: ${player.agility}
<br>
Харизма: ${player.charisma}
`;

}


showScene("start");
