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
let maxDigitFirst = 0;
let maxDigitSecond = 0;
let test = 1231415151516.0054;
const d = new Date()
const hour = d.getHours();
console.log(hour)
console.log(format(test));

function format(num) {
    return num.toString().replace(/^[+-]?\d+/, function(int) {
      return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    });
  }

const topDisplay = document.getElementById("displayTop");
// equal.addEventListener("click",operate(op));
const btnEquals = document.getElementById("btnFunctionEquals")
btnEquals.addEventListener("click", (e) => {
    // console.log("equals",n.length,n)
    if (equalscheck === 0) {
        if (n != "") {
            if (n.length > 0 && n1.length > 0) {
                if (op.length > 0) {
                    topDisplay.textContent = `${topDisplay.textContent} ${format(n1)}`;
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

if (hour < 7 || hour > 20) {
    theme = "dark"
    row1.classList.add("row-dark");
    row2.classList.add("row-dark");
    row3.classList.add("row-dark");
    row4.classList.add("row-dark");
    row5.classList.add("row-dark");
    display.classList.add("display-dark");
    mainContainer.classList.add("main-container-dark");
}

if (hour > 6 && hour < 21) {
    theme = "light"
    row1.classList.add("row-light");
    row2.classList.add("row-light");
    row3.classList.add("row-light");
    row4.classList.add("row-light");
    row5.classList.add("row-light");
    display.classList.add("display-light");
    mainContainer.classList.add("main-container-light");
}


// if (theme === "dark") {
//     row1.classList.remove("row-dark");
//     row2.classList.remove("row-dark");
//     row3.classList.remove("row-dark");
//     row4.classList.remove("row-dark");
//     row5.classList.remove("row-dark");
//     display.classList.remove("display-dark");
//     mainContainer.classList.remove("main-container-dark");
//     row1.classList.add("row-light");
//     row2.classList.add("row-light");
//     row3.classList.add("row-light");
//     row4.classList.add("row-light");
//     row5.classList.add("row-light");
//     display.classList.add("display-light");
//     mainContainer.classList.add("main-container-light");
// }
// if (theme === "light") {
//     row1.classList.remove("row-light");
//     row2.classList.remove("row-light");
//     row3.classList.remove("row-light");
//     row4.classList.remove("row-light");
//     row5.classList.remove("row-light");
//     display.classList.remove("display-light");
//     mainContainer.classList.remove("main-container-light");
//     row1.classList.add("row-dark");
//     row2.classList.add("row-dark");
//     row3.classList.add("row-dark");
//     row4.classList.add("row-dark");
//     row5.classList.add("row-dark");
//     display.classList.add("display-dark");
//     mainContainer.classList.add("main-container-dark");

if (theme === "dark") {
    theme = "light"
}
else {
    theme = "dark";
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
        maxDigitFirst = 0;
        maxDigitSecond = 0;
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
        if (n != "") {
            pointCheck = 0;
            op = "divide";
            operand1Text.textContent = "";
            topDisplay.textContent = ` ${format(n)} /`;
            whichOperand = 1;
            console.log(op);
        }
    }
});
const btnMultiply = document.getElementById("btnOpMultiply");
btnMultiply.addEventListener("click", (e) => {
    if (equalscheck === 0) {
        if (n != "") {
            op = "multiply"
            operand1Text.textContent = "";
            topDisplay.textContent = ` ${format(n)} *`;
            whichOperand = 1;
            console.log(op);
        }
    }
    
        
});
const btnSubtract = document.getElementById("btnOpSubtract");
btnSubtract.addEventListener("click", (e) => {
    if (equalscheck === 0) {
        if (n != "") {
        op = "minus"
        operand1Text.textContent = "";
        topDisplay.textContent = ` ${format(n)} -`;
        whichOperand = 1;
        console.log(op);
        }
    }
});
const btnPlus = document.getElementById("btnOpPlus");
btnPlus.addEventListener("click", (e) => {
    
    if (equalscheck === 0) {
        if (n != "") {
            op = "plus"
            operand1Text.textContent = "";
            topDisplay.textContent = ` ${format(n)} +`;
            whichOperand = 1;
            console.log(op);
        }
    }
});

const btn7 = document.getElementById("btnNum7");
btn7.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {

            n = n + "7";
            let displayText = n;
            displayText = format(displayText);
            console.log(displayText);
            operand1Text.textContent = displayText;
            console.log(n)
            maxDigitFirst += 1;
            console.log(maxDigitFirst);
        }
    }
    else if (maxDigitSecond < 18) {

            n1 = n1 + "7";
            operand2Text.textContent = format(n1);
            maxDigitSecond += 1;
        }
    
});
const btn8 = document.getElementById("btnNum8");
btn8.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "8";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "8";
        operand2Text.textContent = format(n1);

    }
});
const btn9 = document.getElementById("btnNum9");
btn9.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "9";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "9";
        operand2Text.textContent = format(n1);

    }
});
const btn4 = document.getElementById("btnNum4");
btn4.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "4";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "4";
        operand2Text.textContent = format(n1);

    }
});
const btn5 = document.getElementById("btnNum5");
btn5.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "5";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "5";
        operand2Text.textContent = format(n1);

    }
});
const btn6 = document.getElementById("btnNum6");
btn6.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "6";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "6";
        operand2Text.textContent = format(n1);

    }
});
const btn1 = document.getElementById("btnNum1");
btn1.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "1";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "1";
        operand2Text.textContent = format(n1);

    }
});
const btn2 = document.getElementById("btnNum2");
btn2.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "2";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "2";
        operand2Text.textContent = format(n1);

    }
});
const btn3 = document.getElementById("btnNum3");
btn3.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "3";
            operand1Text.textContent = format(n);
            console.log(n)
            
        }

        
    }
    else if ( maxDigitSecond < 18) {
        n1 = n1 + "3";
        operand2Text.textContent = format(n1);

    }
});
const btn0 = document.getElementById("btnNum0");
btn0.addEventListener("click", (e) => {
    isNewEquation()
    if (whichOperand === 0) {
        if (maxDigitFirst < 18) {
            n = n + "0";
            operand1Text.textContent = format(n);

            
        }
        console.log(n)
    }
    else {
        if ( maxDigitSecond < 18) {
            n1 = n1 + "0";
            operand2Text.textContent = format(n1);

        }

    }
});
const btnDecimal = document.getElementById("btnNumDecimal");
btnDecimal.addEventListener("click", (e) => {
    isNewEquation()
    if (pointCheck === 0) {
        if (whichOperand === 0) {
            if (maxDigitFirst < 18) {
                operand1Text.textContent = format(n) + ".";
                n = n + ".";
                console.log(n)
                
            }
            pointCheck = 1;
        }
    }
    if (whichOperand === 1) {
        if ( maxDigitSecond < 18) {
            if (secondPoint === 0) {
                console.log("here");
            operand2Text.textContent = format(n1) + ".";
            n1 = n1 + ".";
            secondPoint = 1;
            }
        
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
    answer.textContent = " = " + format(total);
    return total;
}


    