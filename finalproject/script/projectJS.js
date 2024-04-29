let myForm = document.getElementById("myForm");

function validateEmail(email) {
    //regex was a tutorial from stackoverflow
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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
    document.getElementById("formButton").addEventListener('click', function(e) {
        let email = document.getElementById("email").value;
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            e.preventDefault();
        } else {
            e.preventDefault();
            let firstName = document.getElementById("firstName").value;
            let goal = document.getElementById("goal").value;
            let breakfast = document.getElementById("breakfast").value;
            let snack1 = document.getElementById("snack1").value;
            let lunch = document.getElementById("lunch").value;
            let snack2 = document.getElementById("snack2").value;
            let dinner = document.getElementById("dinner").value;
            
            let generatedPlan = `
                <!DOCTYPE html>
                    <html>
                        <head>
                            <title>Meal Plan</title>
                            <style>
                            /* CSS Reset */
                            * {
                                margin: 0;
                                padding: 0;
                                box-sizing: border-box;
                            }
                    
                            h1, p, table, th, td {
                                font-family: Arial, Helvetica, sans-serif;
                                padding: 5px;
                                text-align: center;
                            }
                            
                            table, th, td {
                                border-collapse: collapse;
                                border: 1px solid;
                            }

                            table {
                                margin-left: auto;
                                margin-right: auto;
                            }

                            th {
                                background-color: aliceblue;
                            }

                            #printPage {
                                font-weight: bold;
                                font-size: large;
                                background-color: aliceblue;
                                padding: 5px 10px;
                                text-align: center;
                                display: block;
                                margin-top: 10px;
                                margin-left: auto;
                                margin-right: auto;
                                border-radius: 5px;
                                border: 1px solid black;
                            }
                            </style>
                        </head>
                        <body>
                            <h1>Meal Plan for ${firstName}</h1>
                            <p><b>Goal for the week:</b> ${goal}</p>
                            <table>
                                <tr>
                                    <th>Meals</th>
                                    <th>Monday</th>
                                    <th>Tuesday</th>
                                    <th>Wednesday</th>
                                    <th>Thursday</th>
                                    <th>Friday</th>
                                    <th>Saturday</th>
                                    <th>Sunday</th>
                                </tr>
                                <tr>
                                    <th>Breakfast</th>
                                    <td>${breakfast}</td>
                                    <td>${breakfast}</td>
                                    <td>${breakfast}</td>
                                    <td>${breakfast}</td>
                                    <td>${breakfast}</td>
                                    <td>${breakfast}</td>
                                    <td>${breakfast}</td>
                                </tr>
                                <tr>
                                    <th>Snack</th>
                                    <td>${snack1}</td>
                                    <td>${snack1}</td>
                                    <td>${snack1}</td>
                                    <td>${snack1}</td>
                                    <td>${snack1}</td>
                                    <td>${snack1}</td>
                                    <td>${snack1}</td>
                                </tr>
                                <tr>
                                    <th>Lunch</th>
                                    <td>${lunch}</td>
                                    <td>${lunch}</td>
                                    <td>${lunch}</td>
                                    <td>${lunch}</td>
                                    <td>${lunch}</td>
                                    <td>${lunch}</td>
                                    <td>${lunch}</td>
                                </tr>
                                <tr>
                                    <th>Snack</th>
                                    <td>${snack2}</td>
                                    <td>${snack2}</td>
                                    <td>${snack2}</td>
                                    <td>${snack2}</td>
                                    <td>${snack2}</td>
                                    <td>${snack2}</td>
                                    <td>${snack2}</td>
                                </tr>
                                <tr>
                                    <th>Dinner</th>
                                    <td>${dinner}</td>
                                    <td>${dinner}</td>
                                    <td>${dinner}</td>
                                    <td>${dinner}</td>
                                    <td>${dinner}</td>
                                    <td>${dinner}</td>
                                    <td>${dinner}</td>
                                </tr>
                            </table>
                        
                            <button id="printPage">Print Meal Plan</button>

                            <script>
                                document.getElementById("printPage").addEventListener('click',function() {
                                    window.print();
                                })
                            </script>
                        </body>
                        </html>
                    `;

            let myWindow = window.open('about:blank', 'menuPlan', 'scrollbars=yes,resizable=yes,width=800,height=500,left=200,top=200');
            myWindow.document.write(generatedPlan);
         }});

// Meal plan will only be generated if a proper email address is entered (form validation)