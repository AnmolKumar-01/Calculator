const DisplayBar = document.querySelector('input');
const buttons = document.querySelectorAll('button')
const validInputs = "00123456789/*+-."
const operators = "*/+-.="
let result = '';
let text = ''


//1. Add the values in search bar by clicking
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        
        const num = e.target.innerHTML;
        
        // can't click equals to on empty input box
        if( ( text == '' || operators.includes(text[text.length-1]))  && operators.includes(num) ){
            //do nothing
        }
        // if it is a validInput -> add to displaybar
        else if(validInputs.includes(num)){
            result += num;
        }
        // if it is AC -> clear the display Bar
        else if(num == 'AC'){
            result = "";
        }
        // if it an 'DEL' -> delete the last character
        else if(num == 'DEL'){
            result = DisplayBar.value.slice(0,-1);
        }
        else if(num == '='){
            result = (eval(result));
        }
        DisplayBar.value = (result); 
        text = DisplayBar.value;

 
    })
});

