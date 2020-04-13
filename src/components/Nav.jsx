import React, {Component} from "react";


class Nav extends Component {
    constructor(){
        super();
        this.state = {
            links: [
                {
                    title: "Home",
                    action: () => alert("home")
                },
                {
                    title: "How",
                    action: () => alert("home")
                },
                {
                    title: "What Will Happen?",
                    action: () => alert("home")
                },
                {
                    title: "Economy",
                    action: () => alert("home")
                },
                {
                    title: "Learn",
                    action: () => alert("home")
                }
            ],
            position: "relative",
            toggleState: "nav__toggle-open",
            mobileMenu: false
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > 200){
                this.setState({
                    position: "fixed"
                })
            }else{
                this.setState({
                    position: "relative"
                })
            }
        });
    }

    toggleMenu(){
        this.setState({
            toggleState: this.state.toggleState == "nav__toggle-open" ? "nav__toggle-closed" : "nav__toggle-open",
            mobileMenu: !this.state.mobileMenu
        });
    }

    render(){
        return(
            <div className="nav" style={{position: this.state.position}}>
                <div className="nav__title">Open Banking</div>
                <div className="nav__links">
                    {this.state.links.map(({title, action}) => {
                        return <a onClick={action} key={title}>{title}</a>
                    })}
                </div>
                <div className={"nav__toggle "+this.state.toggleState} onClick={() => this.toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                {
                    this.state.mobileMenu && 
                    <div className="nav__mobile-menu">
                        {this.state.links.map(({title, action}) => {
                            return <a onClick={action} key={title}>{title}</a>
                        })}
                    </div>
                }
            </div>
        )
    }
}


export default Nav;