function checkPassword(form) {
    const password1 = document.querySelector(".pwd1").value;
    const password2 = document.querySelector(".pwd2").value;
    const validity = document.querySelector(".pwd-validity");

    if (password1 == "") {
       validity.textContent = "*Passwords do not match";
       return false;
    } else if (password1 != password2) {
       validity.textContent = "*Passwords do not match";
       return false;
    } else if (password1 == password2) {
       validity.textContent = "";
       return true;
    }
}

