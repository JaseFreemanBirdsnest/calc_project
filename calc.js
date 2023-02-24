const btnPress = document.querySelectorAll("div.button")
const addOnClickEvent = document.getElementById("buttons");

function getButtonPressed(){
    const press = btnPress.addEventListener('click', (e) => {
        e.id;
    });
    console.log(press);
}

function addOnClick(){
    let divToAddTo = addOnClickEvent.querySelectorAll("button");
    divToAddTo.setAttribute("onClick", "getButtonPressed()");
}