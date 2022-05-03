class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);  
    this.items.sort((a, b) => a - b)
    this.length++
  }

  get(pos) {
 
      let itemsPos = this.items.indexOf(pos)
  
      if(itemsPos === - 1){
        throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {

   let maxNum = Math.max(...this.items)

    if(this.length > 0){
      return maxNum
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {


    if(this.length > 0){
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
      let sumTotal = this.items.reduce((preValue, currentValue) => preValue + currentValue, 0
      );

      return sumTotal
  }

  avg() {
    let sumTotal = this.items.reduce((preValue, currentValue) => preValue + currentValue, 0
    );
      if(sumTotal > 0){
        return sumTotal / this.length
      } else {
        throw new Error('EmptySortedList');
      }
  }
}

module.exports = SortedList;
