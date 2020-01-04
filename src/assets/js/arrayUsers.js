fetch('./data/employees.json')
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);