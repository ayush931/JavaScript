function wordCount(str) {
    const words = str.split(' ');
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (map.has(word)) {
        map.set(word, map.get(word) + 1);
      } else {
        map.set(word, 1);
      }
    }
    return map;
  }

  let word1 = wordCount ("Hey there, I am learning JavaScript")

  console.log(word1);