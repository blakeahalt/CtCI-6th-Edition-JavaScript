// MY SOLUTION
// function getFrequency(string) {
//   const freq = {};

//     for (const char of string.toLowerCase().split("")) {
//       if (char !== " ") {
//         freq[char] = freq[char] +1 || 1
//       }
//       // console.log(char)
//       // console.log(Object.keys(freq))
//       // console.log(Object.values(freq))
//       console.log([char])
//       console.log(freq[char])
//       console.log(freq)
//       console.log("\n");
//     }

//     let oddCount = 0;
//     for (const count of Object.values(freq)) {
//     if (count % 2 !== 0) {
//       // console.log(freq)
//       if (oddCount >= 1) {
//         return false;
//       }
//       oddCount += 1;
//     }
//   }
//   return true;
// }

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const people = { "name": "John", age: 21, Location: "Chicago" }
const object = { 'a': 1, 'b': 2, 'c': 3 };

for (const [key, value] of Object.entries(people)) {
  console.log(key, value);
  let firstKey = Object.keys(people)[0] // accesses first key of dictionary
  let firstValue = Object.values(people)[0] // accesses first key of dictionary
  return firstKey + firstValue
  // console.log(value)
  // console.log(firstKey)
}


  // for (const day in days) {
  //   console.log(day)
  // }
  // // console.log(Object.keys(days))
  // // console.log(Object.values(days))
  // for (const day of days) {
  //   console.log(day)
  // }


  // /**
//  * FOR...IN LOOPS
// * Example - 01
// * -------------------------------------+
// * for-in loop iterates throgh a JSON object
// * Output: a: 1, b: 1
// * -------------------------------------+
// **/
// let Obj = {
//   a: 1,
//   b: 2
// }

// for(let prop in Obj) {
//   // console.log(`${prop}: ${Obj[prop]}`);
//   console.log(prop);
// }


// /**
// * Example - 02
// * -------------------------------------+
// * for-in loop iterates throgh an object
// * Output: width height
// * -------------------------------------+
// **/

// class Icon{
//   constructor(w, h) {
//     this.width = w;
//     this.height = h;
//   }
// }

// for(let prop in new Icon(128, 32)) {
// 	console.log(prop);
// }
/**
 * FOR...OF LOOPS
* Example - 01
* -------------------------------------+
* for-of loop with several built-in iterables
* -------------------------------------+
**/

// // -- Looping through charactors of a string

// for(let i of "String")
// console.log(i)

// // --- Looping through key-value paris of a Map  

// let m = new Map();
// m.set("a", 1).set("b", 2);

// for(let [i, j] of m)
// console.log(`${i}->${j}`);

// // --- Looping through elements of an array of arrays

// for(let [i, j, k] of [[4,5,6], [1,2,3]])
// console.log(i, j, k);



// TESTS
// console.log(getFrequency('Tact Coa'), true);
// console.log(getFrequency('Tact boa'), false);
// console.log(getFrequency('Ace Carr'), true);
// console.log(getFrequency('Ace Car'), false);
// console.log(getFrequency('kayak'), true);
