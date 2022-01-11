'use strict';

// Идентификаторы

console.log('\nИдентификаторы \n ');

const name = 'Slava';

const welcome = name => (`Ave ${name} \n`);
console.log(welcome(name));

const year = 1997;

// Циклы

console.log('\nЦиклы \n ');

const range = (start, end) => {
  const res = [];
  for (start; start <= end; start++) {
    res.push(start);
  }
  return res;
};
console.log(range(15, 35));

const rangeOdd = (start, end) => {
  const res = [];
  for (let i = start; i <= end; i++) {
    const current = i;
    if (current % 2) res.push(current);
  }
  return res;
};
console.log(rangeOdd(15, 35));

// Функции

console.log('\nФункции \n ');

const average = (a, b) => ((a + b) / 2);
console.log(average(5, 5));

const square = x => x * x;
console.log(square(5));

const cube = x => x ** 3;
console.log(cube(5));

const calculate = () => {
  const res = [];
  for (let i = 0; i < 10; i++) {
    res.push(average(square(i), cube(i)));
  }
  return res;
};

console.log(calculate());

// Объекты

console.log('\nОбъекты \n ');

const person = {
  name: 'Slava',
};

let person1 = {
  name: 'Jobs',
};

const person2 = {
  name: 'Kolya',
};

console.log(person, person1);
person.name = 'Vasya';
person1.name = 'Jack';
console.log(person, person1);

try {
  person1 = person2;
  person = person2;
} catch (error) {
  console.log('error constant');
}

console.log(person1);

const createUser = (name, city) => ({
  name,
  city,
});

console.log(createUser('Marcus Aurelius', 'Roma'));

/* Коллекции */

const phonebook = [{
  name: 'Marcus Aurelius',
  phone: '+79993334455',
}, {
  name: 'Marcus Jobs',
  phone: '+75595534455',
}];

const findPhoneByName = name => {
  const res = [];
  for (const obj of phonebook) {
    if (obj.name === name) res.push(obj.phone);
  }
  return res;
};
console.log(findPhoneByName('Marcus Jobs'));

const phonebookHashTbl = {
  'Marcus Aurelius': '+79993334455',
  'Marcus Jobs': '+75595534455',
};

const findPhone = name => (
  phonebookHashTbl[name]
);
console.log(findPhone('Marcus Jobs'));
