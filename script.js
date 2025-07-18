const animateBtn = document.getElementById("animateBtn");
const toggleTheme = document.getElementById("toggleTheme");
const body = document.body;

const savedTheme = localStorage.getItem("theme") || "light";
body.classList.add(savedTheme);

function setTheme(theme) {
  body.classList.remove("light", "dark");
  body.classList.add(theme);
  localStorage.setItem("theme", theme);
}


toggleTheme.addEventListener("click", () => {
  const newTheme = body.classList.contains("light") ? "dark" : "light";
  setTheme(newTheme);
});

animateBtn.addEventListener("click", () => {
  animateBtn.classList.remove("bounce"); 
  void animateBtn.offsetWidth;           
  animateBtn.classList.add("bounce");
});
