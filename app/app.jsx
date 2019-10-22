import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import List from "./components/List";
import store from "./storeConf";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Todo list App</h1>
                <Provider store={store}>
                    <List />
                </Provider>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
export default App;
