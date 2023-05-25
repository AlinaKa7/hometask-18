const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
let randomSize = 16;

function generateKey(length, characters) {
  result = '';
  for (let i = 0; i < randomSize; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
  }
  return result;
}
const key = generateKey(randomSize, characters);
console.log(key);













// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// function generateKey(length) {
//   let result = ' ';
//   const charactersLength = characters.length;

//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   return result;
// }

// console.log(generateKey(16));