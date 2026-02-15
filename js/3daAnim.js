gsap.registerPlugin(ScrollTrigger);

const model = document.querySelector("#my-model2");
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

gsap.set("#my-model2", { x: 0, y: 0 });

ScrollTrigger.matchMedia({

  // Runs on screens 768px and wider (medium and up)
  "(min-width: 768px)": function() {
    // Set default position

gsap.to(model, {
  // Move the element downward via CSS
  y: 50, 
  
  // Animate the internal attributes of <model-viewer>
  // This changes the camera distance (zoom) and vertical angle (pitch)
  attr: { 
    "camera-orbit": "10deg 80deg 2m" 
  },
  
  // Set up the scroll-based logic
  scrollTrigger: {
    trigger: "#about", // The ID of the section that triggers the move
    start: "top bottom",        // Animation starts when the top of the section hits the middle of screen
    end: "top 30%",       // Animation ends when the bottom of the section hits the middle
    scrub: 1,                   // 1 second smoothing (makes it feel buttery smooth)
    markers: false,             // Set to true if you want to see the start/end lines for debugging
    
    // Optional: Use 'pin: true' if you want the section to stay fixed while the model zooms
    pin: false 
  },
  ease: "none" // Usually best for scrubbed animations to keep them linear with scroll
});
  }
});

ScrollTrigger.matchMedia({

  // Runs on screens 768px and wider (medium and up)
  "(min-width: 768px)": function() {
    // Set default position

gsap.to(model, {
  // Move the element downward via CSS
  x: 800, 
  
  // Animate the internal attributes of <model-viewer>
  // This changes the camera distance (zoom) and vertical angle (pitch)
  attr: { 
    "camera-orbit": "10deg 80deg 2m" 
  },
  
  // Set up the scroll-based logic
  scrollTrigger: {
    trigger: "#skills", // The ID of the section that triggers the move
    start: "top bottom",        // Animation starts when the top of the section hits the middle of screen
    end: "top center",       // Animation ends when the bottom of the section hits the middle
    scrub: 1,                   // 1 second smoothing (makes it feel buttery smooth)
    markers: false,             // Set to true if you want to see the start/end lines for debugging
    
    // Optional: Use 'pin: true' if you want the section to stay fixed while the model zooms
    pin: false 
  },
  ease: "none" // Usually best for scrubbed animations to keep them linear with scroll
});
  }
});


gsap.utils.toArray(".frontend").forEach((section) => {

  // Animate the whole section
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 0.8,
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
    }
  });

  // Animate icons inside each section
  gsap.from(section.querySelectorAll("span"), {
    opacity: 0,
    y: 40,
    scale: 0.8,
    duration: 0.6,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: section,
      start: "top bottom",
    }
  });

});
