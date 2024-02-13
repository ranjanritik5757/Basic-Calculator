let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
let flag =0;
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(flag == 1){
            string = "";
            input.value = string;
            flag=0;
        }
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
            flag = 1;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})