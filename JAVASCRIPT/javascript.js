/* let ruski = "cyka";
console.log(typeof(ruski));
let change = 5;
console.log(ruski.toString());
console.log(parseFloat(change));
let bjr = "bonjour";
let tlm= " tout le monde";
let tout = bjr+tlm;
console.log(tout);
let nbr = 45;
let stringnbr = "45" ;
console.log(nbr === stringnbr);
console.log(nbr == stringnbr); */
//exo1
/* let var1 =25;
let var2 =17.8;
let var3 =25;
if(var1==var2 && var1==var3 && var2==var3){
    console.log("les valeurs sont identiques");
}
else if(var1==var2 || var1==var3 || var2==var3){
    console.log("les valeurs sont egales");

}
else{
    console.log("elles sont differentes");
}  */
//exo2
/* let variables = prompt("entrez votre valeur");
if(variables > 100){
    console.log("superieur");
}
else{
    console.log("inferieur");
} */
//exo 2 bis
/* let age = prompt("ton age");
if(age < 18){
    console.log("t'es mineur");
}
else if (age > 18 && age < 65){
    console.log("tu peux picoler");
}
else if ( age >= 65 && age < 67){
    console.log("cool la retraite");
}
else{
    console.log("rip");
}  */
//exo3
/* let couleur1 = prompt("rentrez une couleur");
let couleur2 = prompt("rentrez une couleur");
if (couleur1=="rouge" && couleur2=="bleu" || couleur1=="bleu" && couleur2=="rouge"){
    console.log("violet");
}
else if(couleur1=="jaune" && couleur2=="bleu" || couleur1=="bleu" && couleur2=="jaune"){
    console.log("vert");
}
else if(couleur1=="rouge" && couleur2=="jaune"||couleur2=="rouge" && couleur1=="jaune" ){
    console.log("orange");
}
else{
    console.log("marche pas bg");
} */
//exo4

/* let age= prompt("ton age");
switch(true){
    case age < 18:
        console.log("tu es mineur");
    break;
    case age > 18 && age < 65:
        console.log("tu peux picoler");
    break;
    case age >= 65 && age < 67:
        console.log("cool la retraite");
    break;
    case age >= 67 :
        console.log("rip");
    break;
} */

//exo5
/* let nom= prompt("ton nom");
let prenom= prompt(" ton prenom");
function nomPrenom(nom,prenom){
    console.log("tu t'appelles" + " "+nom +" "+ prenom);
}
nomPrenom(nom,prenom);
 */

//exo 6
/* let a=0;
let intervale = setInterval(()=>{
    a++
    console.log(a);
    if(a==5){
        clearInterval(intervale);
    }
},1000); */
//exo7
/* var z=0;

function brb(){
    setTimeout(()=>{
        z++;
        if(z<=5){
            brb();
            console.log(z);
        }
    },1000);
}
brb(); */

//exo8
/* let annee=prompt("Rentrez votre année");
function bisextile(){
    if(annee%4!==0){
        console.log("false");
    }
    else if(annee%4==0 && annee%100!==0){
        console.log("true")
    }
    else if (annee%400!==0 && annee%100==0 && annee%4==0){
        console.log("false");
    }
    else if (annee%400==0 && annee%100==0 && annee%4==0){
        console.log("true");
    }
}
bisextile(annee); */

//exo9
/* let nbrMystere = Math.round(Math.random()*10);
console.log(nbrMystere);
let compteur =0;
let input=prompt("rentrez votre nombre");
function devineNombre(){
    while (compteur<2 && nbrMystere!=input){
        if(input>nbrMystere){
            alert("trop grand");
            compteur++;
            input=prompt("rentrez votre nobmre");
        }
        else if (input<nbrMystere){
            alert("trop petit");
            compteur++;
            input=prompt("rentrez votre nobmre");
        }
    }
    if (nbrMystere==input){
        alert("tu as deviné");
    }
    else{
        alert("tu as perdu" );
    }


}
devineNombre();
 */
