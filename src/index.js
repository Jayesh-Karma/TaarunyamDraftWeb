// alert("js added")
// setTimeout(()=>{
//     document.querySelector("#starter video").style.top = "-100%";
// },4000)

// ---register  button 





// ---nav animation 
gsap.to("nav",{
    backgroundColor:"black",
    height:"90px",
    // borderBottomWidth: '2px', // End border-bottom width
    borderBottomColor:"yellow",
    duration:0.5,
    
    scrollTrigger:{
        trigger:"nav",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -16%",
        scrub:1,
    }
})

gsap.to("#content",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#content",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
gsap.to("#tech-banner",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#startList",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 75%",
        scrub:2,
    }
})
gsap.to(".tech-content",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".tech-content",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 75%",
        scrub:2,
    }
})
gsap.to("#Sports-banner",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".sports-conten",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 75%",
        scrub:2,
    }
})


// MIDDILE PAGE HOVER EFFECT -----
let diffrot = 0;
let rotate = 0;
document.querySelectorAll(".elems").forEach((elem)=>{

    elem.addEventListener("mousemove",(dtls)=>{
        let diff = dtls.clientY - elem.getBoundingClientRect().top;
        diffrot = dtls.clientX - rotate;
        rotate = dtls.clientX;
        let rot = gsap.utils.clamp(-20,20,diffrot);

        gsap.to(elem.querySelector("img"),{
            opacity:1.5,
            ease:Power1,
            top:diff,
            left:dtls.clientX,
            rotate:rot
        })

    })
    elem.addEventListener("mouseleave",(dtls)=>{
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3
        })
    })
   
})

// ---Technical Events page---------------

