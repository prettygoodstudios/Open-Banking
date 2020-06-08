import React, {Component} from "react";
import ReactHtmlParser from 'react-html-parser'; 
import { book } from "../styles/icons";

class Learn extends Component{
    render(){
        return(
            <div className="learn">
                <h1>Where can I learn more?</h1>
                <div className="icon-holder">
                    { ReactHtmlParser( book.html ) }
                </div>
                <p>The Stanford Vienna Transatlantic Technology Law Forum has an in-depth case study on open banking. You can read it by clicking the link below.</p>
                <div className="link-box">
                    <a href="https://law.stanford.edu/publications/a-new-banking-paradigm-the-state-of-open-banking-in-europe-the-united-kingdom-and-the-united-states/">Read More!</a>
                </div>
            </div>
        )
    }
}

export default Learn;