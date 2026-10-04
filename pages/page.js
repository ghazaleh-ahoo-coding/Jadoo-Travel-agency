function changeMood(){
    document.body.classList.toggle("darkMood")
}
let heartFill = document.getElementById("heart");
heartFill.addEventListener("click",() => {
    heartFill.innerHTML="&#9829;";
});

function message(){
    const userName = document.getElementById("Name").value;

    alert(`${userName} succufully loged in Welcome!` );
}


function clearForm(){
    document.querySelectorAll("form input").forEach((input) => {
        input.value = "";
    });
}

