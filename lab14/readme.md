Download and install Antlr v. 4 from http://www.antlr.org/.

Download the following sourcefiles from the course website:

* `Expr.g4` -- The Antlr grammar for math expressions.
* `Calc.java` -- The interpreter.
* `EvalVisitor.java` -- Visits each node of the parse tree.

The following test programs are also available:

* `test.expr`
* `testWithId.expr`

## Part 1: Using Antlr

* Download `test.sh` from the course website and follow the steps specified in the script. Note that the script assumes that all of the files are located in the same directory.
* **Examine the Java code** generated by the script.
* Using the parser that you generate, **evaluate `test.expr`**.

## Part 2: Extend Calc

**Add support for IDs** to the calculator.

First edit the grammar so that `testWithId.expr` will parse correctly:

1. Add ID to the lexing rules.  Accept **alphabetic variable names**. Some sample ID names: x, varName, thisIsAVar
2. Add an **assignment statement**.  Two sample assignment statements:
  a = 5
  b = 6
3. Add a **variable reference** to the list of expressions.

Next, update `EvalVisitor.java` to handle your new syntax.

1. Add a `String,Integer` map to the class.
2. Add a `visitAssign` function

```java
   @Override
   public Integer visitAssign(ExprParser.AssignContext ctx) {
     // Get the text of your ID
     String id = ctx.ID().getText();
     // Get the value of the sub-expression
     int value = visit(ctx.expr());

     //
     // YOUR CODE HERE.
     // Update the map with the new variable information.
     //

     return value;
   }
```

3. Add a `visitID` function

```java
   @Override
   public Integer visitId(ExprParser.IdContext ctx) {
     //
     // YOUR CODE HERE.
     // Follow a similar pattern to the previous function.
     // Return the value of the ID in the store if available,
     // or 0 otherwise.
     //
   }
```
