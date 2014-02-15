/*
 * Basics.
 *
 * Use of semicolon ";" in end of lines is optional.
 *
 * Underscore.js used to provide easy to use tools.
 */


// assign variables
var a = 1
b = 'bbb'
c = [1, 2, 3]
d = {a: 1, b: 2, c: 3}
// -->
var a = 1;
b = 'bbb';
c = [1, 2, 3];
d = {a: 1, b: 2, c: 3};


// array
arr = [10, 20, 30, 40, 50]
a = arr[-1]
// -->
arr = [10, 20, 30, 40, 50];
a = arr[arr.length-1];


// array slice
arr = [10, 20, 30, 40, 50, 60, 70]
arr2 = arr[2:]
arr3 = arr[2:5]
arr4 = arr[:3]
// -->
arr = [10, 20, 30, 40, 50, 60, 70];
arr2 = arr.slice(2);
arr3 = arr.slice(2, 5);
arr4 = arr.slice(0, 3);


// range
arr = [10..20]
// -->
arr = _.range(10, 20);
