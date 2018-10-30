import { log } from './utils/promise-helpers.js';
import { takeUntil } from './utils/operators.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
//só para testes
import playground from './utils/playground.js';

playground();
const operation = takeUntil(3, () => {
    service.sumItems('2143')
        .then(log)
        .catch(log);
});

document
    .querySelector('#myButton')
    .onclick = operation;