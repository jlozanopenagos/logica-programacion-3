// Seleccionar elementos del DOM
const factorialForm = document.getElementById('factorialForm');
const numberInput = document.getElementById('numberInput');
const resultText = document.getElementById('resultText');

/**
 * Función para calcular el factorial de un número entero NO negativo.
 * Utiliza BigInt para manejar números grandes sin perder precisión.
 * @param {number} n - Número entero a calcular
 * @returns {bigint} - Resultado del factorial
 */
function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1n;
    }

    let result = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    return result;
}

// Escuchar el evento de envío del formulario
factorialForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita la recarga de página

    const rawValue = numberInput.value.trim();
    const number = Number(rawValue);

    // Validación: verificar que sea un número válido, entero y no negativo
    if (rawValue === '' || isNaN(number) || !Number.isInteger(number) || number < 0) {
        resultText.textContent = 'Error: Por favor, ingresa un número entero no negativo válido.';
        resultText.style.color = '#e74c3c';
        console.error('Entrada inválida:', rawValue);
        return;
    }

    // Límite prudente para evitar sobrecargar el navegador con números excesivamente grandes
    if (number > 1000) {
        resultText.textContent = 'Ingresa un número menor o igual a 1000 para no sobrecargar el navegador.';
        resultText.style.color = '#e67e22';
        return;
    }

    // Calcular el factorial
    const factorialResult = calculateFactorial(number);
    const formattedResult = factorialResult.toString();

    // Mostrar el resultado en el DOM y por consola
    resultText.textContent = `El factorial de ${number} (${number}!) es: ${formattedResult}`;
    resultText.style.color = '#27ae60';

    console.log(`Factorial de ${number} (${number}!):`, formattedResult);
});
