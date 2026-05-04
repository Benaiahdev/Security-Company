// ===============================
// SECURECO NAVIGATION SYSTEM
// ===============================

// Elements
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("navLinks");

// ===============================
// TOGGLE MENU
// ===============================
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuBtn.classList.toggle("active");
});

// ===============================
// CLOSE MENU ON LINK CLICK
// ===============================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuBtn.classList.remove("active");
  });
});

// ===============================
// 3. ACTIVE LINK HIGHLIGHTING
// ===============================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});