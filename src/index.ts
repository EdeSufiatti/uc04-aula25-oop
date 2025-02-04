import { Forma } from './classes/Forma';

// Criando uma instância de Forma com um Triângulo
const forma1 = new Forma([3, 4, 5]);
console.log(forma1.nome);  // Saída: Triângulo
console.log(forma1.getTipo());  // Saída: Escaleno

// Criando uma instância de Forma com um Quadrado
const forma2 = new Forma([5, 5, 5, 5]);
console.log(forma2.nome);  // Saída: Quadrado/Retângulo
console.log(forma2.getTipo());  // Saída: Forma com 4 lados

// Criando uma instância de Forma com um Pentágono
const forma3 = new Forma([6, 6, 6, 6, 6]);
console.log(forma3);  // Saída: Pentágono
console.log(forma3.getTipo());  // Saída: Forma com 5 lados
