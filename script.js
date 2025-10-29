var input = document.getElementById("inputBox");
var buttons = document.querySelectorAll("button");
var string = "";
input.disabled = true;

// Button click events
buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});

// Keyboard events
document.addEventListener("keydown", (e) => {
  handleInput(e.key);
});

// Main function for both click + key
function handleInput(key) {
  if (key === "=" || key === "Enter") {
    string = eval(string);
    input.value = string;
  } 
  else if (key === "AC" || key === "Escape") {
    string = "";
    input.value = string;
  } 
  else if (key === "DEL" || key === "Backspace") {
    string = string.substring(0, string.length - 1);
    input.value = string;
  } 
  else if ("+-*/.%".includes(key)) {
    // prevent consecutive operators
    if (string === "" || "+-*/.%".includes(string.slice(-1))) return;
    string += key;
    input.value = string;
  } 
  else if ("0123456789+-*/.%".includes(key)) {
    string += key;
    input.value = string;
  }
}

