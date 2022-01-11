'use strict';

// const org = 'HowProgrammingWorks';
// delete org; // error, можно удалить let
const country = {
  name: 'Chile',
  ruler: 'Augusto Pinochet',
};

console.log({ country });
delete country.ruler;
console.log({ country });

const currencies = ['BTC', 'EUR', 'USD'];

console.log('currencies[1]: ', currencies[1], 1 in currencies);

delete currencies[1];
console.dir({ currencies });

for (let i = 0; i < currencies.length; i++) {
  const element = currencies[i];
  console.log(element);
  if (i === 0) continue;
  currencies[1] = 'EUR';
}
console.dir({ currencies });
