let x;
let y;
let z;

document.getElementById("roll").onclick = function(){
    x=Math.floor(Math.random() * 6) +1;
    y=Math.floor(Math.random() * 6) +1;
    z=Math.floor(Math.random() * 6) +1;

    document.getElementById("xdice").innerHTML = x;
    document.getElementById("ydice").innerHTML = y;
    document.getElementById("zdice").innerHTML = z;
}