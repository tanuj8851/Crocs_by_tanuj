function loginSubmit() {
    const email = document.getElementById("ec-email-address-field").value;
    const password = document.getElementById("ec-password-address-field").value;
  
    var users = JSON.parse(localStorage.getItem("Users"));
  
    for (let i = 0; i < users.length; i++) {
      let u = users[i].email;
  
      let p = users[i].password;
  
      if (u === email && p === password) {
        localStorage.setItem("currentUser", JSON.stringify(users[i]));
        window.location.href = "home.html";
        break;
      } else {
        alert("Invalid credentials");
        break;
      }
    }
  }