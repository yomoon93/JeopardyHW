import React from 'react'
import Questionanswer from './questionanswer'




class Api extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                question:'',
                answer:'',
                category:'',
                value:'',
                show:false
                
                
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount() {
        fetch('http://jservice.io/api/random')
        .then(response => response.json())
        .then(random => {
                this.setState({
                    question:random[0].question,
                    answer:random[0].answer,
                    category:random[0].category.title,
                    value:random[0].value,
                    show:false
                })
               
            })
        // this.state.show = false;
        } 

        showAnswer = () =>{
            this.setState({show:!this.state.show})
            //its either going ot false or true
            // condition ? true : false <--- the way to think when doing ternary
        }
        /*
        a method should not be passed as a state but instead should be passed 
        with the this statement. only for class components are this statements needed.
        States are where you use the this.state.property

        */
        
        render(){
            return(
                <div>
                    <Questionanswer showAnswer={this.showAnswer} show = {this.state.show} componentDidMount = {this.componentDidMount} question = {this.state.question} answer = {this.state.answer} value = {this.state.value} category = {this.state.category}/>         
                </div>

                )
        }
}
export default Api