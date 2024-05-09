
let cursor = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px"
    cursor.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 +"px"
    blur.style.top = dets.y - 200 +"px"
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

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale = 3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"

    })
})

h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95C11E"
        cursor.style.backgroundColor = "#95C11E"

    })
})

gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})