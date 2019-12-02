let votreVraiNom = "Raphaël Nadeau";
let inputMenu = Number(prompt("Choisissez la fonction: 1: Encrypter, 2: Décrypter, 3: Afficher les crédits"));

if (inputMenu === 1) {
    EncrypteMessage();
}
else if (inputMenu === 2) {
    DecrypteMessage();
}
else if (inputMenu === 3) {
    AfficherCredits();
}
else {
    alert("Veuillez entrer un nombre de 1 à 3");
}


function EncrypteMessage() {
    let motSecret = String(prompt("Entrez le mot a encrypter:"));
    let tabSecret = [];
    let multiplier = 2;

    for (i=0;i<motSecret.length;i++) {
        tabSecret.push(motSecret.charCodeAt(i)*multiplier);
        multiplier *= 2;
    }
    console.log(tabSecret);
}

function DecrypteMessage() {
    let motSecret = "";
    let input;
    let multiplier = 2;

    while (input !== -1) {
        input = Number(prompt("Entrez un nombre a décrypter"));
        if (Number.isNaN(input)) {
            alert("Veuillez entrer un nombre!");
        }
        else {
            let char = String.fromCharCode((input/multiplier));
            motSecret += char;
            multiplier *=2;
        }
    }
    console.log(motSecret);
}

function AfficherCredits() {
    console.log("Algorithme d'encryption / décryption réalisé par " + votreVraiNom);
}