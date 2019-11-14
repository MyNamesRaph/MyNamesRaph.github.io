var id1;
var id2;
var src1;
var src2;
var secondClick = false;
var won = false;

var cheated = false;
var moves = 0;
var highScore = 999999999999999999999999999999999999999999;


$(".img-fluid").click(function() {
    if (won === false) {
        if (secondClick === true) {
            id2 = $(this).attr("id");
            src2 = $(this).attr("src");
            if (id2 !== id1) {
                $("#" + id1).attr("src", src2);
                $(this).attr("src", src1);
                secondClick = false;
                moves++;
                $("#moves").html("Nombre de déplacement: " + moves);
            }

        }
        else {
            id1 = $(this).attr("id");
            src1 = $(this).attr("src");
            secondClick = true;
        }
        if ($("#image1").attr("src") === "images/1.jpg" && $("#image2").attr("src") === "images/2.jpg" && $("#image3").attr("src") === "images/3.jpg" && $("#image4").attr("src") === "images/4.jpg" && $("#image5").attr("src") === "images/5.jpg" && $("#image6").attr("src") === "images/6.jpg" && $("#image7").attr("src") === "images/7.jpg" && $("#image8").attr("src") === "images/8.jpg" && $("#image9").attr("src") === "images/9.jpg" && cheated === false) {
            $(".img-fluid").attr("src", "images/victoire.jpg");
            won = true;
            if (highScore > moves) {
                highScore = moves;
                $("#HS").html("High Score: " +highScore)
            }
        }
    }

});

$("#boutonTricher").click(function() {
    cheated = true;
    for (i = 1; i <= 9; i++) {
        $("#image" + i).attr("src", "images/"+i+".jpg");
    }
});

$("#boutonRecommencer").click(function () {
    won = false;
    cheated = false;
    moves = 0;
    $("#moves").html("Nombre de déplacement: " + moves);
    var arr = ["images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg"];
    var rand = 0;
    for (i = 1; i <= 9; i++) {
        rand = Math.round(Math.random() * arr.length) -1;
        var removed = arr.splice(rand, 1);
        $("#image" + i).attr("src", removed);
    }
});

