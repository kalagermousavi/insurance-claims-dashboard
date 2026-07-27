console.log("ClaimFlow JavaScript is connected!");

const notificationBtn = document.querySelector("#notification-btn");
const notificationPanel = document.querySelector("#notification-panel");
const newClaimBtn = document.querySelector("#newClaimBtn");
const addCustomerBtn = document.querySelector("#addCustomerBtn");
const uploadDocumentBtn = document.querySelector("#uploadDocumentBtn");
const searchInput = document.querySelector("#search-input");
const claimsTableBody = document.querySelector("#claims-table-body");
const claims = [
  {
    id: "CLM-001",
    customer: "John Smith",
    type: "Car Accident",
    status: "Pending",
  },
  {
    id: "CLM-002",
    customer: "Sarah Johnson",
    type: "Theft",
    status: "Approved",
  },
];
console.log(claims);
searchInput.addEventListener("input", function () {
  console.log(searchInput.value);
  const searchValue = searchInput.value.toLowerCase();
  const filteredClaims = claims.filter(function (claim) {
    console.log("Checking:", claim.customer);

    return claim.customer.toLowerCase().includes(searchValue);
  });
  console.log("Search Value:", searchValue);
  console.log("Filtered Claims:", filteredClaims);
  claimsTableBody.innerHTML = "";
  console.log(filteredClaims);
});

notificationBtn.addEventListener("click", function () {
  console.log("Notification button clicked!");

  notificationPanel.classList.toggle("hidden");
});
newClaimBtn.addEventListener("click", function () {
  alert("Creating a new claim...");
});

addCustomerBtn.addEventListener("click", function () {
  alert("Adding a new customer...");
});

uploadDocumentBtn.addEventListener("click", function () {
  alert("Uploading document...");
});
