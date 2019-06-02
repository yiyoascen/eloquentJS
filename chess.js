for(let i = 1; i <=8; i ++){
	if(i % 2 == 0)
	{
		for(let j = 1; j <= 8; j++){
			if(j % 2 == 1 )
				process.stdout.write(' ');
			else
				process.stdout.write('#');
			if(j == 8)
				process.stdout.write('\n');
		}
	}
	else
	 {
		
		for(let j = 1; j <= 8; j++){
			if(j % 2 == 0 )
				process.stdout.write(' ');
			else
				process.stdout.write('#');
			if(j == 8)
				process.stdout.write('\n');
		}
	}

}
