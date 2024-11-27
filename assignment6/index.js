document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navContainerList = document.querySelector(".nav-container-list");
  
  menuIcon.addEventListener("click", () => {
    navContainerList.classList.toggle("active");
  });
});
