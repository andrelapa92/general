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

//Rotate icon (Tabela de pontuação)
$("#scoretittle").on("click", function() {
    $("#arrow-icon").toggleClass("fa-caret-down");
    $("#arrow-icon").toggleClass("fa-caret-right");
});

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

//Gerar caminho para imagem dos dados
function generateImgDado(valorDoDado) {
    return "img/dado-" + valorDoDado + ".png";
}

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

function filterDices() {
    arr = [val1, val2, val3, val4, val5];
    filtered1 = notZero(1);
    filtered2 = notZero(2);
    filtered3 = notZero(3);
    filtered4 = notZero(4);
    filtered5 = notZero(5);
    filtered6 = notZero(6);
    filteredArr = [];
    for (let el of arr1) {
        if (el !== undefined) {
            filteredArr.push(el);
        }
    }
}

var diceRollChance = 1;

//Iniciando com checkbox desabilitados
function initGame() {
    $("input[type=checkbox]").prop("disabled", true);
    $("input[type=checkbox]").hide();
    $("#btnscore").hide();
    $("#btn-general").hide();
    $("#btn-seqb").hide();
    $("#btn-seqa").hide();
    $("#btn-fullhouse").hide();
    $("#btn-quadra").hide();
    $("#btn-trinca").hide();
    $("#btn-6").hide();
    $("#btn-5").hide();
    $("#btn-4").hide();
    $("#btn-3").hide();
    $("#btn-2").hide();
    $("#btn-1").hide();
    $("#btn-zero").hide();
    $("#btnscore").hide();
    $("#btnscorezero").hide();
    $("#text-instructions").html("Jogue os dados.");
    $(".btn .btn-text").html("Jogar dados");
    $("#botao-jogar").prop("disabled", false);
    $("#dado-img1").prop("src", "img/general.png");
    $("#dado-img2").prop("src", "img/general.png");
    $("#dado-img3").prop("src", "img/general.png");
    $("#dado-img4").prop("src", "img/general.png");
    $("#dado-img5").prop("src", "img/general.png");
    diceRollChance = 1;
}
//Removendo as classes de animação para conseguir animar novamente depois
function removeAnimations() {
    $("#dado-img1").removeClass("animate__shakeX");
    $("#dado-img2").removeClass("animate__shakeX");
    $("#dado-img3").removeClass("animate__shakeX");
    $("#dado-img4").removeClass("animate__shakeX");
    $("#dado-img5").removeClass("animate__shakeX");
}

initGame();

var selectedDices = Array.of(5);
var selectedDiceArr = [];

function scoreZero() {
    $("#btnscore").hide();
    $("#btnscorezero").show();
}

function hideScoreBtns() {
    $("#btnscore").hide();
}

function sumFiltered(f) {
    let sumArr = Array.of(f, n);
    for (let i = 0; i < f; i++) {
        let sum = 0;
        sumArr[i] = n;
        sum += sumArr[i];
    }
}

//Marcando pontuação
function score1() {
    $("#score1").html(sumFiltered(filtered1, 1));
    initGame();
}

function score2() {
    $("#score2").html(sumFiltered(filtered2, 2));
    initGame();
}

function score3() {
    $("#score3").html(sumFiltered(filtered3, 3));
    initGame();
}

function score4() {
    $("#score4").html(sumFiltered(filtered4, 4));
    initGame();
}

function score5() {
    $("#score5").html(sumFiltered(filtered5, 5));
    initGame();
}

function score6() {
    $("#score6").html(sumFiltered(filtered6, 6));
    initGame();
}

function scoreAleatoria() {
    $("#scorealeatoria").html(val1 + val2 + val3 + val4 + val5);
    initGame();
}

function scoreTrinca() {
    $("#scoretrinca").html("20");
    initGame();
}

function scoreFullhouse() {
    $("#scorefullhouse").html("25");
    initGame();
}

function scoreSeqA() {
    $("#scoreseqalta").html("30");
    initGame();
}

function scoreSeqB() {
    $("#scoreseqbaixa").html("30");
    initGame();
}

function scoreQuadra() {
    $("#scoretrinca").html("30");
    initGame();
}

