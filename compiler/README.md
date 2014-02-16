Compile Nice.js to JavaScript
=======

Nice.js compiles to JavaScript on the fly. When you save your `.nicejs` file the compiler transform this file to `.js` file. It's very fast. You can reload your webpage in next second to see result with recompiled JavaScript file.

Compilation can be done manually in command line or automatically with [Grunt.js](http://gruntjs.com).

***

### Run compilation

#### Compilation with JavaScript

Now I am working on create compiler based on [Sweet.js](http://sweetjs.org) project. If it will work well then I upload compiler and provide instruction how to setup compilation with [Grunt.js](http://gruntjs.com).

#### Compilation with python

Now it's possible to run compilation with **python** `python/compile.py` script.

 * First argument - path to directory with `.nicejs` files
 * Second argument - path to directory where will be saved resulting `.js` files

```bash
python compiler/python/compile.py tests/nicejs tests/nicejs/js
```
