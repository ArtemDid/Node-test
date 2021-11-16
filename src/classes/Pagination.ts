function Pagination(arr, limit) {
  this._arr = arr;
  this._limit = limit;
  this._page = 0;
  this._count = 0;
  this._current = 1;
}

Object.defineProperty(Pagination, 'page', {
	get: function () {
		return this._page;
	},
	set: function (value) {
		this._page = value;
	}
});

Object.defineProperty(Pagination, 'cursor', {
	 get: function () {
		return this._current;
	},
  set: function (value) {
		this._current = value;
	}
});

Pagination.make = function (arr, limit) {
  this._arr = arr;
  this._limit = limit;
  this._current = 1;
  return Pagination;
}

Pagination.page = function (page) {
  let newArray = [];
  for(let i = (page-1)*this._limit; i < 2*(this._limit); i++){
    if(this._arr[i])
    newArray.push(this._arr[i])
  }
  return newArray;
}

Pagination.count = function () {
  let count = Math.ceil(this._arr.length/this._limit)
  this._count = count;
  return count;
}

Pagination.last = function () {
  let count = Math.ceil(this._arr.length/this._limit)
  this._count = count;
  return count;
}

Pagination.paginate = function (paginate) {
  this._limit = paginate;
  return Pagination;
}

Pagination.cursor = function () {
  return this._current;
}

Pagination.reset = function () {
  return this._current = 1;
}

Pagination.current = function () {
  return this._current;
}

Pagination.next = function () {
  return this._current+=1;
}

Pagination.prev = function () {
  return this._current-=1;
}

Pagination.toPagination = function (...data) {
  const result = []
  const limit = data[data.length-1];
  data.pop()
  for(let i = 0; i<limit; i++){
    if(data[i]!==undefined){
      result.push(data[i])
    }
    else break;
  }
  this._arr = result;
  return Pagination;
}

Pagination.toJSON = function () {
  return JSON.stringify(this._arr)
}

export default Pagination;