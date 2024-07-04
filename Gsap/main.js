// gsap.to("#box", {
//     x:900,
//     duration:2,
//     delay:1,
//     backgroundColor:"red",
//     rotate:360,
//     y:300
// })

// gsap.from("#box", {
//     x:900,
//     duration:2,
//     delay:1,
//     backgroundColor:"blue",
//     rotate:360,
//     y:300
// })



var t1 = gsap.timeline();

function time(){
  var a = 0;
  setInterval(() => {
    a = a + Math.floor(Math.random()*17);
    if(a<100){
      document.querySelector("#loader h1").innerHTML = a+ "%";
    }

    else{
      a = 100
      document.querySelector("#loader h1").innerHTML = a +'%';
    }
  }, 150);

}

t1.to("#loader h1",{
  scale:1.5,
  duration:2,
  delay:0.6,
  onStart:time()
})



t1.to("#loader",{
  top:"-100vh",
  delay:0.5,
  duration:2
})

gsap.to(".container",{
    top:"-100vh",
    delay:3,
    duration:3
})


t1.from(".pic", {
  duration: 1,
  delay: 0.5,
  y: -100,
  stagger: 0.3,
  opacity: 0,
});

t1.from(".items", {
  duration: 1,
  delay: 0.5,
  x: -100,
  stagger: 0.3,
  opacity: 0,
});

t1.from(".log,.btn", {
  duration: 1,
  delay: 0.2,
  x: -100,
  stagger: 0.1,
  opacity: 0,
});


