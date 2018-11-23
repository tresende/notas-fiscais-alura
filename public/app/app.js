import { log, timeoutPromise, retry } from './utils/promise-helpers.js';
import { takeUntil, debounceTime, partialize, pipe } from './utils/operators.js';
import { notasService as service } from './nota/service.js';
import './utils/array-helpers.js';
//só para testes
import playground from './utils/playground.js';

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500),
);

playground();

const action = operations(() =>
    retry(3, 3000, () => timeoutPromise(200, service.sumItems('2143')))
        .then(log)
        .catch(log)
);

document
    .querySelector('#myButton')
    .onclick = action;