//since we are trying to use the power of using react components, we wil USE IT!
// we extend the class, we have global React and ReactDOM
//React.Component require that you define a special method that it will call itself

//when you are using the handle function, you wanna be careful because you do lose the power to use the 'this' property
//to remain in control of it... make sure you use bind(object you are referencing) ... check out the example on Options class
class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        const options = ['thing one', 'thing two', 'thing three', 'thing four'];

        return(
            <div>
            <Header title={title} subtitle = {subtitle}/>
            <Action/>
            <Options options={options}/>
            <AddOption/>
            </div>
        )
    }
}
class Header extends React.Component{
    //must always create this method
    
    //we can use something called props that are pretty cool in react, they are kinda like ids and attributes
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2> {this.props.subtitle}</h2>
            </div>
        );
    }
}



class Action extends React.Component{
    //lets provide the button with some local method for functionality
    handlePick(){
        alert('Handle Pick was called!');
    }
    render(){
        return (
            <div>
            <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
//however using bind is cost inefficient SO WE ARE GOING TO REDEFINE THE REACT.COMPONENT CONTRUCTOR
    constructor(props){
        //react.component actually comes with props attribute so we NEED to call super(props)
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
handleRemoveAll(){
    console.log(this.props.options)
}

 render (){
     return(
         <div>
         <button onClick={this.handleRemoveAll.bind(this)}> Remove All </button>
         {
             this.props.options.map((mapping) => {
                 return <Option key={mapping} optionText = {mapping} />
            })
         }
         </div>
         )
 }   
}

class AddOption extends React.Component{
    
    handleAddOption(e) {
            e.preventDefault();
            //creating something to hold the value user might type
            const option = e.target.elements.option.value.trim();

            //check if the string ever exists
            if(option){
                alert(option);
            }
    }
    render(){
        return(
            <div>
            <form onSubmit = {this.handleAddOption}>
                <input type="text" name="option"/>
                <button> Submit</button>
                
            </form>
            </div>
            )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>
            {this.props.optionText}
            </div>
        )
    }
}
//there is also such a thing as nesting components

//to use this, all i have to do is call the class Header as a attribute
// <Header/>

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));