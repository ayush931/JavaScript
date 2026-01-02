function capitalizeName(name) {
    let firstLetter = name.charAt(0);
    let capitalizedFirstLetter = firstLetter.toUpperCase();
    
    return (firstLetter === capitalizedFirstLetter) ? name : capitalizedFirstLetter + name.slice(1);
  }

  console.log(capitalizeName("jane"));
  console.log(capitalizeName("John"));
  