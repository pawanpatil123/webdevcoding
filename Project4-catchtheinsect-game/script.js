var stop = document.querySelector('#stop')
var screen = document.querySelectorAll('.screen')
var playbtn = document.querySelector("button")
var playground = document.querySelector(".playground")
var time = document.querySelector(".time-score h4 span")
var selected = ""
var timevalue = 0
var score = 0;
var scorevalue = document.querySelector(" h5 span")
var scoreresult = document.querySelector(" .result h5 span")

playbtn.addEventListener('click', function () {
  screen[1].style.transform = "translateY(-100%)"
})

function catchimg() {
  var images = document.querySelectorAll('.playground img')
  images.forEach(function (elem) {
    elem.addEventListener('click', function () {
      score++
      scorevalue.innerHTML = score
    })
  })
}
var allelem = document.querySelectorAll('.elem')
allelem.forEach(function (elem) {
  elem.addEventListener('click', function () {
    screen[2].style.transform = "translateY(-200%)"
    selected = elem.childNodes[3].getAttribute("src")
    var hero = 0;
    var int = setInterval(() => {
      createimg();
      if (timevalue <= 10) {
        hero = timevalue++
        time.innerHTML = hero;

      }
    }, 1000);

    catchimg()
    setTimeout(() => {
      scoreresult.innerHTML = score
      playground.style.display = "none"
      stop.style.display = "block"
    }, 11000);
  })
})

function createimg() {
  var newimg = document.createElement("img")
  newimg.setAttribute("src", selected)

  playground.appendChild(newimg)
  var obj = getrandom()
  newimg.style.position = "absolute"
  newimg.style.left = obj.x + "%"
  newimg.style.top = obj.y + "%"
  catchimg()
  setTimeout(() => {
    playground.removeChild(newimg)
  }, 1400);


}

function getrandom() {
  var x = Math.floor(Math.random() * 80)
  var y = Math.floor(Math.random() * 80)
  return { x, y }
}

var t1= gsap.timeline()
t1.from("h1",{
    x:0,
     duration: 2,
     delay: 0.5,
     opacity:0,
     scale:0,
    //  rotate:360
    //  repeat: -1,

    //  yoyo: true
})
gsap.from("h2",{
    x:0,
     duration: 2,
     delay: 0.5,
     opacity:0,
     scale:0,
    //  rotate:360
    //  repeat: -1,

    //  yoyo: true
})
t1.from("button",{
    y:50,
     duration: 2,
     opacity:0,
     backgroundColor:"black"
    //  scale:0
    //  repeat: -1,
    //  yoyo: true
})












//***OWN CODE WRITE BY ME */
// var arr = [{name: "ANT",img: "https://static.vecteezy.com/system/resources/thumbnails/016/536/696/small/watercolor-grasshopper-clip-art-png.png"},
// {name: "JARRY",img: "https://seeklogo.com/images/J/jerry-logo-5F6262C1A0-seeklogo.com.png"},
// {name: "COCKROCH",img: "https://www.freepnglogos.com/uploads/bug-png/bug-png-image-purepng-transparent-png-image-10.png"},
// {name: "ALIEAN",img: "https://www.pngall.com/wp-content/uploads/5/Cute-Monster.png"}
// ]
// var cul=""
// arr.forEach(function(elem,idx){
// cul+=`<div class="img">
// <h3>${elem.name}</h3>
// <img id=${idx} src="${elem.img}" alt="">
// </div>
// `
// })
// var image=document.querySelector('#image')
// image.innerHTML=cul;
// var pic =document.querySelector('#pic')
// image.addEventListener('click',function(dets){
//     screen[2].style.transform= "translateY(-200%)"
//     //  console.log(arr[dets.target.id].img)
//      var de=arr[dets.target.id].img;
//        pic.setAttribute("src",de)
// })
// var count = 0;
// var grow=0;
// var h5 = document.querySelector('h5')
// var h4 = document.querySelector('h4')
// var stop = document.querySelector('#stop')
// var btn1 = document.querySelector('#btn1')
// pic.addEventListener("click",function(){
//    var w= Math.random()*80;
//    var h= Math.random()*80;
//    var rot= Math.random()*360;
//    pic.style.left=w+"%";
//    pic.style.top=h+"%";
// //    pic.style.rotate =rot+"deg"
// let num;
// if(num<=10)
// num=count++;
// h5.innerHTML="score:"+num
// // console.log(count++)
// });
// btn1.addEventListener('click',function(){
//   var int=setInterval(function(){
//     if(grow<=10)
//     {
// var hero = grow++
//   h4.innerHTML= "Time:"+hero;
//   // console.log(grow++)
//   }
// },700)
// setTimeout(() => {
//   grow=0
//  stop.style.display="block"
//  pic.style.display="none"
//   clearInterval(int);
// }, 8000);
// })
// var screen =document.querySelectorAll('.screen');
// var playbtn= document.querySelector('button')
// playbtn.addEventListener('click',function(){
//     screen[1].style.transform= "translateY(-100%)"
// })
