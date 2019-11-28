var type = "colorless";
var level = "basic";
var name;


setInterval(changeCard, 1);

function changeCard() {
    type = $("input[name='typeRadio']:checked").val();
    level = $("input[name='levelRadio']:checked").val();
    if (!type) {
        type = "colorless";
    }
    if (!level) {
        level = "basic";
    }
    cardUrl = 'url("img/' + type + '-' + level + '.png")';
    //$("#card").css("background-image", cardUrl);

    if (type === "dark" || type === "dragon") {
        $("#card").css("color", "white");
    }
    else {
        $("#card").css("color", "black");
    }
    name = $("#name").val();
    $("#nameText").html(name);
}

