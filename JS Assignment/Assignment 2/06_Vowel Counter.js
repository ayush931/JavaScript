function countVowels(name) {
    let vowelCount = 0;
    
    for (let i = 0; i < name.length; i++) {
      let letter = name[i].toLowerCase();
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        vowelCount++;
      }
    }
    
    return vowelCount
  }

  console.log(countVowels("Ayush")) 
  console.log(countVowels("Ankit"))
  