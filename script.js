let sendInvoiceButton = document.getElementById('send-invoice');
let taskDiv = document.getElementById('task');
let priceDiv = document.getElementById('price');
let allButton = document.querySelectorAll('.task-button button');
let deleteButton = document.querySelectorAll('#task button');
let washButton = document.getElementById('wash');
let mowButton = document.getElementById('mow');
let weedButton = document.getElementById('weed');
let finalAmount = document.getElementById('final-amount');
let sendInvoice = document.getElementById('send-invoice');
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
    myTask1.classList.add('m1');
    myPrice1.classList.add('m1');
    myPrice1.innerHTML = retrievePrice1;
    taskDiv.appendChild(myTask1)
    priceDiv.appendChild(myPrice1)
    washButton.disabled = true;
} else {
        washButton.disabled = false;
        washButton.enabled = true;
        washButton.addEventListener('click' , function() {
            newTask1 = document.createElement('h4');
            newPrice1 = document.createElement('h4');
            newTask1.classList.add('m1');
            newPrice1.classList.add('m1');
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
    let myTask2 = document.createElement('h4');
    myTask2.innerHTML = retrieveTask2;
    let myPrice2 = document.createElement('h4');
    myTask2.classList.add('m2');
    myPrice2.classList.add('m2');
    myPrice2.innerHTML = retrievePrice2;
    taskDiv.appendChild(myTask2);
    priceDiv.appendChild(myPrice2);
    mowButton.disabled = true;
} else {
        mowButton.disabled = false;
        mowButton.enabled = true;
        mowButton.addEventListener('click' , function() {
            newTask2 = document.createElement('h4');
            newPrice2 = document.createElement('h4');
            newTask2.innerHTML += "Mow Lawn <button>X</button>";
            newPrice2.innerHTML += "<span>$</span>20";
            newTask2.classList.add('m2');
            newPrice2.classList.add('m2');
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
    myTask3.classList.add('m3');
    myPrice3.classList.add('m3');
    myPrice3.innerHTML = retrievePrice3;
    taskDiv.appendChild(myTask3);
    priceDiv.appendChild(myPrice3);
    weedButton.disabled = true;
} else {
        weedButton.disabled = false;
        weedButton.enabled = true;
        weedButton.addEventListener('click' , function() {
            newTask3 = document.createElement('h4');
            newPrice3 = document.createElement('h4');
            newTask3.innerHTML += "Pull Weeds <button>X</button>";
            newPrice3.innerHTML += "<span>$</span>30";
            newTask3.classList.add('m3');
            newPrice3.classList.add('m3');
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



sendInvoice.addEventListener('click' , function() {
    localStorage.clear();
    taskDiv.innerHTML = '';
    priceDiv.innerHTML = '';
    realTotalAmount = 0;
    finalAmount.textContent = `$${realTotalAmount}`;
})

taskDiv.addEventListener('click' , check);

function check(e) {
    let toDelete = e.target;
    let tooDelete = toDelete.parentElement;

    // if (tooDelete.classList.contains('m1')) {

        for (let k = 0; k < priceDiv.childNodes.length; k++) {
            if (priceDiv.childNodes[k].className == "m1" &&     tooDelete.classList.contains('m1')) {
                taskDiv.removeChild(tooDelete)
                priceDiv.removeChild(priceDiv.childNodes[k])
                localStorage.removeItem('myTask1')
                localStorage.removeItem('myPrice1')
                washButton.disabled = false;
                realTotalAmount -= 10;
                localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
                finalAmount.textContent = `$${realTotalAmount}`;
            } else if (priceDiv.childNodes[k].className == "m2" &&     tooDelete.classList.contains('m2')) {
                taskDiv.removeChild(tooDelete)
                priceDiv.removeChild(priceDiv.childNodes[k])
                localStorage.removeItem('myTask2')
                localStorage.removeItem('myPrice2')
                mowButton.disabled = false;
                realTotalAmount -= 20;
                localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
                finalAmount.textContent = `$${realTotalAmount}`;
            } else if (priceDiv.childNodes[k].className == "m3" &&     tooDelete.classList.contains('m3')) {
                taskDiv.removeChild(tooDelete)
                priceDiv.removeChild(priceDiv.childNodes[k])
                localStorage.removeItem('myTask3')
                localStorage.removeItem('myPrice3')
                weedButton.disabled = false;
                realTotalAmount -= 30;
                localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
                finalAmount.textContent = `$${realTotalAmount}`;
            } else {
                console.log('good')
            }
        }
        
    // } else if (tooDelete.classList.contains('m2')) {
    //     console.log(tooDelete);

    //     for (let k = 0; k < priceDiv.childNodes.length; k++) {
    //         if (priceDiv.childNodes[k].className == "m2") {
    //             taskDiv.removeChild(tooDelete)
    //             priceDiv.removeChild(priceDiv.childNodes[k])
    //             localStorage.removeItem('myTask2')
    //             localStorage.removeItem('myPrice2')
    //             washButton.disabled = false;
    //             realTotalAmount -= 10;
    //             localStorage.setItem('totalAmount' , JSON.stringify(realTotalAmount));
    //             finalAmount.textContent = `$${realTotalAmount}`;
    //         }
    //     }
    //}
}