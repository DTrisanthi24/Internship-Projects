function $(selector) {
  return document.querySelector(selector);
}

function showMessage(element, message, type = "error") {
  element.textContent = message;
  element.style.color = type === "error" ? "red" : "limegreen";
}

function validateForm(event) {
  event.preventDefault();

  let isValid = true;

  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();

  const errorBox = document.createElement("div");
  errorBox.id = "errorBox";
  errorBox.style.marginTop = "10px";

  const oldError = $("#errorBox");
  if (oldError) oldError.remove();

  if (name === "") {
    showMessage(errorBox, " Name is required!");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showMessage(errorBox, " Enter a valid email address!");
    isValid = false;
  } else if (message === "") {
    showMessage(errorBox, " Message cannot be empty!");
    isValid = false;
  }

  if (!isValid) {
    $("#contact form").appendChild(errorBox);
  } else {
    showMessage(errorBox, " Form submitted successfully!", "success");
    $("#contact form").appendChild(errorBox);
    $("#contact form").reset();
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

function addSkill(skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  li.addEventListener("click", () => li.remove()); 
  $("#skills ul").appendChild(li);
}


function updateGreeting() {
  const headerTitle = $("header h1");
  headerTitle.textContent = " Welcome to My Interactive Portfolio!";
}


document.addEventListener("DOMContentLoaded", () => {
  $("#contact form").addEventListener("submit", validateForm);

  const themeBtn = document.createElement("button");
  themeBtn.textContent = " Toggle Theme";
  themeBtn.style.margin = "10px";
  themeBtn.addEventListener("click", toggleTheme);
  $("header").appendChild(themeBtn);


  const skillBtn = document.createElement("button");
  skillBtn.textContent = " Add Skill";
  skillBtn.style.margin = "10px";
  skillBtn.addEventListener("click", () => {
    const newSkill = prompt("Enter a new skill:");
    if (newSkill) addSkill(newSkill);
 });
  $("#skills").appendChild(skillBtn);
});