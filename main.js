function crearRuleta() {
    const colores = ['#FF6B6B', '#FF8E8E', '#FFB6B6', '#FFD6D6', '#FFE6E6', '#FFFFFF'];
    const premios = ['Cena Romántica', 'Masaje Relajante', 'Día de Spa', 'Paseo al Atardecer', 'Noche de Películas', 'Sorpresa Especial'];

    const ruleta = document.querySelector('.ruleta');
    ruleta.innerHTML = '';

    premios.forEach((premio, index) => {
        const angulo = (360 / premios.length) * index;
        const seccion = document.createElement('div');
        seccion.className = 'seccion-ruleta';
        seccion.style.backgroundColor = colores[index % colores.length];
        seccion.style.transform = `rotate(${angulo}deg)`;
        seccion.innerHTML = `
            <div style="transform: rotate(${angulo + 30}deg)">
                ${premio}
            </div>
        `;
        ruleta.appendChild(seccion);
    });
}

let currentDegree = 0;

function girarRuleta() {
    const ruleta = document.getElementById('ruleta-img');
    const randomDegree = Math.floor(Math.random() * 360) + 720; // Al menos 2 vueltas completas
    currentDegree += randomDegree;
    ruleta.style.transition = 'transform 3s ease-out'; // Suaviza la animación
    ruleta.style.transform = `rotate(${currentDegree}deg)`;

    // Mostrar el cupón después de que la ruleta se detenga
    setTimeout(mostrarCupon, 3000);
}

function mostrarCupon() {
    // Rutas corregidas para usar archivos PNG
    const cupones = [
        './vales/1.png',
        './vales/2.png',
        './vales/3.png',
        './vales/4.png',
        './vales/5.png',
        './vales/6.png'
    ];
    
    const randomIndex = Math.floor(Math.random() * cupones.length);
    const selectedCupon = cupones[randomIndex];
    const cuponImg = document.getElementById('cupon-img');
    const descargarCupon = document.getElementById('descargar-cupon');

    // Asegurar que la imagen carga correctamente con tamaño más grande
    cuponImg.src = selectedCupon;
    cuponImg.alt = `Vale ${randomIndex + 1}`;
    cuponImg.style.width = '400px'; // Imagen más grande
    cuponImg.style.height = 'auto';

    // Configurar el botón de descarga para que sea pequeño y horizontal:
    descargarCupon.href = selectedCupon;
    descargarCupon.download = `vale_${randomIndex + 1}.png`;
    descargarCupon.innerText = 'Descargar';
    descargarCupon.style.display = 'inline-block';  // Mostrar en línea
    descargarCupon.style.width = '80px';            // Menor ancho
    descargarCupon.style.height = '25px';           // Menor alto
    descargarCupon.style.fontSize = '12px';         // Texto más pequeño
    descargarCupon.style.padding = '2px 5px';         // Padding reducido
    descargarCupon.style.margin = '5px auto';

    // Mostrar modal
    const modal = document.getElementById('cuponModal');
    modal.style.display = 'flex';

    // Evento para cerrar el modal
    document.getElementById('closeModal').onclick = function() {
        modal.style.display = 'none';
    };
}
