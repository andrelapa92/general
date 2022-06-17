class Dice {
    constructor(faces) {
        this.faces = faces;
    }
    Roll() {
        return this.GetRandomNumber(this.faces);
    }
    GetRandomNumber() {
        return Math.floor((Math.random() * this.faces) + 1);
    }
}
//Estanciando dados
var dado1 = new Dice(6);
var dado2 = new Dice(6);
var dado3 = new Dice(6);
var dado4 = new Dice(6);
var dado5 = new Dice(6);

//Guardando dados criados em variáveis
var val1 = dado1.Roll();
var val2 = dado2.Roll();
var val3 = dado3.Roll();
var val4 = dado4.Roll();
var val5 = dado5.Roll();

function generateImgDado(valorDoDado) {
    return "img/dado-" + valorDoDado + ".png";
}

//checkbox limit 2
$('input[type=checkbox]').on('change', function(e) {
    if ($('input[type=checkbox]:checked').length > 2) {
        $(this).prop('checked', false);
        alert("Selecione apenas 2 dados!");
    }
});

//array com o valor de cada dado rolado
var arr = [val1, val2, val3, val4, val5];

//filtrando por números
function notZero(num) {
    var filtered = arr.filter((value) => value === num).length;
    if (filtered !== 0) return filtered;
}

var filtered1 = notZero(1);
var filtered2 = notZero(2);
var filtered3 = notZero(3);
var filtered4 = notZero(4);
var filtered5 = notZero(5);
var filtered6 = notZero(6);

//filtrando array de 1 para valores diferentes nos dados
var arr1 = [filtered1, filtered2, filtered3, filtered4, filtered5, filtered6];
var filteredArr = [];
for (const el of arr1) {
    if (el !== undefined) {
        filteredArr.push(el);
    }
}
//Início do jogo com pontuação vazia
var general = false;
var fullHouse = false;
var seqA = false;
var seqB = false;
var quadra = false;
var trinca = false;
var dupla = false;


//CONDIÇÕES DE JOGADAS

//Condição para General
if (val1 === val2 && val2 === val3 && val3 === val4 && val4 === val5) {
    console.log("GENERAL!!!!!!!");
    general = true;
}
//Condição para Full House
if (
    (filtered1 === 2 || filtered2 === 2 || filtered3 === 2 || filtered4 === 2 || filtered5 === 2 || filtered6 === 2) && (filtered1 === 3 || filtered2 === 3 || filtered3 === 3 || filtered4 === 3 || filtered5 === 3 || filtered6 === 3)
) {
    console.log("Full House!");
    fullHouse = true;
}
//Condição para Sequência Maior
if ((filteredArr.length === 5) && (Math.min(...arr) > 1)) {
    console.log("Sequência Maior!");
    seqB = true;
}
//Condição para Sequência Menor
if ((filteredArr.length === 5) && (Math.max(...arr) < 6)) {
    console.log("Sequência Menor!");
    seqA = true;
}
//Condição para Quadra
if (filtered1 > 3 || filtered2 > 3 || filtered3 > 3 || filtered4 > 3 || filtered5 > 3 || filtered6 > 3) {
    console.log("Quadra!");
    quadra = true;
}
//Condição para Trinca
if (filtered1 > 2 || filtered2 > 2 || filtered3 > 2 || filtered4 > 2 || filtered5 > 2 || filtered6 > 2) {
    console.log("Trinca!");
    trinca = true;
}
//Condição para Dupla
if (filtered1 > 1 || filtered2 > 1 || filtered3 > 1 || filtered4 > 1 || filtered5 > 1 || filtered6 > 1) {
    console.log("Dupla!");
    dupla = true;
}

const botaoJogar = document.getElementById("botao-jogar");
const img1 = document.getElementById("dado-img1");
const img2 = document.getElementById("dado-img2");
const img3 = document.getElementById("dado-img3");
const img4 = document.getElementById("dado-img4");
const img5 = document.getElementById("dado-img5");

function playdice() {
    botaoJogar.disabled = true;
    setTimeout(() => {
        img1.classList.add("animate__shakeX");
        setTimeout(() => {
            img1.src = generateImgDado(val1);
        }, "1000");
        setTimeout(() => {
            img2.classList.add("animate__shakeX");
            setTimeout(() => {
                img2.src = generateImgDado(val2);
            }, "1000");
            setTimeout(() => {
                img3.classList.add("animate__shakeX");
                setTimeout(() => {
                    img3.src = generateImgDado(val3);
                }, "1000");
                setTimeout(() => {
                    img4.classList.add("animate__shakeX");
                    setTimeout(() => {
                        img4.src = generateImgDado(val4);
                    }, "1000");
                    setTimeout(() => {
                        img5.classList.add("animate__shakeX");
                        setTimeout(() => {
                            img5.src = generateImgDado(val5);
                        }, "1000");
                    }, "500");
                }, "500");
            }, "500");
        }, "500");
    }, "500");
    setTimeout(() => {
        img1.classList.remove("animate__shakeX");
        img2.classList.remove("animate__shakeX");
        img3.classList.remove("animate__shakeX");
        img4.classList.remove("animate__shakeX");
        img5.classList.remove("animate__shakeX");
    }, "3500");
}