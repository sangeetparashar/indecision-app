	// const square = function (x) {
	// 	return x*x;
	// }


	// // const squareArrow = (x) => {
	// // 	return x*x;
	// // }
	// const squareArrow = (x) => x*x;

	// //they both are identical so you can just use the concise function



	// console.log(squareArrow(88));


	const fullName = 'Sangeet Parashar';
	let first;
	const firstName = (x) => {
			return first = x.split(' ')[0];

		}
	

	console.log(firstName(fullName));


	/*
	argument object - no longer bound with arrow functions
	this keyword - no longer bound with arrow functions so you can use it freely
	*/

	//argument bound
	const add = (a,b) =>{
		// console.log(arguments); so if you need to use the arguments, use the old function method
		return a+b;
	};
	console.log(add(55,1));

	//this keyword
	const user = {
		name: 'Sangeet',
		city: ['Brampton', 'London', 'Delhi'],
		//there is this map method that we haven't used before but it is EVEN better than forEach
		printPlacesLived(){
			const cityMessage = this.city.map((city) => {
				//allows you to tranform each item!!
				return this.name + " has lived in " + city;
			});
			// this.city.forEach((city) =>{
			// 	console.log(this.name + " has lived in " + city);
			// });

			return cityMessage;
		}
	};
	console.log(user.printPlacesLived());

	const multiplier = {
		numbers: [2,3,5,67,12],
		multiplyBy: 3.97,
		multiply(){
			return this.numbers.map((number) => number * this.multiplyBy);
		}
		
	};
	console.log(multiplier.multiply());
