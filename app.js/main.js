function makegame(){
    showbtn = document.getElementById("showrules");
    rule = document.getElementById("rules");
    closerule = document.getElementById("closerules");
    var personchoice = []
    var computerchoice = []
     


    /*
    *
    Game container contents
    ------------------------
    *
    */
//rock build

//person rock
var rockp = document.createElement("div");
rockp.id = "rockouterp";
rockp.setAttribute("class", "outer")
var rockwhite = document.createElement("div")
rockwhite.className = "innerlayer";
var rockimg = document.createElement("img");
rockimg.src = "./images/icon-rock.svg";
rockimg.alt = "rock";

rockwhite.append(rockimg);
rockp.append(rockwhite);
personchoice.push(rockp);

//computer rock
var rockc = document.createElement("div");
rockc.id = "rockouterc";
rockc.className = "outer";
var rockwhite = document.createElement("div")
rockwhite.className = "innerlayer";
var rockimg = document.createElement("img");
rockimg.src = "./images/icon-rock.svg";
rockimg.alt = "rock";

rockwhite.append(rockimg);
rockc.append(rockwhite);
computerchoice.push(rockc);


//rock build


//paper build

//paperperson
var paperp = document.createElement("div");
paperp.id = "paperouterp";
paperp.className = "outer";
var paperwhite = document.createElement("div")
paperwhite.className = "innerlayer";
var paperimg = document.createElement("img");
paperimg.src = "./images/icon-paper.svg";
paperimg.alt = "paper";

paperwhite.append(paperimg);
paperp.append(paperwhite);
personchoice.push(paperp);

//papercomputer
var paperc = document.createElement("div");
paperc.id = "paperouterc";
paperc.className = "outer";
var paperwhite = document.createElement("div")
paperwhite.className = "innerlayer";
var paperimg = document.createElement("img");
paperimg.src = "./images/icon-paper.svg";
paperimg.alt = "paper";

paperwhite.append(paperimg);
paperc.append(paperwhite);
computerchoice.push(paperc);

//paper build

//scissors build
//person scissors
var scissorsp = document.createElement("div");
scissorsp.id = "scissorsouterp";
scissorsp.className = "outer";
var scissorswhite = document.createElement("div")
scissorswhite.className = "innerlayer";
var scissorsimg = document.createElement("img");
scissorsimg.src = "./images/icon-scissors.svg";
scissorsimg.alt = "scissors";

scissorswhite.append(scissorsimg);
scissorsp.append(scissorswhite);
personchoice.push(scissorsp);

//computer scissors
var scissorsc = document.createElement("div");
scissorsc.id = "scissorsouterc";
scissorsc.className = "outer";
var scissorswhite = document.createElement("div")
scissorswhite.className = "innerlayer";
var scissorsimg = document.createElement("img");
scissorsimg.src = "./images/icon-scissors.svg";
scissorsimg.alt = "scissors";

scissorswhite.append(scissorsimg);
scissorsc.append(scissorswhite);
computerchoice.push(scissorsc);

//scissors build




/**
 * 
 * Selection screen contents
 * -------------------------
 */
var pickdiv = document.createElement("div");
pickdiv.setAttribute("id", "pickdiv");

//-------------------------------------------
var gameresult = document.createElement("div");
gameresult.setAttribute("id", "gameresult")

//-----------------------------------------------
//pickdiv contents
var youpickeddiv = document.createElement("div");
youpickeddiv.setAttribute("id", "youpickeddiv");
youpickeddiv.setAttribute("class", "pick")

var youpicked = document.createElement("div");
youpicked.setAttribute("id", "youpicked");
youpicked.setAttribute("class", "pickcont");

var youpickspan = document.createElement("span");
youpickspan.innerHTML = "YOU PICKED"

youpickeddiv.append(youpicked);
youpickeddiv.append(youpickspan);

//------------------------------------------------


var thehousepickeddiv = document.createElement("div");
thehousepickeddiv.setAttribute("id", "thehousepickeddiv");
thehousepickeddiv.setAttribute("class", "pick")

var thehousepicked = document.createElement("div");
thehousepicked.setAttribute("id", "thehousepicked");
thehousepicked.setAttribute("class", "pickcont");

var thehousepickspan = document.createElement("span");
thehousepickspan.innerHTML = "THE HOUSE PICKED"

thehousepickeddiv.append(thehousepicked);
thehousepickeddiv.append(thehousepickspan);

//------------------------------------------------------
//gameresult contents
var youwin = document.createElement("div");
youwin.setAttribute("id", "youwin");
youwin.setAttribute("class", "winloose")

var playagainbtn = document.createElement("div");
playagainbtn.setAttribute("id", "playagainbtn");
playagainbtn.innerHTML = "PLAY AGAIN"

playagainbtn.addEventListener("click", ()=>{
    secondpage.removeChild(pickdiv)
    secondpage.removeChild(gameresult)

    makegame()
})
//--------------------------------------------
pickdiv.append(youpickeddiv);
pickdiv.append(thehousepickeddiv);


gameresult.append(youwin);
gameresult.append(playagainbtn);





var firstpage = document.getElementById("gamecontainer");
    firstpage.append(rockp);
    firstpage.append(paperp);
    firstpage.append(scissorsp)
var secondpage = document.getElementById("selectionscreen");
    secondpage.append(pickdiv);
    secondpage.append(gameresult);



var arrpick = Math.floor(Math.random() *computerchoice.length);


secondpage.style = "display: none;";
firstpage.style = "display: block;"; 
//rule sheet
showbtn.addEventListener("click", function(){
    rule.style = "display: flex;";
})

closerule.addEventListener("click", ()=>{rule.style = "display: none;"});
//rule sheet

 
   for(let i =0; i<personchoice.length; i++){
       personchoice[i].addEventListener("click", ()=>{
           secondpage.style = "display: block;"
           firstpage.style = "display: none;"
        
           youpicked.append(personchoice[i])
           setInterval(() => {
               thehousepicked.append(computerchoice[arrpick])
           }, 500);

           if(arrpick===i){
               youtie()
           }
           else if(i===0 && arrpick===1 || i===1 && arrpick===2 || i===2 && arrpick===0){
               youloose();
           }else {
               youwon();
           }
        })
   }


}


function youwon(){
    updatescore(1)
    youwin.innerHTML = "YOU WIN"
    gameresult.style = "display: block;"
}
function youtie(){
    updatescore(0)
    youwin.innerHTML = "YOU TIE"
    gameresult.style = "display: block;"
}

function youloose(){
    updatescore(-1)

    youwin.innerHTML = "YOU LOOSE"
    gameresult.style = "display: block;"
}

function updatescore(initscore){
    let scoreboard = document.getElementById("score");
    prevscore =   parseInt(scoreboard.innerHTML);

    scoreboard.innerHTML = initscore + prevscore
}


window.addEventListener("load",makegame)
