const bill1=document.getElementById("bill");
const tip1=document.getElementById("tip");
const total1  =document.getElementById("total");
const btn = document.getElementById("calculate");

function calculate1(){
    const billvalue= bill1.value;
    const tipvalue= tip1.value;
    const totalvalue = billvalue * (1 + tipvalue / 100);
    total1.innerText = totalvalue.toFixed(2);
}

btn.addEventListener("click", calculate1);