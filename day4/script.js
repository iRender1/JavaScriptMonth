// التمرين الاول

let number = 42;
let numtostring = String(number);
console.log(`${typeof number} ${number}`);
console.log(`${typeof numtostring} ${numtostring}`);

let string = "25";
let strtonum = Number(string);
console.log(`${typeof string} ${string}`);
console.log(`${typeof strtonum} ${strtonum}`);

// التمرين الثاني

let str = "10";
let strmathtonum = Number(str);
console.log(`${typeof str} ${str}`);
console.log(`${typeof strmathtonum} ${strmathtonum}`);


// +
let str$tonum = strmathtonum + 15;
console.log(`${typeof str$tonum} ${str$tonum}`);


// -
let str$$tonum = strmathtonum - 15;
console.log(`${typeof str$$tonum} ${str$$tonum}`);

// التمرين الثالث

let double = "15.5";
let doubletoFloat = parseFloat(double);
console.log(`${typeof double} ${double}`);
console.log(`${typeof doubletoFloat} ${doubletoFloat}`);

// *
let float = doubletoFloat * 5;
console.log(`${typeof float} ${float}`);

// /
let float2 = doubletoFloat / 2;
console.log(`${typeof float2} ${float2}`);

// التمرين الرابع
let strings = "5";
let numbers = 3;
let math = strings + numbers;
console.log(`${typeof math} ${math}`);

// التمرين الخامس

let boolean = true;
let numb = 1;
let math2 = boolean + numb;
console.log(`${typeof math2} ${math2}`);
