

async function getData() {
	
	const people = document.getElementById("people");
	
  try {
    const response = await fetch("employees.json"); 
    const data = await response.json();  // parse as JSON
    people.textContent = console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

getData();
