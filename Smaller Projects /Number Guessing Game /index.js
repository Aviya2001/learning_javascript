let answer= Math.floor(Math.random() * 10 +1);
let guesses=0;
console.log(answer);

document.getElementById("submitbtn").onclick = function(){
    let num = document.getElementById("guessinput").value;
    guesses+=1;

    if (num == answer){
            window.alert("Answer is " + answer +" You took " + guesses + " Guesses");
    }
    else if(num<answer){
        alert("Too Small");
    }
    else{
        alert("Too Large");
    }
}