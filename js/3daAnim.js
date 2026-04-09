gsap.registerPlugin(ScrollTrigger);

const model = document.querySelector("#heroModel");
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Flip);

gsap.set("#heroModel", { x: 100, y: -50 });



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


gsap.registerPlugin(ScrollTrigger);

const lineFill = document.querySelector(".line-fill");

ScrollTrigger.create({
  trigger: ".background",
  start: "top top",
  end: "bottom 70%",
  scrub: 1, // smooth scroll fill
  onUpdate: (self) => {
    lineFill.style.height = (self.progress * 100) + "%";
  }
});

// Animate timeline cards
gsap.utils.toArray(".item").forEach((item) => {
  gsap.fromTo(item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none none",
      }
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

// 🔥 MODEL SCALE EFFECT (Responsive)
let scaleEnd = window.innerWidth > 768 ? 1.4 : 1.25;

gsap.to("#heroModel", {
    scale: scaleEnd,
    ease: "none",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "+=120%",
        scrub: 1.5,
        pin: "#home",
        anticipatePin: 1,
    }
});

// 🔥 TEXT FADE (Responsive timing)
gsap.to(".hero-text", {
    opacity: 0,
    y: window.innerWidth > 768 ? 60 : 40,
    ease: "none",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "+=70%",
        scrub: 1
    }
});

// 🔥 NAV FADE
gsap.to(".nav-bar", {
    y: -40,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "+=50%",
        scrub: 1
    }
});

// 🔥 SKILLS STAGGER
gsap.from(".skill-tag", {
    scale: 0.7,
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".home-skills",
        start: "top 90%"
    }
});

// 🔥 BUTTONS
gsap.from(".cta-btn", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".home-btns",
        start: "top 90%"
    }
});

// 🔄 REFRESH ON RESIZE
window.addEventListener("resize", () => ScrollTrigger.refresh());

// GSAP SCROLL EFFECTS
gsap.registerPlugin(ScrollTrigger);

// 🔥 HERO IMAGE SCALE + PIN EFFECT
gsap.to("#my-model2", {
    scale: 1.35,  // Scales up 35%
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=120%",  // Scroll distance
        scrub: 1.2,     // Smoothness
        pin: true,      // Pins hero during animation
        anticipatePin: 1,
        invalidateOnRefresh: true
    }
});

// 🔥 HERO TEXT FADE
gsap.to(".hero-content", {
    opacity: 0,
    y: 80,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=60%",
        scrub: 1
    }
});

// 🔥 ABOUT SECTION REVEAL
gsap.from(".about-img", {
    scale: 0.85,
    opacity: 0,
    rotation: -5,
    duration: 1.5,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".about-img",
        start: "top 50%",
        toggleActions: "play none none reverse"
    }
});

gsap.from(".about-content h2", {
    y: 80,
    opacity: 0,
    duration: .5,
    ease: "ease.in",
    scrollTrigger: {
        trigger: ".about-content h2",
        start: "top 70%"
    }
});

gsap.from(".about-content p", {
    y: 60,
    opacity: 0,
    stagger: 0.3,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".about-content",
        start: "top 90%"
    }
});



// 🔥 SMOOTH SCROLLBAR (Optional)
gsap.to("body", {
    backgroundColor: "#0a0a0a",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true
    }
});

// PERFORMANCE
ScrollTrigger.config({ limitCallbacks: true });



gsap.registerPlugin(ScrollTrigger);

// 🔥 Simple Title Fade
gsap.from("#skills .section-title", {
  scrollTrigger: { trigger: "#skills", start: "top 90%" },
  opacity: 0, y: 30, duration: 0.8, ease: "power2.out"
});

// 🔥 Simple Skill Fade - Individual triggers
gsap.utils.toArray(".skill-item").forEach((item) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
    },
    opacity: 0, 
    y: 30, 
    duration: 0.6, 
    ease: "power2.out"
  });
});

// 🔥 Simple Category Titles
gsap.utils.toArray(".frontend h1").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: { trigger: title, start: "top 90%" },
    opacity: 0, y: 20, duration: 0.6, ease: "power2.out"
  });
});

// 🔥 Subtle Hover
gsap.utils.toArray(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item.querySelector(".skill-icon"), { 
      scale: 1.1, duration: 0.3, ease: "power2.out" 
    });
  });
  
  item.addEventListener("mouseleave", () => {
    gsap.to(item.querySelector(".skill-icon"), { 
      scale: 1, duration: 0.3, ease: "power2.out" 
    });
  });
});

// 🔄 Refresh
window.addEventListener("resize", () => ScrollTrigger.refresh());

// PERFECT TIMELINE ANIMATION - Side entry based on left/right class
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  
  // 1. PROGRESS LINE (grows as you scroll)
  gsap.fromTo(".line-fill", 
    { height: 0, transformOrigin: "top center" },
    {
      height: "100%",
      scrollTrigger: {
        trigger: "#background",
        start: "top center",
        end: "bottom center",
        scrub: true,
        ease: "none"
      }
    }
  );

  // 2. EACH ITEM ANIMATES FROM ITS SIDE
  gsap.utils.toArray(".timeline-items .item").forEach((item, i) => {
    
    const isLeft = item.classList.contains('left');
    const startX = isLeft ? -150 : 150;  // LEFT items from RIGHT, RIGHT items from LEFT
    
    gsap.fromTo(item, 
      { 
        x: startX,
        opacity: 0,
        scale: 0
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    // 3. CONTENT INSIDE EACH ITEM
    gsap.fromTo(item.querySelectorAll("h3, p"), 
      { x: isLeft ? 50 : -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.2,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        }
      }
    );
  });

  // 4. SECTION TITLE
  gsap.from(".section-title", {
    y: -50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#background",
      start: "top 90%"
    }
  });
});