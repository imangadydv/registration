document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    let firstName = document.getElementById('firstname').value.trim();
    let firstNameError = document.getElementById('firstname-error');
    firstNameError.innerHTML = '';
    let namePattern = /^[a-zA-Z ]+$/;
    if (!namePattern.test(firstName)) {
        firstNameError.innerHTML = 'Invalid first name';
        isValid = false;
    }

    let lastName = document.getElementById('lastname').value.trim();
    let lastNameError = document.getElementById('lastname-error');
    lastNameError.innerHTML = '';
    if (!namePattern.test(lastName)) {
        lastNameError.innerHTML = 'Invalid last name';
        isValid = false;
    }

    let email = document.getElementById('email').value.trim();
    let emailError = document.getElementById('email-error');
    emailError.innerHTML = '';
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerHTML = 'Invalid email format';
        isValid = false;
    }

    let gst = document.getElementById('gst').value.trim();
    let gstError = document.getElementById('gst-error');
    gstError.innerHTML = '';
    let gstPattern = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/;
    if (!gstPattern.test(gst)) {
        gstError.innerHTML = 'Invalid GST Number';
        isValid = false;
    }

    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        isValid = false;
    }
    if (isValid) {
        this.submit();
    }
});