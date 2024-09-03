'use strict';
const names = ["Ellen", "Angela", "Michelle", "Portia", "Khertek"];
let names2 = names.slice(); // A copy


// 1
names2.sort();
console.log(names2);


// 2
// Reset names2
names2 = names.slice();
console.log(names2)
const sortedNames = names2.sort();
console.log(sortedNames);