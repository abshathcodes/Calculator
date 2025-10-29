var input = document.getElementById("inputBox");
var buttons = document.querySelectorAll("button");
var string = "";
var justEvaluated = false;

input.disabled = true;

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerHTML);
  });
});

document.addEventListener("keydown", (e) => {
  handleInput(e.key);
});

function handleInput(key) {
  // auto-clear "Error" on next input
  if (input.value === "Error") {
    string = "";
    input.value = "";
  }

  if (key === "=" || key === "Enter") {
    try {
      string = eval(string).toString();
      input.value = string;
      justEvaluated = true;
    } catch {
      input.value = "Error";
      string = "";
    }
  } 
  else if (key === "AC" || key === "Escape") {
    string = "";
    input.value = string;
  } 
  else if (key === "DEL" || key === "Backspace") {
    string = string.slice(0, -1);
    input.value = string;
  } 
  else if ("+-*/.%".includes(key)) {
    // prevent starting with operator or typing double operators
    if (string === "" || "+-*/.%".includes(string.slice(-1))) return;
    
    // allow chaining new calculation after result
    if (justEvaluated) justEvaluated = false;
    
    string += key;
    input.value = string;
  } 
  else if ("0123456789.".includes(key)) {
    // reset if just evaluated
    if (justEvaluated) {
      string = "";
      justEvaluated = false;
    }
    string += key;
    input.value = string;
  }
}


