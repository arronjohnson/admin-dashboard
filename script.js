const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".hamburger-close");

hamburger.addEventListener("click", toggleSidebar);
close.addEventListener("click", toggleSidebar);

function toggleSidebar() {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
    return;
  }
  sidebar.classList.add("open");
}
