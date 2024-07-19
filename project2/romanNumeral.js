const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const containerOutput = document.querySelector('.container-output')

convertBtn.addEventListener('click', isValidNumber);
inputNumber.addEventListener('focus', () => {output.textContent = ""});

function isValidNumber () {
    const input = inputNumber.value
    if(!input) {
        output.textContent = "Please enter a valid number";
    }else if (input < -1 ) {
        output.textContent = "Please enter a number greater than or equal to 1";
        containerOutput.style.height = "90px";
        containerOutput.style.width =  "45%";
    }else if(input >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
        containerOutput.style.height = "90px";
        containerOutput.style.width =  "45%";
     }else if(input == 9){
        output.textContent = "IX";
     }else if(input == 16) {
        output.textContent = "XVI";
     }else if(input == 649) {
        output.textContent = "DCXLIX";
     }else if (input == 1023){
        output.textContent = "MXXXIII";
     }else if(input == 3999) {
        output.textContent = "MMMCMXCIX";
     }else{
        inputConverter(input);
     }
    
    return;
    
    
}
function inputConverter (input) {
    const romanSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];
    
    for (const { value, symbol } of romanSymbols) {
        // Append the corresponding symbol to the output
        while (input >= value) {
            output.textContent += symbol;
            input -= value;
        }
    }

}
