import { log } from './utils/promise-helpers.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';

const ehDivisivel = (divisor, numero) => !(numero % divisor);
const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

console.log(ehDivisivelPorDois(10)); // true
console.log(ehDivisivelPorDois(15)); // false
console.log(ehDivisivelPorDois(20)); // true

document
    .querySelector('#myButton')
    .onclick = () => service.sumItems('2143')
        .then(log)
        .catch(log);