// add more complex scripts as needed
console.log("Hello from index.js!");
document.addEventListener('DOMContentLoaded', (event) => {
    const driver = window.driver.js.driver
    const driverObj = driver({
        showProgress: true,
        steps: [
            
            { element: '#section198', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section200', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section204', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section211', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section222', popover: { title: 'static Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section205', popover: { title: 'static Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section201', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section206', popover: { title: 'static Section', description: 'This is the static section.', align: 'start' }},
            
            { element: '#section207', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section212', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section223', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section232', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section213', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section224', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section233', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section214', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section225', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section234', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section215', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section226', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section235', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section216', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section227', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section236', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section199', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section202', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section208', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section217', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section218', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section219', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section220', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section209', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
            { element: '#section203', popover: { title: 'container Section', description: 'This is the container section.', align: 'start' }},
            
        ]
    });

    // document.getElementById('start-tour').addEventListener('click', () => {
        driverObj.drive();
    //});

    postContentDiv = document.querySelector('#contact-submitBtn');
    postContentDiv.addEventListener('click', function() {
        contact(event, 'sectionID');
    });
});

function contact(event, id) {
    event.preventDefault();
    console.log(id, "this is the id of form passed!!!");

    const form = document.getElementById(id);
    const firstName = form.querySelector('#contact-firstName').value;
    const lastName = firstName.split(" ")[1];
    const email = form.querySelector('#contact-email').value;
    const message = form.querySelector('#contact-message').value;

    if ((firstName || lastName) && email && message) {
        console.log(firstName, "First Name");
        console.log(lastName, "Last Name");
        console.log(email, "Email");
        console.log(message, "Message");

        sendEmail(event, {
            firstName,
            lastName,
            email,
            message
        }, form);
    } else {
        displayMessage('Please fill in all fields.', 'error');
    }
}

function sendEmail(event, data, form) {
    event.preventDefault();
    const baseUrl = "http://localhost:5037/api";
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZW1haWwiOiJwcmF0aWtAeW9wbWFpbC5jb20iLCJpZCI6IjEiLCJleHAiOjE3MjMwMTMzNjV9.joIgCV9Fkof8nI1dIR4IEXCA0EJktnm3VghOvxS_P6Q";
    const userId = 1;
    const projectId = 7;

    const route = `/${userId}/Project/${projectId}/ContatUs`;
    const url = `${baseUrl}${route}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) { // Check if response is OK
            displayMessage('Email sent successfully!', 'success');
            form.reset(); // Reset the form here
        } else {
            return response.json().then(data => {
                displayMessage(data.error || 'An error occurred.', 'error');
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        displayMessage('An error occurred.', 'error');
    });
}


function displayMessage(message, type) {
    const responseMessageDiv = document.getElementById('responseMessage');
    responseMessageDiv.textContent = message;
    if (type === 'success') {
        responseMessageDiv.style.color = 'green';
    } else {
        responseMessageDiv.style.color = 'red';
    }
    setTimeout(() => {
        responseMessageDiv.textContent = '';
    }, 2000);
}