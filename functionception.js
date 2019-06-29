const hummus = function(factor){
	const ingredient = function(ammount, unit, name){
		let ingredientAmount = ammount * factor;
		if(ingredientAmount > 1){
			unit += 's';
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	};
	ingredient(1, 'can', 'chickpeas');
	ingredient(.25, 'cup', 'tahini');
	ingredient(1, 'clove', 'garlic');
};	
