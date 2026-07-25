console.log("ClaimFlow JavaScript is connected!");

const notificationBtn = document.querySelector("#notification-btn");
const notificationPanel = document.querySelector("#notification-panel");
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", function () {
  console.log(searchInput.value);
});

notificationBtn.addEventListener("click", function () {
  console.log("Notification button clicked!");

  notificationPanel.classList.toggle("hidden");
});
