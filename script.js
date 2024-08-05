// Deal with large numbers using scroll.
// Instead of printing answer at the end of equation
// print answer in top display element

let n = "";
let n1 = "";
let op = "";
let whichOperand = 0;




const topDisplay = document.getElementById("displayTop");
// equal.addEventListener("click",operate(op));
const btnEquals = document.getElementById("btnFunctionEquals")
btnEquals.addEventListener("click", (e) => {
    // console.log("equals",n.length,n)
    if (n != "") {
        if (n.length > 0 && n1.length > 0) {
            if (op.length > 0) {
                topDisplay.textContent = `${topDisplay.textContent} ${n1}`;
                operand1Text.textContent = "";
                operand2Text.textContent = "";
                operator.textContent = "";
                operate(op);
                console.log("equals");
            }
        }
    
    }
    
})


// When user presses equals first types number , we want Invoke cancel then print number
//  to clear and start again as we only want to operate on two nubmers each time.


const btnCancel = document.getElementById("btnFunctionCancel");
btnCancel.addEventListener("click", (e) => {
    cancel();
})

function cancel() {
        console.log("cancel")
        // All variables global back to default.
        n = "";
        n1 = "";
        op = "";
        whichOperand = 0;
        operand1Text.textContent = "";
        operand2Text.textContent = "";
        operator.textContent = "";
        answer.textContent = "";
        topDisplay.textContent = "";

}

const operand1Text = document.getElementById("operand1");
const operand2Text = document.getElementById("operand2");
const operator = document.getElementById("operator");
const answer = document.getElementById("answer");



const btnDivide = document.getElementById("btnOpDivide");
btnDivide.addEventListener("click", (e) => {
    if (n != "") {
        op = "divide"
        operand1Text.textContent = "";
        topDisplay.textContent = ` ${n} /`;
        whichOperand = 1;
        console.log(op);
    }
    
});
const btnMultiply = document.getElementById("btnOpMultiply");
btnMultiply.addEventListener("click", (e) => {
    if (n != "") {
        op = "multiply"
        operand1Text.textContent = "";
        topDisplay.textContent = ` ${n} *`;
        whichOperand = 1;
        console.log(op);
    }
        
});
const btnSubtract = document.getElementById("btnOpSubtract");
btnSubtract.addEventListener("click", (e) => {
    if (n != "") {

    
        op = "minus"
        operand1Text.textContent = "";
        topDisplay.textContent = ` ${n} -`;
        whichOperand = 1;
        console.log(op);
    }
});
const btnPlus = document.getElementById("btnOpPlus");
btnPlus.addEventListener("click", (e) => {
    if (n != "") {
        op = "plus"
        operand1Text.textContent = "";
        topDisplay.textContent = ` ${n} +`;
        whichOperand = 1;
        console.log(op);
    }
    
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
    if (operator === "plus") {
        console.log("n=",n,"n1",n1)
        total = add(n,n1)
    }
    if (operator === "minus") {
        total = subtract(n,n1);
    }
    if (operator === "multiply") {
       total = multiply(n,n1);
    }
    if (operator === "divide") {
        answer.textContent =
        total = divide(n,n1);
    }
    answer.textContent = " = " + total;
    return total;
}


    