// Retrieve the input field element using JavaScript.
const inputField = document.getElementById("inputField");

// Add an event listener to the form submits an event.
const form = document.getElementById('myForm');
 
form.addEventListener('submit', validateInput)

// Implement a function that validates the input value using a regular expression for alphanumeric input.
function validateInput(event) {
    const regex = /^[a-zA-Z0-9]+$/;
    
    // Display an error message if the input value is not alphanumeric.
    if (!regex.test(inputField.value)) {
        alert('Invalid input. Input must be alphanumeric.')
        // Prevent the form from submitting if the input value is not alphanumeric.
        event.preventDefault();
    } else {
    // Display a confirmation if the input is valid and 'submits' the form
    alert('Valid input. Form has been submitted!')
    }
}