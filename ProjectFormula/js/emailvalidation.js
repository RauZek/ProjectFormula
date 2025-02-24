const email = document.getElementById('email').value;
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) alert('Please enter a valid email!');

