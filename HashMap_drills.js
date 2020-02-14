'use strict';

const { HashMap } = require('./HashMap');

HashMap.MAX_LOAD_RATIO = 0.5;
HashMap.SIZE_RATIO = 3;

function main() {
  const lotr = new HashMap();
  const data = [
    { Hobbit: 'Bilbo' },
    { Hobbit: 'Frodo' },
    { Wizard: 'Gandolf' },
    { Human: 'Aragorn' },
    { Elf: 'Legolas' },
    { Maiar: 'The Necromancer' },
    { Maiar: 'Sauron' },
    { RingBearer: 'Gollum' },
    { LadyOfLight: 'Galadriel' },
    { HalfElven: 'Arwen' },
    { Ent: 'Treebeard' }
  ];

  data.forEach(obj => {
    const key = Object.keys(obj)[0];
    lotr.set(key, obj[key]);
  });

  console.log(lotr); // length = 9. 2 items are missing because there are 2 items with the same key value ('Hobbit', 'Maiar')

  // TODO: Retrieve the value that is hashed in the key "Maiar" and "Hobbit"
  console.log('Maiar =', lotr.get('Maiar')); // Sauron
  console.log('Hobbit =', lotr.get('Hobbit')); // Frodo

  // TODO: What are the values of Maiar and Hobbit that I have
  // I am getting Sauron and Frodo becuase we have 2 keys storing 2 different values only showing the latter value due to not having anything to resolve collisions

  // TODO: What is the capacity of the hash table after you hashed all the above items?
  console.log(lotr._capacity);
  // Capacity = 24. Because we reached the max load capacity(0.5) of our original capacity(8) so we multiplied our capacity by the SIZE_RATIO(3)
}

main();

// WhatDoesThisDo?
// TODO: What is the output of the following code? explain your answer.
const WhatDoesThisDo = function() {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log('map1 =', map1.get(str1)); // returns 20
  console.log('map2 =', map2.get(str3)); // returns 10
};
WhatDoesThisDo();
// this function is creating a collision, therefore duplicate keys will overwrite previous data values
