class Set {
  constructor() {
    this.arr = [];
  }

  push(value) {
    if (!this.arr.includes(value)) this.arr.push(value);
  }

  static convertToSet(arr) {
    let set = new Set();
    set.arr.push(arr[0]);
    for (let i = 1; i < arr.length; i++)
      if (!set.arr.includes(arr[i])) set.arr.push(arr[i]);

    return set;
  }
}
module.exports = { Set };
