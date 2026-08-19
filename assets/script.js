console.log("ClaimFlow JavaScript is connected!");

const notificationBtn = document.querySelector("#notification-btn");
const notificationPanel = document.querySelector("#notification-panel");

const newClaimBtn = document.querySelector("#newClaimBtn");
const addCustomerBtn = document.querySelector("#addCustomerBtn");
const uploadDocumentBtn = document.querySelector("#uploadDocumentBtn");

const themeToggleBtn = document.querySelector("#theme-toggle");

const searchInput = document.querySelector("#search-input");
const statusFilter = document.querySelector("#statusFilter");
const dateFilter = document.querySelector("#dateFilter");
const claimsTableBody = document.querySelector("#claimsTableBody");

const filterClaimsBtn = document.querySelector("#filterClaimsBtn");

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
const totalClaimsCount = document.querySelector("#totalClaimsCount");
totalClaimsCount.textContent = claims.length;

const pendingClaimsCount = document.querySelector("#pendingClaimsCount");

pendingClaimsCount.textContent = claims.filter(function (claim) {
  return claim.status === "Pending";
}).length;

console.log("✅ Pending Claims:", pendingClaimsCount.textContent);

const approvedClaimsCount = document.querySelector("#approvedClaimsCount");

approvedClaimsCount.textContent = claims.filter(function (claim) {
  return claim.status === "Approved";
}).length;

console.log("✅ Approved Claims:", approvedClaimsCount.textContent);

// نمایش و فیلتر جدول
function renderClaims() {
  const searchValue = searchInput.value.toLowerCase().trim();
  const selectedStatus = statusFilter.value;
  const selectedDate = dateFilter.dataset.selectedDate || "";

  const filteredClaims = claims.filter(function (claim) {
    const matchesSearch =
      claim.id.toLowerCase().includes(searchValue) ||
      claim.customer.toLowerCase().includes(searchValue) ||
      claim.insuranceNo.toLowerCase().includes(searchValue) ||
      claim.vehicle.toLowerCase().includes(searchValue) ||
      claim.status.toLowerCase().includes(searchValue) ||
      claim.date.toLowerCase().includes(searchValue);

    const matchesStatus =
      selectedStatus === "All Status" || claim.status === selectedStatus;

    const matchesDate = selectedDate === "" || claim.date === selectedDate;

    return matchesSearch && matchesStatus && matchesDate;
  });

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

  console.log("Filtered Claims:", filteredClaims);
}

// نمایش اولیه جدول
renderClaims();

// Search
searchInput.addEventListener("input", function () {
  renderClaims();
});

// Status Filter
statusFilter.addEventListener("change", function () {
  renderClaims();
});

// Persian Datepicker
$(document).ready(function () {
  $("#dateFilter").pDatepicker();
});

// Date Filter
filterClaimsBtn.addEventListener("click", function () {
  const selected = $("#dateFilter").data("datepicker").model.state.selected;

  if (!selected) {
    console.log("هیچ تاریخی انتخاب نشده");
    return;
  }

  const date = new persianDate([
    selected.year,
    selected.month,
    selected.date,
  ]).toDate();

  const formattedDate =
    `${date.getFullYear()}/` +
    `${String(date.getMonth() + 1).padStart(2, "0")}/` +
    `${String(date.getDate()).padStart(2, "0")}`;

  dateFilter.dataset.selectedDate = formattedDate;

  console.log("تاریخ انتخاب‌شده:", formattedDate);

  renderClaims();
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

// Dark Mode
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
