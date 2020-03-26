document.addEventListener("DOMContentLoaded", () => {  

  document.querySelector("#create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()
    let input = document.querySelector("#new-task-description").value
    let elem = document.createElement("li");
    elem.innerText = input
    document.getElementById("tasks").appendChild(elem);
    
    }, false);
 
});


