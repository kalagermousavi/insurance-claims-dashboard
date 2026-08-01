console.log("ClaimFlow JavaScript is connected!");

const notificationBtn = document.querySelector("#notification-btn");
const notificationPanel = document.querySelector("#notification-panel");

const newClaimBtn = document.querySelector("#newClaimBtn");
const addCustomerBtn = document.querySelector("#addCustomerBtn");
const uploadDocumentBtn = document.querySelector("#uploadDocumentBtn");

const themeToggleBtn = document.querySelector("#theme-toggle");
console.log(themeToggleBtn);

const searchInput = document.querySelector("#search-input");
const claimsTableBody = document.querySelector("#claimsTableBody");

const claims = [
  {
    id: "#2541",
    customer: "Ali Rezaei",
    insuranceNo: "INS-1025",
    vehicle: "Peugeot 206",
    status: "Pending",
    date: "2026/07/14",
  },
  {
    id: "#2542",
    customer: "Sara Ahmadi",
    insuranceNo: "INS-1038",
    vehicle: "Hyundai Elantra",
    status: "Approved",
    date: "2026/07/15",
  },
  {
    id: "#2543",
    customer: "Reza Mohammadi",
    insuranceNo: "INS-1052",
    vehicle: "Toyota Corolla",
    status: "Rejected",
    date: "2026/07/15",
  },
];
let rows = "";

claims.forEach(function (claim) {
  rows += `
  <tr>
    <td>${claim.id}</td>
    <td>${claim.customer}</td>
    <td>${claim.insuranceNo}</td>
    <td>${claim.vehicle}</td>
    <td>${claim.status}</td>
    <td>${claim.date}</td>
  </tr>
  `;
});

claimsTableBody.innerHTML = rows;

console.log(claims);
console.log(claimsTableBody);

// Search
searchInput.addEventListener("input", function () {
  const searchValue = searchInput.value.toLowerCase();

  const filteredClaims = claims.filter(function (claim) {
    return (
      claim.id.toLowerCase().includes(searchValue) ||
      claim.customer.toLowerCase().includes(searchValue) ||
      claim.insuranceNo.toLowerCase().includes(searchValue) ||
      claim.vehicle.toLowerCase().includes(searchValue) ||
      claim.status.toLowerCase().includes(searchValue) ||
      claim.date.toLowerCase().includes(searchValue)
    );
  });

  console.log("Search Value:", searchValue);
  console.log("Filtered Claims:", filteredClaims);

  claimsTableBody.innerHTML = "";

  filteredClaims.forEach(function (claim) {
    claimsTableBody.innerHTML += `
      <tr>
        <td>${claim.id}</td>
        <td>${claim.customer}</td>
        <td>${claim.insuranceNo}</td>
        <td>${claim.vehicle}</td>
        <td>${claim.status}</td>
        <td>${claim.date}</td>
      </tr>
    `;
  });
});

// Notification button
notificationBtn.addEventListener("click", function () {
  console.log("Notification button clicked!");

  notificationPanel.classList.toggle("hidden");
});

// Buttons

newClaimBtn.addEventListener("click", function () {
  alert("Creating a new claim...");
});

addCustomerBtn.addEventListener("click", function () {
  alert("Adding a new customer...");
});

uploadDocumentBtn.addEventListener("click", function () {
  alert("Uploading document...");
});
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

themeToggleBtn.addEventListener("click", function () {
  console.log("Theme clicked!");

  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
