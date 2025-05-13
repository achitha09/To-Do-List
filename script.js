const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for ×
        span.style.marginLeft = "10px";
        span.style.cursor = "pointer";

        // Remove task when × is clicked
        span.onclick = function () {
            listContainer.removeChild(li);
        };

        li.appendChild(span);
        listContainer.appendChild(li);
    }

    inputBox.value = ""; // Clear input after adding
    savedata();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask()