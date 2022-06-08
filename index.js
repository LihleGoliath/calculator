let sum = " ";

function buildSum(char){
    sum += char
    document.getElementById("output").innerHTML= sum;
    
}

function calculatios(){
sum = eval(sum)
document.getElementById('output').innerHTML = sum;
}
function del(){
    sum = sum.slice(0,-1)
    document.getElementById('output').innerHTML = sum;
}

function reset(){
    sum = " "
    document.getElementById('output').innerHTML = sum;
}

function changeblue(){
    document.querySelector("#output").style.color = "blue";
}
function changered(){
    document.querySelector('#output').style.backgroundColor = 'red';
}

function changegreen(){
    document.querySelector('#output').style.color = 'green';
}
function changewhite(){
    document.querySelector('#output').style.backgroundColor = 'white';
}