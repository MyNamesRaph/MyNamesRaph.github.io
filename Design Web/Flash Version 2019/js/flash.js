var flash = $('#flashID').attr("src");
var beforeFlash = "";
var flashNum = 1;
var flashY = "top";
var timerVS = false;
var timerEc = false;
var moveEc = 0;


function vitesse() {
    $('.flashClass').toggle();
}

function eclair() {
    if (moveEc < 16) {
        $('.flashClass').css("left", "+=100");
        moveEc++;
    }
    else if (moveEc < 20) {
        $('.flashClass').css("top", "+=100");
        moveEc++;

    }
    else if (moveEc < 36) {
        $('.flashClass').css("transform", "scaleX(-1)");
        $('.flashClass').css("left", "-=100");
        moveEc++;
    }
    else if (moveEc < 38) {
        $('.flashClass').css("top", "-=100");
        moveEc++;
    }
    else {$('.flashClass').css("transform", "scaleX(1)");

        $('.flashClass').css("transform", "scale(2)");
        clearInterval(timerEc);
        timerEc = false;
        $('#Flashes').append('<img id="bolt" src="img/lightning.jpg" width="200px">');
    }
}

var randX = 0;
var randY = 0;
var randS = 0;
var timerPerso2 = false;
var imgArr = ["img/Flash1.png", "img/Flash2.png", "img/chirper.png", "img/kanna.png", "img/maple.png"];
var randImg = imgArr[Math.round(Math.random() * imgArr.length)];

$('#boutonPerso2').click(function() {

    if (timerPerso2 === false ) {
        timerPerso2 = setInterval(random, 1);
    }
    else {
        clearInterval(timerPerso2);
        timerPerso2 = false;
    }
});

function random() {
    randS = (Math.random() * 5);
    randX = (Math.random() * 100) * (Math.random() * 20);
    randY = (Math.random() * 100) * (Math.random() * 10);
    randImg = imgArr[Math.round(Math.random() * imgArr.length)];

    $('.flashClass').css("top", randX);
    $('.flashClass').css("left", randY);
    $('.flashClass').css("transform", "scale(" + randS + ")")
    $('.flashClass').attr("src", randImg)

}





//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique
$('.flashClass').css("position","relative");



$('#boutonDroite').click(function() {
    $('.flashClass').css("left", "+=100");
});

$('#boutonGauche').click(function() {
    $('.flashClass').css("left", "-=100");
});



$('#boutonChangerImage').click(function() {
    if (flash === "img/Flash1.png"){
        $('#flashID').attr("src", "img/Flash2.png");
        flash = $('#flashID').attr("src");
    }
    else {
        $('#flashID').attr("src", "img/Flash1.png");
        flash = $('#flashID').attr("src");
    }
});


$('#boutonEnleverImage').click(function() {
   $('#flashID').hide();
});
$('#boutonAjouterImage').click(function() {
    $('#flashID').show();
});



$('#boutonAjouterAttribut').click(function() {
    $('#flashID').attr("alt", "Photo de Flash");
});


$('#boutonAjouterTitre').click(function() {
    if (beforeFlash !== "<h1>Justice League</h1>") {
        $('#flashID').before("<h1>Justice League</h1>");
        beforeFlash = "<h1>Justice League</h1>"
    }
});



$('#boutonDupliquer').click(function() {
    $('#Flashes').append('<img id="flashID" class="flashClass" src="img/Flash1.png" width="200px" style="position: relative">');
    flashNum++;
});
$('#boutonRalentir').click(function() {
    if (flashNum > 1) {
        $('.flashClass:last-child').remove();
        flashNum--;
    }
});

$('#boutonTeleport').click(function() {
    if (flashY === "top") {
        $('#Flashes').appendTo("#bottom");
        flashY = "bottom"
    }
    else {
        $('#Flashes').appendTo("#top");
        flashY = "top"
    }
});



$('#boutonVitesseSupreme').click(function() {
    if (timerVS === false ) {
        timerVS = setInterval(vitesse, 500);
    }

});
$('#boutonFinVitesseSupreme').click(function() {
    clearInterval(timerVS);
    timerVS = false;
    $('#flashID').show();
});


$('#boutonNuke').click(function() {
    $('.centralCity').css('background-image', 'url("img/nuke.jpg")');
});


$('#boutonPerso1').click(function() {
    if (timerEc === false ) {
        timerEc = setInterval(eclair, 250);
    }
});