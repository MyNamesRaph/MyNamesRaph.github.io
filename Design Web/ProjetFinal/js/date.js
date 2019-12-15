let date = new Date().getDate();
let countdown = 25-date;
let month = new Date().getMonth();



$('document').ready(function() {
    $('.locked').hide();
    setupCalender();
    setInterval(isOpenable, 1);
});

$('#cheat').click(function () {
   $('.countDown').html("VOUS ÊTES SUR LA LISTE DES VILAINS");

   date = 25;
   month = 11;
   countdown = 0;
});
$('#open').click(function() {
    let ID = Number($('.carousel-item.active').attr("id"));

    $('#'+ID+"> img").attr("alt", "opened");
    $('#'+ID+"> img").attr("class", "d-block mx-auto img-fluid opened");
    open(ID);
});


function setupCalender() {
    if (month===11){
        if(countdown===0) {
            $('.countDown').html("JOYEUX NOËL!");
        }
        else if(countdown<0) {
            $('.countDown').html("VOUS AVEZ RATÉ NOËL!");
            $('#start').prop("disabled", true);
        }
        else if (countdown<10) {
            if (countdown === 1) {
                $('.countDown').html("0"+countdown+" JOUR AVANT NOËL!");
            }
            else {
                $('.countDown').html("0"+countdown+" JOURS AVANT NOËL");
            }
        }
        else {
            $('.countDown').html(countdown+" JOURS AVANT NOËL");
        }
    }
    else {
        $('.countDown').html("VOUS AVEZ RATÉ NOËL!");
        $('#start').prop("disabled", true);
    }
    if (date<=25) {
        if (date<0) {
            console.error('Date is negative!')
        }
        $('.carousel-item#'+date).attr("class", "carousel-item active");
    }
    else {
        $('.carousel-item#1').attr("class", "carousel-item active");
    }
}

function isOpenable() {
    let ID = Number($('.carousel-item.active').attr("id"));
    let alt = $('#'+ID+"> img").attr("alt");

    if (ID <= date) {
        $('#open').prop("disabled", false);
    }
    else {
        $('#open').prop("disabled", true);
    }
    if (alt === "opened") {
        $('#open').prop("disabled", true);
    }
}

function open(ID) {
    if (ID === 1) {
        $('#letterLocked').show();
    }
    else if (ID === 10) {
        $('#yuleLocked').show();
    }
    else if (ID === 20) {
        $('#findLocked').show();
    }
    else if (ID === 25) {
        $('#elevatorLocked').show();
    }
    else {
        alert("Il n'y a pas de cadeau aujourd'hui!")
    }
}