const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".hamburger-close");

hamburger.addEventListener("click", (e) => toggleSidebar(e));
hamburger.addEventListener("keypress", (e) => handleKeyboardInput(e));
close.addEventListener("click", (e) => toggleSidebar(e));
close.addEventListener("keypress", (e) => handleKeyboardInput(e));

function toggleSidebar(e) {
  e.stopPropagation(e);
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    document.body.style.position = "static";
  } else {
    sidebar.classList.add("open");
    document.body.style.position = "fixed";
  }
}

function handleKeyboardInput(e) {
  if (e.code == "Enter") {
    toggleSidebar(e);
  }
  // focus the close button to correct tabbing
  setTimeout(() => close.focus(), 300);
}
