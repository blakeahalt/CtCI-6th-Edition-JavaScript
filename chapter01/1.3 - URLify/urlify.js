// OTHER SOLUTION
// var urlify = function(str, length) {
//   // have a pointer to check from start to end
//   var strArr = str.split('');
//   var pointer = 0;
//   while (pointer < str.length) {
//     if (strArr[pointer] === ' ') {
//       // *** needs more work here, a little wierd
//       // not handling trailing spaces properly
//       for (var i = str.length - 1; i > pointer + 3; i--) {
//         strArr[i] = str[i - 2];
//       }
//       strArr[pointer] = '%';
//       strArr[pointer+1] = '2';
//       strArr[pointer+2] = '0';
//       console.log(strArr, strArr.length);
//     } 
//     pointer++;
//   }
//   // if character is a space, move remainder chars by two
//   // replace following three chars with '%20'
//   return strArr.join('');
// };

// console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');

//  OTHER SOLUTION
// function urlify(str, len) {
//   let s = "";
//   let totalSpaces = str.length - len;
//   let frontSpaces = 0;
//   let flag = false;
//   for (let i = 0; i < str.length; i++) {
//     if (flag === false) {
//       if (str[i] === " ") frontSpaces++;
//       else flag = true;
//     }
//     if (flag === true && i < str.length - (totalSpaces - frontSpaces)) {
//       if (str[i] === " ") s += "%20";
//       else s += str[i];
//     }
//   }
//   return s;
// }

// OTHER SOLUTION
// const replaceUrlSpaces = (str) => {
//   const convertToArray = str.trim().split('');
//   for(let i in convertToArray) {
//     if(convertToArray[i] === " ") {
//      convertToArray[i] = "%20"
//     }
//   }
//   return convertToArray.join('');
// }

//  console.log(replaceUrlSpaces("Sai Charan P"));


// MY SOLUTION
function urlify (str) {
  // #Added .trim() to get rid of trailing whitespaces
  return str.trim().replace(/\s/g , "%20"); 
}

console.log(urlify("Mr John Smith   ", 13));
