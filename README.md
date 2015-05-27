Coffeequate <sub><sup>v1.2.1</sup></sub>
=============================

A computer algebra system for JavaScript. More information at [the webpage](http://matthewja.com/Coffeequate).

## Use
Coffeequate gives you a `CQ` function which wraps the functionality of Coffeequate. An alias of this function is `coffeequate`.

To make a new expression, just call `CQ`:
```javascript
expr = CQ("m * c**2");
```

You can also make an expression with equation syntax, as follows:
```javascript
expr = CQ("E = m * c**2");
```

All expressions will be equated to zero.

The formatting of these strings must be as follows: You can use `*` for multiplication, `**` for exponentiation, `+` for addition, `-` for negation or subtraction, `/` for division, and `()` parentheses to change the order of operations. Negation and parenthesising are higher precedence than exponentiation, which is higher precedence than multiplication and division, which are higher precedence than addition and subtraction.

Terminals can be numbers, variables, or symbolic constants - the latter are entered with a backslash, for example, `\G` or `\π`. Note that if you are entering this as a string, you will have to escape the backslash (e.g., `CQ("\\π * r**2")`).

## License
All current and previous versions licensed under the MIT License. See /LICENSE for a copy of this license.