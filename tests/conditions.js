/*
 * Conditions.
 *
 * Use of semicolon ";" in end of lines is optional.
 *
 * Underscore.js used to provide easy to use tools.
 */


// simple if statement with "in"
data = [11, 22, 33, 44]
if (22 in list) {
    console.log("Yes")
}
if (22 not in list) {
    console.log("No!")
}
// -->
data = [11, 22, 33, 44];
if (data.indexOf(22) > -1) {
    console.log("Yes");
}
if (data.indexOf(22) == -1) {
    console.log("No!");
}


// python like syntax with: and, or, not
if (a == b or c and d) {
    console.log('Yes')
}
// -->
if (a === b || c && d) {
    console.log('Yes');
}
