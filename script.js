document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.navbar a');

    // 1. Toggle Menu
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x'); // Changes menu icon to an 'X'
        navbar.classList.toggle('active');
    };

    // 2. Close menu when a link is clicked (Crucial for Mobile)
    navLinks.forEach(link => {
        link.onclick = () => {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };
    });
});

// 3. Email Function (Fixed logic from before)
function sendMail(event) {
    event.preventDefault();
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("mobileNumber").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("text").value,
    };

    if(parms.name && parms.email) {
        emailjs.send("service_n4n5kba", "template_81gvfzi", parms)
            .then(() => alert("successful"))
            .catch((err) => alert("Send Error: " + err));
    } else {
        alert("Please fill in Name and Email");
    }
}