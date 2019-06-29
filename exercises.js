//chapter 3 exercises

//Write a function min that takes two arguments and returns their minimum.
let min = (a, b) => {
	if (a > b)
		return b;
	else
		return a
};

//console.log(min(0, 10));
//console.log(min(0, -10));

//recursive function for a factorial
let factorial = x => {
	if (x > 1)
		return x * factorial(x - 1);
	else
		return x;
};

console.log(factorial(5));
