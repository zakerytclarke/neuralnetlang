# neuralLang

A programming language that uses neural networks


## Sidenote
This is by no means a practical programming language and.


## Features
I think all good programming langauges have the three following features in common
1. Correctness- when given a problem, the code should return a correct answer
2. Speed- programs written in a language should be executed quickly
3. Consistency- when programming in a given style, the results should be consistent and intuitive

neuralLang fails to meet all of those requirements by a long shot.
1. NeuralLang computes by using neural networks to generate the return value of a function. This means that your answers may not be correct.
2. The compilation step for neuralLang involves training training a neural network for every function, so compile time takes forever.
3. Depending on the sample size of the dataset your functions on trained on, you may have mixed results.

neuralLang does have some cool features however:
- Type Checking
- Simple, easy to understand syntax
- Roughly constant runtime for every function



## Programming in neuralLang
A neuralLang program consists of many function definitions and

### Syntax

#### Assignment
```
varName=value
```

#### Function Definition
```
funcName(arg1,arg2,...)=result
```

Now, since you can't use normal expressions, you will need to list many inputs for your given function, so that the network can accurately discern the input/output values
Here is a definition of factorial that works reasonably well
```
factorial(0)=1;
factorial(1)=1;
factorial(2)=2;
factorial(3)=6;
factorial(4)=24;
factorial(5)=120;
factorial(6)=720;
factorial(7)=5040;
factorial(8)=40320;
factorial(9)=362880;
factorial(10)=3628800;
factorial(11)=39916800;
factorial(12)=479001600;
factorial(13)=6227020800;
factorial(14)=87178291200;
factorial(15)=1307674368000;
factorial(16)=20922789888000;
factorial(17)=355687428096000;
factorial(18)=6402373705728000;
factorial(19)=121645100408832000;
factorial(20)=2432902008176640000;
factorial(21)=51090942171709440000;
```


#### Basic Types
There are 3 basic types that a function can return
- Boolean true,false
- Number 0,1,2... 3.14,4.5...
- String "Hello World"


#### Built in Functions
Since training time can take quite awhile, we have saved you the trouble by writing some basic functions that come pretrained from a neural network

##### Logic
not(x)
and(x,y)
or(x,y)

##### Math
+(x,y) probably return the approximate value of adding x to y
-(x,y) probably return the approximate value of subtracting y from x
x(x,y) probably return the approximate value of multiplying x times y
/(x,y) probably return the approximate value of dividing x by y

##### Conditional
if(x,y,z)
If x is true probably return y otherwise probably return z
