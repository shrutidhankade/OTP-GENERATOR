var btn = document.querySelector("button")
var boxes = document.querySelector(".boxes")







btn.addEventListener("click", function () {
    var box1 = Math.floor(Math.random() * 10)
    var box2 = Math.floor(Math.random() * 10)
    var box3 = Math.floor(Math.random() * 10)
    var box4 = Math.floor(Math.random() * 10)
    boxes.innerHTML = `
    <div class="box1">${box1}</div>
    <div class="box1">${box2}</div>
    <div class="box1">${box3}</div>
    <div class="box1">${box4}</div>`
})

var btn = document.querySelector("button")

// btn.addEventListener("click",function(){
//     var color1 = math.floor(math.random()*255)
//     var color2 = math.floor(math.random()*255)
//     var color3 = math.floor(math.random()*255)
//     btn.style.backgroundColor = `rgb(${color1},${color2},${color3})`

// })







btn.addEventListener("click",function(){
    var color1 = Math.floor(Math.random()*255)
    var color2 = Math.floor(Math.random()*255)
    var color3 = Math.floor(Math.random()*255)
  
    btn.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`
    
  })