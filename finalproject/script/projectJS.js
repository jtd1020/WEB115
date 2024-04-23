let myForm = document.getElementById("myForm");

function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

// Application must collect user's name, email, and weekly goal
// Meal plan will display the user input for 5 meals for the week (Mon to Sun)
// Users will be able to clear the weekly planner
function clearInput() {
    document.getElementById("myForm").reset();
    preventDefault();
}
// Users will be able to print or download the planner
// Create a form button
    // Button will call a function that generates a new Webpage that will display the meal plan based on user's input
    // Use document.write() method to populate the newly generated webpage with all the HTML elements, formatting, and variable values needed to produce the desired output in Web (.htm) format
    // HINT: a monospaced font will allow text wrapping in your output
    document.getElementById("formButton").addEventListener('click', function() {
        let email = document.getElementById("email");
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.')
            preventDefault();
        } else {
            
        }
        
    })

// Meal plan will only be generated if a proper email address is entered (form validation)


