import React, {Component} from "react";

class Header extends Component{
    constructor(){
        super();
        this.state = {
            zeroes: []
        }
    }

    componentDidMount(){
        this.instantiateZeroes();
        setInterval(() => this.update(), 1000/60)
        addEventListener("resize", () => this.instantiateZeroes())
    }

    instantiateZeroes(){
        const zeroes = [];
        const length = 20;
        for (let i = 0; i < length; i++){
            if(window.innerWidth > 800){
                zeroes.push({
                    x: 100+(i%(length/2))*15,
                    y: 200+(i > length/2 ? 100 : 0),
                    val: i % 2
                });
            }else{
                zeroes.push({
                    x: 100+(i%(length/2))*15,
                    y: 40+(i > length/2 ? 40 : 0),
                    val: i % 2
                }); 
            }
        }
        this.setState({
            zeroes
        });
    }

    update(){
        const zeroes = this.state.zeroes;
        for(let i = 0; i < zeroes.length; i++){
            zeroes[i].x += 5;
            if(window.innerWidth > 800){
                if(zeroes[i].x > window.innerWidth/2-200){
                    zeroes[i].x = 100;
                }
            }else{
                if(zeroes[i].x > window.innerWidth-100){
                    zeroes[i].x = 50;
                }
            }
        }
        this.setState({
            zeroes
        })
    }

    render(){
        return(
            <div className="header">
                <h1>What is Open Banking?</h1>
                <div className="icons">
                    <i className="fas fa-university"></i>
                    <i className="fas fa-mobile-alt"></i>
                    {
                        this.state.zeroes.map(({x, y, val}) => {
                            return(
                                <span style={{left: x, top: y, position: 'absolute', fontSize: '15px'}}>{val}</span>
                            )
                        })
                    }
                </div>
                <p>Open banking is a concept that your financial information belongs to you and should be easily acessible.</p>
            </div>
        )
    }
}

export default Header;