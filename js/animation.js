document.querySelectorAll('.circle').forEach(function(circle) {
    circle.style.display = 'block'
})

var timeline = new TimelineLite({
    paused: true
})

CSSRulePlugin.defaultTransformPerspective = 500;

timeline.staggerTo('.circle', 2, {
        backgroundColor: 'blue',
        // x: () => Math.random() * 500,
        // y: () => Math.random() * 300,
        x: 300,
        y: 100,
        width: '+=50',
        height: '+=50',
        rotationX: 45,
        scaleX: 0.8,
        z: -300,
        ease: Power0.easeNone
    }, 1)

// TweenLite.to('circle', 0, {
//     x: () => Math.random() * 500,
//     y: () => Math.random() * 300
// })

// timeline.add(
//     TweenMax.to('.circle', 2, {
//         backgroundColor: 'blue',
//         // x: () => Math.random() * 500,
//         // y: () => Math.random() * 300,
//         x: 300,
//         y: 100,
//         width: '+=50',
//         height: '+=50',
//         ease: Power0.easeNone
//     })
// )

window.addEventListener('scroll', (e) => {
    var scrollTop = window.scrollY
    var docHeight = document.body.clientHeight
    var winHeight = window.innerHeight
    var scrollPercent = (scrollTop) / (docHeight - winHeight)
    var scrollPercentRounded = Math.round(scrollPercent * 100) / 100
    // console.log('Scrolling: ' + scrollTop)

    timeline.progress(scrollPercent).pause()
})
