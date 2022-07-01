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

var sScore1 = false;
var sScore2 = false;
var sScore3 = false;
var sScore4 = false;
var sScore5 = false;
var sScore6 = false;
var sTrinca = false;
var sQuadra = false;
var sFullhouse = false;
var sSeqA = false;
var sSeqB = false;
var sGeneral = false;
var sAleatoria = false;

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
    arr1 = [filtered1, filtered2, filtered3, filtered4, filtered5, filtered6];
    filteredArr = [];
    for (let el of arr1) {
        if (el !== undefined) {
            filteredArr.push(el);
        }
    }
}

var finishGame = false;
var diceRollChance = 1;
var gameRound = 0;

function totalScore() {
    var calcScore = 0;
    $(".scorevalue").each(function() {
        if ($(this).text() != '') {
            calcScore += parseInt($(this).text());
        }
    });
    $("#scoretotal").text(calcScore);
    if (finishGame === true) {
        restartGame();
    }
}

//Iniciando rodada
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
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=checkbox]").parent().removeClass("border-5 border-primary");
    if (gameRound > 0) {
        val1 = dado1.Roll();
        val2 = dado2.Roll();
        val3 = dado3.Roll();
        val4 = dado4.Roll();
        val5 = dado5.Roll();
    }
    diceRollChance = 1;
    gameRound++;
}
//Removendo as classes de animação para conseguir animar novamente depois
function removeAnimations() {
    $("#dado-img1").removeClass("animate__shakeX");
    $("#dado-img2").removeClass("animate__shakeX");
    $("#dado-img3").removeClass("animate__shakeX");
    $("#dado-img4").removeClass("animate__shakeX");
    $("#dado-img5").removeClass("animate__shakeX");
}

function restartGame() {
    $(".text-strike").removeClass("text-strike");
    $(".scorevalue").html("");
    $(".scoretotal").html("");
}

initGame();

var selectedDices = [];
var selectedDiceArr = [];

function hideScoreBtns() {
    $("#btnscore").hide();
}

function sumFiltered(f, n) {
    let sumArr = new Array(f);
    var sum = 0;
    for (let i = 0; i < f; i++) {
        sumArr[i] = n;
        sum += sumArr[i];
    }
    return sum;
}

//Marcando pontuação
function score1() {
    $("#score1").html(sumFiltered(filtered1, 1));
    totalScore();
    initGame();
    sScore1 = true;
}

function score2() {
    $("#score2").html(sumFiltered(filtered2, 2));
    totalScore();
    initGame();
    sScore2 = true;
}

function score3() {
    $("#score3").html(sumFiltered(filtered3, 3));
    totalScore();
    initGame();
    sScore3 = true;
}

function score4() {
    $("#score4").html(sumFiltered(filtered4, 4));
    totalScore();
    initGame();
    sScore4 = true;
}

function score5() {
    $("#score5").html(sumFiltered(filtered5, 5));
    totalScore();
    initGame();
    sScore5 = true;
}

function score6() {
    $("#score6").html(sumFiltered(filtered6, 6));
    totalScore();
    initGame();
    sScore6 = true;
}

function scoreTrinca() {
    $("#scoretrinca").html("20");
    totalScore();
    initGame();
    sTrinca = true;
}

function scoreQuadra() {
    $("#scorequadra").html("30");
    totalScore();
    initGame();
    sQuadra = true;
}

function scoreFullhouse() {
    $("#scorefullhouse").html("25");
    totalScore();
    initGame();
    sFullhouse = true;
}

function scoreSeqA() {
    $("#scoreseqalta").html("30");
    totalScore();
    initGame();
    sSeqA = true;
}

function scoreSeqB() {
    $("#scoreseqbaixa").html("30");
    totalScore();
    initGame();
    sSeqB = true;
}

function scoreGeneral() {
    $("#scoregeneral").html("50");
    totalScore();
    initGame();
    sGeneral = true;
}

function scoreAleatoria() {
    $("#scorealeatoria").html(val1 + val2 + val3 + val4 + val5);
    totalScore();
    initGame();
    sAleatoria = true;
}

