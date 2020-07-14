function email_validation(){
    let email = document.getElementById('email');
    let email_error = document.getElementById('email_error');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if((email.value).match(pattern)){
        email.classList.add("valid");
        email.classList.remove("invalid");
        email_error.style.display = 'none';
        console.log('correct');
    }
    else{
        email.classList.remove("valid");
        email.classList.add("invalid");
        email_error.style.display = 'block';
        console.log('incorrect');
    }
}

function password_validation(){
    let password = document.getElementById('password');
    let password_error = document.getElementById('password_error');
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if((password.value).match(pattern)){
        password.classList.add('valid');
        password.classList.remove('invalid');
        password_error.style.display = 'none';
        console.log('correct')
    }
    else{
        password.classList.remove('valid');
        password.classList.add('invalid');
        password_error.style.display = 'block';
        console.log('incorrect')
    }
}

function viewPassword(){
    let passwordStatus = document.getElementById("password-status");
    let password = document.getElementById("password");

    if(password.type == "password"){
        password.type = 'text';
        passwordStatus.className = 'far fa-eye-splash';
    }
    else
    {
        password.type == 'password';
        passwordStatus.className = 'far fa-eye'
    }
}