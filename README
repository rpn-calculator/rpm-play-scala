# RPN Calculation in Play Scala

This Project helps to calculate your mathematical expression in RPN using Typesafe Stack, Play, Scala, NodeJS, Grunt, Angular, Bootstrap and jQuery.

## What is RPN ?
1. RPN Stands for Reverse Polish Notation which is mathematical notation.
2. The notation has the advantage that it no longer uses parentheses, reducing errors, and is sometimes faster than a normal calculation.
3. Refer for more information [Wikipedia](https://en.wikipedia.org/wiki/Reverse_Polish_notation)!

## What is Shunting Yard?
1. Its an Algorithm and It can be used to produce either a postfix notation string, also known as Reverse Polish notation (RPN), or an abstract syntax tree (AST).
2. It will helps to convert mathematical expression to RPN.
3. Refer for more information [Wikipedia](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)

## How to run app the locally?
1. If you have `sbt`, `Typesafe` and `scala`. you can do `activator run`

## What about Front-end Implementation?
In Front-end, AngularJS, NodeJS, Bootstrap, jQuery, Bower are used.

## How to setup front-end locally?
Follow below steps to setup locally and make sure in root where package.json and bower.json is exist.

```
$ export PATH="/usr/local/bin:$PATH"
$ brew install node
$ npm install
$ bower install
$ grunt build
$ activator run
```

## How to setup locally?
1. homebrew - run `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
1. scala - run `brew install scala`
2. sbt - run `brew install sbt`

## How to test Scala?
Check the below commands.
```
$ vi .profile
$ export PATH="/Users/<userId>/scala/bin:$PATH"
$ source .profile
$ scala
 println("Hello Scala");
```

## What are the changes in Scala?
This project server side code written in Scala using Play Scala Framework. Below is change log.

Controllers
===========

- HomeController.scala:

  Shows Form to Input Mathmatical Expression.
  Routes to Calculus Method to RPN Expression calculation.

lib
==========

- Base64.scala:

  This Library helps to encode / decode in Base64 Format.

- ShuntingYard.scala:

  This Library helps to convert Mathmatical Expression to RPN using ShuntingYard Algorithm.

- RPN.scala:

  This evaluates the RPN Expression to calculated.
