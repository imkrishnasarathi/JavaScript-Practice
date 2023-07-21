const vowels = ["a", "e", "i", "o", "u"];
let sentence = 'This is a very good sentence';
let count = 0;
for (let i of sentence.split('')){
  if (vowels.includes(i)){
    count+=1;
  }
}