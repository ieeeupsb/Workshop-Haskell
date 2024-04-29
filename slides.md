---
theme: apple-basic
title: "Workshop: Haskell"
highlighter: shiki
transition: none
mdc: true
layout: intro
---

# Workshop

![](assets/haskell.png){width=500px}

<div class="absolute bottom-10">
	<span class="font-700">
		Eduardo Correia, 29th April
	</span>
</div>

<div class="absolute bottom-10 right-10">
	<img src="assets/ieeeupsb.png" alt="IEEE UPSB" width="200px">
</div>

---
layout: bullets
---

# Introduction

- **Haskell** is a (purely) **functional** programming language created in **1990**. 
- It is named after the logician **Haskell Curry**.
- Haskell is based on the **lambda calculus**.
- **GHC** - Glasgow Haskell Compiler

---

# Starting out

To run Haskell in interactive mode, we can `ghci` in the terminal.

```hs
GHCi, version 9.6.4: https://www.haskell.org/ghc/  :? for help
ghci> -- Type code here and hit Enter
      -- Result will show here
```

Otherwise we can create a file with `.hs` extension and run it using `runhaskell`.

```sh
runhaskell <filename>.hs
```

Alternatively, we can use an online compiler like https://play.haskell.org.

---

# Data Types

Some examples of basic data types include:

- `Int` - Integer
- `Integer` - Arbitrary precision integer
- `Float` - Single precision floating point
- `Double` - Double precision floating point
- `Bool` - Boolean
- `Char` - Character
- `String` - List of characters

You can check the type of a value using the `:t` command in `ghci`.

```hs
ghci> :t True
True :: Bool
ghci> :t 'A'
'A' :: Char
```

---

# Arithhmetic Operators

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Divison

```hs
ghci> 5 + 3 - 2
6
ghci> 5 / 3
1.6666666666666667
ghci> 5 + 3 * 2   -- Usual precedence rules apply
11
ghci> (5 + 3) * 2 -- We can also use parentheses
16
```

**Note:** Negative numbers must be surrounded by parentheses. 

```hs
ghci> 5 * -3   ❌
ghci> 5 * (-3) ✅
```

---

# Boolean Operations

- `&&` Logical AND
- `||` Logical OR
- `not` Logical NOT

```hs
ghci> True && False 
False
ghci> True || False 
True
ghci> not True 
False
ghci> not (True && False) 
True
```

---

# Comparison Operations

- `==` Equal
- `/=` Not equal
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal

```hs
ghci> 5 == 3
False
ghci> 5 /= 3
True
ghci> 5 > 3
True
ghci> 5 <= 3
False
```

---

# Functions 

Functions are defined using the `=` operator.  
The left side contains the name of the function, possibily followed by a list of parameters, and the right side contains the function body (*i.e.* the return value). 

```hs
<name> [<parameters>] = <body>
```

The most basic function is the identity function, which returns the same value it receives:

```hs
identity x = x
```

An example of a function with multiple parameters is:

```hs	
doubleUs x y = x * 2 + y * 2
```

Functions can also be defined without parameters:

```hs
hello = "Hello, World!"
```

This is similar to the concept of variables in other languages.

---

# Function Typing

The `::` operator is used to define the type of a function.  
The types of the parameters are separated with `->` and there's no special distinction between the parameters and the return type:

```hs
<name> :: <type> -> <type> -> ... -> <type>
<name> [<parameters>] = <body>
```

Here's the type definition for the `doubleMe` function:

```hs
doubleMe :: Int -> Int 
doubleMe x = x * 2 
```

Functions can only have one return value, so, the last type in the list is the return type:

```hs
isGreater :: Int -> Int -> Bool 
isGreater x y = x > y
```

**Note:** Haskell is a statically typed language and the type of each expression is infered at compile time. Therefore, typing is optional, but it's a good practice to include it.

---

# Pattern Matching

When defining functions, we can define separate function bodies for different patterns:

```hs
isVowel :: Char -> Bool
isVowel 'a' = True
isVowel 'e' = True
isVowel 'i' = True
isVowel 'o' = True
isVowel 'u' = True
isVowel x = False
```

