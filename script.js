
let cursor = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    blur.style.left = dets.x - 150 +"px"
    blur.style.top = dets.y - 150 +"px"
})




gsap.to("#nav",{
        backgroundColor:"#000",
        height:"110px",
        duration:0.5,
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            // marker:true,
            start:"top -10p%",
            end:"top -11%",
            scrub:1,

        }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // marker:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2,
    }

})