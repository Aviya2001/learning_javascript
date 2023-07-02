document.getElementById("submitBtn").onclick = function(){
    let temp;
    if(document.getElementById("Cbutton").checked){
        temp = document.getElementById("inputTemp").value;
        temp =Number(temp);
        temp = toCelsius(temp);
        document.getElementById("display").innerHTML = temp + "°C "

    }
    else if(document.getElementById("Fbutton").checked){
        temp = document.getElementById("inputTemp").value;
        temp =Number(temp);
        temp = toFaranhite(temp);
        document.getElementById("display").innerHTML = temp + "°F "
    }
    else{
        document.getElementById("display").innerHTML =  "Select An Unit To Convert "
    }
}
function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFaranhite(temp){
    return temp * 9/5 + 32;
}