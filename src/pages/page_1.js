function listContacts() {
	const contacts = [
		{ name: "John Doe", email: "johndoe@example.com", phone: "555-555-5555" },
		{ name: "Jane Smith", email: "janesmith@example.com", phone: "555-555-5556" },
		{ name: "Bob Johnson", email: "bobjohnson@example.com", phone: "555-555-5557" }
	];

	const contentDiv = document.getElementById("content");
	contentDiv.textContent = "";
	const contactsList = document.createElement("ul");

	contacts.forEach(contact => {
		const listItem = document.createElement("li");
		listItem.textContent = `${contact.name} - Email: ${contact.email}, Phone: ${contact.phone}`;
		contactsList.appendChild(listItem);
	});

	contentDiv.appendChild(contactsList);
}

export { listContacts };
