function validateLogin(event) {
  event.preventDefault(); // Prevent form submission and page refresh

  const uname = document.getElementById("uname").value;  // Corrected this line
  const pwd = document.getElementById("pwd").value;
  const modal = document.querySelector(".modal");

  if (
    (uname === "employee" && pwd === "password") ||
    (uname === "hr" && pwd === "password")
  ) {
    alert("You are now logged in");
    window.location.href = uname === "employee" ? "index.html" : "indexHR.html";
  } else {
    modal.style.display = "block";
    console.error("Invalid credentials"); // Debugging
  }
}
