const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const navbarFirst = $('.navbar-first__wrap')
const navbarMobile = $('.navbar__mobile')
const navbarFirstHeight = navbarFirst.clientHeight

navbarMobile.onclick = () => {
    const isClosed = navbarFirst.clientHeight === navbarFirstHeight
    if (isClosed) {
        navbarFirst.style.height = 'auto'
    }
    else {
        navbarFirst.style.height = null
    }
}

/* ANIMATION */

// const controller = new ScrollMagic.Controller();

// const background = new ScrollMagic.Scene({
//     triggerElement: '.active3__wrapper'
// })
// .setClassToggle('.active3__wrapper', 'fade-in')
// .addTo(controller);

// const phone92 = new ScrollMagic.Scene({
//     triggerElement: '.section5__first-left'
// })
// .setClassToggle('.section5__first-left', 'fade-in')
// .addTo(controller);

// const bg4_img1 = new ScrollMagic.Scene({
//     triggerElement: '.section6__first-right'
// })
// .setClassToggle('.section6__first-right', 'fade-in')
// .addTo(controller);

// const bg4_img3 = new ScrollMagic.Scene({
//     triggerElement: '.bg4__content2-bottom'
// })
// .setClassToggle('.bg4__content2-bottom', 'fade-in')
// .addTo(controller);

// const bg5_img1 = new ScrollMagic.Scene({
//     triggerElement: '.bg5__content1-picture'
// })
// .setClassToggle('.bg5__content1-picture', 'fade-in')
// .addTo(controller);

// //SECTION1 
// var section1 = new TimelineMax();
// section1 
// .from('.section1__img', 3, {opacity: 0, y: "10%"})

// var scene_s1 = new ScrollMagic.Scene({
//     triggerElement: '.section1',
//     triggerHook: 0,
//     duration: "100%"
// })
// .setTween(section1)
// .setPin('.section1')
// .addIndicators()
// .addTo(controller);

// // SECTION 2
// var section2 = new TimelineMax();
// section2
// // .from('.section2__first', 3, {opacity: 0, x: "5%", y: "100%"})
// .from('.section2__third', 2, {opacity: 0, y: "5%"})

// var scene_s2 = new ScrollMagic.Scene({
//     triggerElement: '.section2',
//     triggerHook: 0,
//     duration: "100%"
// })
// .setTween(section2)
// .setPin('.section2')
// .addIndicators()
// .addTo(controller);

// // SECTION 3
// var section3 = new TimelineMax();
// section3
// .from('.section3__first-content', 3, {opacity: 0, z: "-50%"})
// .from('.section3-img', 3, {opacity: 0, y: "10%"})
// // .from('.section4__wrapper', 3, {opacity: 0, y: "50%"})

// var scene_s3 = new ScrollMagic.Scene({
//     triggerElement: '.section3',
//     triggerHook: 0,
//     duration: "100%"
// })
// .setTween(section3)
// .setPin('.section3', '.section3__third')
// .addIndicators()
// .addTo(controller);


// // SECTION 5
// var section5 = new TimelineMax();

// section5
// .from('.section5__first--wrapper', 10, {opacity: 0})
// .to('.section5__first--wrapper', 10, {y: "-30%"})
// .to('.section5__first--wrapper', 3, {autoAlpha: 0})

// .to('.section5__first-img', 10, {
//     scale: 1.4,
//     x: "250%", 
//     y: "50%"
// })

// // .to('.section5__second-img1', 3, {display: "block"}, "-=3")
// // .to('.section5__second-img1', 3, {x: "25%"}, "-=3")
// .from('.section5__second-header', 3, {opacity: 0})
// .to('.section5__second-header', 3, {y: "-180%"}, "-=3")

// .to('.section5__second-img1', {display: "block"}, "-=3")
// .to('.section5__second-img1', 3, {x: "55%", y: "-55%", scale: 1.1})
// .to('.section5__first-img', 3, {autoAlpha: 0}, "-=3")
// .to('.section5__second-img1', 10, {y: "-60%"})

// .to('.section5__second-img1', 10, {
//     x: "-5%",
//     y: "-85%",
//     scale: 0.6
// })
// .to('.section5__second-img1', 0.2, {autoAlpha: 0})
// .to('.section5__second-img1', {display: "none"})
// .to('.section5__second-img2', {display: "block"}, "-=3")
// .to('.section5__second-img2', 3, {y: "-80%", scale: 0.5}, "-=3")

// var scene_s5 = new ScrollMagic.Scene({
//     triggerElement: '.section5',
//     triggerHook: 0,
//     duration: "150%"
// })
// .setTween(section5)
// .setPin('.section5')
// .addIndicators()
// .addTo(controller);


// // SECTION 6
// var section6 = new TimelineMax();
// section6
// .from('.section6__first-left', 3, {opacity: 0})
// .to('.section6__first-img', 3, {x: "40%"}, "-=3")
// .to('.section6__first-left', 10, {y: "-50%"})
// .to('.section6__first-img', 10, {x: "70%"}, "-=3")
// .to('.section6__first-left', {display: "none"})
// .to('.section6__first-img', {display: "none"})
// .to('.section6__horizontal-img', {display: "block"})
// .from('.section6__horizontal-img', 10, {x: "-100%"})
// // .to('.section6__first-horizontal', {display: "none"})

// var scene_s6 = new ScrollMagic.Scene({
//     triggerElement: '.section6',
//     triggerHook: 0,
//     duration: "100%"
// })
// .setTween(section6)
// .setPin('.section6')
// .addIndicators()
// .addTo(controller);


// // SECTION 7
// var section7 = new TimelineMax();
// section7
// .from('.section7__header', 3, {opacity: 0, y: "30%"})
// .from('.section7-img', 3, {opacity: 0, y: "10%"})

// var scene_s7 = new ScrollMagic.Scene({
//     triggerElement: '.section7',
//     triggerHook: 0,
//     duration: "100%"
// })
// .setTween(section7)
// .setPin('.section7')
// .addIndicators()
// .addTo(controller);
