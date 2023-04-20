
function dom(val){return document.getElementById(val)};
function cree(val){return document.createElement(val)};

let tourpreced ;//= "drag1";
let commence = false;
let fin = 0;

function initialisation(){
    dom('00').innerHTML = "<img src='1.png' draggable='true' ondragstart='drag(event)' id='drag1' width='50' style='position: relative; margin-left: -10px; margin-top: -10px'>";
    dom('01').innerHTML = "<img src='1.png' draggable='true' ondragstart='drag(event)' id='drag2' width='50' style='position: absolute; margin-left:-25px; margin-top: -10px'>";
    dom('02').innerHTML = "<img src='1.png' draggable='true' ondragstart='drag(event)' id='drag3' width='50' style='position: absolute; margin-left:-25px; margin-top: -10px'>";

    dom('10').innerHTML = "";
    dom('11').innerHTML = "";
    dom('12').innerHTML = "";

    dom('20').innerHTML = "<img src='2.png' draggable='true' ondragstart='dragg(event)' id='drag4' width='50' style='position: absolute; margin-left:-25px; margin-top: -10px'>";
    dom('21').innerHTML = "<img src='2.png' draggable='true' ondragstart='dragg(event)' id='drag5' width='50' style='position: absolute; margin-left:-25px; margin-top: -10px'>";
    dom('22').innerHTML = "<img src='2.png' draggable='true' ondragstart='dragg(event)' id='drag6' width='50' style='position: absolute; margin-left:-25px; margin-top: -10px'>";
    commence = false;
    fin = 0;
}

initialisation();
const temp1 = document.getElementById('00').innerHTML.split(' ');
const player1 = temp1[1];
console.log(temp1[2]);

const temp2 = document.getElementById('20').innerHTML.split(' ');
const player2 = temp2[1];
console.log(player2);

let score1= 0;
let score2 = 0;

//les points: 
let p1, p2, p3, p4, p5, p6, p7, p8, p9;

function lespoints(){
    let tp1 = document.getElementById('00').innerHTML.split(' ');
    p1 = tp1[1];
    let tp2 = document.getElementById('01').innerHTML.split(' ');
    p2 = tp2[1];
    let tp3 = document.getElementById('02').innerHTML.split(' ');
    p3 = tp3[1];

    let tp4 = document.getElementById('10').innerHTML.split(' ');
    p4 = tp4[1];
    let tp5 = document.getElementById('11').innerHTML.split(' ');
    p5 = tp5[1];
    let tp6 = document.getElementById('12').innerHTML.split(' ');
    p6 = tp6[1];

    let tp7 = document.getElementById('20').innerHTML.split(' ');
    p7 = tp7[1];
    let tp8 = document.getElementById('21').innerHTML.split(' ');
    p8 = tp8[1];
    let tp9 = document.getElementById('22').innerHTML.split(' ');
    p9 = tp9[1];
}

let vict = 0;

function recommence(){
    let div = dom('farany');
    div.style.display = "block";
    let btn1 = cree('button');
    btn1.id = "reco";
    let btn2 = cree('button');
    btn2.id = "ter";
    let texte = document.createElement('h4');
    if(vict==1)
        texte.innerHTML = 'JOUEUR 1 A GAGNE!';
    else
        texte.innerHTML = 'JOUEUR 2 A GAGNE!';
    texte.style.color = 'rgb(100, 50, 100)';
    
    btn1.innerHTML = "Rejouer";
    btn2.innerHTML = "Terminer";
    
    btn1.style.backgroundColor = "black";
    btn1.style.color = "white";
    btn1.style.width = "100px";
    btn1.style.borderRadius = "5px";
    btn1.style.marginRight = "5px";
    btn1.style.padding = "5px";

    btn2.style.backgroundColor = "black";
    btn2.style.color = "white";
    btn2.style.width = "100px";
    btn2.style.borderRadius = "5px";
    btn2.style.marginLeft = "5px";
    btn2.style.padding = "5px";

    div.appendChild(texte);
    div.appendChild(btn1);
    div.appendChild(btn2);

    dom('reco').addEventListener('click',(e)=>{
        initialisation();
        div.removeChild(texte);
        div.removeChild(btn1);
        div.removeChild(btn2);
        div.style.display = "none";
    })
    dom('ter').addEventListener('click',(e)=>{
        let div = dom('farany2');
        div.style.display = "block";
        let texte = document.createElement('h4');
        texte.style.fontSize = "20px";
        texte.style.color = 'rgb(100, 50, 100)';
        let texte2 = document.createElement('h1');
        texte2.style.fontSize = "30px";
        texte2.style.color = 'rgb(100, 50, 100)';
        if(vict==1)
            texte.innerHTML = 'VICTOIRE DE JOUEUR 1!';
        else
            texte.innerHTML = 'VICTOIRE DE JOUEUR 2!';
        texte2.innerHTML = score1+' - '+score2;

        let btn = cree('button');
        btn.id = "tapitra";
        btn.innerHTML = "Passer";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.borderRadius = "5px";
        btn.style.padding = "5px";
        //btn.style.boxShadow = "-1px 1px 0px 0px";

        div.appendChild(texte);
        div.appendChild(texte2);
        div.appendChild(btn);

        dom('tapitra').addEventListener('click', (e)=>{
            document.location = 'index.html'
        })
    })

    dom('cont').style.display = "flex";
    dom('cont').style.position = "absolute";
}


