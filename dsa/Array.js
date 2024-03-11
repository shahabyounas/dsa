class Array {
  constructor() {
    this.list = [];
  }

  get(index) {
    return this.list[index];
  }

  insert(val) {
    this.list.push(val);
  }

  search(val) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] == val) {
        return val;
      }
    }
    return false;
  }

  delete(val) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] == val) {
        this.list.splice(i, 1);
      }
    }

    return false;
  }
}
