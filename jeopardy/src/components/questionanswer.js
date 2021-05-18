import React from 'react'
import '../App.css'
import Welcome from './Welcome'

class Questionanswer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

//     showAnswer(){
//     let showit = document.getElementsByClassName("answer2")[0]
//     if(showit.style.display === 'block'){
//         showit.style.display = 'none'
//     }else{
//         showit.style.display = 'block'
//     }
// }




    
    render(){
        //to see if were passing the mewthods correctly and or properties
        // console.log(this.props)
        return(
            <div className="Questions">
                    <Welcome   value ={this.props.value}/>
                    <button className="btnQ" onClick={this.props.componentDidMount}>Get Question</button>
                    <div><span>Category:</span> <div className='words'>{this.props.category}</div></div>
                    <div><span>Points:</span><div className='words'> {this.props.value}</div></div>
                    <div><span>Question:</span> <div className='words'>{this.props.question}</div></div>
            
                    <div className='answer'>
                        <h2 className="h2">{this.props.show ? this.props.answer : null}</h2>
                        <button id="btnA" onClick={this.props.showAnswer}>Show Answer</button>
                    </div>

            </div>
        )
    }
}
export default Questionanswer