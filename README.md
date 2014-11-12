Nice.js extends JS syntax
=======

### You create less code. Code looks better


I worked last years with **python** language. And when I tried to switch to node.js and create both backed and frontend on **JavaScript** only - I found that JS lacks some cool features from other part of the World.

In this project I implement compiler from Nice.js syntax to plain JavaScript *(now on python, but in near future - on JS)*. I believe that you are using [Underscore.js](http://underscorejs.org) to simplify your coding life. I also use it, and in resulting code you will see `_()` syntax.

Resulting code is readable like your original code on Nice.js. We transform only short forms of code to full form of plain JS.

And the greatest part of this project that you can use [classes](/tests/classes.js) like in other OOP languages.


### Current implementation

Now you can use small JavaScript file that extends your JavaScript syntax with new useful tools. for example, you can get last element of array in this way `arr.last()` or first element with `arr.first()`. Also you can get shifted element from start or end of array in this way `arr.first(2)` and `arr.last(1)`.

This library is very easy and you can find source code in file [nice.js](nice.js)

To use this script just include it in your HTML page before all other script tags.

```javascript
<script src="https://raw.githubusercontent.com/webui/nice.js/master/nice.js"></script>
<!-- use it before jQuery and your own scripts -->
<script src="/static/libs/jquery/jquery-2.1.1.min.js"></script>
```

Your Pull Requests are welcome!

***

#### The main problems in JavaScript code

 * ommited keyword `new` to create instance of class
 * ommited `;` in end of line
 * omitter `{` and appropriate `}`
 * forget to use `var` for local variables


#### Syntax (discussion, not implemented yet)

You can find syntax description in folder [tests](/tests).

This is part of them:
 * [classes](/tests/classes.js) - `class MyClass extends BaseClass {...}`
 * [conditions](/tests/conditions.js) - `if (10 not in list)` or `if (a == b or c and d)`
 * [loops](/tests/loops.js) - `for (x, y in obj)` and `[user.age for user in users if user.age <= 30]`
 * [etc](/tests)

***

> Thank you for interest to this project. It's fun. And it's helpful. I am trying to change our development life to implement our amazing ideas faster and easier.

> Feel free to contact me, add new propositions in comments to files or by creating [issues](https://github.com/webui/nice.js/issues). It will be happy to review your pull requests and discuss with you.

-- *[Anton Danilchenko](https://github.com/1st)*
