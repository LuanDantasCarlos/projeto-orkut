const preview = document.querySelector('#canvas-preview');
const ctx = preview.getContext('2d');
const { width, height } = preview;


const X = (width/2) - (500/2);
const Y = (height/2) - (400/2);








ctx.fillStyle = '#ff5f';
ctx.fillRect(320, 498, 380, 20);

const inputComunidade = document.getElementById("comunidade");
const inputTexto = document.getElementById("texto");

inputComunidade.addEventListener("input", function(e) {

    e.preventDefault();
    const comunidade = document.querySelector("#comunidade");

    const valueComunidade = comunidade.value;
   
    ctx.fillStyle = '#f2d';
    ctx.fillRect(3, 185, 145, 40);
    
    ctx.font = '550 Courier New 50px';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.fillText(valueComunidade, 3, 190);
    
});

inputTexto.addEventListener("input", function(e) {

    e.preventDefault();
    const texto = document.querySelector("#texto");

    const valueTexto = texto.value;
   
    ctx.fillStyle = '#ddeefe';
    ctx.fillRect(300, 110, 397, 345);
    
    ctx.font = '550 Courier New 50px';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.fillText(valueTexto, 300, 125);
    
});



