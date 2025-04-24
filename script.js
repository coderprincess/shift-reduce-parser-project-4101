document.getElementById("expressionForm").addEventListener("submit", function(event) {
    event.preventDefault();
 //Prevent the page from refreshing 

const expression = document.getElementById("expression").value.trim(); //User input
const solutionStepsContainer = document.getElementById("solutionSteps"); //Step-by-step box
solutionStepsContainer.innerHTML = ""; //Clear previous steps 

const stack = [];
const input = expression.split("");
const parsingTable = {
    action: {
        0: {id: "S5", "+": "", "*": "", "(": "S4", ")": "", "$": "" },
        1: {id: "", "+": "S6", "*": "", "(": "", ")": "", "$": "accept"},
        2: {id: "", "+": "R2", "*": "S7", "(": "", ")": "R2", "$": "R2"},
        3: {id: "", "+": "R4", "*": "R4", "(": "", ")": "R4", "$": "R4"},
        4: {id: "S5", "+": "", "*": "", "(": "S4", ")": "", "$": ""},
        5: {id: "", "+": "R6", "*": "R6", "(": "", ")": "R6", "$": "R6"},
        6: {id: "S5", "+": "", "*": "", "(": "S4", ")": "", "$": ""},
        7: {id: "S5", "+": "", "*": "", "(": "S4", ")": "", "$": ""},
        8: {id: "", "+": "S6", "*": "", "(": "", ")": "S11", "$": ""},
        9: {id: "", "+": "R1", "*": "S7", "(": "", ")": "R1", "$": "R1"},
        10: {id: "", "+": "R3", "*": "R3", "(": "", ")": "R3", "$": "R3"},
        11: {id: "", "+": "R5", "*": "R5", "(": "", ")": "R5", "$": "R5"}  
    },
    goto:{
        0: {E: 1, T: 2, F: 3},
        1: {E: "", T: "", F: ""},
        2: {E: "", T: "", F: ""},
        3: {E: "", T: "", F: ""},
        4: {E: 8, T: 2, F: 3}, 
        5: {E: "", T: "", F: ""},
        6: {E: "", T: 9, F: 3},
        7: {E: "", T: "", F: 10},
        8: {E: "", T: "", F: ""},
        9: {E: "", T: "", F: ""},
        10: {E: "", T: "", F: ""},
        11: {E: "", T: "", F: ""},
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


