// Add your code here
// Define the submitData function
function submitData(name, email) {
    // Make a POST request to /users with name and email
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
      // Retrieve the new id value and append it to the DOM
      document.body.innerHTML += `<p>${data.id}</p>`;
      return data;
    })
    .catch(error => {
      // Append the error message to the DOM
      document.body.innerHTML += `<p>${error.message}</p>`;
      return error;
    });
  }
  