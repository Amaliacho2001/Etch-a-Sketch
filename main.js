const container = document.getElementById('container');
const clearBtn = document.getElementById('clearBtn');

// Crear las casillas
for (let i = 0; i < 256; i++) { // 16x16 = 256
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = getRandomColor();
    });
    container.appendChild(box);
}

// Generar un color aleatorio
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Limpiar el lienzo
clearBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.backgroundColor = 'white'; // Restablecer el color de fondo
    });
});


