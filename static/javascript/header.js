const btn = document.getElementById("hamburgers")
const list = document.getElementById("list")

btn.addEventListener("click", () =>  {
    list.classList.toggle("appear")
    btn.classList.toggle("is-active")
});

let nav = document.querySelectorAll("a")

function toggleClass(el){
    for (i = 0; i < nav.length; i++){
        nav[i].className = "class1"
    }
    el.className = "class2"
}