It will match the first pattern that fits the input from top to bottom. In this case, `x` is a wildcard that matches any value, that wasn't matched by the previous patterns.

If we don't include the last pattern, Haskell will throw an error when the input doesn't match any of the previous patterns.

Since the value `x` is not used in the function body, we can use `_` as a placeholder:

```hs
isVowel _ = False
```

---

# Guards

Guards are a way of testing whether some properties of a value are true or false.   
They are every similar to *if statements*, but guards are a lot more readable when there are several conditions and they play nicely with patterns.

```hs
isOdd x
	| x `mod` 2 == 0 = "Even"
	| otherwise = "Odd"
```

The `otherwise` keyword is a catch-all pattern that is evaluated if no other guards are true.

Using *if statements*, the same function would look like this:

```hs
isOdd x = if x `mod` 2 == 0
	then "Even"
	else "Odd"
```

**Note:** Wrapping a function name in backticks allows it to be used as an infix operator. So, here, ``x `mod` 2`` is equivalent to `mod x 2`.

--- 

# Where and Let

To avoid repeating the same expression multiple times, we can use the `where` keyword to bind variables to values that can be used in the function body.

```hs
bmi :: Double -> Double -> String
bmi weight height
	| bmi <= 18.5 = "Underweight"
	| bmi <= 25.0 = "Normal"
	| bmi <= 30.0 = "Overweight"
	| otherwise = "Obese"
	where bmi = weight / height ^ 2
```

The `let` keyword is similar to `where`, but it is an expression that can be used anywhere.

```hs
ghci> let a = 1
          b = 2
          c = 3 
       in a + b + c
6
```

---

# Recursion

Haskell doesn't have loops, so we have to use recursion to perform repetitive tasks.

```hs
factorial :: Int -> Int
factorial 0 = 1
factorial n = n * factorial (n - 1)
```

---

# Tuples

Tuples are data structures that can hold multiple values of different types, but they have a fixed length.

```hs
ghci> (1, 2)
(1, 2)
ghci> ("Hello", 1)
("Hello", 1)
```

You can access the elements of a pair (tuple with only two elements) using the `fst` and `snd` functions.

```hs
ghci> fst (1, 2)
1
ghci> snd (1, 2)
2
```

To pattern match on tuples, you can use parentheses and commas.

```hs
addTuples :: (Int, Int) -> (Int, Int) -> (Int, Int)
addTuples (a, b) (c, d) = (a + c, b + d)

ghci> addTuples (1, 2) (3, 4)
(4, 6)
```

---

# Lists

Lists, on the other hand, are data structures that can hold multiple values of the same type, but they can have any length.

```hs
ghci> [1, 2, 3]
[1, 2, 3]
ghci> ["Hello", "World"]
["Hello", "World"]
```

You can concatenate lists using the `++` operator.

```hs
ghci> [1, 2] ++ [3, 4]
[1, 2, 3, 4]
```

You can also prepend a single element to a list using the `:` operator.

```hs
ghci> 1 : [2, 3]
[1, 2, 3]
```

---

# Lists

To access an element at a specific index (starting in 0), you can use the `!!` operator. 

```hs
ghci> [1, 2, 3] !! 1
2
```

Another way to access elements is using the following functions:

```hs
ghci> head [1, 2, 3]
1
ghci> last [1, 2, 3]
3
ghci> init [1, 2, 3]
[1, 2]
ghci> tail [1, 2, 3]
[2, 3]
```

--- 

# Lists

Pattern matching is really useful when working with lists.

```hs
sumList :: [Int] -> Int
sumList [] = 0
sumList (x:xs) = x + sumList xs
```

The first pattern matches an empty list, and the second pattern matches a list with at least one element.   
`x` corresponds to the first element of the list and `xs` corresponds to the rest of the list (tail).

```hs
ghci> sumList [1, 2, 3]
6
```

---

# List Ranges

List ranges are a way to generate lists of numbers.

