
let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    if(count > 0){
        count--;
    }
    renderCounterApp();
}

const reset = () => {
    count = 0;
    renderCounterApp();
}





const renderCounterApp = () => {
    const templatetwo = (
    <div>
        <h1>Count: {count} </h1>
        <button onClick={addOne}> +1</button>
        <button onClick={minusOne}> -1 </button>
        <button onClick={reset}> reset </button>
    
    </div>
    );
    ReactDOM.render(templatetwo, appRoot);
}

renderCounterApp();