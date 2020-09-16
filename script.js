// alert ("Whats up Genius");


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');

//show input error message 
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className ='form-control error ';
    const small = formControl.querySelector('small');
    small.innerText = message
}

//show success outline 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className ='form-control success ';


};


//check email valid
function checkEmail(input){
   
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    if(re.test(input.value.trim())){
        showSuccess(input);

    }else{
        showError(input,'Email is not valid');
    }
    
}

//check required fields
function checkRequired(inputArr ){
    inputArr.forEach(function(input){
        if(input.value.trim()=== ''){
            console.log(input.id)
            showError(input,`${getFieldName(input)} is requried `);
        } else {
            showSuccess(input);
        }     
    });
}

//cheeck input lenght 
    function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} Must be at least ${min} Characters`);

    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} Must be less than ${max} Characters`);
         
    }else{
        showSuccess(input);
    }

}


//check Password match

function checkPasswordsMatch(input1, input2){
    if(input1.value !== input2.value) {
        showError(input2,'Password do not match ');
    }
}


//Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//eventListener
form.addEventListener('submit', function(e){
    e.preventDefault();

   checkRequired([username,email,Password,Password2 ])
   checkLength(username, 3, 15);
   checkLength(Password,6, 25);
   checkEmail(email);
   checkPasswordsMatch(Password,Password2);


});