```hs
ghci> [1..5]
[1, 2, 3, 4, 5]
```

By providing the first two elements, Haskell can infer the step:

```hs
ghci> [1, 3..10]
[1, 3, 5, 7, 9]
```

In this case, Haskell inferred that the step is 2, because that's the difference between `1` and `3`.

This step can also be negative, if the first element is greater than the second one:

```hs
ghci> [5, 4..1]
[5, 4, 3, 2, 1]
```

--- 

# List Comprehensions

We can use list comprehensions to generate new lists:

```hs
ghci> [x * 2 | x <- [1..5]]
[2, 4, 6, 8, 10]
```

We can also add a condition to filter the elements.

```hs
ghci> [x * 2 | x <- [1..5], x `mod` 2 == 0]
[4, 8]
```

Haskell is a lazy language, which means that expressions are only evaluated when they are needed.
This means we can work with infinite lists.

```hs
ghci> [1..] !! 5
6
```

---

# Currying

Haskell is a curried language, which means that functions can only take one parameter.
So, in reality a function that takes two parameters is a function that takes one parameter and returns another function that takes the second parameter.

```hs
ghci> max 4 5  
5  
ghci> (max 4) 5  
5  
```

If we call a function with fewer parameters than it expects, we get back a partially applied function.

```hs
add :: Int -> Int -> Int
add x y = x + y

addThree :: Int -> Int
addThree y = add 3 y

ghci> addThree 2
3
```

---

# Higher-order Functions

To make it easier to work with sequences, Haskell provides a set of higher-order functions that can be used to manipulate them.

`map` is a function that applies a function to each element of a list.

```hs
ghci> map (+1) [1, 2, 3]
[2, 3, 4]
```

`filter` is a function that takes a predicate and a list and returns a list of elements that satisfy the predicate.

```hs
ghci> filter (>2) [1, 2, 3]
[3]
```

`foldl` and `foldr` are functions that take a binary function, an initial value, and a list, and they apply the function to the initial value and the first element of the list, then to the result and the second element, and so on.

```hs
ghci> foldl (+) 0 [1, 2, 3]
6
```

---

# Lambda Functions

Lambda functions are anonymous functions that are used when we need a function only once.

```hs
ghci> (\x -> x + 1) 2
3
```

Lambda functions can take multiple parameters:

```hs
ghci> (\x y -> x + y) 2 3
5
```

They are often used in combination with higher-order functions.

```hs
ghci> map (\x -> x + 1) [1, 2, 3]
[2, 3, 4]
```

---
layout: section
---

# Exercises

---

# Fibonacci

Write a function `fibonacci` that calculates the `n`-th Fibonacci number.

```haskell
fibonacci :: Int -> Int
```

<br>

## Examples

<br>

```hs
ghci> fibonacci 5
5
ghci> fibonacci 10
55
```

---

# Length of list

Write a function `length'` that calculates the length of a list.

```hs
length' :: [a] -> Int
```

<br>

## Examples

<br>

```hs
ghci> length' [1, 2, 3]
3
```

---

# Palindrome

Write a function `isPalindrome` that checks if a given string is a palindrome.

```hs
palindrome :: String -> Bool
```

**Note:** If you need, first write a function `reverse'` that reverses a list.

```hs
reverse' :: [a] -> [a]
```

<br>

## Examples

<br>

```hs
ghci> palindrome "racecar"
True
ghci> palindrome "hello"
False
```

---

# Prime numbers

Write a function `isPrime` that checks if a given number is prime.

```hs
isPrime :: Int -> Bool
```

<br>

## Examples

<br>

```hs
ghci> isPrime 4
False
ghci> isPrime 7
True
```

---

# Binary

Write a function `binToInt` that converts a binary number (as a string of `0` and `1`) to an integer.

```haskell
binToInt :: String -> Int
```

**Note:** If you need, first write a function `toDecimal` that converts a character to an integer.

```haskell
toDecimal :: Char -> Int
```

<br>

## Examples

<br>

```hs
ghci> binToInt "101"
5
ghci> binToInt "1101"
13
```