function scoreGeneral() {
    $("#scoretrinca").html("50");
    initGame();
}

function generalZero() {
    $("#scorename-general").addClass("text-strike");
    $("#scoregeneral").html("0");
    initGame();
}

//CONDIÇÕES DE JOGADAS
function checkScore() {
    filterDices();
    //Condição para General
    if (filtered1 > 0) {
        $("#btnscore").show();
        $("#btn-score1").show();
    } else { $("#btn-score1").hide() }
    if (filtered2 > 0) {
        $("#btnscore").show();
        $("#btn-score2").show();
    } else { $("#btn-score2").hide() }
    if (filtered3 > 0) {
        $("#btnscore").show();
        $("#btn-score3").show();
    } else { $("#btn-score3").hide() }
    if (filtered4 > 0) {
        $("#btnscore").show();
        $("#btn-score4").show();
    } else { $("#btn-score4").hide() }
    if (filtered5 > 0) {
        $("#btnscore").show();
        $("#btn-score5").show();
    } else { $("#btn-score5").hide() }
    if (filtered6 > 0) {
        $("#btnscore").show();
        $("#btn-score6").show();
    } else { $("#btn-score6").hide() }
    if (val1 === val2 && val2 === val3 && val3 === val4 && val4 === val5) {
        $("#btnscore").show();
        $("#btn-general").show();
    } else { $("#btn-general").hide() }
    //Condição para Full House
    if (
        (filtered1 === 2 || filtered2 === 2 || filtered3 === 2 || filtered4 === 2 || filtered5 === 2 || filtered6 === 2) && (filtered1 === 3 || filtered2 === 3 || filtered3 === 3 || filtered4 === 3 || filtered5 === 3 || filtered6 === 3)
    ) {
        $("#btnscore").show();
        $("#btn-fullhouse").show();
    } else { $("#btn-fullhouse").hide() }
    //Condição para Sequência Maior
    if ((filteredArr.length === 5) && (Math.min(...arr) > 1)) {
        $("#btnscore").show();
        $("#btn-seqb").show();
    } else { $("#btn-seqb").hide() }
    //Condição para Sequência Menor
    if ((filteredArr.length === 5) && (Math.max(...arr) < 6)) {
        $("#btnscore").show();
        $("#btn-seqa").show();
    } else { $("#btn-seqa").hide() }
    //Condição para Quadra
    if (filtered1 > 3 || filtered2 > 3 || filtered3 > 3 || filtered4 > 3 || filtered5 > 3 || filtered6 > 3) {
        $("#btnscore").show();
        $("#btn-quadra").show();
    } else { $("#btn-quadra").hide() }
    //Condição para Trinca
    if (filtered1 > 2 || filtered2 > 2 || filtered3 > 2 || filtered4 > 2 || filtered5 > 2 || filtered6 > 2) {
        $("#btnscore").show();
        $("#btn-trinca").show();
    } else { $("#btn-trinca").hide() }
}

