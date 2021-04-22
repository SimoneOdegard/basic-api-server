'use strict';

class FoodModel {
  constructor() {
    this.id = 0;
    this.db = []; // this represents an "in-memory" database
  }

  create(obj) {
    // save the new object to the "db" here
    let record = {
      id: ++this.id,
      record: obj
    }
    
    this.db.push(record);
    return record;
  }


  read(id) {
    // grab an item from the "db", given it's id
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  update(id, obj) {
    let index = this.db.indexOf(this.read(id))
    this.db[index].record = obj
    return this.db[index]
  }

  delete(id) {
    let index = this.db.indexOf(this.read(id))
    delete this.db[index]
  }
}

module.exports = FoodModel;