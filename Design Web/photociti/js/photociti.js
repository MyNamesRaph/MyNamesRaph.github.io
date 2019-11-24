let divId = 0;

$('.letterCol').hide();



$('#okButton').click(function() {
    $('.letterCol').hide();
    let word = $('#wordInput').val();
    wordMaker(word);
});

$('#wordInput').keyup(function(event) {
    if (event.keyCode === 13) {
        $('.letterCol').hide();
        let word = $('#wordInput').val();
        wordMaker(word);
    }
});

//Letters
$(document).on("click", ".imgLetter", function () {
    divId = $(this).parent().attr("id");
    let imgPath = $(this).attr("src");
    modalMaker(imgPath);
});

$('.btnConfirm').click(function() {
    let path = $('div.active > img').attr("src");
    console.log(path);
    $('#'+divId).html("<img class='img-fluid imgLetter click' src='" + path + "' title='Cliquez pour changer le style!'>");
});

//Background
$('.bgBlack').click(function () {
    $('.bg').css('background-image', 'url("img/bg/noir.jpg")')
});
$('.bgWhite').click(function () {
    $('.bg').css('background-image', 'url("img/bg/blanc.jpg")')
});
$('.bgBlue').click(function () {
    $('.bg').css('background-image', 'url("img/bg/bleu.jpg")')
});
$('.bgDarkBlue').click(function () {
    $('.bg').css('background-image', 'url("img/bg/bleuFonce.jpg")')
});
$('.bgGray').click(function () {
    $('.bg').css('background-image', 'url("img/bg/gris.jpg")')
});
$('.bgPink').click(function () {
    $('.bg').css('background-image', 'url("img/bg/rose.jpg")')
});
$('.bgRed').click(function () {
    $('.bg').css('background-image', 'url("img/bg/rouge.jpg")')
});



function wordMaker(str) {
    let path = "";
    if (/[^*a-z]/i.test(str) === false) {
        if (str.length > 12 || str.length < 3) {
            alert("Vous devez entrer un mot de 3 à 12 charactères !")
        }
        else {
            for (let i=0; i<str.length; i++) {
                $('#'+i).show();
                if (str[i] === "*") {
                    path = "img/char/CS/CS1.jpg";
                }
                else {
                    path = "img/char/" + str[i].toUpperCase() + "/" + str[i].toUpperCase() + "1.jpg";
                }

                console.log(path);
                $('#'+i).html("<img class='img-fluid imgLetter click' src='" + path + "' title='Cliquez pour changer le style!'>");
            }
        }
    }
    else {
        alert("Vous pouvez seulement entrer les charactère A-Z a-z et * pour les charactères spéciaux!")
    }
}

function modalMaker(str, int) {
    let arr = str.split("");
    console.log(arr);
    for (i=0; i<5;i++) {
        arr.pop();
    }
    let path = arr.join("");
    for (i=1;i<=5;i++) {
        $('#car'+i).attr("src", path + i + ".jpg");
    }
}