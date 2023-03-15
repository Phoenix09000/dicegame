
function rolldice(){
    var randnum1 = parseInt(Math.random()*6) + 1;
    var randnum2 = parseInt(Math.random()*6) + 1;
    
    var image1 = "images/dice"+ randnum1 +".png";
    var image2 = "images/dice"+ randnum2 +".png";
    
    document.querySelector(".dice .img1").setAttribute("src",image1);
    document.querySelector(".dice .img2").setAttribute("src",image2);

    if (randnum1 > randnum2){
        document.querySelector("h1").innerHTML='Player 1 wins';
        document.getElementById("d1").style.visibility = "visible";
        document.getElementById("d2").style.visibility = "hidden";
    } else if (randnum1 < randnum2){
        document.querySelector("h1").innerHTML='Player 2 wins';
        document.getElementById("d1").style.visibility = "hidden";
        document.getElementById("d2").style.visibility = "visible";
    } else{
        document.querySelector("h1").innerHTML='Draw';
        document.getElementById("d1").style.visibility = "hidden";
        document.getElementById("d2").style.visibility = "hidden";
    }
}

