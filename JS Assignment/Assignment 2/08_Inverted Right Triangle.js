function invertedTrianglePattern(i) {
    for (let row = i; row > 0; row--) {
      let pattern = '';
      for (let column = 0; column < row; column++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  invertedTrianglePattern(6);
  