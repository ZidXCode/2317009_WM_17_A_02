let images=["1.png","2.png","3.png","4.png","5.png","6.png"];

let dice= document.querySelectorAll("img");

//animation

$(document).ready(function(){
    $("#btn").click(function(){
        $("#dice1").animate({
            rotate:'12deg',
        },400, function(){
            //complete
        });

        $("#dice2").animate({
            rotate:'12deg',
        },400, function(){
            //complete
        });

        $("#dice1").animate({
            rotate:'-12deg',
        },400, function(){
            //complete
        });

        $("#dice2").animate({
            rotate:'-12deg',
        },400, function(){
            //complete
        });

        $("#dice1").animate({
            rotate:'0deg',
        },400, function(){
            //complete
        });

        $("#dice2").animate({
            rotate:'0deg',
        },400, function(){

            //calculations
            
            let diceNumber1= parseInt(Math.random()*6);
            let diceNumber2= parseInt(Math.random()*6);

            document.querySelector("#dice1").setAttribute("src",images[diceNumber1]);
            document.querySelector("#dice2").setAttribute("src",images[diceNumber2]);

            let sum= diceNumber1 + 1 +diceNumber2 + 1;

            document.getElementById("sum").innerHTML=sum;
        });

    });
});