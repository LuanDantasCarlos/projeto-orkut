const preview = document.querySelector('#canvas-preview');
const ctx = preview.getContext('2d');
const { width, height } = preview;

const X = (width/2) - (500/2);
const Y = (height/2) - (400/2);



ctx.fillStyle = '#00FF00';
ctx.fillRect(250, 150, 430, 300);


ctx.font = '30px Arial';
ctx.fillStyle = '#fff';
ctx.textAlign = 'center';
ctx.fillText('testando o texto', width/2, height/2);


ctx.fillStyle = '#ff8f';
ctx.fillRect(3, 190, 140, 40);

ctx.fillStyle = '#ff5f';
ctx.fillRect(320, 498, 380, 20);


const btn = document.getElementById('submit');

btn.addEventListener("click", function() {

    e.preventDefault();

    const name = document.querySelector('#name');

    const value = form.value;

    console.log(value)

});


