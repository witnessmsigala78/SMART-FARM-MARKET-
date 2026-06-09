function login(){

    let username =
    document.getElementById("username").value;
    
    let password =
    document.getElementById("password").value;
    
    if(username === "admin"
    && password === "12345"){
    
    document.getElementById("message")
    .innerHTML =
    "Login Successful";
    
    document.getElementById("dashboard")
    .style.display = "block";
    
    }
    
    else{
    
    document.getElementById("message")
    .innerHTML =
    "Wrong Username or Password";
    
    }
    
    }