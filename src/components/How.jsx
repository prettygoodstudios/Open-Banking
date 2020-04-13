import React, {Component} from "react";

class How extends Component {
    render(){
        return(
            <div className="how">
                <h1>How exactly does Open Banking work?</h1>
                <div className="api">API</div>
                <p>Open Banking regulations mandate that financial institutions provide publicly available application programming interfaces (APIs). APIs are mechanisms that allow applications on computers to communicate. These APIs allow developers to securely access your financial information and services.</p>
            </div>
        )
    }
}

export default How;