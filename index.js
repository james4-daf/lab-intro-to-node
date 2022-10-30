class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.length++;
    return this.items.push(item);
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = 0;
      // let average = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }
      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
