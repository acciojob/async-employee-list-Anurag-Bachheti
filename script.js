  fetch("employees.json")
    .then(response => response.json())
    .then(employees => {
      // sort ascending by age
      const sorted = employees.sort((a, b) => a.age - b.age);

      console.log(...sorted);
    })
    .catch(err => console.error("Error fetching employees:", err));
