console.log("ClaimFlow JavaScript is connected!");

const notificationBtn = document.querySelector("#notification-btn");
const notificationPanel = document.querySelector("#notification-panel");

notificationBtn.addEventListener("click", function () {
  console.log("Notification button clicked!");

  notificationPanel.classList.toggle("hidden");
});
