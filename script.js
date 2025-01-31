const DisplayBar = document.querySelector('input');
const buttons = document.querySelectorAll('button')
const validInputs = "00123456789/*+-."
let result = '';
let evaluated = false;

DisplayBar.disabled = true;


//1. Add the values in search bar by clicking
buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        
        const num = e.target.innerHTML;
        const text = DisplayBar.value;
        console.log(text);
        

        // after every evaluation result box should be empty
        if(evaluated){
            result = "";
            evaluated = false;
        }
        // can't click equals to on empty input box
        if(result == '' && num == '='){
            //do nothing
        }
        // if it is a validInput -> add to displaybar
        else if(validInputs.includes(num)){
            result += num;
            console.log(num);
        }
        // if it is AC -> clear the display Bar
        else if(num == 'AC'){
            result = "";
        }
        // if it an 'DEL' -> delete the last character
        else if(num == 'DEL'){
            result = DisplayBar.value.slice(0,-1);
        }
        else if(num == '=' || num == 'Enter'){
            result = (eval(result));
            evaluated = true;
        }
        DisplayBar.value = (result);    

        saveData();
 
    })
});

// all the data inside DisplayBar will be saved as name = "data" in local storage
function saveData() {
    localStorage.setItem("data", DisplayBar.value);
}

// display saved data everytime we reload
function showData(){
    DisplayBar.value = localStorage.getItem("data");
}
showData();
