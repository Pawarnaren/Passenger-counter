// create a variable my age and set it's value to your age
// let myAge = 19;
// console.log(myAge)

// let count = 6-7;
// console.log(count);


// let myAge = 19;
// let dogAge = 3;
// let myDogAge = myAge * dogAge;
// console.log(myDogAge);



//                        ************** Passanger Counter Project **************
// initialize the count as 0;
// listen for the clicks on increment button;
// change the count-ele in the html to reflect the new count

let answer = document.getElementById("count-ele");

let count = 0;

function increment(){
    count+=1;
    answer.innerText = count;
}

let saveEl = document.getElementById("save-el");
function save(){
    let variable = " " + count + " - ";
    saveEl.innerText += variable;
}

let resetEl = document.getElementById("reset-el")
function reset(){
    count = 0;
    answer.textContent = 0;
}


// Grab the save-el paragraph and store it in a variable called saveEl
// let saveEl = document.getElementById("save-el");
// let variable = count + " - ";
// saveEl.innerText += variable;



