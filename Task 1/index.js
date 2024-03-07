function validateForm() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let city = document.getElementById('city').value;

    if (!firstName.trim()) {
        alert('First Name is required');
        return false;
    }else if (!lastName.trim()) {
        alert('Last Name is required');
        return false;
    }else if (firstName.trim() === lastName.trim()) {
        alert('First Name and Last Name cannot be the same');
        return false;
    }else if (!email.trim()) {
        alert('Email is required');
        return false;
    }else if (!password.trim()) {
        alert('Password is required');
        return false;
    }else if (password.trim().length < 5) {
        alert('Password must contain 5 digit');
        return false;
    }else if (!phoneNumber.trim()) {
        alert('Phone Number is required');
        return false;
    } else if (phoneNumber.trim().length !== 10 || isNaN(phoneNumber.trim())) {
        alert('Phone Number must be 10 digits');
        return false;
    } else if (!city.trim()) {
        alert('City is required');
        return false;
    }
    else alert('Signed up successfully!');
    return true;
}
