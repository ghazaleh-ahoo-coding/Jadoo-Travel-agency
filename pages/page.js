function changeMood(){
    document.body.classList.toggle("darkMood")
}
let heartFill = document.getElementById("heart");
heartFill.addEventListener("click",() => {
    heartFill.innerHTML="&#9829;";
});

function message(event){
    event.preventDefault();

    const userName = document.getElementById("Name").value.trim();
    const passWord = document.getElementById("password").value;
    const emailInput = document.getElementById("email").value.trim();
    const userNameInput = document.getElementById("userName").value.trim();
    const errorBox = document.getElementById("error");

    const errors = [];
    if (!userName) errors.push("Please enter your name.");
    if (!userNameInput) errors.push("Please enter a username.");
    if (!emailInput) {
        errors.push("Please enter your email.");
    } else if (!document.getElementById("email").validity.valid) {
        errors.push("Please enter a valid email address.");
    }
    if (passWord.length < 8) {
        errors.push("Password must be at least 8 characters.");
    }

    if (errors.length > 0) {
        errorBox.innerText = errors.join("\n");
    } else {
        errorBox.innerText = `${userName}, you successfully signed up!`;
    }
}


function clearForm(){
    document.querySelectorAll("form input").forEach((input) => {
        input.value = "";
    });
}
