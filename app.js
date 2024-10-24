
function hallarFactorial() {
     
    const numeroIngresadoUsuario = parseInt(document.getElementById('numeroIngresado').value);
    let factorial = 1

    if (isNaN(numeroIngresadoUsuario) || numeroIngresadoUsuario === "") {
        alert("Número invalido, por favor ingresa un numero válido");
        return;
    } else {
        for (let i = 1; i <= numeroIngresadoUsuario; i++) {
            factorial*= i;
        }

        console.log(factorial)
    }

     document.getElementById("resultado").innerText= `El resultado factorial de ${numeroIngresadoUsuario} es: ${factorial}`;
    
}

const generarFactorial = document.getElementById("btn");
generarFactorial.addEventListener("click",hallarFactorial)


console.log(hallarFactorial())


