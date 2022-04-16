var userCharacter;
var computerCharacter;
//var val;
const characterX = document.querySelector('.x');
const characterO = document.querySelector('.o');

function selectorX() {
   userCharacter = characterX.innerHTML;
   characterX.style.display = "none";
   characterO.style.display = "none";

}
function selectorO() {
     userCharacter = characterO.innerHTML;
     characterX.style.display = "none"; 
     characterO.style.display = "none";

}


    characterX.addEventListener('click', AI=() => {
        computerCharacter = characterO.innerHTML; // computer character becomes o if x is clicked by user
        respond();
    });


    characterO.addEventListener('click', AI=()=>{
        computerCharacter = characterX.innerHTML; //computer character becomes x if o is clicked by user
        respond();
    });

var respond = () =>{
        document.querySelector('#intro').innerHTML = `Your Character is ${userCharacter} AI is ${computerCharacter}`
    }

const gameContainer = document.getElementById('game-container');
const characterHolder = gameContainer.querySelectorAll('div');

    characterHolder.forEach(item =>{
        item.addEventListener('click', paste = ()=>{

            if(typeof userCharacter == 'undefined' || typeof computerCharacter == 'undefined') { // to prevent undefined values in the box
                alert(`Haven't chosen a character please do`);   
            }
            else{
            if(item.innerHTML == '') { // to prevent resignedment of values
                item.innerHTML = userCharacter;  
                recursiveChecker();
                //winnerCheck();
            }
            else{
                alert(`Box is already filled please select an empty box`);
                allfilled();
            }  
        }
        
    })
 
});
var winner = setInterval(winnerCheck, 500) // always check for a winner every 500 millisec
var filled = setInterval(allfilled, 2000);// keeps on running to check if all boxes are filled

//helps shuffle a an to get random values to help recursuve checker pick a random box every time it is called.
function AIplays(){
    var arr = [0,1,2,3,4,5,6,7,8];
    function shuffleArray(arr) {
        for(var i = arr.length - 1; i >0; i--){
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    shuffleArray(arr);
    return  arr.pop()
}

/*A recusion function to get the box to place value of AI and check if the box is already filled is so recalls itself again , 
if still filled keeps on recalling itself */
function recursiveChecker() {
   var  val=AIplays();

    if(characterHolder[val].innerHTML == '') {
       //console.log(val);
       characterHolder[val].innerHTML = computerCharacter;
    } 
    else{
        recursiveChecker(); 
    } 
}



//!woooo that was crazy okay time to check for the winner
function winnerCheck() {
    // User check
    if(characterHolder[0].innerHTML == userCharacter && 
        characterHolder[1].innerHTML == userCharacter && 
        characterHolder[2].innerHTML == userCharacter) {
        sidePieceUser()     
    }
    else if(characterHolder[0].innerHTML == userCharacter && 
            characterHolder[3].innerHTML == userCharacter && 
            characterHolder[6].innerHTML == userCharacter ) {
        sidePieceUser()     
    }
    else if(characterHolder[0].innerHTML == userCharacter && 
            characterHolder[4].innerHTML == userCharacter && 
            characterHolder[8].innerHTML == userCharacter ) {
        sidePieceUser()     
    }
    else if(characterHolder[2].innerHTML == userCharacter && 
            characterHolder[4].innerHTML == userCharacter && 
            characterHolder[6].innerHTML == userCharacter ) {
        sidePieceUser()     
    }
    else if(characterHolder[2].innerHTML == userCharacter && 
            characterHolder[5].innerHTML == userCharacter && 
            characterHolder[8].innerHTML == userCharacter) {
        sidePieceUser()     
    }
    else if(characterHolder[6].innerHTML == userCharacter && 
            characterHolder[7].innerHTML == userCharacter && 
            characterHolder[8].innerHTML == userCharacter ) {
        sidePieceUser()     
    }
    else if(characterHolder[1].innerHTML == userCharacter && 
            characterHolder[4].innerHTML == userCharacter && 
            characterHolder[7].innerHTML == userCharacter ) {
        sidePieceUser()     
    }
    else if(characterHolder[3].innerHTML == userCharacter && 
            characterHolder[4].innerHTML == userCharacter && 
            characterHolder[5].innerHTML == userCharacter ) {
        sidePieceUser()     
    }

    /// AI Check
    else if(characterHolder[0].innerHTML == computerCharacter && 
            characterHolder[1].innerHTML == computerCharacter && 
            characterHolder[2].innerHTML == computerCharacter) {
        sidePieceAI()     
    }
    else if(characterHolder[0].innerHTML == computerCharacter && 
            characterHolder[3].innerHTML == computerCharacter && 
            characterHolder[6].innerHTML == computerCharacter  ) {
        sidePieceAI()     
    }
    else if(characterHolder[0].innerHTML == computerCharacter &&
            characterHolder[4].innerHTML == computerCharacter && 
            characterHolder[8].innerHTML == computerCharacter) {
        sidePieceAI()     
    }
    else if(characterHolder[2].innerHTML == computerCharacter &&
           characterHolder[4].innerHTML == computerCharacter && 
           characterHolder[6].innerHTML == computerCharacter) {
        sidePieceAI()     
    }
    else if(characterHolder[2].innerHTML== computerCharacter &&
           characterHolder[5].innerHTML== computerCharacter && 
           characterHolder[8].innerHTML == computerCharacter) {
        sidePieceAI()     
    }
    else if(characterHolder[6].innerHTML== computerCharacter && 
            characterHolder[7].innerHTML && 
            characterHolder[8].innerHTML == computerCharacter) {
        sidePieceAI()     
    }
    else if(characterHolder[1].innerHTML == computerCharacter && 
            characterHolder[4].innerHTML == computerCharacter && 
            characterHolder[7].innerHTML == computerCharacter ) {
        sidePieceAI()     
    }
    else if(characterHolder[3].innerHTML == computerCharacter && 
            characterHolder[4].innerHTML  == computerCharacter && 
            characterHolder[5].innerHTML == computerCharacter ) {
        sidePieceAI()
    }   
}

function sidePieceUser(){
    if(window.confirm(`You Won`)) {
        setTimeout(()=>location.reload(), 1000);
    }
    else{
        alert(`about to restart End Game`)
        setTimeout(()=>location.reload(), 1000);
    }
     clearInterval(winner);
}

function sidePieceAI(){
    if(window.confirm(`AI Won better luck next time`)) {
        setTimeout(()=>location.reload(), 1000);
    }
    else{
        alert(`about to restart End Game`)
        setTimeout(()=>location.reload(), 1000);
    }
    clearInterval(winner);
}

function allfilled() {
    if(characterHolder[0].innerHTML != '' &&
       characterHolder[1].innerHTML != '' &&
       characterHolder[2].innerHTML != '' &&
       characterHolder[3].innerHTML != '' &&
       characterHolder[4].innerHTML != '' &&
       characterHolder[5].innerHTML != '' &&
       characterHolder[6].innerHTML != '' &&
       characterHolder[7].innerHTML != '' &&
       characterHolder[8].innerHTML != '' 
        ) {
            
            boxfilled()
        }
}

function boxfilled() {
    alert(`All boxes are filled refreshing`);
    clearInterval(filled);
    setTimeout(()=>location.reload(), 1000);
}