// verification 
function victoireplayer1() {
    if (p1 == player1 && p5 == player1 && p9 == player1 || p3 == player1 && p5 == player1 && p7 == player1 || p2 == player1 && p5 == player1 && p8 == player1 || p4 == player1 && p5 == player1 && p6 == player1) {
        fin = 1;
        vict = 1;
        score1++;
        dom('score1').innerHTML = score1;
        recommence();
        //console.log("valiny = "+ fin)
    }           
}
function victoireplayer2() {
    if (p1 == player2 && p5 == player2 && p9 == player2 || p3 == player2 && p5 == player2 && p7 == player2 || p2 == player2 && p5 == player2 && p8 == player2 || p4 == player2 && p5 == player2 && p6 == player2) {
        fin = 1; 
        vict = 2;
        score2++;
        dom('score2').innerHTML = score2;
        recommence();
        //console.log("valiny = "+ fin)
    }   
}


function allowDrop(ev) {
    if(fin==0)
    ev.preventDefault();
    //console.log(ev);
}

let elementparent;
function drag(ev) {
    if(fin==0){
        if(commence==true){
            if(tourpreced=="drag4" || tourpreced=="drag5" || tourpreced=="drag6"){
                ev.dataTransfer.setData("text", ev.target.id);

                elementparent = dom(ev.target.id).parentElement.id;
                //console.log("teste = "+elementparent);
                //console.log(ev.target.id);
            }
        } else{
            ev.dataTransfer.setData("text", ev.target.id);

            elementparent = dom(ev.target.id).parentElement.id;
            //console.log("teste = "+elementparent);
            //console.log(dom(ev.target.id).parentElement.id);
        }
    }
}

function dragg(ev) {
    if(fin==0){
        if(commence==true){
            if(tourpreced=="drag1" || tourpreced=="drag2" || tourpreced=="drag3"){
                ev.dataTransfer.setData("text", ev.target.id);

                elementparent = dom(ev.target.id).parentElement.id;
                //console.log("teste = "+elementparent);
            }
        }else{
            ev.dataTransfer.setData("text", ev.target.id);

            elementparent = dom(ev.target.id).parentElement.id;
            //console.log(dom(ev.target.id).parentElement.id);
            //console.log("teste = "+elementparent);
        }
    }
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var dest = ev.dataTransfer.setData("text", ev.target.id);
    //console.log(" Zavatra agnatiny case === "+dom(ev.target.id).innerHTML);
    //console.log(" Id case === "+ev.target.id);
    if(fin==0){
        if(ev.target.id !="drag1" && ev.target.id !="drag2" && ev.target.id !="drag3" && ev.target.id !="drag4" && ev.target.id !="drag5" && ev.target.id !="drag6"){
            if(dom(ev.target.id).innerHTML==""){
                if(elementparent=="00"){
                    if(ev.target.id=="01" || ev.target.id=="10" || ev.target.id=="11"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        console.log(data);
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="01"){
                    if(ev.target.id=="02" || ev.target.id=="00" || ev.target.id=="11"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="02"){
                    if(ev.target.id=="01" || ev.target.id=="11" || ev.target.id=="12"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="10"){
                    if(ev.target.id=="00" || ev.target.id=="20" || ev.target.id=="11"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="11"){
                    //if(ev.target.id=="01" || ev.target.id=="10" || ev.target.id=="11"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    //}
                }
                if(elementparent=="12"){
                    if(ev.target.id=="02" || ev.target.id=="22" || ev.target.id=="11"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="20"){
                    if(ev.target.id=="10" || ev.target.id=="11" || ev.target.id=="21"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="21"){
                    if(ev.target.id=="11" || ev.target.id=="20" || ev.target.id=="22"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
                if(elementparent=="22"){
                    if(ev.target.id=="11" || ev.target.id=="12" || ev.target.id=="21"){
                        ev.target.appendChild(document.getElementById(data)); 
                        commence =true;
                        tourpreced = data;
                        //console.log("Fiaviany = ", elementparent);
                    }
                }
            }
        } 
    }
    //console.log(tourpreced);
    //console.log(dest);

    lespoints();
    victoireplayer1();
    victoireplayer2();
}

dom('recommance').addEventListener('click', (e)=>{
    document.location = 'index.html'
})