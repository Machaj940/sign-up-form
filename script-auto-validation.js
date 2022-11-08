function checkPassword() {
    const password1 = document.querySelector(".pwd1").value;
    const password2 = document.querySelector(".pwd2").value;
    const validity = document.querySelector(".pwd-validity");
    const btn = document.querySelector("button");

    if (password1 == "") {
       validity.style.color = "red";
       validity.textContent = "*Passwords do not match";
       btn.disabled = true;
       return false;
    } else if (password1 != password2) {
       validity.style.color = "red";
       validity.textContent = "*Passwords do not match";
       btn.disabled = true;
       return false;
    } else if (password1 == password2) {
       validity.style.color = "green";
       validity.textContent = "Passwords match";
       btn.disabled = false;
       return true;
    }
}

