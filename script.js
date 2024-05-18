const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');
const count = document.querySelector(".count-value");





function addtask() {
    if (inputbox.value === '') {
        alert("Please enter the required field");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#10005";
        li.appendChild(span)
    }
    inputbox.value = "  ";
    savedata();
}




listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata(); // Call savedata() immediately after toggling
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});


// saving data
function savedata() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

// showing data
function showdata() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showdata();