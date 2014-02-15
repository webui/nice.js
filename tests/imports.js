/*
 * Import modules.
 *
 * Use of semicolon ";" in end of lines is optional.
 *
 * Underscore.js used to provide easy to use tools.
 */


// Nice.js
import lib.math
// Closure
goog.require('lib.math');
// Require.js
require('lib.math');
// node.js
var lib = lib || {};
lib.math = require('lib.math');


// Nice.js
from lib.math import Round
// Closure
goog.require('lib.math.Round');
// Require.js
require('lib.math.Round');
// node.js
var Round = require('lib.math.Round');


// Nice.js
from lib.math import Round as round
// Closure
goog.require('lib.math.Round');
var round = lib.math.Round;
// Require.js
require('lib.math.Round');
var round = lib.math.Round;
