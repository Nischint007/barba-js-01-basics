barba.init({
  sync: true,

  transitions: [{
    name: "scale-effect",

    leave(data){
      return gsap.to(data.current.container,{
        y: "-100%",
        scale: 0.7,
        duration: 1.2,
        ease: "power3.inOut"
      });
    },
    enter(data){
      gsap.set(data.next.container,{
        y: "100%",
        scale: 0.7
      });

      return gsap.to(data.next.container,{
        y: "0%",
        scale: 1,
        duration: 1.2,
        ease: "power3.inOut"
      });
    }
  }]
});