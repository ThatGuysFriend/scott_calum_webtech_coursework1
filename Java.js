function ROT13() 
{ 
	var Entered_text = document.getElementById("message").value; 
	var cypher_text = []; 
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',	
					'q','r','s','t','u','v','w','x','y','z']

	for(var i=0; i<Entered_text.length; i++) 
	{ 
		input = alphabet.indexOf(Entered_text[i]); 
		if(input == -1 ) 
		{ 
			cypher_text.push(Entered_text[i]); 
		} 
		else 
		{ 
			var coded = (input+13)%26; 
			var letter = alphabet[coded]; 
			cypher_text.push(letter); 
		} 
	} 
	document.getElementById("output").innerHTML = cypher_text.join(""); 
}

function Scramble_Encode() 
{ 
	var Entered_text = document.getElementById("message").value; 
	var cypher_text = []; 
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',	
					'q','r','s','t','u','v','w','x','y','z']
	var Scrambled_alphabet=['h','s','c','f','d','k','w','t','o','x','n','b','v','l','y',	
					'r','g','e','i','q','u','m','z','a','p','j']
	for(var i=0; i<Entered_text.length; i++) 
	{ 
		
		input = Scrambled_alphabet.indexOf(Entered_text[i]);  
		if(input == -1 ) 
		{ 
			cypher_text.push(Entered_text[i]); 
		} 
		else 
		{ 
			var coded = (input)%26; 
			var letter = alphabet[coded]; 
			cypher_text.push(letter); 
		} 
	} 
	document.getElementById("output").innerHTML = cypher_text.join(""); 
}

function Scramble_Decode() 
{ 
	var Entered_text = document.getElementById("message").value; 
	var cypher_text = []; 
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',	
					'q','r','s','t','u','v','w','x','y','z']
	var Scrambled_alphabet=['h','s','c','f','d','k','w','t','o','x','n','b','v','l','y',	
					'r','g','e','i','q','u','m','z','a','p','j']
	for(var i=0; i<Entered_text.length; i++) 
	{ 
		
		input = alphabet.indexOf(Entered_text[i]);  
		if(input == -1 ) 
		{ 
			cypher_text.push(Entered_text[i]); 
		} 
		else 
		{ 
			var coded = (input)%26; 
			var letter = Scrambled_alphabet[coded]; 
			cypher_text.push(letter); 
		} 
	} 
	document.getElementById("output").innerHTML = cypher_text.join(""); 
}

function Number_Encode() 
{ 
	var Entered_text = document.getElementById("message").value; 
	var cypher_text = []; 
	var Numbers=['01','02','03','04','05','06','07','08','09','10','11','12','13',
				'14','15','16','17','18','19','20','21','22','23','24','25','26']
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',	
					'q','r','s','t','u','v','w','x','y','z']
	for(var i=0; i<Entered_text.length; i++) 
	{ 
		
		input = alphabet.indexOf(Entered_text[i]);  
		if(input == -1 ) 
		{ 
			cypher_text.push(Entered_text[i]); 
		} 
		else 
		{ 
			var coded = (input)%26; 
			var number = Numbers[coded]; 
			cypher_text.push(number); 
		} 
	} 
	document.getElementById("output").innerHTML = cypher_text.join(""); 
}

function Number_Decode() 
{ 
	var Entered_text = document.getElementById("message").value; 
	var cypher_text = []; 
	var Numbers=['01','02','03','04','05','06','07','08','09','10','11','12','13',
				'14','15','16','17','18','19','20','21','22','23','24','25','26']
	var alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p',	
					'q','r','s','t','u','v','w','x','y','z']
	for(var i=0; i<Entered_text.length; i++) 
	{ 
		
		input = Numbers.indexOf(Entered_text[i]);  
		if(input == -1 ) 
		{ 
			cypher_text.push(Entered_text[i]); 
		} 
		else 
		{ 
			var coded = (input)%26; 
			var letter = alphabet[coded]; 
			cypher_text.push(letter); 
		} 
	} 
	document.getElementById("output").innerHTML = cypher_text.join(""); 
}


