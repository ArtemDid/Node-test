function Collection(arr) {
  this._arr = arr;
  this._limit = 1;
}

Collection.prototype.make = function (arr) {
  this._arr = arr;
};

Collection.make = function (arr) {
   this._arr = arr;
   return Collection;
}

Collection.paginate = function (paginate) {
  this._limit = paginate;
  return Collection;
}

Collection.page = function (page) {
  let newArray = [];
  for(let i = (page-1)*this._limit; i < 2*this._limit; i++){
    if(this._arr[i])
    newArray.push(this._arr[i])
  }
  return newArray;
}

Collection.sort = function (arr) {
  return arr.sort((a,b)=>(a-b));
}

Collection.sortDesc = function (arr) {
  return arr.sort((a,b)=>(b-a));
}

Collection.sortBy = function (arr, column) {
  return arr.sort((a,b)=>a[column] > b[column] ? 1 : -1);
}

Collection.sortByDesc = function (arr, column) {
  return arr.sort((a,b)=>a[column] < b[column] ? 1 : -1);
}


Collection.prototype.make = function (arr) {
  return this._arr = arr;
}

Collection.prototype.sort = function () {
  return this._arr.sort((a,b)=>(a-b));
}

Collection.map = function (func) {
  return this._arr.map(func)
};

Collection.prototype.filter = function (func) {
  this._arr.filter(func)
  return Collection
};

Collection.filter = function (func) {
   this._arr.filter(func)
   return Collection
}

Collection.every = function (func) {
  this._arr.every(func)
  return Collection
}

Collection.toJSON = function () {
  return JSON.stringify(this._arr)
};

Collection.toString = function () {
  return this._arr.toString()
};

Collection.isEmpty = function () {
  return !!!this._arr.length
};

export default Collection;