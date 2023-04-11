import React, { Component } from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            timer: 0 ,
            interval: null , 
        }
    }

    componentDidMount(){
        this.setState({
            interval: setInterval(() =>{
                this.setState({ timer: this.state.timer +1})
            },1000 )
        })
    }

    render(){
        return (
            <div>
                <h4>Timer</h4>
                {this.state.timer}
            </div>
        )
    }
}

export default Timer