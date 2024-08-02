var n = 10;
var n1 = 5;
var op = "plus";

const equal = document.getElementById("equals");
equal.addEventListener("click",(e) => {
    operate(op);
});
// equal.addEventListener("click",operate(op));


function add(num,num1) {
    total = num + num1;
    console.log(total);
    return total;   
}

function subtract(num,num1) {
    console.log("op minus")
    return num - num1;
}

function multiply(num,num1) {
    return num * num1;
}

function divide(num,num1) {
    return num / num1;
}

function operate(operator) {
    console.log(operator);
    var total = 0;
    if (operator === "plus") {
        console.log("n=",n,"n1",n1)
        return add(n,n1)
    }
    if (operator === "minus") {
        return subtract(n,n1);
    }
    if (operator === "multiply") {
       return multiply(n,n1);
    }
    if (operator === "divide") {
        return divide(n,n1);
    }
}


    