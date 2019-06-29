let theNumber = Number(process.openStdin("pick a number yoo"));

if(!Number.isNaN(theNumber)){
	console.log("your number is the square root of " + theNumber * theNumber);
}
