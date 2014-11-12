/*
 * Nice.js is extension of your JavaScript code to simplify your life.
 * 
 * Nice.js extend Array, Number and other built-in types of javaScript
 * with new syntax.
 *
 * @author Anton Danilchenko - http://danilchenko.me
 * @url https://github.com/webui/nice.js
 */

if (! Array.prototype.first)
    // return Nth element from start
    Array.prototype.first = function first (shift) {
        shift = shift || 0;
        return this[shift];
    }

if (! Array.prototype.last)
    // return Nth element from end
    Array.prototype.last = function last (shift) {
        shift = shift || 0;
        return this[this.length - shift - 1];
    }

if (! Number.prototype.isInteger)
    // check if number is integer
    Number.prototype.isInteger = function isInteger () {
        var value = this.valueOf();
        return (value ^ 0) === value;
    }
