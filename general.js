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
for (let el of arr1) {
    if (el !== undefined) {
        filteredArr.push(el);
    }
}
//Início do jogo com pontuação vazia
var num1 = false;
var num2 = false;
var num3 = false;
var num4 = false;
var num5 = false;
var num6 = false;
var dupla = false;
var trinca = false;
var quadra = false;
var fullHouse = false;
var seqA = false;
var seqB = false;
var general = false;

//iniciar com checkbox desabilitados
$("input[type=checkbox]").prop("disabled", true);
$("input[type=checkbox]").hide();

var selectedDices = Array.of(5);
var selectedDiceArr = [];
var diceRollChance = 1;
//console.log(selectedDices);
$("#text-instructions").html("Jogue os dados.");

function score() {

}

function playdice() {
    $("#dado-img1").removeClass("animate__shakeX");
    $("#dado-img2").removeClass("animate__shakeX");
    $("#dado-img3").removeClass("animate__shakeX");
    $("#dado-img4").removeClass("animate__shakeX");
    $("#dado-img5").removeClass("animate__shakeX");
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
                $("#dado-img1").prop("src", generateImgDado(val1))
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
                        $("#dado-img1").prop("src", generateImgDado(val1))
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2))
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3))
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4))
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5))
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
                        $("#dado-img1").prop("src", generateImgDado(val1))
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2))
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3))
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4))
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5))
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
                        $("#dado-img1").prop("src", generateImgDado(val1))
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2))
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3))
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4))
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5))
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
                        $("#dado-img1").prop("src", generateImgDado(val1))
                    }, "1000");
                }, "500");
                break;
            case 1:
                val2 = dado2.Roll();
                setTimeout(() => {
                    $("#dado-img2").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img2").prop("src", generateImgDado(val2))
                    }, "1000");
                }, "500");
                break;
            case 2:
                val3 = dado3.Roll();
                setTimeout(() => {
                    $("#dado-img3").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img3").prop("src", generateImgDado(val3))
                    }, "1000");
                }, "500");
                break;
            case 3:
                val4 = dado4.Roll();
                setTimeout(() => {
                    $("#dado-img4").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img4").prop("src", generateImgDado(val4))
                    }, "1000");
                }, "500");
                break;
            case 4:
                val5 = dado5.Roll();
                setTimeout(() => {
                    $("#dado-img5").addClass("animate__shakeX");
                    setTimeout(() => {
                        $("#dado-img5").prop("src", generateImgDado(val5))
                    }, "1000");
                }, "500");
                break;
            default:
                break;
        }
    }
    diceRollChance++;
    //console.log(selectedDiceArr);
    $("input[type=checkbox]").hide();
    $("#botao-jogar").prop("disabled", true);
    $("input[type=checkbox]").prop("disabled", true);
    $(".btn .fa-spinner").show();
    $(".btn .btn-text").html("Jogando dados...");
    if (diceRollChance === 2) {
        setTimeout(() => {
            $(".btn .btn-text").html("Segunda chance");
            $("#text-instructions").html("Escolha até 2 dados para jogar novamente ou selecione abaixo uma pontuação que deseja marcar.");
            $("#botao-jogar").prop("disabled", false); //habilitar botão Jogar dados
            $("input[type=checkbox]").prop("disabled", false); //habilitar checkbox
            $("input[type=checkbox]").show();
            $(".btn .fa-spinner").hide();
        }, "3500");
    } else if (diceRollChance === 3) {
        setTimeout(() => {
            $(".btn .btn-text").html("Última chance");
            $("#text-instructions").html("Escolha até 2 dados para jogar novamente ou selecione abaixo uma pontuação que deseja marcar.");
            $("#botao-jogar").prop("disabled", false); //habilitar botão Jogar dados
            $("input[type=checkbox]").prop("disabled", false); //habilitar checkbox
            $("input[type=checkbox]").show();
            $(".btn .fa-spinner").hide();
        }, "1500");
    } else {
        setTimeout(() => {
            $("#botao-jogar").prop("disabled", true);
            $(".btn .btn-text").html("Jogadas esgotadas");
            $("#text-instructions").html("Suas jogadas esgotaram. Selecione abaixo qual pontuação deseja marcar.");
            $("input[type=checkbox]").hide();
            $("input[type=checkbox]").prop("disabled", true);
            $(".btn .fa-spinner").hide();
            $("input[type=checkbox]").parent().removeClass("border-5 border-primary");

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