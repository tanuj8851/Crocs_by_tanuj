function RegisterSubmit() {
    const users = JSON.parse(localStorage.getItem("Users")) || [];
  
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("Emailaddress").value;
    const password = document.getElementById("Password").value;
    const phone = document.getElementById("phone").value;
    var userdata = { name: name, email: email, phone: phone, password: password };
  
    if (name && email && password) {
      users.push(userdata);
      localStorage.setItem("Users", JSON.stringify(users));
      window.location.href = "./login.html";
  
      document.getElementById("fullName").value = "";
      document.getElementById("Emailaddress").value = "";
      document.getElementById("Password").value = "";
      document.getElementById("phone").value = "";
    }
  }
  