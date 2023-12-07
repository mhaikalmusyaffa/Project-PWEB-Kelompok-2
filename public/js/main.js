// Get references to HTML elements
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let items = document.getElementById("items");
let add = document.getElementById("add");

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

// Form validation function
let formValidation = () => {
  if (textInput.value === "") {
    console.log("failure");
    msg.innerHTML = "Items cannot be blank"; // Display error message
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

// Array to store data (initialize with an empty object)
let data = [{}];

// Function to accept and store data
let acceptData = () => {
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
  });

  // Store the data array in local storage as a JSON string
  localStorage.setItem("data", JSON.stringify(data));

  console.log(data);
  createItems();
};

// Function to create and display items on the webpage
let createItems = () => {
  items.innerHTML = "";
  data.map((x, y) => {
    const dueDate = new Date(x.date);
    const now = new Date();
    const timeDifference = dueDate - now;

    // Calculate remaining days and hours
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)-(6));

    // Display countdown timer with days and hours next to the date
    const countdownElement = document.createElement("span");
    countdownElement.classList.add("countdown-timer");
    countdownElement.setAttribute("data-due-date", x.date);
    countdownElement.textContent = `Due in ${days} days and ${hours} hours`;

    // Append the item to the items container
    const itemElement = document.createElement("div");
    itemElement.id = y;
    itemElement.innerHTML = `
      <span class="fw-bold">${x.text}</span>
      <span class="small text-secondary">${x.date} ${countdownElement.outerHTML}</span>
      <p>${x.description}</p>
      <span class="options">
        <i onClick="editItems(this)" data-bs-toggle="modal" data-bs-target="#form" class="bx bx-edit-alt"></i>
        <i onClick="deleteItems(this);createItems()" class="bx bx-trash"></i>
      </span>
    `;

    // Append the item to the items container
    items.appendChild(itemElement);
  });

  resetForm(); // Call the function to reset the form inputs
};

// Function to update countdown timers
let updateCountdownTimers = () => {
  const countdownTimers = document.querySelectorAll(".countdown-timer");

  countdownTimers.forEach((timer) => {
    const dueDate = new Date(timer.getAttribute("data-due-date"));
    const now = new Date();
    const timeDifference = dueDate - now;

    if (timeDifference <= 0) {
      timer.textContent = " - Buy today!!!";
      timer.classList.add("red-text");
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)-(6));
      timer.textContent = ` - Due in ${days} days and ${hours} hours`;
      timer.classList.add("green-text");
    }
  });
};

// Update countdown timers every second
setInterval(updateCountdownTimers, 1000);



// Function to delete items
let deleteItems = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);

};

// Function to edit items
let editItems = (e) => {
  let selectedItems = e.parentElement.parentElement;
  textInput.value = selectedItems.children[0].innerHTML;
  dateInput.value = selectedItems.children[1].innerHTML;
  textarea.value = selectedItems.children[2].innerHTML;

  deleteItems(e);
};

// Function to reset form inputs
let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

// Immediately-invoked function expression (IIFE) to initialize data from local storage
(() => {
  data = JSON.parse(localStorage.getItem("data")) || []
  console.log(data);
  createItems();
})();

