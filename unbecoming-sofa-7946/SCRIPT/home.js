let dropdownBtn = document.querySelector('#name');
let menuContent = document.querySelector('#acc');
dropdownBtn.addEventListener('click', () => {
   if (menuContent.style.display === "") {
      menuContent.style.display = "block";
   } else {
      menuContent.style.display = "";
   }
})