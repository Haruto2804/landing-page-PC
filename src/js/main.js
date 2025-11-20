const mobileNavElement = document.getElementById("mobile-nav");
const menuToggleElement = document.getElementById("menu-toggle");
console.log(menuToggleElement)
let isClicked = false;
menuToggleElement.addEventListener('click', (e) => {
  isClicked = !isClicked;
  console.log(isClicked);
  mobileNavElement.classList.toggle('display');
  if (isClicked) {
    menuToggleElement.innerHTML = '<i class="animate-bounce fa-solid fa-xmark fa-lg" style="color: #ffffff;"></i>';
  } else {
    menuToggleElement.innerHTML = '<i class="animate-bounce fa-solid fa-bars fa-lg" style="color: #ffffff;"></i>';
  }

})
