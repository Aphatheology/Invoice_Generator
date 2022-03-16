let list = document.getElementById('list');
let deleteButton = document.querySelectorAll('#task button');
let washButton = document.getElementById('wash');
let mowButton = document.getElementById('mow');
let weedButton = document.getElementById('weed');
let finalAmount = document.getElementById('final-amount');
let sendInvoice = document.getElementById('send-invoice');

const washTask = [
    {id: 1, text: "Wash Car", amount: 10 }
];

const mowTask = [
    {id: 2, text: "Mow Lawn", amount: 20 }
];

const weedTask = [
    {id: 3, text: "Pull Weed", amount: 30 }
];

const localStorageTask = JSON.parse(localStorage.getItem('alltask'));

let allTask = localStorage.getItem('alltask') !== null ? localStorageTask : [];

let findTask = localStorage.getItem('alltask') !== null ? localStorageTask : [];

findTask = findTask = allTask.map(task => task[0].id);

function checkWash() {
    findTask = allTask.map(task => task[0].id);
    
    if (findTask.includes(1)) {
        washButton.disabled = true;
    } else {
        washButton.disabled = false;
    }

    if (findTask.includes(2)) {
        mowButton.disabled = true;
    } else {
        mowButton.disabled = false;
    }

    if (findTask.includes(3)) {
        weedButton.disabled = true;
    } else {
        weedButton.disabled = false;
    }
}

washButton.addEventListener('click' , function() {
    allTask.push(washTask);
    addTask(washTask);
    updateTotal();
})

mowButton.addEventListener('click' , function() {
    allTask.push(mowTask);
    addTask(mowTask);
    updateTotal();
})

weedButton.addEventListener('click' , function() {
    allTask.push(weedTask);
    addTask(weedTask);
    updateTotal();
})

function addTask(task) {
    const listTask = document.createElement('li');
    listTask.innerHTML = `${task[0].text} <span>$${task[0].amount}</span> <button class="delete-task" onclick="removeTask(${task[0].id})">X</button>`;
    list.appendChild(listTask);
    checkWash();
    taskToLocalStorage();
}

function updateTotal() {
    const amounts = allTask.map(task => task[0].amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
    finalAmount.innerText = `$${total}`;
}
function startList() {
    list.innerHTML = '';
    allTask.forEach(addTask);
    updateTotal();
}

function removeTask(id) {
    allTask = allTask.filter(task => task[0].id !== id);
    let index = findTask.indexOf(id);
    if (findTask > -1) {
        findTask.splice(index, 1);
    }
    taskToLocalStorage();
    checkWash();
    startList();
}

function taskToLocalStorage() {
    localStorage.setItem('alltask', JSON.stringify(allTask));
}

sendInvoice.addEventListener('click' , function() {
    list.innerHTML = '';
    localStorage.clear();
    allTask = [];
    findTask = []
    updateTotal();
    washButton.disabled = false;
    mowButton.disabled = false;
    weedButton.disabled = false;
})

startList();