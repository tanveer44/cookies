
// Select the wrapper element and all buttons
let cookies = document.querySelector(".wrapper");
let btn = document.querySelectorAll("button");

// Function to execute when the window loads
window.addEventListener("load", executeCode);

function executeCode() {
  // Check if the "cookieis" cookie includes "terms-conditions"
  if (document.cookie.includes("cookieis=terms-conditions")) return;
  // If not present, add the "show" class to the wrapper element
  cookies.classList.add("show");
}

// Add click event listeners to all buttons
btn.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove the "show" class from the wrapper element
    cookies.classList.remove("show");
    // If the clicked button has an id of "accept"
    if (button.id == "accept") {
      // Set a cookie named "cookieis" with the value "terms-conditions" and max-age 30 days
      document.cookie = "cookieis=terms-conditions;max-age=" + 60 * 60 * 24 * 30;
    }
    // Move the wrapper element to the right and close it
    cookies.style.transform = "translateX(100%)";
    // After 1 second, remove the wrapper element from the DOM
    setTimeout(() => {
      cookies.remove();
    }, 1000);
  });
});