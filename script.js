gsap.from(".loader-icons", {
  duration: 2.5,
  opacity: 0,
  y: -50,
  ease: "power2.out",
  delay: 1,
});
gsap.from(".www-com", {
  duration: 2.5,
  opacity: 0,
  y: 50,
  ease: "power2.out",
  delay: 0.5,
});

gsap.from(".p-title", {
  duration: 2.5,
  opacity: 0,
  x: -50,
  ease: "power2.out",
});

gsap.to("#loader", {
  opacity: 0,
  y: -100,
  ease: "sine.out",
  delay: 3,
  duration: 0.6,
});

gsap.from(".ready-to-innovate", {
  duration: 1.5,
  opacity: 0,
  y: -20,
  ease: "sine.out",
});

gsap.from(".fullstack", {
  duration: 1.5,
  opacity: 0,
  x: -20,
  ease: "sine.out",
});

gsap.from(".developer", {
  duration: 1.5,
  opacity: 0,
  x: -20,
  ease: "sine.out",
  delay: 0.5,
});

gsap.from(".summary", {
  duration: 1.5,
  opacity: 0,
  x: -20,
  ease: "sine.out",
  delay: 0.5,
});

gsap.from(".desc", {
  duration: 1.5,
  opacity: 0,
  x: -20,
  ease: "sine.out",
  delay: 0.7,
});

gsap.from(".home-skills", {
  duration: 1.5,
  opacity: 0,
  x: -20,
  ease: "sine.out",
  delay: 0.9,
});

gsap.from(".home-btns", {
  duration: 1.5,
  opacity: 0,
  y: 20,
  ease: "sine.out",
  delay: 1.1,
});

gsap.from(".model", {
  duration: 2,
  opacity: 0,
  ease: "sine.out",
});

emailjs.init("OT58N7GWW9XLMu-7B");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const btn = form.querySelector(".submit-btn");
  const status = document.getElementById("status");
  const originalText = btn.textContent;

  btn.textContent = "Sending...";
  btn.disabled = true;

  status.className = "message";
  status.style.display = "none";

  emailjs
    .sendForm("service_zd164px", "template_h8rjwod", form)
    .then(function (result) {
      openModal(); // 🔥 SHOW MODAL
      form.reset();
    })
    .catch(function (error) {
      console.error(error);
      status.innerHTML =
        "❌ <strong>Failed to send.</strong><br>Please try again.";
      status.className = "message error show";
    })
    .finally(function () {
      btn.textContent = originalText;
      btn.disabled = false;
    });
});

function openModal() {
  document.getElementById("successModal").classList.add("show");
}

function confirmModal() {
  document.getElementById("successModal").classList.remove("show");
}

