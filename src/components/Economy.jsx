import React, {Component} from 'react';

class Economy extends Component{

    constructor(){
        super();

        this.state = {
            money: []
        }
    }

    componentDidMount(){
        this.inititalizeMoney();
        addEventListener("resize", () => this.inititalizeMoney())
        setInterval(() => this.update(), 1000/60)
    }

    update(){
        const money = this.state.money;

        for(let i = 0; i < money.length; i++){
            money[i].y-=5;
            if(money[i].y < 30){
                money[i].y = 400;
            }
        }

        this.setState({
            money
        })
    }

    inititalizeMoney(){
        const money = [];
        const size = 60;
        for(let i = 0; i < size; i++){
            money.push({
                x: Math.floor(Math.random()*window.innerWidth),
                y: 400+Math.floor(300*Math.random())
            });
        }

        this.setState({
            money
        });
    }

    render(){
        return(
            <div className="economy">
                <h1>What will open banking regulations do to the economy?</h1>
                <div className="money">
                    {
                        this.state.money.map(({x, y}, i) => {
                            return <span style={{left: x, top: y, position: 'absolute', fontSize: '30px', display: (y>400) ? 'none' : 'block'}} key={i}>$</span>
                        })
                    }
                    <i className="fas fa-chart-line"></i>
                </div>
                <p>Open banking regulations will increase investment in the financial technology industry due to the democratization of financial APIs. Currently only <span>5.9%</span> of financial institutions offer publicly available APIs. With open banking this would change.</p>
            </div>
        )
    }
}

export default Economy;