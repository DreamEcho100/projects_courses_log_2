// Table 2-1. Data Types in JavaScriptData
// Type                       Description
// Number64-bit               double-precision floating-point number
// String                     A sequence of 16-bit characters
// Boolean                    Has two possible values: true and false, or 1 and 0
// Undefined                  Returned for a nonexistent object property or a variable without a value
// Null                       Has only one value: null
// Object                     Holds a collection of properties and methods
// Array                      An object consisting of a list of data of any type
// Function                   A callable object that executes a block of code

// Table 2-2. Math Methods
// Method                     What it returns
// Math.abs(a)                absolute value of a
// Math.pow(a, b)             a to the power of b
// Math.sqrt(a)               square root of a
// Math.ceil(a)               smallest integer that is larger than a
// Math.floor(a)              largest integer that is smaller than a
// Math.round(a)              nearest integer to a
// Math.max(a, b, c, ...)     largest of a, b, c, ...
// Math.min(a, b, c, ...)     smallest of a, b, c, ...
// Math.random()              a pseudo - random number n, where 0 <= n < 1

// Drawing lines and curves
// The following are a few essential properties and methods of the canvas context for drawing basic shapes using lines
// and curves:

// •	 The strokeStyle property specifies the line color in CSS-style format. The default value is '#000000' (black).

// •	 The lineWidth property specifies the line thickness in pixels. The default value is 1.

// •	 The beginPath() method resets the current path. A path is a collection of subpaths.
// Each subpath is a set of points connected by straight or curved lines.

// •	 The closePath() method closes the current subpath and starts a new one from the end of the closed subpath.

// •	 The moveTo(x, y) method moves the cursor to the specified location (x, y) without drawing anything,
// that is, it creates a new subpath from the specified point.

// •	 The lineTo(x, y) method draws a straight line from the current location to the new location (x, y) specified in its argument, that is,
// it adds a new point to a subpath and connects that point to the previous point in the subpath with a straight line.

// •	 The arc(x, y, radius, startAngle, endAngle, anticlockwise) method adds an arc to  the path with center (x, y),
// and of the specified radius.The starting and ending angles are in radians .
// The anticlockwise parameter is a boolean: if true, the arc is drawn in a counterclockwise direction;
// if false, it is drawn in a clockwise direction.

// •	 The rect(x, y, w, h) method creates a new closed rectangular subpath with the upper-left
// corner at (x, y) and width w and height h.

// •	 The stroke() method renders the current subpath using the current stroke styles.

// •	 The strokeRect(x, y, w, h) method combines the last two methods to render an outline of
// the specified rectangle.
