function count(string){
  let count = {}
  for (let i of string){
    if (Object.keys(count).includes(i)){
        count[i]+=1;
    }
    else{
        count[i] = 1;
    }
  }
  return count;
}