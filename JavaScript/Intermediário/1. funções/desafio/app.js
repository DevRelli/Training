
let q1 = prompt("Telefonou para a vítima?");
let q2 = prompt("Esteve no local do crime?");
let q3 = prompt("Mora perto da vítima?");
let q4 = prompt("Devia para a vítima?");
let q5 = prompt("Já trabalhou com a vítima?");

let numSim = 0;

function interrogatorio(){
    if(q1 == "sim"){
        numSim += 1;
    }
    if(q2 == "sim"){
        numSim += 1;
    }
    if(q3 == "sim"){
        numSim += 1;
    }
    if(q4 == "sim"){
        numSim += 1;
    }
    if(q5 == "sim"){
        numSim += 1;
    }
    return numSim;
}

function classifica(numSim){
    if(numSim === 2){
        console.log("Suspeita");
    }else if(numSim === 3 || numSim === 4){
        console.log("Cúmplice");
    }else if(numSim === 5){
        console.log("Assassino");
    }else{
        console.log("Inocente");
    }
}

classifica(interrogatorio());