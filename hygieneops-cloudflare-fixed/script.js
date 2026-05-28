const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

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

if (contactForm && formNote) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formNote.textContent =
      "Thank you. Your interest has been noted. This starter form will be connected to Supabase or another backend in the next development stage.";

    contactForm.reset();
  });
}
