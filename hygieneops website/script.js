const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("show");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("show");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Important: Do not prevent the contact form submission.
// The form posts directly to Formspree using the action="https://formspree.io/f/..." attribute in index.html.
