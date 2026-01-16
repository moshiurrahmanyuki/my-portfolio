function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("mobileNumber").value,
        message: document.getElementById("subject").value,
        message: document.getElementById("text").value,
    }
emailjs.send("service_n4n5kba","template_81gvfzi",parms).then(alert("Email Sent Sucessful!!"))
}

// Menu toggle functionality
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

