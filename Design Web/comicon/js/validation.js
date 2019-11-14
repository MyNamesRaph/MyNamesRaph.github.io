
//Hide elements
$('#Starwars').hide();
$('#Marvel').hide();
$('#DC').hide();


$('#inputNom').keyup(function() {
     var name = $('#inputNom').val();
     console.log(name);
     if (name === "SLAY" || name === "Test" || !name) {
         $('#validNom').html("Nom usager non disponible");
         $('#validNom').css("color", "red")
     }
     else {
         $('#validNom').html("Nom usager disponible");
         $('#validNom').css("color", "#3aff3a")
     }
});



//Costume check
$("input[name='costume']").click(function() {
    var costume = $("input[name='costume']:checked").val();

    if (costume === "1") {
        $('#Starwars').show();
        $('#Marvel').hide();
        $('#DC').hide();
        console.log("starwars");
    }
    else if (costume === "2") {
        $('#Starwars').hide();
        $('#Marvel').show();
        $('#DC').hide();
        console.log("marvel");
    }
    else {
        $('#Starwars').hide();
        $('#Marvel').hide();
        $('#DC').show();
        console.log("dc");
    }
});