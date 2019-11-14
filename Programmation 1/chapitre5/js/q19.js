var word = "word";
var tries = [];
var randWord = word.split(" ");

for (i = 0; i < randWord.length; i++) {
    rand = Math.round(Math.random() * randWord.length) -1;
    var temp = randWord[i];
    randWord[i] = randWord[rand];
    randWord[rand] = temp
}

document.writeln(randWord);