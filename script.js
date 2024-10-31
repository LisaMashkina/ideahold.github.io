let tg = window.Telegram.WebApp;

tg.expand();
let id = "pupupu";
let btn = document.getElementById("buy")

btn.addEventListener("click", function(){
    tg.sendData(id);
});

let input = document.getElementById("input");
let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.first_name}`;

input.appendChild(p);