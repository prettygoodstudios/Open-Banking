import React, {Component} from "react";
import Header from "./Header.jsx";
import How from "./How.jsx";
import What from "./What.jsx";
import Learn from "./Learn.jsx";
import Economy from "./Economy.jsx";

class App extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Header/>
                <How />
                <Economy />
                <What />
                <Learn />
                <div className="footer">
                    Miguel Rust &copy;2020
                </div>
            </div>
        );
    }
}

export default App;