/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/

function myFunction() {
    var element = document.getElementById("sides");
    element.classList.toggle("hidden"); 
}
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
var userInput = document.querySelectorAll(".fill");
var userStroke = document.querySelectorAll(".stroke");
var userU = document.querySelectorAll(".u")
var userD = document.querySelectorAll(".d")
var userS = document.querySelectorAll(".s")
console.log(userInput)


    for (let i=0; i<pad.length; i++)
    {
        userInput[i].value = player[i].fill; 
        console.log(userInput)
        userInput[i].nextElementSibling.innerHTML = player[i].fill;
        userInput[i].addEventListener("input", playercolor)

        function playercolor(e) { 
            player[i].fill = e.target.value
            player[i].pad.fill = e.target.value
            userInput[i].nextElementSibling.innerHTML = player[i].fill;
            
               
        }
        userStroke[i].value = player[i].stroke; 
        console.log(userStroke)
        userStroke[i].nextElementSibling.innerHTML = player[i].stroke;
        userStroke[i].addEventListener("input", playerstroke)

        function playerstroke(e) {
            player[i].stroke = e.target.value
            player[i].pad.stroke = e.target.value
            userStroke[i].nextElementSibling.innerHTML = player[i].stroke;
           
            
               
        }


            userU[i] = player[i].keys.u; 
            userU[i].addEventListener(`keydown`, function(e){
                userU[i].value = [e.key]
                player[i].keys.u = userU[i].value
                userU[i].nextElementSibling.innerHTML = player[i].keys.u

            })

            userD[i] = player[i].keys.d; 
            userD[i].addEventListener(`keydown`, function(e){
                userD[i].value = [e.key]
                player[i].keys.d = userD[i].value
                userD[i].nextElementSibling.innerHTML = player[i].keys.d

            })

            userS[i] = player[i].keys.s; 
            userS[i].addEventListener(`keydown`, function(e){
                userS[i].value = [e.key]
                player[i].keys.s = userS[i].value
                userS[i].nextElementSibling.innerHTML = player[i].keys.s

            })



        
    
    }
        
/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/

var input = document.querySelectorAll(`input`); 
 
for (let i=0; i<input.length; i++){
    input[i].addEventListener(`focus`, function(e) {currentState = `pause`})}
    
    
        

    
    