function playdice() {
    selectedDiceArr = [];
    removeAnimations();
    selectedDices[0] = $("input[type=checkbox]")[0].checked;
    selectedDices[1] = $("input[type=checkbox]")[1].checked;
    selectedDices[2] = $("input[type=checkbox]")[2].checked;
    selectedDices[3] = $("input[type=checkbox]")[3].checked;
    selectedDices[4] = $("input[type=checkbox]")[4].checked;
    for (let i = 0; i < selectedDices.length; i++) {
        if (($("input[type=checkbox]")[i].checked) === true) {
            selectedDiceArr.push(i);
        }
    }
    if (diceRollChance === 1) {
        setTimeout(() => {
            $("#dado-img1").addClass("animate__shakeX");
            setTimeout(() => {
                $("#dado-img1").prop("src", generateImgDado(val1));
            }, "1000");
            setTimeout(() => {
                $("#dado-img2").addClass("animate__shakeX");
                setTimeout(() => {
                    $("#dado-img2").prop("src", generateImgDado(val2));
                }, "1000");
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3));
                    }, "1000");
                    setTimeout(() => {
                        $("#dado-img4").addClass("animate__shakeX");
                        setTimeout(() => {
                            $("#dado-img4").prop("src", generateImgDado(val4));
                        }, "1000");
                        setTimeout(() => {
                            $("#dado-img5").addClass("animate__shakeX");
                            setTimeout(() => {
                                $("#dado-img5").prop("src", generateImgDado(val5));
                            }, "1000");
                        }, "500");
                    }, "500");
                }, "500");
            }, "500");
        }, "500");
    } else if (diceRollChance === 2) {
        switch (selectedDiceArr[0]) {
            case 0:
                val1 = dado1.Roll();
                setTimeout(() => {
                    $("#dado-img1").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img1").prop("src", generateImgDado(val1));
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2));
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3));
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4));
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5));
                    }, "1000");
                }, "500");
                break;
            default:
                break;
        }
        switch (selectedDiceArr[1]) {
            case 0:
                val1 = dado1.Roll();
                setTimeout(() => {
                    $("#dado-img1").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img1").prop("src", generateImgDado(val1));
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2));
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3));
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4));
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5));
                    }, "1000");
                }, "500");
                break;
            default:
                break;
        }
    } else if (diceRollChance === 3) {
        switch (selectedDiceArr[0]) {
            case 0:
                val1 = dado1.Roll();
                setTimeout(() => {
                    $("#dado-img1").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img1").prop("src", generateImgDado(val1));
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2));
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3));
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4));
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5));
                    }, "1000");
                }, "500");
                break;
            default:
                break;
        }
        switch (selectedDiceArr[1]) {
            case 0:
                val1 = dado1.Roll();
                setTimeout(() => {
                    $("#dado-img1").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img1").prop("src", generateImgDado(val1));
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2));
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3));
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4));
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5));
                    }, "1000");
                }, "500");
                break;
            default:
                break;
        }
    }
    diceRollChance++;
    $("input[type=checkbox]").hide();
    $("#botao-jogar").prop("disabled", true);
    $("input[type=checkbox]").prop("disabled", true);
    $(".btn .fa-spinner").show();
    $(".btn .btn-text").html("Jogando dados...");
    if (diceRollChance === 2) {
        setTimeout(() => {
            checkScore();
            $(".btn .btn-text").html("Segunda chance");
            $("#text-instructions").html("Escolha até 2 dados para jogar novamente ou selecione abaixo uma pontuação que deseja marcar.");
            $("#botao-jogar").prop("disabled", false); //habilitar botão Jogar dados
            $("input[type=checkbox]").prop("disabled", false); //habilitar checkbox
            $("input[type=checkbox]").show();
            $(".btn .fa-spinner").hide();
        }, "3500");
    } else if (diceRollChance === 3) {
        setTimeout(() => {
            checkScore();
            $(".btn .btn-text").html("Última chance");
            $("#text-instructions").html("Escolha até 2 dados para jogar novamente ou selecione abaixo uma pontuação que deseja marcar.");
            $("#botao-jogar").prop("disabled", false); //habilitar botão Jogar dados
            $("input[type=checkbox]").prop("disabled", false); //habilitar checkbox
            $("input[type=checkbox]").show();
            $(".btn .fa-spinner").hide();
        }, "1500");
    } else {
        setTimeout(() => {
            checkScore();
            $("#botao-jogar").prop("disabled", true);
            $(".btn .btn-text").html("Jogadas esgotadas");
            $("#text-instructions").html("Suas jogadas esgotaram. Selecione abaixo qual pontuação deseja marcar.");
            $("input[type=checkbox]").hide();
            $("input[type=checkbox]").prop("disabled", true);
            $(".btn .fa-spinner").hide();
            $("input[type=checkbox]").parent().removeClass("border-5 border-primary");
        }, "1500");
    }
    $("input[type=checkbox]").on("change", function(e) {
        if ($("input[type=checkbox]:checked").length > 2) { //checkbox limit 2
            $(this).prop("checked", false);
            alert("Selecione apenas 2 dados!");
        } else if ($(this).prop('checked') === true) {
            $(this).parent().addClass("border-5 border-primary");
        } else if ($(this).prop('checked') === false) {
            $(this).parent().removeClass("border-5 border-primary");
        }
    });
}