/*
 * Basics.
 *
 * Use of semicolon ";" in end of lines is optional.
 *
 * Underscore.js used to provide easy to use tools.
 */


// define class with parameters
class BaseClass {
    a = null
    b = 10
    var x = "hidden property of BaseClass"
}
obj = new BaseClass()
// -->
function BaseClass() {
    return new (function BaseClass () {
        var self = this;

        // properties
        self.a = null;
        self.b = 10;
        var x = "hidden property of BaseClass";
    });
}
obj = BaseClass();


// define class with parameters and constructor
class Base2Class {
    a = null
    b = 10
    var x = "hidden property of Base2Class"

    function construct(a, b) {
        self.a = a
        self.b = b
    }

    function add() {
        return self.a + self.b
    }

    function get_x() {
        return x
    }
}
obj = new Base2Class(10, 20)
// -->
function Base2Class(a, b) {
    var self = this;

    // properties
    self.a = null;
    self.b = 10;
    var x = "hidden property of Base2Class";

    // constructor
    self.a = a;
    self.b = b;

    // method add()
    self.add = function add() {
        return self.a + self.b;
    }

    // method get_x()
    self.get_x = function get_x() {
        return _x;
    }
}
obj = new Base2Class(10, 20);


// class inheritance
class MyClass1 extends Base2Class {
    c = "ccc"
    var y = "hidden property of MyClass1"

    // redefine method of parent's class
    function get_x() {
        return "Redefined method get_x() of parent's class"
    }

    function get_y() {
        return y
    }
}
obj = new MyClass1(10, 20)
// -->
function MyClass1() {
    var self = this;

    // properties
    self.c = "ccc";
    var y = "hidden property of MyClass1";

    // method get_x()
    self.get_x = function get_x() {
        return "Redefined method get_x() of parent's class";
    }

    // method get_y()
    self.get_y = function get_y() {
        return y;
    }
}
_.extend(MyClass1, Base2Class);
obj = new MyClass1(10, 20);
