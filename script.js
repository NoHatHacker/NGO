let a = document.querySelector(".nav-sidebar");
let b = document.querySelector(".nav-sidebar i");
let c = document.querySelector(".nav2");
let d = document.querySelector(".nav2 i");

d.addEventListener("click",() => {
    a.style.display = "flex";
})
b.addEventListener("click",() => {
    a.style.display = "none";
})
