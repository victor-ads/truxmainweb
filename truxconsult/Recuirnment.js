// formValidation.js
document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Form validation
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const specialization = document.getElementById('specialization').value;
    const image = document.getElementById('image').files[0];
    const cv = document.getElementById('cv').files[0];
    const idCard = document.getElementById('idCard').files[0];
    const terms = document.getElementById('terms').checked;

    if (!name || !phone || !email || !specialization || !image || !cv || !idCard || !terms) {
        alert('Please fill out all fields and accept the terms and conditions.');
        return;
    }

    // Further validation if needed
    const phonePattern = /^\d{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    // Handle form data submission, e.g., sending it to a server
    // Here you can add your AJAX call or form data processing

    alert('Form submitted successfully!');

    // Redirect to homepage after form submission
    window.location.href = 'index.html'; // Replace 'index.html' with the actual homepage URL
});
