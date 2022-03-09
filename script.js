const sendInvoiceButton = document.getElementById('send-invoice');
const taskDiv = document.getElementById('task');
const priceDiv = document.getElementById('price');
let allButton = document.querySelectorAll('.task-button button');
let deleteButton = document.querySelectorAll('#task button');
const washButton = document.getElementById('wash');
const mowButton = document.getElementById('mow');
const weedButton = document.getElementById('weed');
const finalAmount = document.getElementById('final-amount');
let totalAmout = 0;
let realTotalAmount = 0;

if(localStorage.getItem('totalAmount')) {
    realTotalAmount = localStorage.getItem('totalAmount');
    finalAmount.textContent = `$${realTotalAmount}`;
} else {
    totalAmout = 0;
    realTotalAmount = 0;
    finalAmount.textContent = `$${totalAmout}`;
}

let newTask;
let newPrice;

for(let i = 0; i < allButton.length; i++) {
    allButton[i].addEventListener('click' , function() {
        allButton[i].disabled = true;

        switch (i) {
            case 0:
                newTask = document.createElement('h4');
                newPrice = document.createElement('h4');
                newTask.innerHTML += "Wash Car <button>X</button>";
                newPrice.innerHTML += "<span>$</span>10";
                totalAmout += 10;
                break;

            case 1:
                newTask = document.createElement('h4');
                newPrice = document.createElement('h4');
                newTask.innerHTML += "Mow Lawn <button>X</button>";
                newPrice.innerHTML += "<span>$</span>20";
                totalAmout += 20;
                break;

            case 2:
                newTask = document.createElement('h4');
                newPrice = document.createElement('h4');
                newTask.innerHTML += "Pull Weeds <button>X</button>";
                newPrice.innerHTML += "<span>$</span>30";
                totalAmout += 30;
                break;
        }
        
        taskDiv.appendChild(newTask);
        priceDiv.appendChild(newPrice);
        finalAmount.textContent = `$${totalAmout}`;
        localStorage.setItem('totalAmount' , JSON.stringify(totalAmout));    
    })
}