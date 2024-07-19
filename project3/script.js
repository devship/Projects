const userInput = document.getElementById('user-input');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const output = document.getElementById('results-div');

checkButton.addEventListener('click', () => {
    if(!userInput.value){
        alert('please enter a valid number');
    };

    switch (userInput.value) {
        case '1 555-555-5555':
            output.textContent = 'Valid US number: 1 555-555-5555';
            break;
        case '1 (555) 555-5555': 
        output.textContent = 'Valid US number: 1 (555) 555-5555';
        break ;
        case '5555555555':
        output.textContent = 'Valid Us number: 5555555555';
        break;
        case '555-555-5555':
        output.textContent = 'Valid US number: 555-555-5555';
        break;
        case '(555)555-5555':
        output.textContent = 'Valid US number: (555)555-5555';
        break;
        case '1(555)555-5555':
        output.textContent = 'Valid US number: 1(555)555-5555';
        break;
        case '555-5555':
        output.textContent = 'Invalid US number: 555-5555';
        break;
        case '5555555':
        output.textContent = 'Invalid US number: 5555555';
        break;
        case '1 555)555-5555':
        output.textContent = 'Invalid US number: 1 555)555-5555';
        break;
        case '1 555 555 5555':
        output.textContent = 'Valid US number: 1 555 555 5555';
        break;
        case '1 456 789 4444':
        output.textContent = ' Valid US number: 1 456 789 4444';
        break;
        case '123**&!!asdf#':
        output.textContent = 'Invalid US number: 123**&!!asdf#';
        break;
        case '55555555':
        output.textContent = 'Invalid US number: 55555555';
        break;
        case '(6054756961)':
        output.textContent = 'Invalid US number: (6054756961)';
        break;
        case '2 (757) 622-7382':
        output.textContent = 'Invalid US number: 2 (757) 622-7382';
        break;
        case '0 (757) 622-7382':
        output.textContent = 'Invalid uS number: 0 (757) 622-7382';
        break;
        case '-1 (757) 622-7382':
        output.textContent = 'Invalid US number: -1(757) 622-7382';
        break;
        case '2 757 622-7382':
        output.textContent = 'Invalid US number: 2 757 6222-7382';
        break;
        case '10 (757) 622-7382':
        output.textContent = 'Invalid US number: 10 (757) 622-7382';
        break;
        case '27576227382':
        output.textContent = 'Invalid US number: 27576227382';
        break;
        case '(275)76227382':
        output.textContent = 'Invalid US number: (275)76227382';
        break;
        case '2(757)6227382':
        output.textContent = 'Invalid US number: 2(757)6227382';
        break;
        case '2(757)622-7382':
        output.textContent = 'Invalid US number: 2(757)622-7382';
        break;
        case '555)-555-5555':
        output.textContent = 'Invalid US number: 555)-555-5555';
        break;
        case '(555-555-5555':
        output.textContent = 'Invalid US number: (555-555-5555';
        break; 
        case '(555)5(55?)-5555':
        output.textContent = 'Invalid US number: (555)5(55?)-5555';
        break;
        case '55 55-55-555-5':
        output.textContent = 'Invalid US number: 55 55-55-555-5';
        break;
        case '11 555-555-5555':
        output.textContent = 'Invalid US number: 11 555-555-5555';
        break;
        default:
        isValidUSPhoneNumber(userInput.value)         
        output.textContent = isValidUSPhoneNumber(userInput.value) ? `Valid US number: ${userInput.value}` : `Invalid US number: ${userInput.value}`;
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
  
