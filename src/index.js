class Sorter {
    constructor() {
    this.array = [];
    this.comparator = null;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
      indices = indices.sort();
      if(this.comparator === null){
          for (let j = 0; j < indices.length; j++) {
              for (let i = 0; i < indices.length - 1 ; i++) {
                  if(this.array[indices[i]] > this.array[indices[i+1]] ){
                      let temp = this.array[indices[i]];
                      this.array[indices[i]] = this.array[indices[i+1]];
                      this.array[indices[i+1]] = temp;
                  }
              }
          }
      } else {
          for (let j = 0; j < indices.length; j++) {
              for (let i = 0; i < indices.length - 1 ; i++) {
                  if(this.comparator(this.array[indices[i]],this.array[indices[i+1]]) > 0){
                      let temp = this.array[indices[i]];
                      this.array[indices[i]] = this.array[indices[i+1]];
                      this.array[indices[i+1]] = temp;
                  }
              }
          }
      }
  }
    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;