//exo10
/* let tabFruit=["pomme","banane","ananas"];
function afficheTab(tabFruit){
for(let i = 0 ; i<tabFruit.length;i++){
    console.log(tabFruit[i]);
}
}
afficheTab(tabFruit); */
//exo11
/* let semaine =["lun", "mra", "mer","jeu","ven","sam","dim"];
let dernierjour= semaine.pop();
console.log(semaine);
console.log(dernierjour);
let ajouteDim = semaine.push("dim");
console.log(semaine);
semaine[1]="mar";
console.log(semaine);
console.log(semaine.length);
console.log(semaine[2]);

 */
//exo 12
/*  let tabFruit=["pomme","banane","ananas","kiwi","fraise"];
console.log(tabFruit);
let fruit = prompt("choisissez un fruit");
let bool=0;
function retireFruit(tabFruit){
    for(let i=0;i<tabFruit.length;i++){
        if(tabFruit[i].includes(fruit)){
            tabFruit.splice(i,1);
            console.log(tabFruit);
            bool= 1
        }

    }
    if(bool=0){
        alert("indispo");
        console.log(tabFruit);
    }
}
retireFruit(tabFruit);
 */
//exo13
/* const classe1 = {
    eleves: [
        { nom: "paul", notes: [12, 17, 16, 8, 11, 13] },
        { nom: "julie", notes: [17, 7, 16, 18, 11, 13] },
        { nom: "marc", notes: [15, 17, 17, 8, 15, 17] },
        { nom: "richard", notes: [20, 7, 16, 8, 11, 3] },
        { nom: "kriss", notes: [14, 14, 18, 8, 11, 4] },
        { nom: "gilles", notes: [20, 20, 20, 20, 20, 20] },
    ]
};

const classe2 = {
    eleves: [
        { nom: "pierres", notes: [17, 7, 16, 18, 11, 13] },
        { nom: "peter", notes: [15, 5, 12, 14, 17, 20] },
        { nom: "margot", notes: [17, 7, 16, 18, 11, 13] },
        { nom: "lucas", notes: [15, 15, 12, 14, 17, 20] },
        { nom: "lucille", notes: [17, 15, 16, 18, 11, 14] },
        { nom: "pastore", notes: [15, 15, 13, 14, 17, 20] },
    ]
};

function calcMoy(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
        somme += notes[i];
    }
    return somme / notes.length;
}



for (let i = 0; i < classe1.eleves.length; i++) {
    let moyenne = calcMoy(classe1.eleves[i].notes);
    console.log(classe1.eleves[i].nom + " " +Math.round(moyenne));
}

for (let i = 0; i < classe2.eleves.length; i++) {
    let moyenne = calcMoy(classe2.eleves[i].notes);
    console.log(classe2.eleves[i].nom+ " " + Math.round(moyenne));
} */
//exo14
/* function max(tab) {
    let plusGrand = tab[0];

    for(let i = 1 ; i < tab.length ; i++) {
        if(tab[i] > plusGrand) {
            plusGrand = tab[i];
        }
    }

    return plusGrand;
}

console.log(max([7,5,1,22,4,7,6,5]));
 */
//exo15
/* let tab=[1,2,3];
let tabMirroir=[... tab,tab[1],tab[0]];
console.log(tabMirroir); */
/* let tab=[1,2,3,4];
let tab2=[1,2,3,4];
let tabMirroir=[...tab2,...tab.slice(0,tab.length-1).reverse()];
console.log(tabMirroir); */
//exo16
/* let t=[21,75,-9,54,-94,-6,-1,74];
let result = t.filter(nbr=> nbr>=0);
console.log(result); */
//exo17
/* function multiples(nums, n) {
    return nums.filter(function(x) {
        return x % n === 0;
    });
}
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 2;
let result = multiples(nums, n);
console.log(result);  */
//exo18
/* let tabFilm=["messi","ronaldo","neymar","dybala","di maria","ibrahimovic"];
let terme = prompt("terme a chercher");
function rechercheEl(tabFilm,terme){
    for(let i=0;i<tabFilm.length;i++){
        if(tabFilm[i].match(terme)){
            console.log(tabFilm[i]);
        }
    }
}
rechercheEl(tabFilm,terme); 
 */
