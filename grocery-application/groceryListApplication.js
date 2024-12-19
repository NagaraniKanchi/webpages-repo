
let groceryItems = ["Vegetables", "Maggi", "Chocolates", "Apples", "Almonds", "Milk", "Dates"];
let bgContainerEl = document.getElementById("bgContainer");
bgContainerEl.classList.add("bg-container");
console.log(bgContainerEl);

let headingEl = document.createElement("h1");
headingEl.textContent = "Grocery List";
headingEl.classList.add("grocery-heading");
bgContainer.appendChild(headingEl);

let groceryListContainerEl = document.createElement("ul");
groceryListContainerEl.classList.add("grocery-list-card");
bgContainer.appendChild(groceryListContainerEl);

for (let groceryItem of groceryItems) {
    let listItem = document.createElement("li");
    listItem.textContent = groceryItem;
    groceryListContainerEl.appendChild(listItem);
}

let inputEl = document.createElement('input');
inputEl.type = "checkbox";
inputEl.id = "checkboxEl"
bgContainer.appendChild(inputEl);

let labelEl = document.createElement("label");
labelEl.textContent = "Need Home Delivery";
labelEl.setAttribute("for", "checkboxEl");
labelEl.classList.add("label-content");
bgContainer.appendChild(labelEl);

let brEl = document.createElement("br");
bgContainerEl.appendChild(brEl);

let buttonEl = document.createElement("button");
buttonEl.classList.add("btn", "btn-primary");
buttonEl.textContent = "Go to Payment";
bgContainer.appendChild(buttonEl);

