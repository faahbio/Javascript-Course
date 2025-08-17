let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('saveEl');
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count; 
}

function decrement() {
    if (count > 0) {
        count -= 1;
        countEl.innerText = count; 
    } else {
        alert("Count cannot be negative");
    }
}

function save() {
    let previousEntries = count + ' - ';
    saveEl.textContent += previousEntries; // Shows the last count and a dash after
    countEl.textContent = 0; // Reset the count display after saving
    count = 0; // Reset the count variable
}

function reset() {
    count = 0; // Reset the count variable
    countEl.textContent = 0; // Reset the count display
    document.getElementById('saveEl').textContent = 'Previous Entries: '; // Clear the saved counts
    
}
 