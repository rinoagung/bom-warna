const ubahwarna = document.getElementById("ubah warna");



ubahwarna.addEventListener("click", function(){
    // document.body.style.backgroundColor = "blue";
    // document.body.setAttribute("class", "biru-muda")
    document.body.classList.toggle("biru-muda");
});

const acakwarna = document.createElement("button");
const tekstombol = document.createTextNode("Acak Warna");
acakwarna.appendChild(tekstombol);
acakwarna.setAttribute("type", "button");

ubahwarna.after(acakwarna);

acakwarna.addEventListener("click", function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})

const sMerah = document.querySelector("input[name = sMerah]");
const sHijau = document.querySelector("input[name = sHijau]");
const sBiru = document.querySelector("input[name = sBiru]");

sMerah.addEventListener("input", function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})

sHijau.addEventListener("input", function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})

sBiru.addEventListener("input", function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
})

document.body.addEventListener("mousemove", function(event){
    // Posisi mouse = (event.clientY);
    // ukuran browser = (window.innerWidth);
    const xpos = Math.round((event.clientX / window.innerWidth) * 255);
    const ypos = Math.round((event.clientY / window.innerWidth) * 255);
    const zpos = Math.round(255 - ((xpos + ypos) / 2));

    document.body.style.backgroundColor = "rgb(" + xpos + "," + ypos + "," + zpos + ")";
})












