var decrement = document.getElementById("decrementBtn");
var increment = document.getElementById("incrementBtn");
var boxValue = document.getElementById("displayValue");
var resetValue = document.getElementById("resetBtn");

decrement.addEventListener("click",(event)=>{
    const value = Number(boxValue.innerHTML);
    console.log(value);
    boxValue.innerText = value - 1;
});

increment.addEventListener("click",(event)=>{
    const value = Number(boxValue.innerHTML);
    boxValue.innerText = value + 1;
});

resetValue.addEventListener("click",(event)=>{
    boxValue.innerText = 0;
})
