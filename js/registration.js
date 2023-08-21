function check() {
    var cname = document.getElementById("customername").value;
    var mnum = document.getElementById("mobilenumber").value;
    var regexp = /^[a-zA-Z\-]+$/;
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g;

    if (cname == '') {
        alert("please enter valid username.");
    }
    else if (mnum == '') {
        alert("enter the mobile number");
    }
    else if (!regexp.test(cname)) {
        alert("Enter valid customer name.");
    }

    else if (!re.test(mnum)) {
        letnum = prompt('Enter number in XXX-XXX-XXXX format:'),
            validatePhone(mnum);
    }
    else {
        alert("Registered Successfully");
        window.location.assign("home.html");
    }

}