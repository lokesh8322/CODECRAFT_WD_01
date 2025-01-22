document.getElementById('donor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;

    if (name && email && address) {
        alert('Thank you for registering as an organ donor, ' + name + '!');
    } else {
        alert('Please fill in all the fields.');
    }

    // Optionally, reset the form
    document.getElementById('donor-form').reset();
});
