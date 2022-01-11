'use strict';

const i = 1;
const s = '1';
const f = 1.4;
const b = true;

const person = {
  name: 'Marcus',
  born: '121',
};
const cities = ['Athens', 'Roma'];

cities.push('Odessa'); /* push v nachalo massiva */
cities.unshift('New York'); /* unshift konec */

console.log('shift: ' + cities.shift()); /* return first value */
console.log('pop: ' + cities.pop()); /* return last value */

console.log({ i }, typeof i);
console.log({ s }, typeof s);
console.log({ b }, typeof b);
console.log({ f }, typeof f);

console.log({ person }, typeof person);
console.log({ isArray: Array.isArray(person) });

console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });

console.log({ instanceofArray: cities instanceof Array });

// -------------------------

let emptyScalar;
console.log({ emptyScalar }, typeof emptyScalar);

const emptyObject = null;
console.log({ emptyObject }, typeof emptyObject);

const count = NaN;
console.log({ count }, typeof count);
