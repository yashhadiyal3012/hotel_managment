function show() {
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
    var regex = /^[a-zA-Z\-]+$/;
    if (uname == '') {
        alert("please enter valid username.");
    }
    else if (pwd == '') {
        alert("enter the password");
    }
    else if (!regex.test(uname)) {
        alert("Enter valid username.");
    }
    else if (pwd.length < 6 || pwd.length > 6) {
        alert("Password min and max length is 6.");
    }
    else {
        alert('Thank You for Login ');
        
        window.location.assign("home.html");

    }

}