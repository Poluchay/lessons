'use strict';

const a = 9;
const b = 14;
const c = -9;
const x = 2;

const aBinary = a.toString(2);
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(a + ' to base 2: ' + aBinary);
console.log(b + ' to base 2: ' + bBinary);

console.log('Bitwise operators');
console.log(a + ' & ' + b + ' = ' + (a & b));
console.log(a + ' & ' + bBinary + ' = ' + (a & b).toString(2));

console.log(a + ' | ' + b + ' = ' + (a | b));
console.log(a + ' | ' + bBinary + ' = ' + (a | b).toString(2));

console.log(a + ' ^' + b + ' = ' + (a ^ b));
console.log(a + ' ^ ' + bBinary + ' = ' + (a ^ b).toString(2));

console.log(b + ' >> ' + x + ' = ' + (b >> x));
console.log(b + ' >> ' + x + ' = ' + (b >> x).toString(2));
console.log(x + ' = ' + x.toString(2) + ' ' + b + ' = ' + b.toString(2));

console.log(b + ' >>> ' + x + ' = ' + (b >>> x));
console.log(b + ' >>> ' + x + ' = ' + (b >>> x).toString(2));
console.log(x + ' = ' + x.toString(2) + ' ' + b + ' = ' + b.toString(2));