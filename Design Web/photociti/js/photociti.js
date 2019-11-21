$('.letterCol').hide();



$('#okButton').click(function() {
    $('.letterCol').hide();
    var word = $('#wordInput').val();
    wordMaker(word);
});

$('#wordInput').keyup(function(event) {
    if (event.keyCode === 13) {
        $('.letterCol').hide();
        var word = $('#wordInput').val();
        wordMaker(word);
    }

});

function wordMaker(str) {
    if (/[^*a-z]/i.test(str) === false) {
        if (str.length > 12 || str.length < 3) {
            alert("Vous devez entrer un mot de 3 à 12 charactères !")
        }
        else {
            for (i=0; i<str.length; i++) {
                $('#'+i).show();
                var rand = Math.round(Math.random()*4)+1;
                if (str[i] === "*") {
                    var path = "img/char/CS/CS" + rand + ".jpg";
                }
                else {
                    var path = "img/char/" + str[i].toUpperCase() + "/" + str[i].toUpperCase() + rand + ".jpg";
                }

                console.log(path);
                $('#'+i).html("<img class='img-fluid' src='" + path + "' title='Cliquez pour changer le style!'>");
            }
        }
    }
    else {
        alert("Vous pouvez seulement entrer les charactère A-Z a-z et * pour les charactères spéciaux!")
    }


}