//exo1
/*   let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    console.log('Hello Word');
}); 
//exo2
 let btnInput=document.getElementById('btnInput');
let txt = document.getElementById('txt');
let h1 = document.getElementById('h1');
btnInput.addEventListener('click',function(){
let monTxt = txt.value;
h1.textContent = monTxt;
}); 
//exo3
let tlt1 = document.getElementById('titre1');
let tlt2 = document.getElementById('titre2');
let tlt3 = document.getElementById('titre3');
let tousLesParagraphes = document.querySelectorAll('p');

tlt1.addEventListener('click', function(){
    let paragraphesAssocies = tlt1.nextElementSibling;
    if(paragraphesAssocies.style.display === "block"){
        paragraphesAssocies.style.display = "none";
    } else {
        paragraphesAssocies.style.display = "block";
    }
});  

tlt2.addEventListener('click', function(){
    let paragraphesAssocies = tlt2.nextElementSibling;
    if(paragraphesAssocies.style.display === "block"){
        paragraphesAssocies.style.display = "none";
    } else {
        paragraphesAssocies.style.display = "block";
    }
});

tlt3.addEventListener('click', function(){
    let paragraphesAssocies = tlt3.nextElementSibling;
    if(paragraphesAssocies.style.display === "block"){
        paragraphesAssocies.style.display = "none";
    } else {
        paragraphesAssocies.style.display = "block";
    }
});   */
//exo4
/* let para=document.getElementById('paragraphe');
window.onload=function(){
    let input=prompt('voulez vous afficher le paragraphe');
    if(input == 'oui'){
        let monTexte='yessai';
        para.textContent= monTexte;
    }
}

 */
//exo5
/* let masterBtn = document.getElementById('tous');
let htmlBtn = document.getElementById('html1');
let cssBtn = document.getElementById('css1');
let jsBtn = document.getElementById('js1');
let varr = 0;
let varr2 = 0;
let varr3 = 0;
let varr4 = 0;
let html;
let css;
let js;
let allp;
let allp2;
let allp3;
htmlBtn.addEventListener('click',function(){
    if(varr==0){
    html = document.createElement('p');
    html.textContent='ceci est le paragrgaphe pour le html';
    document.body.appendChild(html);
    varr=1;
    return html;
    }
    else if(varr==1){
        html.remove();
        varr=0;
    }
})
cssBtn.addEventListener('click',function(){
    if(varr2==0){
    css = document.createElement('p');
    css.textContent='ceci est le paragrgaphe pour le css';
    document.body.appendChild(css);
    varr2=1;
    return css;
    }
    else if(varr2==1){
        css.remove();
        varr2=0;
    }
})
jsBtn.addEventListener('click',function(){
    if(varr3==0){
    js = document.createElement('p');
    js.textContent='ceci est le paragrgaphe pour le js';
    document.body.appendChild(js);
    varr3=1;
    return js;
    }
    else if(varr3==1){
        js.remove();
        varr3=0;
    }
})
 masterBtn.addEventListener('click',function(){
    if(varr4==0){
        allp = document.createElement('p');
        allp.textContent='ceci est le paragrgaphe pour le html';
        document.body.appendChild(allp);
        allp2 = document.createElement('p');
        allp2.textContent='ceci est le paragrgaphe pour le css';
        document.body.appendChild(allp2);
        allp3 = document.createElement('p');
        allp3.textContent='ceci est le paragrgaphe pour le javascript';
        document.body.appendChild(allp3);
        varr4=1;
        return allp,allp2,allp3
    }
    else if(varr4==1){
        allp.remove();
        allp2.remove();
        allp3.remove();
        varr4=0;
    }
}) 
 */
//exo 6
/* var spanMinutes = document.getElementById("minutes");
var spanSeconds = document.getElementById("seconds");
var spanMillis = document.getElementById("millis");

var chrono = 0;   // millisecondes
var timer = null; // pour stocker le handle du timer

function reset() { // remet le compteur à zéro
  chrono = -1;
  increment();
}

function start() {
if (timer == null){
 	timer = setInterval(increment, 1);
  }
}

function stop() {
	clearInterval(timer);
  timer = null;
}

function increment() {
	// TODO: 
  //  - incrémenter le chrono 
  chrono++;
  //  - calculer minutes, secondes, millis
  var millis = chrono %1000;
  var seconds = ~~(chrono / 1000) % 60;
  var minutes = ~~(chrono / 60000);
  //  - mettre à jour le HTML
  spanMinutes.innerHTML = ("0"+minutes).slice(-2);
  spanSeconds.innerHTML = ("00"+seconds).slice(-2);
  spanMillis.innerHTML = ("000"+millis).slice(-3);
}

// enregistrer les événements
document.getElementById("start").addEventListener('click', start);
document.getElementById("stop").addEventListener('click', stop);
document.getElementById("reset").addEventListener('click', reset); */
//exo7
/* let prEuro = document.getElementById('euro');
let prFranc = document.getElementById('franc');

prEuro.addEventListener('input', function() {
    if (isNaN(prEuro.value) || prEuro.value === "") {
        alert("entrer un nombre ");
        return;
    }
    let mula = prEuro.value;
    prFranc.value = mula * 1.08;
});

prFranc.addEventListener('input', function() {
    if (isNaN(prFranc.value) || prFranc.value === "") {
        alert("entrer un nombre ");
        return;
    }
    let mulas = prFranc.value;
    prEuro.value = mulas * 0.92;
}); */
//exo