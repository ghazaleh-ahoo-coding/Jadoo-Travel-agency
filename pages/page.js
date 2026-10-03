function changeMood(){
    document.body.classList.toggle("darkMood")
}
let heartFill = document.getElementById("heart");
heartFill.addEventListener("click",() => {
    heartFill.innerHTML="&#9829;";
});

function message(){
    alert("You succufully loged in Welcome!")
}


function clearForm(){
    input.value="";
}


