function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

function validate() {
    const email = document.getElementById("email").value;
    const result = document.getElementById("result");

    if (validateEmail(email)) {
        result.textContent = email + " is valid";
        result.style.color = "blue";
    } else {
        result.textContent = email + " is not valid";
        result.style.color = "red";
    }
    return false;
};

function validatePassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const submitBtn = document.getElementById("submitBtn");
    const errorElement = document.getElementById("passwordError");
    const strengthElement = document.getElementById("passwordStrength");

    const levels = {
        1: "Very Weak",
        2: "Weak",
        3: "Medium",
        4: "Strong",
    };

    if (password.length > 15) {
        strengthElement.textContent = "Too lengthy";
        strengthElement.style.color = "red";
        return;
    } else if (password.length < 8) {
        strengthElement.textContent = "Too short";
        strengthElement.style.color = "red";
        return;
    }

    const checks = [/[a-z]/, /[A-Z]/, /\d/, /[@.#$!%^&*.?]/];

    let score = checks.reduce((acc, rgx) => acc + rgx.test(password), 0);
    strengthElement.textContent = `Strength: ${levels[score] || "Very Weak"}`;
    if (score >=3){
        strengthElement.style.color = 'green';
    } else {
        strengthElement.style.color = 'orange';
    }

    let isValid = true;

    if (password !== confirmPassword) {
        errorElement.textContent = "Passwords do not match";
        errorElement.classList.remove("success");
        errorElement.classList.add("error");
        isValid = false;
    } else {
        errorElement.textContent = "Passwords match";
        errorElement.classList.remove("error");
        errorElement.classList.add("success");
    }

    submitBtn.disabled = !isValid;
    submitBtn.classList.toggle("enabled", isValid);
};

document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirmPassword").addEventListener("input", validatePassword);