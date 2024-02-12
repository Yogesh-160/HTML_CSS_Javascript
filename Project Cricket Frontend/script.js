let cursor = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x+ 10 +"px"
    cursor.style.top = dets.y+"px"
    blur.style.left = dets.x+ -175 +"px"
    blur.style.top = dets.y+ -175+"px"
    
})

let h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 2;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95C11E";
        cursor.style.backgroundColor = "#95C11E";
    })
})



gsap.to("#nav", {
    backgroundColor: "black",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        // markers: true,
        start : "top -25%",
        end: "top -70%",
        scrub: 1
    }
})

gsap.from("#about-us img, #about-us2", {
    y: 90,
    opacity: 0,
    duration: 1.5,
    
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%", 
        end: "top 58%",
        scrub : 2,
    }
})
/*gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    
    
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%", 
        end: "top 65%",
        scrub : 1,
    }
})*/

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3,
        
    }
})
gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 55%",
        end: "top 45%",
        scrub: 3,
        
    }
})

gsap.from("#page4 h1",{
    y: 24,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 65%",
        end: "top 50%",
        scrub: 3,
        
    }
})

