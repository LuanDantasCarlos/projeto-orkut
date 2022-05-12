
const preview = document.querySelector('#canvas-preview');
const ctx = preview.getContext('2d');
const { width, height } = preview;

const X = (width/2) - (500/2);
const Y = (height/2) - (400/2);


ctx.fillStyle = '#00FF00';
ctx.fillRect(0, 0, width, height);

ctx.fillStyle = '#000000';
ctx.fillRect(X, Y, 500, 400);


ctx.font = '30px Arial';
ctx.fillStyle = '#fff';
ctx.textAlign = 'center';
ctx.fillText('Hello World', width/2, height/2);


const image = new Image();
image.src = 'https://www.w3schools.com/graphics/pic_the_scream.jpg';

image.onload = e => {
    const { width, height } = image;
    const r = height / width;
    
    const newWidth = 600;
    const newHeight = newWidth * r;

    ctx.drawImage(image, 0, 0, newWidth, newHeight);
}