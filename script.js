var tl = gsap.timeline()


tl.from("#nav h3",{
    y : -50,
    duration : 0.8,
    opacity : 0,
    stagger : 0.3,
    
})

tl.from("#main h1",{
    x : -500,
    duration : 0.8,
    stagger :0.3,
    opacity: 0,
})

tl.from("#main img",{
    x : 100,
    duration : 0.8,
    stagger :0.3,
    opacity: 0,
    rotate : 50,
})
