const button2=document.querySelector(".button2");
const more =document.querySelector(".more");
const menu=document.querySelector(".menu");
const Menu=document.querySelector("#Menu");
const header=document.querySelector("header ")
button2.addEventListener("click",()=>{
    
    if(button2.textContent=="Back"){
        more.style.cssText="display:none";
        button2.textContent="More";
    }
    else{
        more.style.cssText="display:grid";
        button2.textContent="Back";
    }
})
menu.addEventListener("click",()=>{
    header.classList.add("active")
})
Menu.addEventListener("click",()=>{
    header.classList.remove("active")
})