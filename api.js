const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
  e.preventDefault();
  const formData = new FormData(e.target); // Get form data as FormData object
// Add data to your FormData object here

const jsonData = Object.fromEntries(formData.entries());
const jsonString = JSON.stringify(jsonData);
alert(jsonString)
console.log(jsonString); // This will be your JSON string representation of the form data
  let response = await fetch('https://nz15eqt4ti.execute-api.us-east-1.amazonaws.com/', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: jsonString
});
console.log(response.text)
});
