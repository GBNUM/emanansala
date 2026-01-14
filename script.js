gsap.from(".loader-icons", {
  duration: 2.5,
  opacity: 0,
  y: -50,
  ease: "power2.out",
  delay: 1
});
gsap.from(".www-com", {
  duration: 2.5,
  opacity: 0,
  y: 50,
  ease: "power2.out",
  delay: 0.5
})

gsap.from(".p-title", {
  duration: 2.5,
  opacity: 0,
  x: -50,
  ease: "power2.out",
})

gsap.to("#loader", {
    opacity: 0,
    y: -100,
    ease: "sine.out",
    delay: 3,
    duration: .6
})

