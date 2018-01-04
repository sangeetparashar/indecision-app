console.log("App.js is running");

//run  it by typing: live-server public

// user this to render REACT stuff: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


//JSX- JavaScript XML
//way for us to inect our data into templates

const app = {
	heading: "Indecision Application",
	subtitle: "Put your life in the hands on my app",
	options: ['thing one, thing two, thing three']
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    //creating something to hold the value user might type
    const option = e.target.elements.option.value;
    
    //check if the string ever exists
    if(option){
        app.options.push(option);
        //lets wipe the input
        e.target.elements.option.value = '';
        renderTemplate();
    }
}

const makeDecision = () => {
    let randomNum = Math.floor(Math.random() * app.options.length);
    let option = app.options[randomNum];
    alert(option);
}
const removeOptions = () => {
    app.options = [];
    renderTemplate();
}
//we are going to use "map" to manipulate the array

const renderTemplate = () => {
    const template = (
        <div>
            <h1> {app.heading} </h1>
            {app.subtitle && <p> {app.subtitle}</p> }
            <p> {app.options.length > 0 ? 'Here are your options:' : 'No options!'} </p>            
            <ol>
        {
                app.options.map((mapping) => {
                    return <li> {mapping}</li>
                })
        }   
            </ol>
            
            <button disabled={app.options.length === 0} onClick={makeDecision}> Pick an option </button>
            <button onClick={removeOptions}> Reset All </button>
            
            
            <form onSubmit={onFormSubmit}>
                <input type = "text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
}

const appRoot = document.getElementById('app');

renderTemplate();
//const User = {
//	name: "Sangeet",
//	age: 23,
//	location: "London, Ontario"
//}
//const userName = 'Sangeet';
//const userAge = 24;
//const userLocation = "Brampton";
//
//function getLocation(location){
//	if(location) 
//		return (<p>Location: {location}</p>)
//	else
//		return undefined
//		
//};
//
//const templatetwo = (
//	<div>
//		<h1> {User.name ? User.name : "Anonymous"} </h1>
//		{(User.age && User.age >= 18) && <p> Age:  {User.age} </p>} 
//		{getLocation(User.location)}
//	</div>
//
//);

//this is within the src file where the raw code is going and it is going to be turned into the react/babelled changes in the other source file
//takes two constiables, first is JSX constiable, DOM element (maybe a new div)
//in order to get your code to work, you need to realize that you have to  use BABEL
//in order to use BABEL, you need to have specific plug ins and presets

//first lesson of JSX, when working with it, we can only have ONE root element. meaning everything must be enclosed inside one massive tag

//Objects are not valid as a react child object so we have to use their specific attributes

// another feature we are going to checkout is: Conditional Rendering - we can do simple function, but you can also use ternary operators
// undefined, null and booleans are IGNORED by JSX
