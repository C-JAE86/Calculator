let n = "";
let n1 = "";
let op = "";
let whichOperand = 0;
// const equal = document.getElementById("equals");
// equal.addEventListener("click",(e) => {
//     operate(op);
// });
// let gridCounter = 0;
// for (i = 1; i < 6; i ++) {
//     let rowchild = document.getElementById("row" + i).getElementsByTagName("div");
//     console.log(rowchild.length);
//     for ( j = 0; j < rowchild.length; j++) {
//         rowchild[j].id = gridCounter;
//         gridCounter = gridCounter + 1;
// }
// }



// equal.addEventListener("click",operate(op));
const btnEquals = document.getElementById("btnFunctionEquals")
btnEquals.addEventListener("click", (e) => {
    console.log("equals",n.length,n)
    if (n.length > 0 && n1.length > 0) {
        if (op.length > 0) {
            operate(op);
            console.log("equals");
        }
    }
})

const operand1Text = document.getElementById("operand1");
const operand2Text = document.getElementById("operand2");
const operator = document.getElementById("operator");


const btnDivide = document.getElementById("btnOpDivide");
btnDivide.addEventListener("click", (e) => {
    op = "divide"
    operator.textContent = "/"
    whichOperand = 1;
    console.log(op);
});
const btnMultiply = document.getElementById("btnOpMultiply");
btnMultiply.addEventListener("click", (e) => {
    op = "multiply"
    operator.textContent = "*"
    whichOperand = 1;
    console.log(op);
});
const btnSubtract = document.getElementById("btnOpSubtract");
btnSubtract.addEventListener("click", (e) => {
    op = "minus"
    operator.textContent = "-"
    whichOperand = 1;
    console.log(op);
});
const btnPlus = document.getElementById("btnOpPlus");
btnPlus.addEventListener("click", (e) => {
    op = "plus"
    operator.textContent = "+"
    whichOperand = 1;
    console.log(op);
});

const btn7 = document.getElementById("btnNum7");
btn7.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "7";
        operand1Text.textContent = n;
        
        console.log(n)
    }
    else {
        n1 = n1 + "7";
        operand2Text.textContent = n1;
    }
});
const btn8 = document.getElementById("btnNum8");
btn8.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "8";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "8";
        operand2Text.textContent = n1;

    }
});
const btn9 = document.getElementById("btnNum9");
btn9.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "9";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "9";
        operand2Text.textContent = n1;

    }
});
const btn4 = document.getElementById("btnNum4");
btn4.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "4";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "4";
        operand2Text.textContent = n1;

    }
});
const btn5 = document.getElementById("btnNum5");
btn5.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "5";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "5";
        operand2Text.textContent = n1;

    }
});
const btn6 = document.getElementById("btnNum6");
btn6.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "6";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "6";
        operand2Text.textContent = n1;

    }
});
const btn1 = document.getElementById("btnNum1");
btn1.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "1";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "1";
        operand2Text.textContent = n1;

    }
});
const btn2 = document.getElementById("btnNum2");
btn2.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "2";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "2";
        operand2Text.textContent = n1;

    }
});
const btn3 = document.getElementById("btnNum3");
btn3.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "3";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + "3";
        operand2Text.textContent = n1;

    }
});
const btn0 = document.getElementById("btnNum0");
btn0.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + "0";
        operand1Text.textContent = n;
        console.log(n)

    }
    else {
        n1 = n1 + "0";
        operand2Text.textContent = n1;

    }
});
const btnDecimal = document.getElementById("btnNumDecimal");
btnDecimal.addEventListener("click", (e) => {
    if (whichOperand === 0) {
        n = n + ".";
        operand1Text.textContent = n;

        console.log(n)

    }
    else {
        n1 = n1 + ".";
        operand2Text.textContent = n1;

    }
});

function add(num,num1) {
    total = Number(num) + Number(num1);
    console.log(total);
    return total;   
}

function subtract(num,num1) {
    console.log("op minus");
    total = num - num1;
    console.log(total);
    return num - num1;
}

function multiply(num,num1) {
    total = num * num1;
    console.log(total);
    return num * num1;
}

function divide(num,num1) {
    total = num / num1;
    console.log(total);
    return num / num1;
}

function operate(operator) {
    console.log(operator);
    // let total = 0;
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


    