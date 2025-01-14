// DOM Elements
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

// Toggle Navbar for Mobile View
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("open");
});

// Smooth Scrolling and Closing Navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Scroll to the targeted section smoothly
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});
  

// Smooth Scroll for Anchor Links
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute("href").slice(1); // Get the ID (skip the '#')
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Smooth scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop - 80, // Offset for fixed header
        behavior: "smooth"
      });
    }
  });
});

// Sticky Header on Scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Dynamic Year Update in Footer
const yearElement = document.querySelector(".year");
if (yearElement) {
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
}

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Dynamic Year Update
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
  
  // Close Navbar on Link Click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuIcon.classList.remove("open");
    });
  });
  
  // Close Navbar When Scrolling
  window.addEventListener("scroll", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("open");
    }
  });

  // Select the button and the email input field
const button = document.getElementById('submit-btn');
const emailInput = document.getElementById('email');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Get the value of the email input field
    const email = emailInput.value;

    // Check if the email is not empty
    if (email) {
        console.log('Email:', email); // Print the email to the console
        alert(`The entered email is: ${email}`); // Show the email in an alert
    } else {
        alert('Please enter a valid email address!');
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      alert("Thank you! Your message has been sent.");
      form.reset(); // Clear the form
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
});
