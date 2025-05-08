const searchInput = document.getElementById("search");
const userList = document.getElementById("user-list");

const users = [
    { name: "Hussam" , },
    { name: "Ibrahim" },
    { name: "Uzair" },
    { name: "Tayyab" },
    { name: "kamran" },
    { name: "Salman" },
    { name: "Asghar" },
    { name: "Noor Ali" },
    { name: "Sadiq Khan" }
];

function displayUsers() {
    userList.innerHTML = users.map(user => `<li>${user.name}</li>`).join("");
}

function filterUsers() {
    const searchTerm = searchInput.value.toLowerCase();
    userList.innerHTML = users
        .filter(user => user.name.toLowerCase().includes(searchTerm))
        .map(user => `<li>${user.name}</li>`).join("");
}

searchInput.addEventListener("input", filterUsers);
displayUsers();
