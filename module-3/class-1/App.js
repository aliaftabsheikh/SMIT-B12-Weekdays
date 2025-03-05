  // const heading = React.createElement('h1', 
        //     '{}', 'Hello World from React !'
        // )

const parent = React.createElement(
            
    'div',

     {id: "parent", className: "parentClass"},
    
    [
    React.createElement('h1', '{}', 'Hello World from React H1 !'),

    React.createElement('h2', '{}', 'Hello World from React H2 !')
    ]
)

    const root = ReactDOM.createRoot(document.getElementById('root'))

    root.render(parent)