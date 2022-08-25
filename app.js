const addFirstButton = document.querySelector(".firstNameButton");
const addSecondButton = document.querySelector(".secondNameButton");
//var sumbitFirstButton = null;
addFirstButton.addEventListener("click", firstButtonClick);
addSecondButton.addEventListener("click", secondButtonClick)
const listBody = document.querySelector(".listbody");
const para = document.createElement("p");
const submitFirstButton = document.querySelector("#submitFirstButton")
submitFirstButton.addEventListener("click", submitFirstFunction)
const submitSecondButton = document.querySelector("#submitSecondButton")
submitSecondButton.addEventListener("click", submitSecondFunction);


var firsNameArray = new Array();
var secondNameArray = new Array();
var id1 = 0;
var id2 = 0;
var firstNameInput;
var secondNameInput;

//This takes care of creating input cells when the Add button is clicked
function firstButtonClick() {

    const firstListBody = document.querySelector(".firstListBody");
    firstNameInput = document.createElement("input");
    id1 = id1 + 1;
    firstNameInput.setAttribute("id", `a${id1}`)
    const para = document.createElement("p");
    firstListBody.appendChild(para);
    firstListBody.appendChild(firstNameInput);
}


function secondButtonClick() {

    const secondListBody = document.querySelector(".secondListBody");
    secondNameInput = document.createElement("input");
    id2 = id2 + 1;
    secondNameInput.setAttribute("id", `b${id2}`)
    const para = document.createElement("p");
    secondListBody.appendChild(para);
    secondListBody.appendChild(secondNameInput);
}

//This part takes care of creating an array that stores the inputted things. Triggers when submit buttons are clicked
function submitFirstFunction() {
    var idString = "";
    for (let i = 1; i <= id1; i++) {
        idString = `a${i}`;
        console.log(idString);
        const input = document.getElementById(idString);
        const inputText = input.value;
        firsNameArray.push(inputText);
    }
    console.log(firsNameArray);
}

function submitSecondFunction() {
    var idString = "";
    for (let i = 1; i <= id2; i++) {
        idString = `b${i}`;
        console.log(idString);
        const input = document.getElementById(idString);
        const inputText = input.value;
        secondNameArray.push(inputText);
    }
    console.log(secondNameArray);
}

//This part does the words merging operations

const displayName = document.querySelector("#displayButton");
displayName.addEventListener("click", nameDisplay);
var derivedName;


function nameDisplay() {
    for (var i = 0; i < firsNameArray.length; i++) {
        for (let j = 0; j < secondNameArray.length; j++) {
            derivedName = `${firsNameArray[i]} ${secondNameArray[j]}`;
            console.log(derivedName);
        }
    }

}