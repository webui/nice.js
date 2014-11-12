/*
 * Nice.js is extension of your JavaScript code to simplify your life.
 * 
 * Nice.js extend Array, Number and other built-in types of javaScript
 * with new syntax.
 *
 * @author Anton Danilchenko - http://danilchenko.me
 * @url https://github.com/webui/nice.js
 */

// return Nth element from start
Array.prototype.first = function first (shift) {
    shift = shift || 0;
    return this[shift];
}
// return Nth element from end
Array.prototype.last = function last (shift) {
    shift = shift || 0;
    return this[this.length - shift - 1];
}
// return part of array from `start` to `end` index
Array.prototype.range = function range (start, end) {
    start = start || 0;
    end = end || this.length -1;
    return this.slice(-1 * shift);
}
