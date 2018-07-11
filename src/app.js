console.log('App.js is running!');

// if statements
// ternary operators
// logical and operator

const app = {
    title: 'My test title',
    subtitle: 'My test subtitle',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '' 
        // option = '';
        rerenderOptions();               
    }
        
}

const appRoot = document.getElementById('app');

const rerenderOptions = ()=>{
    // JSX - JavaScript XML
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? 'Here you options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {app.options.map((option, i)=> {
                    return <li key={i}>{option}</li>
                })}            
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

rerenderOptions();