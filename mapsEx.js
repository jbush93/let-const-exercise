// 1) 1,2,3,4

// 2) ref

// 3) 0: {Array(3) => true}
//   1: {Array(3) => false}

// 4)
function hasDuplicate(arr){
    const newSet = new Set(arr);
    if(newSet.size !== arr.length){
        return true;
    }
    return false;
}

// 5)
function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lcChar = char.toLowerCase()
      if(isVowel(lcChar)){
        if(vowelMap.has(lcChar)){
          vowelMap.set(lcChar, vowelMap.get(lcChar) + 1);
        } else {
          vowelMap.set(lcChar, 1);
        }
      }
    }
    return vowelMap;
  }