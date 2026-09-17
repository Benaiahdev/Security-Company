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

// ===============================
// 4. CONTACT FORM CONDITION
// ===============================
const clientType = document.getElementById("clientType");
const personalFields = document.getElementById("personalFields");
const companyFields = document.getElementById("companyFields");

clientType.addEventListener("change", function () {
  if (this.value === "company") {
    personalFields.style.display = "none";
    companyFields.style.display = "block";
  } else {
    personalFields.style.display = "block";
    companyFields.style.display = "none";
  }
});