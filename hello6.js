function getValuesForKey(arr, key) {
    const values = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key]) {
        values.push(arr[i][key]);
      }
    }
    return values;
  }