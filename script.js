// Deal with large numbers using scroll.
// Instead of printing answer at the end of equation
// print answer in top display element

let n = "";
let n1 = "";
let op = "";
let whichOperand = 0;
let theme = "";
let equalscheck = 0;
let pointCheck = 0;
let secondPoint = 0;
const d = new Date();
let hour = d.getHours();
console.log(hour);

const topDisplay = document.getElementById("displayTop");
// equal.addEventListener("click",operate(op));
const btnEquals = document.getElementById("btnFunctionEquals")
btnEquals.addEventListener("click", (e) => {
    // console.log("equals",n.length,n)
    if (equalscheck === 0) {
        if (n != "") {
            if (n.length > 0 && n1.length > 0) {
                if (op.length > 0) {
                    topDisplay.textContent = `${topDisplay.textContent} ${numberWithCommas(n1,4)}`;
                    operand1Text.textContent = "";
                    operand2Text.textContent = "";
                    operator.textContent = "";
                    operate(op);
                    console.log("equals");
                    equalscheck = 1;
                }
            }
        
        }
    }
})


const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
const row4 = document.getElementById("row4");
const row5 = document.getElementById("row5");
const mainContainer = document.getElementById("mainContainer");
const display = document.getElementById("display");
const lightSwitch = document.getElementById("switch");



if (hour > 20 || hour < 7) {
    theme = "dark";
    row1.classList.add("row-dark");
    row2.classList.add("row-dark");
    row3.classList.add("row-dark");
    row4.classList.add("row-dark");
    row5.classList.add("row-dark");
    display.classList.add("display-dark");
    mainContainer.classList.add("main-container-dark");
}
else {
    row1.classList.add("row-light");
    row2.classList.add("row-light");
    row3.classList.add("row-light");
    row4.classList.add("row-light");
    row5.classList.add("row-light");
    display.classList.add("display-light");
    mainContainer.classList.add("main-container-light");
    theme = "light";
}


lightSwitch.addEventListener("click", (e) => {
    if (theme === "dark") {
        row1.classList.remove("row-dark");
        row2.classList.remove("row-dark");
        row3.classList.remove("row-dark");
        row4.classList.remove("row-dark");
        row5.classList.remove("row-dark");
        display.classList.remove("display-dark");
        mainContainer.classList.remove("main-container-dark");
        row1.classList.add("row-light");
        row2.classList.add("row-light");
        row3.classList.add("row-light");
        row4.classList.add("row-light");
        row5.classList.add("row-light");
        display.classList.add("display-light");
        mainContainer.classList.add("main-container-light");
        return theme = "light"
    }
    if (theme === "light") {
        row1.classList.remove("row-light");
        row2.classList.remove("row-light");
        row3.classList.remove("row-light");
        row4.classList.remove("row-light");
        row5.classList.remove("row-light");
        display.classList.remove("display-light");
        mainContainer.classList.remove("main-container-light");
        row1.classList.add("row-dark");
        row2.classList.add("row-dark");
        row3.classList.add("row-dark");
        row4.classList.add("row-dark");
        row5.classList.add("row-dark");
        display.classList.add("display-dark");
        mainContainer.classList.add("main-container-dark");
        return theme = "dark";
    }
    // if (theme === "dark") {
    //     theme = "light";
    // }
    // else {
    //     theme = "dark";
    // }
    
    
})

// When user presses equals first types number , we want Invoke cancel then print number
//  to clear and start again as we only want to operate on two nubmers each time.
const text = ""
function numberWithCommas(text,num) {

    
    let textNum = Number(text);
    console.log("n",n);
    console.log("text",textNum);
    if (num === 0) {
        const numberFormatter = new Intl.NumberFormat("en-GB", { style: "decimal", maximumFractionDigits: 20,
        });
        let formattedNum = numberFormatter.format(textNum);
        console.log(formattedNum);
        operand1Text.textContent = formattedNum;

    }
    if (num === 1) {
        const numberFormatter = new Intl.NumberFormat("en-GB", { style: "decimal", maximumFractionDigits: 20,
        });
        let formattedNum = numberFormatter.format(textNum);
        console.log(formattedNum);
        operand2Text.textContent = formattedNum;
    }
    if (num === 2) {
        const numberFormatter = new Intl.NumberFormat("en-GB", { style: "decimal", maximumFractionDigits: 20, 
        });
        let formattedNum = numberFormatter.format(textNum);
        console.log("format",formattedNum);
        operand1Text.textContent = formattedNum + "."
    }
    if (num === 3) {
        const numberFormatter = new Intl.NumberFormat("en-GB", { style: "decimal", maximumFractionDigits: 20, 
        });
        let formattedNum = numberFormatter.format(textNum);
        console.log("format",formattedNum);
        operand1Text.textContent = formattedNum + "."
    }
    if (num === 4) {
        const numberFormatter = new Intl.NumberFormat("en-GB", { style: "decimal", maximumFractionDigits: 20,
        });
        let formattedNum = numberFormatter.format(textNum);
        console.log(formattedNum);
        return formattedNum;
    }
}


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
        equalscheck = 0;
        pointCheck = 0;
        secondPoint = 0;

}

