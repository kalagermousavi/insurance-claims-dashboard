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

// Claims Data
const claims = [
  {
    id: "#2541",
    customer: "Ali Rezaei",
    insuranceNo: "INS-1025",
    vehicle: "Peugeot 206",
    status: "Pending",
    inspectionStatus: "Required",
    processingTime: 2,
    documentsStatus: "Waiting",
    date: "2026/07/14",
  },

  {
    id: "#2542",
    customer: "Sara Ahmadi",
    insuranceNo: "INS-1038",
    vehicle: "Hyundai Elantra",
    status: "Approved",
    inspectionStatus: "Completed",
    processingTime: 3,
    documentsStatus: "Complete",
    date: "2026/07/15",
  },

  {
    id: "#2543",
    customer: "Reza Mohammadi",
    insuranceNo: "INS-1052",
    vehicle: "Toyota Corolla",
    status: "Rejected",
    inspectionStatus: "Completed",
    processingTime: 4,
    documentsStatus: "Complete",
    date: "2026/07/15",
  },
];

// Average Processing Time
const averageProcessingTime = document.querySelector("#averageProcessingTime");

const totalProcessingTime = claims.reduce(function (total, claim) {
  return total + claim.processingTime;
}, 0);

const averageTime = totalProcessingTime / claims.length;

averageProcessingTime.textContent = Math.round(averageTime) + " Days";

console.log(
  "✅ Average Processing Time:",
  averageProcessingTime.textContent
);

// Total Claims
const totalClaimsCount = document.querySelector("#totalClaimsCount");

totalClaimsCount.textContent = claims.length;

// Pending Claims
const pendingClaimsCount = document.querySelector("#pendingClaimsCount");

pendingClaimsCount.textContent = claims.filter(function (claim) {
  return claim.status === "Pending";
}).length;

console.log("✅ Pending Claims:", pendingClaimsCount.textContent);

// Waiting Documents
const waitingDocumentsCount = document.querySelector("#waitingDocumentsCount");

waitingDocumentsCount.textContent = claims.filter(function (claim) {
  return claim.documentsStatus === "Waiting";
}).length;

console.log(
  "✅ Waiting Documents:",
  waitingDocumentsCount.textContent
);

// Approved Claims
const approvedClaimsCount = document.querySelector("#approvedClaimsCount");

approvedClaimsCount.textContent = claims.filter(function (claim) {
  return claim.status === "Approved";
}).length;

console.log(
  "✅ Approved Claims:",
  approvedClaimsCount.textContent
);

// Rejected Claims
const rejectedClaimsCount = document.querySelector("#rejectedClaimsCount");

rejectedClaimsCount.textContent = claims.filter(function (claim) {
  return claim.status === "Rejected";
}).length;

console.log(
  "✅ Rejected Claims:",
  rejectedClaimsCount.textContent
);

// Paid Claims
const paidClaimsCount = document.querySelector("#paidClaimsCount");

paidClaimsCount.textContent = claims.filter(function (claim) {
  return claim.status === "Paid";
}).length;

console.log("✅ Paid Claims:", paidClaimsCount.textContent);

// Vehicle Inspections
const vehicleInspectionsCount = document.querySelector(
  "#vehicleInspectionsCount"
);

vehicleInspectionsCount.textContent = claims.filter(function (claim) {
  return claim.inspectionStatus === "Required";
}).length;

console.log(
  "✅ Vehicle Inspections:",
  vehicleInspectionsCount.textContent
);

// Render Claims Table
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
      selectedStatus === "All Status" ||
      claim.status === selectedStatus;

    const matchesDate =
      selectedDate === "" ||
      claim.date === selectedDate;

    return matchesSearch && matchesStatus && matchesDate;
  });

  claimsTableBody.innerHTML = "";

  // Status Badge Class
  function getStatusClass(status) {
    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Approved") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Rejected") {
      return "bg-red-100 text-red-700";
    }

    return "bg-slate-100 text-slate-700";
  }

  // Create Table Rows
  filteredClaims.forEach(function (claim) {
    claimsTableBody.innerHTML += `
      <tr class="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700">

        <td class="py-4 text-sm text-slate-700 dark:text-slate-200">
          ${claim.id}
        </td>

        <td class="py-4 text-sm text-slate-700 dark:text-slate-200">
          ${claim.customer}
        </td>

        <td class="py-4 text-sm text-slate-700 dark:text-slate-200">
          ${claim.insuranceNo}
        </td>

        <td class="py-4 text-sm text-slate-700 dark:text-slate-200">
          ${claim.vehicle}
        </td>

        <td class="py-4">
          <span class="px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(claim.status)}">
            ${claim.status}
          </span>
        </td>

        <td class="py-4 text-sm text-slate-700 dark:text-slate-200">
          ${claim.date}
        </td>

        <td class="py-4">
          <a
            href="#"
            data-id="${claim.id}"
            class="px-3 py-1 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-slate-700"
          >
            View
          </a>
        </td>

      </tr>
    `;
  });

  console.log("Filtered Claims:", filteredClaims);
}

// Initial Table Render
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
  const selected = $("#dateFilter")
    .data("datepicker")
    .model.state.selected;

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

// Notification Button
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