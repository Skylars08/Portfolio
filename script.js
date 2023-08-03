var tl = gsap.timeline()


tl.from("#nav", {
    opacity:0,
    delay:1,
    duration:1
})

tl.from("#nav h1, #nav h3, #nav h4, #nav i", {
    y:100,
    opacity:0,
    duration:1,
    delay:1,
    stagger:0.4,
})

tl.from("#left h1", {
    x:-500,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.5
})


tl.from("#right img", {
    scale:0.5,
    opacity:0,
    dutration:0.5
})

tl.from("#page1 #right p", {
    scale:0.5,
    opacity:0,
    delay:0.5,
    dutration:0.5
})

tl.from(".line", {
    opacity:0,
    delay:0.5,
    duration:0.5
})

tl.from("#left button", {
    x:-500,
    opacity:0,
    delay:0.6,
    duration:0.6,
    stagger:0.5
})

tl.from("#page1 .social-media li",{
    y:500,
    scale:0.5,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.5
})

tl.from(".scroll", {
    scale:0.5,
    opacity:0,
    delay:0.5,
    dutration:0.5
})

tl.to(".scroll", {
    y:10,
    repeat:-1,
    opacity:1,
    delay:0.5,
    dutration:0.5,
    yoyo:true
})

gsap.from("#page2 .box", {
    scale: 0,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"bottom 60%"
    }
})


tl.from("#page2 h2", {
    y:100,
    opacity:0,
    delay:1,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end:"bottom 70%",
        scrub:true,
    }
})

tl.from("#page3 img", {
    transform:"translateX(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 img",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 100%",
        scrub: 1
    }
})

gsap.from("#page3 #right", {
    transform:"translateX(50%)",
    opacity:1,
    scrollTrigger:{
        trigger:"#page3 #right",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 100%",
        scrub:1,
    }
})

gsap.from("#page4 .pg4h2", {
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page4 .pg4h2",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end:"bottom 0%",
    }
})

gsap.from("#page4 p", {
    opacity:0,
    delay:1,
    duration:1,
    // stagger:0.5,
    scrollTrigger:{
        trigger:"#page4 p",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        // end:"bottom 0%",
    }
})

gsap.from("#page5 #squares", {
    scale: 0,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:{
        trigger:"#page5 #squares",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 80%",
    }
})

gsap.from("#page5 h2", {
    y:-200,
    opacity:0,
    delay:1,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:"#page5 h2",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 50%",
        scrub:true
    }
})

gsap.from("#page5 p", {
    y:100,
    opacity:0,
    delay:1,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:"#page5 p",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:true
    }
})