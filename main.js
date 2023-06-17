var nav=document.querySelector(".nav");
var btn=document.querySelector(".btn");
var ul=document.querySelector(".ul");
var num3=document.querySelector("#num3");

window.onscroll=function(){
    nav.classList.toggle("active",window.scrollY>0);
};
btn.onclick=function(){
    nav.classList.toggle("hov");
    ul.classList.toggle("show");
    
}

