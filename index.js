function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        result.push(callback(collection[key]));
      }
    }
    return result;
  }

  function myReduce(collection, callback, acc) {
    let startValue;
    if (acc !== undefined) {
      startValue = acc;
    } else if (Array.isArray(collection)) {
      startValue = collection[0];
      collection = collection.slice(1);
    } else {
      const keys = Object.keys(collection);
      startValue = collection[keys[0]];
      delete collection[keys[0]];
    }
    for (const value of Object.values(collection)) {
      startValue = callback(startValue, value);
    }
    return startValue;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
    }
    
    return undefined;
  }

  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (predicate(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
  }

  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(Math.max(array.length - n, 0));
    }
  }

  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const keyA = callback(a);
      const keyB = callback(b);
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    });
  }

  
