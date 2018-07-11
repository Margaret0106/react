const someId = 'myidhere';

let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count);    
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne');    
};
const reset = () => {
    count = 0;
    renderCounterApp();
    console.log('reset');    
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template3 = (
        <div>
            <h1>Count: {count}</h1>
            <button id={someId} className="button" onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    
    console.log(template3);

    ReactDOM.render(template3, appRoot);
}

renderCounterApp();