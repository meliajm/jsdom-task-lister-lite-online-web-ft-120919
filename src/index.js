document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("#new-task-description").addEventListener("submit", function(event) {
    event.preventDefault();
  }, false);
});


