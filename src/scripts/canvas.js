const preview = document.querySelector('#canvas-preview');
const ctx = preview.getContext('2d');
const { width, height } = preview;


const X = (width/2) - (500/2);
const Y = (height/2) - (400/2);



//ctx.fillStyle = '#00FF00';
//ctx.fillRect(250, 150, 430, 300);


ctx.fillStyle = '#ff8f';
ctx.fillRect(3, 190, 140, 40);

ctx.fillStyle = '#ff5f';
ctx.fillRect(320, 498, 380, 20);

const btn = document.getElementById("submit");

btn.addEventListener("click", function(e) {

    e.preventDefault();
    const name = document.querySelector("#name");
    const comunidade = document.querySelector("#comunidade");
    const texto = document.querySelector("#texto");

    const valueName = name.value;
    const valueComunidade = comunidade.value;
    const valueTexto = texto.value;


    ctx.font = '5 Courier New 50px';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'space-betw';
    var i in (valueName); {
        ctx.fillText(valueName[i], 500, 400);
    }
    document.getElementById("result")
    const img = ctx.canvas.toDataURL('#result');
    
});



