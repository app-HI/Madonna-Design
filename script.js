gsap.registerPlugin(ScrollTrigger);

gsap.set(".h1-main", {
  opacity: 0,
});
gsap.set(".item", {
  opacity: 0,
});
gsap.to(".item", {
  duration: 0.1,
  delay: 1,
  ease: "power1",
  opacity: 1,
  stagger: {
    each: 0.25,
    from: "start",
  },
  onComplete: function () {
    gsap.to(".h1-main", {
      opacity: 1,
      repeat: 1,
    });
  },
});

//
gsap.set(".video-item", {
  opacity: 0,
  y: 90,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".video-item", {
  opacity: 1,
  y: 0,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#video-section",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});
