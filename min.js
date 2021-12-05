var oui = document.getElementById('oui');
var non = document.getElementById('non');
var repeat  = 0;

function callNon(){
this.non.classList.add("non");
let x = Math.floor(Math.random() * 233) ;
let y = Math.floor(Math.random() * 500) ;
document.getElementsByClassName('non')[0].style.left = x+"px";
document.getElementsByClassName('non')[0].style.top = y+"px";
this.repeat = this.repeat + 1
}

function callOui(){
    if(this.repeat == 0){
        document.getElementById("title").innerHTML = "تهدن اصحبي كلشي غيفوت";
        document.getElementsByClassName('btns')[0].style.display = "none";
        document.getElementsByClassName('choix-yes')[0].style.display = "block";
    }
    else if(this.repeat >0){
        document.getElementById("title").innerHTML = "كنت عارف <br>غي انت لي راسك قاسح وبقيتي تتكليكي على ديك نن "+this.repeat+" المرات";
        document.getElementsByClassName('btns')[0].style.display = "none";
        document.getElementsByClassName('choix-non')[0].style.display = "block";


    }
}