//ZERANDO PONTUAÇÕES

//Executada ao confirmar que deseja zerar pontuação
function scoreZero() {
    if (sScore1 === true) { $("#btn-1-zero").hide() } else { $("#btn-1-zero").show() }
    if (sScore2 === true) { $("#btn-2-zero").hide() } else { $("#btn-2-zero").show() }
    if (sScore3 === true) { $("#btn-3-zero").hide() } else { $("#btn-3-zero").show() }
    if (sScore4 === true) { $("#btn-4-zero").hide() } else { $("#btn-4-zero").show() }
    if (sScore5 === true) { $("#btn-5-zero").hide() } else { $("#btn-5-zero").show() }
    if (sScore6 === true) { $("#btn-6-zero").hide() } else { $("#btn-6-zero").show() }
    if (sTrinca === true) { $("#btn-trinca-zero").hide() } else { $("#btn-trinca-zero").show() }
    if (sQuadra === true) { $("#btn-quadra-zero").hide() } else { $("#btn-quadra-zero").show() }
    if (sFullhouse === true) { $("#btn-fullhouse-zero").hide() } else { $("#btn-fullhouse-zero").show() }
    if (sSeqA === true) { $("#btn-seqa-zero").hide() } else { $("#btn-seqa-zero").show() }
    if (sSeqB === true) { $("#btn-seqb-zero").hide() } else { $("#btn-seqb-zero").show() }
    if (sGeneral === true) { $("#btn-general-zero").hide() } else { $("#btn-general-zero").show() }
    if (sAleatoria === true) { $("#btn-aleatoria-zero").hide() } else { $("#btn-aleatoria-zero").show() }
    if (finishGame === false) {
        $("#btnscore").hide();
        $("#btnscorezero").show();
    } else {
        restartGame();
    }
}

//Zerando e riscando uma pontuação

function zero1() {
    $("#scorename-1").addClass("text-strike");
    $("#score1").html("0");
    totalScore();
    initGame();
    sScore1 = true;
}

function zero2() {
    $("#scorename-2").addClass("text-strike");
    $("#score2").html("0");
    totalScore();
    initGame();
    sScore2 = true;
}

function zero3() {
    $("#scorename-3").addClass("text-strike");
    $("#score3").html("0");
    totalScore();
    initGame();
    sScore3 = true;
}

function zero4() {
    $("#scorename-4").addClass("text-strike");
    $("#score4").html("0");
    totalScore();
    initGame();
    sScore4 = true;
}

function zero5() {
    $("#scorename-5").addClass("text-strike");
    $("#score5").html("0");
    totalScore();
    initGame();
    sScore5 = true;
}

function zero6() {
    $("#scorename-6").addClass("text-strike");
    $("#score6").html("0");
    totalScore();
    initGame();
    sScore6 = true;
}

function trincaZero() {
    $("#scorename-trinca").addClass("text-strike");
    $("#scoretrinca").html("0");
    totalScore();
    initGame();
    sTrinca = true;
}

function quadraZero() {
    $("#scorename-quadra").addClass("text-strike");
    $("#scorequadra").html("0");
    totalScore();
    initGame();
    sQuadra = true;
}

function fullhouseZero() {
    $("#scorename-fullhouse").addClass("text-strike");
    $("#scorefullhouse").html("0");
    totalScore();
    initGame();
    sFullhouse = true;
}

function seqAZero() {
    $("#scorename-seqa").addClass("text-strike");
    $("#scoreseqalta").html("0");
    totalScore();
    initGame();
    sSeqA = true;
}

function seqBZero() {
    $("#scorename-seqb").addClass("text-strike");
    $("#scoreseqbaixa").html("0");
    totalScore();
    initGame();
    sSeqB = true;
}

function generalZero() {
    $("#scorename-general").addClass("text-strike");
    $("#scoregeneral").html("0");
    totalScore();
    initGame();
    sGeneral = true;
}

function aleatoriaZero() {
    $("#scorename-aleatoria").addClass("text-strike");
    $("#scorealeatoria").html("0");
    totalScore();
    initGame();
    sAleatoria = true;
}

