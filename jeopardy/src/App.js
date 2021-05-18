
import './App.css';
import React from 'react';
import Api from './components/api'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      

    }
    
}


render(){

  return (
    <div className="container">
     <Api/>
    </div>
  );
}
}

export default App;
