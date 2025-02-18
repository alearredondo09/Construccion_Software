function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validate() {
    const email = document.getElementById("email").value;
    const result = document.getElementById("result");

    if (validateEmail(email)) {
        result.textContent = email + " is valid";
        result.style.color = "white";
    } else {
        result.textContent = email + " is not valid";
        result.style.color = "red";
    }
    return false;
};

function validatePassword(){
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordError = document.getElementById('passwordError');
    const passwordStrength = document.getElementById('passwordStrength');
    const submitBtn = document.getElementById('submitBtn');    
    let isValid = true;

    //Check password length
    if (password.length > 15){
        passwordStrength.textContent = 'Too lengthy';
        passwordStrength.style.color = 'orange';
        isValid = false;
    } else if (password.length < 8){
        passwordStrength.textContent = 'Too short';
        passwordStrength.style.color = 'red';
        //passwordStrength.style.fontFamily = 'Roboto';
        isValid = false;
    } else {
        passwordStrength.textContent = 'Perfect Length';
        passwordStrength.style.color = 'green';
        //passwordStrength.style.fontFamily = 'Roboto';
    }

    if (password !== confirmPassword){
        passwordError.textContent = 'Passwords do not match';
        passwordError.style.color = 'gray';
        passwordStrength.style.fontFamily = 'Roboto';
        isValid = false;
        return
    } else {
        passwordError.textContent = 'Passwords match';
        passwordError.style.color = 'green';
    }

    submitBtn.disabled = !isValid;
    submitBtn.classList.toggle('enabled', isValid);
    
}

const imgIcon = document.getElementById('imgIcon');
const imageText = document.getElementById('imageText');

imgIcon.addEventListener('mouseover', function() {
    imageText.innerText = 'Add a password of 8 to 15 characters long';
});

imgIcon.addEventListener('mouseout', function() {
    imageText.innerText = ''; // Borra el mensaje cuando el mouse sale de la imagen
});

password.addEventListener("keydown", event =>{
    console.log(`Key down = ${event.key}`);
    password.style.backgroundColor = 'tomato';
    email.style.fontFamily = 'Roboto';
})

password.addEventListener("keyup", event =>{
    console.log(`Key up = ${event}`);
    password.style.backgroundColor = '#323232';  
})

confirmPassword.addEventListener('input', function() {
    console.log('confirmPassword');
    confirmPassword.style.color = 'pink';

})

// Add event listeners to the image icon
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validatePassword);
