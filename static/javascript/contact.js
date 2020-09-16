let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.03108, lng: -3.60246 },
    zoom: 15
  });
}
let home_char = document.querySelector("#home")
let contact_char = document.querySelector("#contact-char")

window.onload = function() {
    home_char.classList.remove("class2")
    contact_char.classList.add("class2")
}
 // check main.js
let logo = document.querySelector("#logo-img")

logo.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:8000"
})


let items = document.querySelectorAll(".red")
for(let i = 0; i < items.length; i++) {
       items[i].addEventListener("blur", bindClick(i));
 }

 function bindClick(i) {
    return function() {
      if (items[i] && items[i].value){
        items[i].style.borderBottom = "1.5px solid green"
        items[i].style.borderLeft = 0
        items[i].style.borderRight = 0
      }
    };
 }
