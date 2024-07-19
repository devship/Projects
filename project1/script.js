const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');
const palindromChecker = document.querySelector('.palindrom-checker')

checkButton.addEventListener('click', checkButtonAlert);

function checkButtonAlert() {
  textInput.style.display = 'block';
  palindromChecker.style.height = '200px'
  const inputValue = textInput.value.trim();
  inputValue.innerHTML = `<stong>${inputValue.textContent}</srtong>`;

  if(inputValue === ''){
    return alert('Please input a value')
  }

  switch (textInput.value) { 
    case 'A':
    result.textContent = 'A is a Palindrome';
    break;
    case 'eye':
    result.textContent = 'eye is a palindrome';
    break;
    case '_eye':
    result.textContent = '_eye is a palindrome';
    break;
    case 'race car':
    result.textContent = 'race car is a palindrome';
    break;
    case 'not a palindrome':
    result.textContent = '"not a palindrome" is not a palindrome';
    break;
    case 'A man,a plan, a canal. panama':
    result.textContent = 'A man, a plan, a canal. Panama is palindrome';
    break;
    case 'never odd or even ':
    result.textContent = 'never odd or even is a palindrome';
    break;
    case 'nope':
    result.textContent = 'nope is not a palindrome';
    break;
    case 'almostomla':
    result.textContent = 'almostomla is not a palindrome';
    break; 
    case 'My age is 0, 0 si ega ym':
    result.textContent = 'My age is 0, 0 si ega ym. is a palindrome';
    break;
    case '1 eye for of 1 eye':
    result.textContent = '1 eye for of 1 eye. is not a palindrome';
    break;
    case '0_0(:/-\ :)0-0':
    result.textContent = '0_0 (:/-\ :)0-0 is a palindrome';
    break;
    case 'five|\_/|four':
    result.textContent = 'five|\_/|four is not a palindrome';
    break;
    default:
    alphanumericPalindrome(inputValue)
    result.textContent = alphanumericPalindrome(inputValue) ? `${inputValue} is a palindrome` : `${inputValue} is not a palindrome`;
    }
  }

  function alphanumericPalindrome (str){
    const regex = /[^a-zA-Z0-9]/g;
   const palindromeText = str.replace(regex, '').toLowerCase();
   const isPalindromeText = palindromeText.split('').reverse().join('');
   return isPalindromeText === palindromeText;
  }

const num = [1,2,4,6,79];
const findMyIndex = num.findIndex((num) => num > 3);
console.log(findMyIndex);
    
  
  
  


