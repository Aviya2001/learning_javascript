let count=0;
document.getElementById("decbuttion").onclick = function(){
    count -=1;
    document.getElementById("countLable").innerHTML = count;
}
document.getElementById("resetbuttion").onclick = function(){
    count =0;
    document.getElementById("countLable").innerHTML = count;
}
document.getElementById("incbuttion").onclick = function(){
    count +=1;
    document.getElementById("countLable").innerHTML = count;
}

a=1;
console.log(a);