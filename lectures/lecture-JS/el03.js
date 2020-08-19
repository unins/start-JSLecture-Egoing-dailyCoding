'use strict';

// 2. Variable
// let (added in ES6)

let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
 console.log(name);
 console.log(globalName);

// var
// var hoisting (move declaration from buttom to top)
//has no block scope

{
console.log(age);
age = 4;
console.log(age);
var age;
}
console.log(age);

// 3.Constant
// favor immutable data type always for a few reasons:
// -security
// -thread safety
// -reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4.Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 1231231230486120386023840234n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value ${test}, type: ${typeof test}`);

// null
let nothing = null; //비어있는 값
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x; //정의되지 않음
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); //심볼은 스트링이 아니므로 출력시 .description으로 변환해야함.

//  object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; //ellie는 변경되지 않지만 ellie에 할당된 변수는 변경이 가능함.
ellie.age = 21;
console.log(`value: ${ellie.name}, type: ${typeof ellie}`);


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, value: ${typeof text}`);
text = 1;
console.log(`value: ${text}, value: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, value: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, value: ${typeof text}`);
console.log(text.charAt(0)); //타입이 숫자로 변경되었기 때문에 오류가 남.
