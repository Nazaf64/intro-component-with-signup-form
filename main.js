const btn = document.getElementById("claim-free-trial");
const formFields = document.getElementsByClassName("inputField");
const msg = document.querySelector('.msg');


// EMAIL VALIDATION
function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
        return (true)
    }
        return (false)
}

function formValidation(){
    for (i=0; i<formFields.length; i++) {
        if(formFields[i].type === 'email' && formFields[i].value != ''){
            var logic = ValidateEmail(formFields[i].value);  
            if (logic === false){
                formFields[i].parentElement.lastElementChild.className = "msg";
                formFields[i].parentElement.lastElementChild.innerHTML = "You have entered an invalid email address!";
            } else {
                formFields[i].parentElement.lastElementChild.className = "msg-none";
            }    
        } else {
            if (formFields[i].value === '') {
                formFields[i].parentElement.lastElementChild.className = "msg";
                formFields[i].parentElement.lastElementChild.innerHTML = "This field cannot be blank";
            }
    
            else {
                formFields[i].parentElement.lastElementChild.className = "msg-none";
            }
        }
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    formValidation();
});