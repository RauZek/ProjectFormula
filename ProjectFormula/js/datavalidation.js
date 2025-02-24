function validateEmailPassword() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email!');
        return false;
    }
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return false;
    }
    return true;
}

function togglePasswordVisibility(inputId, icon) {
    const input = document.getElementById(inputId);

    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}











