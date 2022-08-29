// Import stylesheets
import './style.css';


let greeter = new Greeter('Caioba');

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Trabalhando com multiplos arquivos</h1>
<h2>${greeter.GetGreet()}</h2>`;