import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>react-playground/babel-standalone</h1>
                <p>Hello from JSX dynamically compiled by Babel in the browser with React 19! The current time
                    is {new Date().toLocaleTimeString()}.</p>
            </>
        );
    }
}

const root = document.getElementById("root");
createRoot(root).render(<App/>);
