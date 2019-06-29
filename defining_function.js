const square = function(x){
	return x * x;
};
const maekNoise = function(){
	console.log('pling!');
};

const power = function(base, exponent){
	let result = 1;
	for(let count = 0; count < exponent; count++){
		result *= base;
	}
	return result;
};

let x = 10;
if(true){
	let y = 20;
	var z = 30;
	console.log(x + y + z);
	//60
}
//y is not visible here
console.log(x + z);
//40
