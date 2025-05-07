// iconsBehaivor.js
document.addEventListener("DOMContentLoaded", () => {
  const sidebarLinks = document.querySelectorAll(".sidebar a");

  sidebarLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebarLinks.forEach(l => l.classList.remove("active")); // Remove from all
      link.classList.add("active"); // Add to the clicked one
    });
  });
});
