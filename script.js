fetch("employee.json")
	.then(response => response.json())
	.then(employees => {
		const sorted = employee.sort((a,b)=> a.age-b.age);
		console.log(...sorted);
	})
	.catch(err => console.error(err));