//since we are trying to use the power of using react components, we wil USE IT!
// we extend the class, we have global React and ReactDOM
//React.Component require that you define a special method that it will call itself
class IndecisionApp extends React.Component{
    render(){
        const title = "Indecision App";
        const subtitle = "Put your life in the hands of a computer";
        return(
            <div>
            <Header title={title} subtitle = {subtitle}/>
            <Action/>
            <Options/>
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
    render(){
        return (
            <div>
            <button>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
 render (){
     return(
         <div>
         <Option/>
         <Option/>
         <Option/>
         </div>
         )
 }   
}

class AddOption extends React.Component{
    render(){
        return(
            <div>
            Add options here by creating a form   
        </div>
            )
    }
}

class Option extends React.Component{
    render(){
        return (
            <div>Option component here</div>
        )
    }
}
//there is also such a thing as nesting components

//to use this, all i have to do is call the class Header as a attribute
// <Header/>

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));