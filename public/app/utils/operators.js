export const partialize = (fn, ...args) => fn.bind(null, args);
export const compose = (...fns) => value => fns.reduceRight((previousValue, fn) => fn(previousValue), value);
export const pipe = (...fns) => value => fns.reduce((previousValue, fn) => fn(previousValue), value);

// export const pipe = function (...fns) {
//     return function (value) {
//         return fns.reduce(function (previousValue, fn) {
//             return fn(previousValue)
//         }, value)
//     }
// } 

