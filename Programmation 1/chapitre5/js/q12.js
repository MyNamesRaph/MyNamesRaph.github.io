var ansArr = [true,false,false,true,false,true,true,true,false,true];
var good = 0;

for (i=0; i<ansArr.length; i++) {
    var ans = Boolean(confirm("Réponse"));
    console.log(ans);
    if (ans === ansArr[i]) {
        good++;
    }
}

document.write("Résultat: " + good + "/10");