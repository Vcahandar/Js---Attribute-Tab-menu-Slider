

let btn=document.querySelector(".btns button")

let header=document.querySelector(".header")

let icon=document.querySelector(".header .icon-btn")

btn.addEventListener("click",function(){
    header.classList.add("active")
    this.classList.add("d-none")

})

icon.addEventListener("click",function(){
    header.classList.remove("active")
    btn.classList.remove("d-none")
})

