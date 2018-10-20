import { handleStatus } from './../utils/promise-helpers.js';
import { partialize } from '../utils/operators';
const API = 'http://localhost:3000/notas'



const getItemsFromNota = notas => notas.$flatMap(nota => nota.itens);
const filterItemsByCode = (code, items) => items.filter(item => item.codigo == code);
const sumItemsValue = items => items.reduce((total, item) => total + item.valor, 0);


const sumItems = code => notas => notas.$flatMap(nota => nota.itens)
    .filter(item => item.codigo == code)
    .reduce((total, item) => total + item.valor, 0);

export const notasService = {
    listaAll() {
        return fetch(API).then(handleStatus);
    },

    sumItems(code) {
        const filterItems = filterItemsByCode.bind(null, code);
        return this.listaAll().then(sumItems(code));
    }
}