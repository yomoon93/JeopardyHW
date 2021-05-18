import React from 'react'

// window.score = 0
class Welcome extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    
    reset=()=>{
        this.setState({score:this.state.score = 0})
    }
  
    increaseB =()=> {
        this.setState({score: this.state.score + this.props.value})
    }
    decreaseB = () =>{
        this.setState({score: this.state.score - this.props.value})
    }

    // increaseB(){
    //     window.score = window.score+1
    //     console.log(window.score)
    //     document.getElementById('showScore').innerHTML = window.score
    // }
    // decreaseB(){
    //     window.score = window.score-1
    //     console.log(window.score)
    //     document.getElementById('showScore').innerHTML = window.score
    // }

    render(){
        return(
            <div className = "Play">
                <h1>Welcome to Jeopardy!</h1>
                <h2 id="showScore">Score :{this.state.score}</h2>
                <button id="decrease" onClick={this.decreaseB}>Decrease</button><button id="increase" onClick={this.increaseB}>Increase</button><button id="reset" onClick={this.reset}>Reset</button>
                <h2>Let's Play!</h2>

            </div>


        )
    }



}
export default Welcome