const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function() {
	if (newItem.value === "") {
		alert("Please enter a to-do item.");
		return;
	}

	const li = document.createElement("li");
	li.classList.add("todo-item");

	const p = document.createElement("p");
	p.innerText = newItem.value;

	const button = document.createElement("button");
	button.innerText = "Delete";
	button.addEventListener("click", function() {
		li.remove();
	});

	li.appendChild(p);
	li.appendChild(button);

	todoList.appendChild(li);

	newItem.value = "";
});