//exo19
/* let tabFilm=["messi","ronaldo","neymar","dybala","di maria","ibrahimovic"];
let long=tabFilm.map(function(mots){
    console.log(mots.length);
})
 */
//exo20
/* const foods = {
    food: [
        { nom: "tacos", isVegetarian: "false" },
        { nom: "pates", isVegetarian: "true" },
        { nom: "aubergine", isVegetarian: "true" },
        { nom: "poulet", isVegetarian: "false" },
    ]
};
let FOOD = prompt("saisissez votre aliment"); 
function forVegetarians(foods, FOOD) {
    for (let i = 0; i < foods.food.length; i++) {
        let verification = foods.food[i].isVegetarian;
        if (verification === "true") {
            console.log(FOOD + " " + "est consommable par les vegetariens");
        }
        else {
            console.log(FOOD + " " + "n'est pas consommable par les vegetariens");
        }
    }
}
forVegetarians(foods, FOOD);
 */
/* function forVegetarians(foods) {
    return foods.map(food => {
        if(food.isVegetarian) {
            return `${food.food} est consommable par les végétariens`;
        } else {
            return `${food.food} n’est pas consommable par les végétariens`;
        }
    });
}
console.log(forVegetarians(foods)); */
//EXO21
/*  const films = 
    [
        { titre: "agent47", note: "89" },
        { titre: "avatar", note: "92" },
        { titre: "gemini", note: "46" },
        { titre: "tran-tran", note: "51" },
        { titre: "juventus", note: "65" },
    ]
;

let labelFilms= films.map(function label(films){
    ratingFilms=films.note;
    filmTitre=films.titre
    if(ratingFilms<60){
        console.log(filmTitre+" "+ratingFilms+" "+"rotten");
    }
    else if(ratingFilms>60&&ratingFilms<75){
        console.log(filmTitre+" "+ratingFilms+" "+"fresh");
    }
    else if (ratingFilms>75){
        console.log(filmTitre+" "+ratingFilms+" "+"certified fresh");
    }
})
label(Films);  */

//objects
/* class Personne {
    constructor(nom,prenom){
        this.nom=nom;
        this.prenom=prenom;
    }
    direBjr(){
        console.log(`bonjour je m appelle ${this.nom} ${this.prenom}`);
    }
}
class Walk extends Personne{
    constructor(nom,prenom,walk){
        super(nom,prenom);
        this.walk=walk;
    }
    isWalk(){
        super.direBjr()
        if(this.walk===true){
            console.log("il marche");
        }
        else{
            console.log("il mareche pas");
        }
    }
}
let Nicolas = new Walk('malingue','nicolas',true);
Nicolas.isWalk(); */
/* class Velo {
    constructor (nom,poids,couleur){
        this.nom=nom;
        this.poids=poids;
        this.couleur=couleur;
    }
    move(start,end){
        console.log(`je me deplace de ${start} a ${end} avec mon ${this.nom} ${this.couleur} a ${this.kmh}kmh il a ${this.watt}watt`);

    }
    
}
class VeloElectrique extends Velo {
    constructor (nom,poids,couleur,watt,kmh){
        super(nom,poids,couleur);
        this.watt=watt;
        this.kmh=kmh;
    }
    
}
let monVelo= new VeloElectrique ('pipo','4kg','vert','40','200');
monVelo.move(7,5); 
 */
