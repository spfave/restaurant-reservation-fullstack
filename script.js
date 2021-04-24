const addBtn = document.getElementById('submit');
      
// Question: What is "e" short for?
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Question: What does this code do?
  let personName = document.getElementById('fname').value.trim();
  let personePhone = document.getElementById('phonenumber').value.trim();
  let personEmail = document.getElementById('email').value.trim();
  let personID = document.getElementById('uniqueID').value.trim();
  
  let newReservation = {
    name: personName,
    phone: personePhone,
    email: personEmail,
    id: parseInt(personID),
  };

  // Question: What does this code do??
  fetch('/api/tables', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newReservation),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('add reservation', data);
      alert(`Your table has been ${data.status}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});