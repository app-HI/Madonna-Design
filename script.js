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
    onComplete: function() {
      gsap.to(".h1-main", {
        opacity: 1,
        repeat: 1,
      });
    }
  });
  