import { isPasswordValid } from './passwordValidator.js'

document.getElementById('passwordForm').addEventListener('submit', function (event) { // Aqui trae el formulario y crea la funcion enviar
    event.preventDefault();
  
    const passwordInput = document.getElementById('password').value; // Aqui trae el campo introducir contraseña
    const messageElement = document.getElementById('message'); // Aqui trae el mensaje donde va a aparecer valido o invalido 
  
    if (isPasswordValid(passwordInput)) {
      messageElement.textContent = 'Password is valid!'; // aqui modificamos el mensaje que traemos arriba 
      messageElement.className = 'success';
    } else {
      messageElement.textContent = 'Password is invalid!'; // aqui lo mismo 
      messageElement.className = 'error';
    }
  });
  