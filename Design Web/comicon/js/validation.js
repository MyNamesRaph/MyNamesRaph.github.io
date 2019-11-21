//variables
var name = $('#inputNom').val();
var nameValid = false;
var mdp = $('#inputMdp').val();
var mdpValid = false;
var confmdpValid = false;
var email = $('#inputEmail').val();
var emailValid = false;
var costume = $("input[name='costume']:checked").val();
var costumeValid = false;
var char = $("#SWsel").val();

//Hide elements
$('#Starwars').hide();
$('#Marvel').hide();
$('#DC').hide();




//Name Check
$('#inputNom').keyup(function() {
     name = $('#inputNom').val();
     if (name === "SLAY" || name === "Test" || !name) {
         $('#validNom').html("Nom usager non disponible");
         $('#validNom').css("color", "red")
         nameValid = false;
     }
     else {
         $('#validNom').html("Nom usager disponible");
         $('#validNom').css("color", "#3aff3a")
         nameValid = true;
     }
});



//Pass Check
$('#inputMdp').keyup(function() {
    mdp = $('#inputMdp').val();
    if (mdp.length === 0) {
        mdpValid = false;
        $('#validMdp').html("Mot de passe invalide");
        $('#validMdp').css("color", "red")
    }
    else if (mdp.length < 6) {
        $('#validMdp').html("Faible");
        $('#validMdp').css("color", "red")
        mdpValid = true;
    }
    else if (mdp.length < 9) {
        $('#validMdp').html("Moyen");
        $('#validMdp').css("color", "yellow")
        mdpValid = true;
    }
    else if (/[A-Z]/.test(mdp) && /[0-9]/.test(mdp)){
        $('#validMdp').html("Fort");
        $('#validMdp').css("color", "#3aff3a")
        mdpValid = true;
    }
});
$('#inputConfMdp').keyup(function() {
    var mdp2 = $('#inputConfMdp').val();

    if (mdp === mdp2) {
        $('#validConfMdp').html("OK");
        $('#validConfMdp').css("color", "#3aff3a")
        confmdpValid = true;
    }
    else {
        $('#validConfMdp').html("Les mots de passes ne sont pas identiques !");
        $('#validConfMdp').css("color", "red")
        confmdpValid = false;
    }
});


//Email Check
$('#inputEmail').keyup(function() {
    email = $('#inputEmail').val();

    if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
        $('#validConfEmail').html("Email valide");
        $('#validConfEmail').css("color", "#3aff3a")
        emailValid = true;
    }
    else {
        $('#validConfEmail').html("Email invalide");
        $('#validConfEmail').css("color", "red")
        emailValid = false;
    }
});


//Costume check
$("input[name='costume']").click(function() {
    costume = $("input[name='costume']:checked").val();

    if (costume === "1") {
        $('#Starwars').show();
        $('#Marvel').hide();
        $('#DC').hide();
        costumeValid = true;
    }
    else if (costume === "2") {
        $('#Starwars').hide();
        $('#Marvel').show();
        $('#DC').hide();
        costumeValid = true;
    }
    else {
        $('#Starwars').hide();
        $('#Marvel').hide();
        $('#DC').show();
        costumeValid = true;
    }
});

//Character check
$("#SWsel").change(function () {
    char = $("#SWsel").val();
    $('#SWimg').attr("src", "img/"+char);
});
$("#Marvelsel").change(function () {
    var char = $("#Marvelsel").val();
    $('#Marvelimg').attr("src", "img/"+char);
});
$("#DCsel").change(function () {
    var char = $("#DCsel").val();
    $('#DCimg').attr("src", "img/"+char);
});

//Validation
$('.validation').click(function () {
    var charStr = "";

    if (char === "arrow.png") {
        charStr = "Arrow";
    }
    else if (char === "batman.png") {
        charStr = "Batman";
    }
    else if (char === "flash.webp") {
        charStr = "Flash";
    }
    else if (char === "hulk.jpg") {
        charStr = "Hulk";
    }
    else if (char === "obiwan.jpeg") {
        charStr = "Obiwan Kenobi";
    }
    else if (char === "rtxyoda.jpg") {
        charStr = "Yoda";
    }
    else if (char === "spiderman.webp") {
        charStr = "Spiderman";
    }
    else if (char === "thor.jpg") {
        charStr = "Thor";
    }
    else if (char === "vador.jpg") {
        charStr = "Darth Vador";
    }


    if (confmdpValid === true && mdpValid === true && nameValid === true && costumeValid === true && emailValid === true) {
        alert("Vous avez entrez les informations suivantes :\nNom: " + name + "\nMDP: " + mdp + "\nEmail: " + email + "\nCostume: " +charStr);
    }
    else {
        alert("Des informations sont incorrectes !")
    }
});

