/*
Function declararion
-Always have a function name
-Hoisted to the top of their scope, allowing them to be called from anywhere within that scope, even before they are defined
-Stored in memory before code execution, making them always available
*/

function functionDeclaration() {
  console.log(`This is a function declaration`);
}

functionDeclaration();

/*
Function Expression
-Do not have a name (anonymous) or can have a name (named function expression)
-Are not hoisted, meaning they can only be called from within the scope in which they are defined
-Are not available until code execution reaches the line where they are defined
*/
