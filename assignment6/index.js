document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const navContainerList = document.querySelector(".nav-container-list");
  const loginContainer = document.querySelector(".login-container");

  menuIcon.addEventListener("click", () => {
    navContainerList.classList.toggle("active");
    loginContainer.classList.toggle("active");
  });
});
