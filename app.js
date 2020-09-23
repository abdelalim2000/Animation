const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to('.text', {
    y: '0%',
    duration: 1,
    stagger: 0.25
});

tl.to('.slider', {
    y: '-100%',
    duration: 1.5,
    delay: 0.5
});

tl.to('.intro', {
    y: '-100%',
    duration: 1
}, "-=1.2");

tl.fromTo('#logo', {
    opacity: 0,
    x: '-100%'
}, {
    opacity: 1,
    x: '0%',
    duration: 1,
});

tl.fromTo('.nav-links li', {
    opacity: 0,
    y: '-100%'
}, {
    opacity: 1,
    y: '0%',
    duration: 1,
    stagger: .25
}, '-=1');

tl.fromTo('.big-text', {
    opacity: 0,
    y: '-100%'
}, {
    opacity: 1,
    y: "-25%",
    duration: 1
}, '-=.7');