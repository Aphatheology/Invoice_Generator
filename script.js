const sendInvoiceButton = document.getElementById('send-invoice');
const taskDiv = document.getElementById('task');
const priceDiv = document.getElementById('price');
let allButton = document.querySelectorAll('.task-button button');
let deleteButton = document.querySelectorAll('#task button');
const washButton = document.getElementById('wash');
const mowButton = document.getElementById('mow');
const weedButton = document.getElementById('weed');
const finalAmount = document.getElementById('final-amount');
let newTask1, newTask2, newTask3;
let newPrice1, newPrice2, newPrice3;
let realTotalAmount;

if(localStorage.getItem('totalAmount')) {
    realTotalAmount = Number(localStorage.getItem('totalAmount'));
    finalAmount.textContent = `$${realTotalAmount}`;
} else {
    realTotalAmount = 0;
    finalAmount.textContent = `$${realTotalAmount}`;
} 

if (localStorage.getItem('myTask1')) {
    let retrieveTask1 = localStorage.getItem('myTask1');
    let retrievePrice1 = localStorage.getItem('myPrice1');
    let myTask1 = document.createElement('h4')
    myTask1.innerHTML = retrieveTask1;
    let myPrice1 = document.createElement('h4')
    myPrice1.innerHTML = retrievePrice1;
    taskDiv.appendChild(myTask1)
    priceDiv.appendChild(myPrice1)
} else {
    washButton.addEventListener('click' , function() {
        newTask1 = document.createElement('h4');
        newPrice1 = document.createElement('h4');
        newTask1.innerHTML += "Wash Car <button>X</button>";
        newPrice1.innerHTML += "<span>$</span>10";
        realTotalAmount += 10;
        finalAmount.textContent = `$${realTotalAmount}`;
        taskDiv.appendChild(newTask1);
        priceDiv.appendChild(newPrice1);
        localStorage.setItem('myTask1' , newTask1.innerHTML);
        localStorage.setItem('myPrice1' , newPrice1.innerHTML);
        localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
        washButton.disabled = true;
    })
}

if (localStorage.getItem('myTask2')) {
    let retrieveTask2 = localStorage.getItem('myTask2');
    let retrievePrice2 = localStorage.getItem('myPrice2');
    let myTask2 = document.createElement('h4')
    myTask2.innerHTML = retrieveTask2;
    let myPrice2 = document.createElement('h4')
    myPrice2.innerHTML = retrievePrice2;
    taskDiv.appendChild(myTask2)
    priceDiv.appendChild(myPrice2)
} else {
        mowButton.addEventListener('click' , function() {
            newTask2 = document.createElement('h4');
            newPrice2 = document.createElement('h4');
            newTask2.innerHTML += "Mow Lawn <button>X</button>";
            newPrice2.innerHTML += "<span>$</span>20";
            realTotalAmount += 20;
            finalAmount.textContent = `$${realTotalAmount}`;
            taskDiv.appendChild(newTask2);
            priceDiv.appendChild(newPrice2);
            localStorage.setItem('myTask2' , newTask2.innerHTML);
            localStorage.setItem('myPrice2' , newPrice2.innerHTML);
            localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
            mowButton.disabled = true;
    })
}

if (localStorage.getItem('myTask3')) {
    let retrieveTask3 = localStorage.getItem('myTask3');
    let retrievePrice3 = localStorage.getItem('myPrice3');
    let myTask3 = document.createElement('h4')
    myTask3.innerHTML = retrieveTask3;
    let myPrice3 = document.createElement('h4')
    myPrice3.innerHTML = retrievePrice3;
    taskDiv.appendChild(myTask3)
    priceDiv.appendChild(myPrice3)
} else {
        weedButton.addEventListener('click' , function() {
            newTask3 = document.createElement('h4');
            newPrice3 = document.createElement('h4');
            newTask3.innerHTML += "Pull Weeds <button>X</button>";
            newPrice3.innerHTML += "<span>$</span>30";
            realTotalAmount += 30;
            finalAmount.textContent = `$${realTotalAmount}`;
            taskDiv.appendChild(newTask3);
            priceDiv.appendChild(newPrice3);
            localStorage.setItem('myTask3' , newTask3.innerHTML);
            localStorage.setItem('myPrice3' , newPrice3.innerHTML);
            localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
            weedButton.disabled = true;
})
}