import { takeUntil, debounceTime } from './operators.js';
import './array-helpers.js';

export default () => {

    const ehDivisivel = (divisor, numero) => !(numero % divisor);
    const ehDivisivelPorDois = ehDivisivel.bind(null, 2);

    const showMessage = () => console.log('oi');
    const operation = takeUntil(3, showMessage);
    const operation2 = debounceTime(500, showMessage);

    operation2();
    operation2();
    operation2();

    let count = 10;
    while (count--) operation();

    ehDivisivelPorDois(10); // true
    ehDivisivelPorDois(15); // false
    ehDivisivelPorDois(20); // true
}