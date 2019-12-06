class MonnaieVirtuelle {
    constructor(nomMonnaie,valeurEnUSD,actif) {
        this.nomMonnaie = nomMonnaie;
        this.valeurEnUSD = valeurEnUSD;
        this.actif = actif;
        this.actifUSD = actif*valeurEnUSD;
    }
}
class Portefeuille {
    constructor(nomProprietaire,tableauMonnaies) {
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }

    ValeurDuPortefeuille() {
        let total = 0;
        for (let i=0;i<this.tableauMonnaies.length;i++) {
            total+= this.tableauMonnaies[i].actifUSD;
        }
        return total;
    }
}

let bitcoin = new MonnaieVirtuelle("Bitcoin",9730,6);
let ethereum = new MonnaieVirtuelle("Ethereum",194,20);
let litecoin = new MonnaieVirtuelle("Litecoin",58,10);
let arrMonnaies = [bitcoin,ethereum,litecoin];

let portefeuille = new Portefeuille("Shany Carle",arrMonnaies);
console.log(portefeuille);
document.write(portefeuille.ValeurDuPortefeuille().toString());