//CONDIÇÕES DE JOGADAS
function checkScore() {
    filterDices();
    //Exibe o botão de riscar jogada somente se tiver jogadas restantes
    if (sScore1 === true && sScore2 === true && sScore3 === true && sScore4 === true && sScore5 === true && sScore6 === true && sTrinca === true && sQuadra === true && sFullhouse === true && sSeqA === true && sSeqB === true && sGeneral === true && sAleatoria === true) {
        finishGame = true;
        $("#btnscore").hide();
        $("#btn-zero").hide();
    } else {
        finishGame = false;
        $("#btnscore").show();
        $("#btn-zero").show();
    }
    //Condições para selecionar a somatória de um dado
    if (filtered1 > 0 && sScore1 === false) {
        $("#btnscore").show();
        $("#btn-1").show();
    } else { $("#btn-1").hide() }
    if (filtered2 > 0 && sScore2 === false) {
        $("#btnscore").show();
        $("#btn-2").show();
    } else { $("#btn-2").hide() }
    if (filtered3 > 0 && sScore3 === false) {
        $("#btnscore").show();
        $("#btn-3").show();
    } else { $("#btn-3").hide() }
    if (filtered4 > 0 && sScore4 === false) {
        $("#btnscore").show();
        $("#btn-4").show();
    } else { $("#btn-4").hide() }
    if (filtered5 > 0 && sScore5 === false) {
        $("#btnscore").show();
        $("#btn-5").show();
    } else { $("#btn-5").hide() }
    if (filtered6 > 0 && sScore6 === false) {
        $("#btnscore").show();
        $("#btn-6").show();
    } else { $("#btn-6").hide() }
    //Condição para General
    if (val1 === val2 && val2 === val3 && val3 === val4 && val4 === val5 && sGeneral === false) {
        $("#btnscore").show();
        $("#btn-general").show();
    } else { $("#btn-general").hide() }
    //Condição para Full House
    if (
        (filtered1 === 2 || filtered2 === 2 || filtered3 === 2 || filtered4 === 2 || filtered5 === 2 || filtered6 === 2) && (filtered1 === 3 || filtered2 === 3 || filtered3 === 3 || filtered4 === 3 || filtered5 === 3 || filtered6 === 3) && sFullhouse === false
    ) {
        $("#btnscore").show();
        $("#btn-fullhouse").show();
    } else { $("#btn-fullhouse").hide() }
    //Condição para Sequência Maior
    if ((filteredArr.length === 5) && (Math.min(...arr) > 1) && sSeqA === false) {
        $("#btnscore").show();
        $("#btn-seqa").show();
    } else { $("#btn-seqa").hide() }
    //Condição para Sequência Menor
    if ((filteredArr.length === 5) && (Math.max(...arr) < 6) && sSeqB === false) {
        $("#btnscore").show();
        $("#btn-seqb").show();
    } else { $("#btn-seqb").hide() }
    //Condição para Quadra
    if ((filtered1 > 3 || filtered2 > 3 || filtered3 > 3 || filtered4 > 3 || filtered5 > 3 || filtered6 > 3) && sQuadra === false) {
        $("#btnscore").show();
        $("#btn-quadra").show();
    } else { $("#btn-quadra").hide() }
    //Condição para Trinca
    if ((filtered1 > 2 || filtered2 > 2 || filtered3 > 2 || filtered4 > 2 || filtered5 > 2 || filtered6 > 2) && sTrinca === false) {
        $("#btnscore").show();
        $("#btn-trinca").show();
    } else { $("#btn-trinca").hide() }
    if (sAleatoria === false) {
        $("#btnscore").show();
        $("#btn-aleatoria").show();
    } else { $("#btn-aleatoria").hide() }
}

function playdice() {
    removeAnimations();
    $("#btnscorezero").hide();
    selectedDiceArr = [];
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
            $("input[type=checkbox]").prop("checked", false);
            $("input[type=checkbox]").parent().removeClass("border-5 border-primary");
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
            $("input[type=checkbox]").prop("checked", false);
            $("input[type=checkbox]").parent().removeClass("border-5 border-primary");
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