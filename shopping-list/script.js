var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createDeleteButton(){
    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    deleteBtn.onclick = removeListElement;
    
    return deleteBtn;
}

function removeListElement(event){
    event.target.parentNode.remove();
}

function createListElement(){        
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(createDeleteButton());
    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick(){
    if (inputLength() > 0){
        createListElement();
    }   
}

function addListAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

function toggleDone(event){
    event.target.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);

ul.addEventListener("click", toggleDone);

input.addEventListener("keypress", addListAfterKeypress);