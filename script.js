// Espera a que el documento se cargue por completo
document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('botonMensaje');

    // Escucha el clic en el botón
    boton.addEventListener('click', () => {
        alert('¡Hola! Si ves este mensaje, tu archivo JavaScript está funcionando a la perfección.');
    });
});