//exo 25
/*  class Titulaire {
    constructor(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    sePresenter() {
        console.log(`bonjour je m'appelle ${this.nom} ${this.prenom}`);
    }
}
class Compte {
    constructor(nom, prenom, montant) {
        this.nom = nom;
        this.prenom = prenom;
        this.montant = montant;
        montant = 0;
    }
    crediter(argent) {
        this.montant = this.montant + argent;
    }
    debiter(pasArgent) {
        this.montant = this.montant - pasArgent;
    }
    AfficherSolde() {
        console.log(this.montant);
    }

}
class CompteEpargne extends Compte {
    constructor(nom, prenom, montant, taux,interv) {
        super(nom, prenom, montant);
        this.taux = taux;
        this.taux = 0.05;
        montant = 50;
        setInterval(() => {
            this.montant += this.montant * this.taux;
            console.log(`Nouveau solde : ${this.montant}`);
          }, 1000);
    }
}


Paul = new Titulaire('paul', 'norma');
Richard = new Titulaire('richard', 'abedi');
Kriss = new Titulaire('Kriss', 'jenner');
console.log(Paul);
Richard.sePresenter();
Lpl = new Compte('Kriss', 'jenner', 50);
console.log(Lpl);
Lpl.crediter(150);
console.log(Lpl);
Lpl.debiter(20);
console.log(Lpl);
Lpl.AfficherSolde();
LplEpargne = new CompteEpargne('richard', 'abedi', 15);
console.log(LplEpargne);
LplEpargne.crediter(4 * 50);
console.log(LplEpargne);
LplEpargne.debiter(100);
console.log(LplEpargne);
LplEpargne.AfficherSolde();
LplEpargne; */

//exo26

/* function Voiture(marque, modele, carburant, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.carburant = carburant;
    this.couleur = couleur;
}
let Bolide = [
    { marque: 'bmw', modele: 'serie 5', carburant: 'diesel', couleur: 'noir' },
    { marque: 'tesla', modele: 'model S', carburant: 'electrique', couleur: 'blanche' },
    { marque: 'renault', modele: 'clio 2', carburant: 'essence', couleur: 'grise' },
    { marque: 'renault', modele: 'megane', carburant: 'diesel', couleur: 'noir' },
]
    ;
/*  Voiture.prototype.AllVehicules = function () {
    for (let i = 0; i < Bolide.length; i++) {
        console.log(Bolide[i].marque+" "+Bolide[i].modele+" "+Bolide[i].carburant+" "+Bolide[i].couleur);   
    }
} */
/*  Voiture.prototype.AllVehicules = function () {
    
        console.table(Bolide);
    }

    Voiture.prototype.FilterVoitures = function () {
        if(this.marque){
            const result = Bolide.filter(obj => obj.marque === this.marque);
            console.log(result);
        }
    }
caisse = new Voiture(Bolide);
caisse.AllVehicules();
vrom = new Voiture();
vrom.marque = "bmw";
vrom.FilterVoitures();
 */
//exo 27

function Etudiant(nom, notes) {
    this.nom = nom;
    this.notes = notes;
}
const eleves= [
        { nom: "paul", notes: [12, 17, 16, 8, 11, 13] },
        { nom: "julie", notes: [17, 7, 16, 18, 11, 13] },
        { nom: "marc", notes: [15, 17, 17, 8, 15, 17] },
        { nom: "richard", notes: [20, 7, 16, 8, 11, 3] },
        { nom: "kriss", notes: [14, 14, 18, 8, 11, 4] },
        { nom: "gilles", notes: [20, 20, 20, 20, 20, 20] },
    ]


    Etudiant.prototype.CalcMoyenne = function () {
        let somme = 0;
        for (let i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
        }
        return somme / this.notes.length;
    };
    Etudiant.prototype.Affiche=function(){
        for (let i = 0; i < eleves.length; i++) {
            let etudiant = new Etudiant(eleves[i].nom, eleves[i].notes);
            let moyenne = etudiant.CalcMoyenne();
            console.log(eleves[i].nom + " " + Math.round(moyenne));
        }
        
    }
const paul = new Etudiant("paul", eleves[0].notes);
console.log(paul.CalcMoyenne());
paul.Affiche();

