/*
Dynamic Scope:

+ Lexical scope is the set of rules about how to engine can look up a variable and where it will find it. The key characteristic of lexical scope is that it is defined at author time, when the code is written.
+ Dynamic scope is determined dynamically at runtime, rather than statically at author time.
+ Dynamic scope doesn't concern itself with how and where functions and scopes are declared, but rather where they are called from. In other words, the scope chain is based on the call-stack, not the nesting of scopes in code.
  - Dynamic scope is, then, a close cousin to the keyword this.

*/

function foo () {
  console.log(a)
}

function bar () {
  var a = 3
  foo()
}

var a = 2
bar()

// lexical scope returns 2 as the output of a.
// dynamic scope returns, theoretically, 3.

/*
+ In dynamic scope, when foo cannot resolve the variable reference for a, insead of stepping up the nested (lexical) scope chain, it walks up the call stak, to find where foo() was CALLED FROM. Since foo() was called from bar(),it checks the variables in scope for bar(), and finds an a there with the value 3.
KEY: lexical scope is write-time, whereas dynamic scope (and this!) are runtime. Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.
+ The keyword this cares how a function was called.
*/
