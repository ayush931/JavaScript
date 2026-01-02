function removeDuplicates(arr) {
    return [...new Set(arr)];
  }

  let set1 = removeDuplicates(([1, 2, 3, 4, 1, 3, "Ayush", "Ankit", "Ayush"]))

  console.log(set1);