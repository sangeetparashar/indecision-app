"use strict";

console.log("App.js is running");

//run  it by typing: live-server public

// user this to render REACT stuff: babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch


//JSX- JavaScript XML
//way for us to inect our data into templates

var app = {
    heading: "Indecision Application",
    subtitle: "Put your life in the hands on my app",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    //creating something to hold the value user might type
    var option = e.target.elements.option.value;

    //check if the string ever exists
    if (option) {
        app.options.push(option);
        //lets wipe the input
        e.target.elements.option.value = '';
        renderTemplate();
    }
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
};
var removeOptions = function removeOptions() {
    app.options = [];
    renderTemplate();
};
//we are going to use "map" to manipulate the array

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " ",
            app.heading,
            " "
        ),
        app.subtitle && React.createElement(
            "p",
            null,
            " ",
            app.subtitle
        ),
        React.createElement(
            "p",
            null,
            " ",
            app.options.length > 0 ? 'Here are your options:' : 'No options!',
            " "
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (mapping) {
                return React.createElement(
                    "li",
                    null,
                    " ",
                    mapping
                );
            })
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: makeDecision },
            " Pick an option "
        ),
        React.createElement(
            "button",
            { onClick: removeOptions },
            " Reset All "
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

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
