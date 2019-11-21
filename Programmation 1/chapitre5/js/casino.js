var initialBid = Number(prompt("Initial Bid:"));
var initialMoney = Number(prompt("Initial Money:"));
var money = initialMoney;
var winningCondition = money+Number(prompt("Winning Condition:"));
var losses = 0;
var consLosses = 0;
var currentBid = initialBid;
var biggestBid = initialBid;
var turns = 0;

while (money < winningCondition && money > 0) {
    turns++;
    // 1 = win 0 = loss
    var outcome = Math.round(Math.random());
    console.log(outcome);
    if (outcome === 1) {
        losses = 0;
        money -= currentBid;
        money += currentBid*2;
        currentBid = initialBid;
        document.writeln("You win! | Money = " + money + "<br>");
    }
    else {
        losses ++;
        money -= currentBid;
        currentBid *=2;
        if (consLosses < losses) {
            consLosses = losses;
            biggestBid = currentBid;
        }


        document.writeln("You lose! | Money = " + money + "<br>");

    }
}

if (money < 0 ) {
    document.writeln("You're ruined ! You have : " + money + "$, Most money bet : " + biggestBid + "$, Most consecutive losses : " + consLosses + ", You've played " + turns + "times");
}
else {
    document.writeln("You've won ! You have : " + money + "$, Most money bet : " + biggestBid + "$, Most consecutive losses : " + consLosses + ", You've played " + turns + "times");
}



