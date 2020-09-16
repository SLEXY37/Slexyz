// core version + navigation, pagination modules:
if ('loading' in HTMLImageElement.prototype) {
        console.log('El navegador soporta `lazy-loading`...');
    } else {
        console.log('`lazy-loading` no soportado...');
}

function offset(el) { // get pageYoffset from element
    var rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop}
}
let arrow = document.querySelector("#arrow-container")
window.onscroll = function() { // make appear and disappear element
    let div = document.querySelector('#sub-header');
    let divOffset = offset(div);
    scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > divOffset.top) {
        arrow.style.display = "flex"
        arrow.classList.add("arrow")
    }
    else {
        arrow.style.display = "none"
        arrow.classList.remove("arrow")
    }
}

arrow.addEventListener("click", () => {
    window.scrollTo(0,0)
})

let logo = document.querySelector("#logo-img")

logo.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:8000"
})
