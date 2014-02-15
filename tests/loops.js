/*
 * Loops.
 *
 * Use of semicolumn ";" in end of lines is optional.
 *
 * Underscore.js used to provide easy to use tools.
 */


// iterate by list: value
arr = [11, 22, 33, 44]
for (x in arr) {
    console.log(x)
}
// -->
arr = [11, 22, 33, 44];
for (__num in arr) {
    var x = arr[__num];
    console.log(x);
}


// iterate by list: key and value
arr = [11, 22, 33, 44]
for (x, y in arr) {
    console.log(x, y)
}
// -->
arr = [11, 22, 33, 44];
for (x in arr) {
    var y = arr[x];
    console.log(x, y);
}


// iterate by object: key and value
obj = {a: 11, b: 22, c: 33, d: 44}
for (x, y in obj) {
    console.log(x, y)
}
// -->
obj = {a: 11, b: 22, c: 33, d: 44};
for (x in obj) {
    var y = obj[x];
    console.log(x, y);
}


// inline loops
years = [11, 22, 33, 44]
young = [year for year in years if year <= 30]
whois = [key, value for key, value in years if key > 1 and value < 40]
// -->
years = [11, 22, 33, 44];
young = _.filter(years, function(year) { return year <= 30; });
whois = _.filter(years, function(value, key) { return key > 1 && value < 40; });