const operand1Text = document.getElementById("operand1");
const operand2Text = document.getElementById("operand2");
const operator = document.getElementById("operator");
const answer = document.getElementById("answer");

function isNewEquation() {
    if (equalscheck === 1) {
        cancel();
    }
}

const btnDivide = document.getElementById("btnOpDivide");
btnDivide.addEventListener("click", (e) => {
    if (equalscheck === 0) {
        if (whichOperand === 1) {
            op = "divide";
        }
        else if (n != "") {
            op = "divide";
            operand1Text.textContent = "";
            numberWithCommas(operand1Text.textContent,0);
            whichOperand = 1;
            console.log(op);
        }
        topDisplay.textContent = ` ${numberWithCommas(n,4)} /`;
    }
});
const btnMultiply = document.getElementById("btnOpMultiply");
btnMultiply.addEventListener("click", (e) => {
    if (equalscheck === 0) {
        if (whichOperand === 1) {
            op = "multiply";
        }
        else if (n != "") {
            op = "multiply"
            operand1Text.textContent = "";
            numberWithCommas(operand1Text.textContent,0);
            whichOperand = 1;
            console.log(op);
        }
        topDisplay.textContent = ` ${numberWithCommas(n,4)} *`;
    }
    
        
});
const btnSubtract = document.getElementById("btnOpSubtract");
btnSubtract.addEventListener("click", (e) => {
    if (equalscheck === 0) {
        if (whichOperand === 1) {
            op = "minus";
        }
        else if (n != "") {
        op = "minus"
        operand1Text.textContent = "";
        numberWithCommas(operand1Text.textContent,0);
        whichOperand = 1;
        console.log(op);
        }
        topDisplay.textContent = ` ${numberWithCommas(n,4)} - `;
        
        
    }
});
const btnPlus = document.getElementById("btnOpPlus");
btnPlus.addEventListener("click", (e) => {
    
    if (equalscheck === 0) {
        if (whichOperand === 1) {
            op = "plus";
        }
        else if (n != "") {
            op = "plus"
            operand1Text.textContent = "";
            numberWithCommas(operand1Text.textContent,0);

            whichOperand = 1;
            console.log(op);
        }
        topDisplay.textContent = ` ${numberWithCommas(n,4)} +`;

    }
});

const btn7 = document.getElementById("btnNum7");
btn7.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "7";
        numberWithCommas(n,0);


        
        console.log(n)
    }
    else {
        n1 = n1 + "7";

        numberWithCommas(n1,0);


    }
});
const btn8 = document.getElementById("btnNum8");
btn8.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "8";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "8";

        numberWithCommas(n1,0);

    }
});
const btn9 = document.getElementById("btnNum9");
btn9.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "9";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "9";

        numberWithCommas(n1,0);

    }
});
const btn4 = document.getElementById("btnNum4");
btn4.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "4";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "4";

        numberWithCommas(n1,0);

    }
});
const btn5 = document.getElementById("btnNum5");
btn5.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "5";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "5";

        numberWithCommas(n1,0);

    }
});
const btn6 = document.getElementById("btnNum6");
btn6.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "6";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "6";

        numberWithCommas(n1,0);


    }
});
const btn1 = document.getElementById("btnNum1");
btn1.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "1";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "1";

        numberWithCommas(n1,0);

    }
});
const btn2 = document.getElementById("btnNum2");
btn2.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "2";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "2";

        numberWithCommas(n1,0);

    }
});
const btn3 = document.getElementById("btnNum3");
btn3.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "3";

        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "3";

        numberWithCommas(n1,0);

    }
});
const btn0 = document.getElementById("btnNum0");
btn0.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        n = n + "0";
        numberWithCommas(n,0);

        console.log(n)

    }
    else {
        n1 = n1 + "0";

        numberWithCommas(n1,0);

    }
});
const btnDecimal = document.getElementById("btnNumDecimal");
btnDecimal.addEventListener("click", (e) => {
    isNewEquation()
    if (pointCheck === 0) {
        if (whichOperand === 0) {
            n = n + ".";
            console.log("n:",n);
            numberWithCommas(n,2);

            pointCheck = 1;
            console.log(n)
        }
    
        }
        if (whichOperand === 1) {
            if (secondPoint === 0) {
            n1 = n1 + ".";

                numberWithCommas(n1,3);
            secondPoint = 1;
        
        }

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
        total = divide(n,n1);
    }
    
    answer.textContent = " = " + numberWithCommas(total,4);
    return total;
}


    