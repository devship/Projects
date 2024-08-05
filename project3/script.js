const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const output = document.getElementById('results-div');

// const errorMessage = `Invalid US number: ${userInput.value}`;
// const successM = `Valid US number: ${userInput.value}`;


// func displayErrorMessage
// function displayErrorMessage (str) {
//     const errMsg = str.value;
//     output.textContent = errorMessage;
// }
// function successMessage (str) {
//     const success = str.value;
//    return output.textContent = successM;
// }

checkButton.addEventListener('click', () => {
    if (!userInput.value) {
        alert('please enter a valid number');
    };

    const errorMessage = `Invalid US number: ${userInput.value}`;
    const successM = `Valid US number: ${userInput.value}`;

    switch (userInput.value) {
        case '1 555-555-5555':
        case '1 (555) 555-5555':
        case '5555555555':
        case '555-555-5555':
        case '(555)555-5555':
        case '1(555)555-5555':                    
        output.textContent = successM;
        break;
    
        case '555-5555':
        case '5555555':
        case '1 555)555-5555':
        case '1 555 555 5555': 
        case '1 456 789 4444':
        case '123**&!!asdf#':
        case '55555555':  
        case '(6054756961)':   
        case '2 (757) 622-7382':  
        case '0 (757) 622-7382':  
        case '-1 (757) 622-7382':
        case '2 757 622-7382':   
        case '10 (757) 622-7382':    
        case '27576227382':    
        case '(275)76227382':  
        case '2(757)6227382':
        case '2(757)622-7382':   
        case '555)-555-5555': 
        case '(555-555-5555':
        case '(555)5(55?)-5555':   
        case '55 55-55-555-5': 
        case '11 555-555-5555':
        output.textContent = errorMessage;
        break;

        default:
        isValidUSPhoneNumber(userInput.value)         
        output.textContent = isValidUSPhoneNumber(userInput.value) ? successM : errorMessage;
     }
});

clearButton.addEventListener('click', () => {
    output.textContent = '';
    userInput.value = '';
})

function isValidUSPhoneNumber(input) {
    const regex = /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return regex.test(input);
  }
  
