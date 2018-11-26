import { takeUntil, debounceTime, partialize } from './operators.js';
import './array-helpers.js';
import { Maybe } from './maybe.js';

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

    const partializedTakeUntil = partialize(takeUntil, 3);
    const doTake = partializedTakeUntil(() => console.log('doTake'));

    doTake();
    doTake();
    doTake();
    doTake();


    const p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promisse 1 Terminou!');
        }, 3000)
    });

    const p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Cancelado!');
        }, 1000)
    });

    Promise.race([p1, p2])
        .then(console.log)
        .catch(console.log);

    const resultado = Maybe
        .of(null)
        .map(value => value + 10)
        .map(value => value + 30)
        .getOrElse(0)
    alert(resultado)
}