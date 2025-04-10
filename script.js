document.getElementById("expressionForm").addEventListener("submit", function(event) {
    event.preventDefault();
 //Prevent the page from refreshing 

const expression = document.getElementById("expression").value.trim(); //User input
const solutionStepsContainer = document.getElementById("solutionSteps"); //Step-by-step box
solutionStepsContainer.innerHTML = ""; //Clear previous steps 

const stack = [];
const input = expression.spilt("");
const parsingTable = {
    action: {
        0: {id: "S5", "+": "", "*": "", "(": "S4", ")": "", "$": "" },
        1: {id: "", "+": "S6", "*": "", "(": "", ")": "", "$": "accept"},
        2: {id: "", "+": "R2", "*": "S7", "(": "", ")": "R2", "$": "R2"},
        3: {id: "", "+": "R4", "*": "R4", "(": "", ")": "R4", "$": "R4"},
        
        
    },
    goto:{
        0: {E: 1, T: 2, F: 3},
        1: {E: "", T: "", F: ""}
    }
};

const grammar = [
    {head: "E", body: ["E", "+", "T"]},
    {head: "E", body: ["T"]},
    {head: "T", body: ["T", "*", "F"]},
    {head: "T", body: ["F"]},
    {head: "F", body: ["(", "E", ")"]},
    {head: "F", body: ["id"]}
];


});


