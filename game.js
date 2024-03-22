// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional


// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide") 
let modulus = document.getElementById("modulus")
let clickCount = 0;
let interval;


function randomnumber() {
    return Math.floor(Math.random() * 100) + 1; // 
}

function showrandom(){
    number1.innerText = randomnumber();
    number2.innerHTML = randomnumber();
    num1=parseInt(number1.innerText)
    num2=parseInt(number2.innerText)
    let numerArray =[]
    numerArray.push(num1 + num2)
    numerArray.push(num1 - num2)
    numerArray.push(num1 * num2)
    numerArray.push((num1 / num2).toFixed(4))
    numerArray.push(num1 % num2)

    console.log(numerArray)
    let index=Math.floor(Math.random()*numerArray.length)
    number3.innerText=numerArray[index]
}

window.onload = () => {
    
    showrandom()
    counter();
}

plus.onclick = add
minus.onclick = substract
mul.onclick = multiplication
divide.onclick = division
modulus.onclick =modulusOp

function add(){
    if(parseInt(number1.innerText) + parseInt(number2.innerText) == parseInt(number3.innerText)){
        showrandom()
        counter();
        clickCount++;
        sessionStorage.setItem("clickCount", clickCount);
    }
    else {
        gameOver();
    }
}

function substract(){
    if(parseInt(number1.innerText) - parseInt(number2.innerText) == parseInt(number3.innerText)){
        showrandom()
        counter();
        clickCount++;
        sessionStorage.setItem("clickCount", clickCount);
    }
    else {
        gameOver();
    }
}

function multiplication(){
    if(parseInt(number1.innerText) * parseInt(number2.innerText) == parseInt(number3.innerText)){
        showrandom()
        counter();
        clickCount++;
        sessionStorage.setItem("clickCount", clickCount);
    }
    else {
        gameOver();
    }
}

function division(){
     let x =parseInt(number1.innerText) / parseInt(number2.innerText)
     x=x.toFixed(4)
    if(x == number3.innerText){
        showrandom()
        counter();
        clickCount++;
        sessionStorage.setItem("clickCount", clickCount);
    }
    else {
        // gameOver();
    }
}

function modulusOp(){
    if(parseInt(number1.innerText) % parseInt(number2.innerText) == parseInt(number3.innerText)){
        showrandom()
        counter();
        clickCount++;
        sessionStorage.setItem("clickCount", clickCount);
    }
    else {
        gameOver();
    }
}


function counter(start=15) {
    clearInterval(interval);
    interval = setInterval(() => {
        let timer = document.getElementById("timer");
        timer.innerText = start;
        start = start - 1;
        if (start < 0) {
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(interval);
    setTimeout(() => {
        window.location.href = "./gameover.html";
    },1000);
}






