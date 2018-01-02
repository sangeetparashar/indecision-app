let button = "show details";
let flag = false;

const toggle = () => {
    flag = !flag;
    render();
}
const render = () => {
const workit = (
        <div>
        <p><h1> Visibility Toggle </h1> </p> 
        <button onClick = {toggle}> {flag === false ? "Show Details" : "Hide Details"} </button>
        {flag === true && (
            <div> <h3> These are the details that show up if you have the visibility on </h3> </div>
        )}
        </div>
    )


const appRoot = document.getElementById('app');
ReactDOM.render(workit, appRoot);
}
render();
