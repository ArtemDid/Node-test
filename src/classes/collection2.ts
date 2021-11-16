import Collection from './collectionClass';

function Collection2(arr, parent) {
	Collection.call(this, arr);
	this._parent = parent;
}

Collection2.find = function (search) {
  return this._arr.find(item => item.match(search))
};

Collection2.prototype.get = function (path) {
  const arrWithPath = 'this._title.' + path;
  return eval(arrWithPath);
}

Collection2.prototype.fill = function (length, value) {
  this._arr.fill(0, value, length)
  return Collection2;
}

export default Collection2;
