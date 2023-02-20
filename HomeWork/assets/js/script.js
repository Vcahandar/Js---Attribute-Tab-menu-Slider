

let btn=document.querySelector(".btn button")

let header=document.querySelector(".header")

let icon=document.querySelector(".header .icon-btn")

btn.addEventListener("click",function(){
    header.classList.add("active")
    header.classList.remove("d-none")

})

icon.addEventListener("click",function(){
    
    header.classList.add("d-none")
})

