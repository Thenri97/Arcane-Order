const player = {
    name: "Badart",
    life: 100,
    attack: 10,
    defend: 5,
    energy: 100,
    originalAttack: 10,
}

const monster = {
    name: "Morbidus",
    life: "250",
    attack: 10,
    defend: 5,
    energy: 100,
}

const secao = document.querySelector('#secao');
const botao = document.createElement("button");
botao.id = "btn";
botao.innerText = "Attack!";

const div = document.createElement("div");
div.id = "div";
const divTwo = document.createElement("div");
divTwo.id = "divTwo";
const monsterDiv = document.createElement("div");
monsterDiv.id = "monsterDiv";

// ****************************************************************************************     
//      FIGHTING DIV EVENTS
let turno = 0;
const turnos = document.createElement("span")
turnos.id = "turnos";
turnos.innerText = `Turn Points:${turno}`;

const divFight = document.createElement("div")
divFight.id = "divFight"
const FightSpan = document.createElement('span')
FightSpan.id = "fightSpan";
FightSpan.innerText = "Fighting Events";
divFight.appendChild(FightSpan)
// *************************************************************************
//DIVS PARA DIVIDIR NO MEIO A SECTION 

const halfDivOne = document.createElement("div")
halfDivOne.id = "halfDivOne";
const halfDivTwo = document.createElement("div")
halfDivTwo.id = "halfDivTwo";
// *******************************************************************
        // DIV PARA ATAQUES ESPECIAIS
const specialAt = document.createElement("div")
specialAt.id = "specialAttack";
// ***************************2********************************************
const info = document.createElement("div")
info.id = "info";

//********************************************************************/
    //BOTÕES HABILIDADES
const btnSpecialAttack = document.createElement("button")
btnSpecialAttack.id = "btnSpecialAttack";
btnSpecialAttack.innerText = "Special Attack"

// ****************************************************************
secao.append(halfDivOne, halfDivTwo)
halfDivOne.append(div, monsterDiv, divFight)
halfDivTwo.appendChild(divTwo)
halfDivTwo.appendChild(specialAt)
halfDivTwo.appendChild(info)
divTwo.append(botao,turnos);
specialAt.append(btnSpecialAttack)



const heroName = document.createElement("span");
const heroLife = document.createElement("span");
const heroAttack = document.createElement("span");

const monsterName = document.createElement("span");
const monsterLife = document.createElement("span");
const monsterAttack = document.createElement("span");

heroName.id = "heroName";
heroLife.id = "heroLife";
heroAttack.id = "heroAttack";

monsterName.id = "monsterName";
monsterLife.id = "monsterLife";
monsterAttack.id = "monsterAttack";

div.append(heroName, heroLife, heroAttack);
monsterDiv.append(monsterName, monsterLife, monsterAttack);

const nomeDoHeroi = player.name;
const VidaDoHeroi = player.life;
const ataqueDoHeroi = player.attack;

const nomeDoMonstro = monster.name;
const vidaDoMonstro = monster.life;
const ataqueDoMonstro = monster.attack;

heroName.innerText = "Hero Name: " + nomeDoHeroi;
heroLife.innerText = "Life: " + VidaDoHeroi;
heroAttack.innerText = "Attack: " + ataqueDoHeroi;

monsterName.innerText = "Monster Name: " + nomeDoMonstro;
monsterLife.innerText = "Life: " + vidaDoMonstro;
monsterAttack.innerText = "Attack: " + ataqueDoMonstro;


const minhaString = document.getElementById("heroLife");
const stringMonster = document.getElementById("monsterLife");
const fightEventos = document.getElementById("fightSpan");
secao.id = "secao";
alert(`Monster:Prepare-se para enfrentar o poder avassalador do terrível monstro que irá reduzir você a pó, herói insignificante! Monster life: ${monster.life}`);



// function AttackEnhancement (player){


// }


function attackOpponent() {
    if (monster.life > 0) {
        monster.life -= player.attack;
        // alert(`Monster Life: ${monster.life}`);
        events = `You attacked ${monster.name}`;
    }
    else if (monster.life <= 0) {
        alert("You defeated the monster!")
    }

}

function specialAttack() {
    if (player.energy >= 20 && turno >= 3) {
        player.attack = 20;
        player.energy = player.energy - 20;
        turno -= 3;
        events = "Special Attack!"
    
    }
}



function MonsterAttack() {
    // const AttackChances = ["Sucess","Wrong"]
    // const   randomChoice = valueRandomChoice(AttackChances);

    function escolherValorAleatorio(opcoes) {
        return opcoes[Math.floor(Math.random() * opcoes.length)];
    }

    var opcoes = ['sucess', 'wrong'];
    var valorAleatorio = escolherValorAleatorio(opcoes);


    if (player.life > 0 && valorAleatorio == "sucess") {
        player.life -= monster.attack;
        // alert(`player Life: ${player.life}`);
        events = `${monster.name} attacked you!`;

    }
    else if (player.life <= 0) {
        alert("You are dead!")
    }
   
    return events;
}
function restoreString() {
    player.attack = player.originalAttack;
}
let events = "";
function fightingEvents() {
   
        return events;
}

botao.addEventListener('mousedown', function () {
    turno ++;
    if (player.life >= 0) {
        attackOpponent();

    } if (monster.life >= 0) {
        MonsterAttack();
    }

    const lifeH = player.life;
    minhaString.textContent = `Life: ${lifeH}`;

    const lifeM = monster.life;
    stringMonster.textContent = `Life: ${lifeM}`;
    const eventsMessage = fightingEvents();
    fightEventos.textContent = eventsMessage;
    // fightEventos.textContent = "Próximo turno."
    turnos.textContent = `Turn Points: ${turno}`;


});


const btnSpecialAt = document.getElementById("btnSpecialAttack");

btnSpecialAt.addEventListener('click',function(){
    specialAttack();
    // turno = 0;
})
botao.addEventListener('mouseup', restoreString);

// ****************************************************************************************









