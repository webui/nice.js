/*
 * Exceptions.
 *
 * Use of semicolon ";" in end of lines is optional.
 *
 * Underscore.js used to provide easy to use tools.
 */


try { statement }
catch ("InvalidNameException") { statement }
catch ("InvalidIdException", "InvalidEmailException") { statement }
finally { statement }
// -->
try { statement; }
catch (e if e == "InvalidNameException") { statement; }
catch (e if ["InvalidIdException", "InvalidEmailException"].indexOf(e) > -1) { statement; }
finally { statement; }
