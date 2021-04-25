import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      name : "Ahmed",
      counter : 1,
    }
    // this.changeName = this.changeName.bind(this)
  }
  // changeName(){
  //   this.setState({
  //     name : 'Eslam'
  //   })
  // }


  // changeName=()=>{
  //   this.setState({
  //     name : 'Mahmoud'
  //   })
  // }
  increase = ()=>{
    this.setState({
      counter: this.state.counter+1
    })
  }
  decrease = ()=>{
    this.setState({
      counter: this.state.counter-1
    })
  }

  // changeCounter=(op)=>{
  //   if(op == '+')
  //   {
  //     this.setState({
  //       counter: this.state.counter+1
  //     })
  //   }
  //   else if(op == '-'){
  //     this.setState({
  //       counter: this.state.counter-1
  //     })
  //   }
  // }

  
  changeCounter(op){
    if(op == '+')
    {
      this.setState({
        counter: this.state.counter+1
      })
    }
    else if(op == '-'){
      this.setState({
        counter: this.state.counter-1
      })
    }
  }
  render(){
    return (
      <div>
        <Header />
        <div className="container my-3" id="container">
          
          {/* <button onClick={this.changeName}>Change Name</button> */}
          {/* Welcome {this.state.name} */}
  {/* 
          <button onClick={this.increase}>Increase</button>
          <button onClick={this.decrease}>Decrease</button> */}
         
         <Counter />
        </div>
        <Footer />
      </div>
    )
  }

}
class Counter extends React.Component{

  constructor(){
    super();
    this.state={
      counter : 1,
    }
  }

  
  
  changeCounter(op){
    if(op == '+')
    {
      this.setState({
        counter: this.state.counter+1
      })
    }
    else if(op == '-'){
      this.setState({
        counter: this.state.counter-1
      })
    }
  }

  render(){
    return (
      <div className="container my-3" id="container">
          
          <p className="lead">Counter: <span className="text-danger">{this.state.counter}</span></p>
          <button className="btn btn-outline-primary m-1" onClick={()=>{this.changeCounter('+')}}>Increase</button>
          <button className="btn btn-outline-success m-1" onClick={()=>{this.changeCounter('-')}}>Decrease</button>
        </div>
    )
  }
}
class Header extends React.Component{
  render(){
    return (
      <div style={{ 
        backgroundColor:"#999"
       }} id="container">
        Welcome To our Website The Header
      </div>
    )
  }
}
  class Footer extends React.Component{
    render(){
      return (
        <div style={{ 
          backgroundColor:"#999"
         }} id="container">
          Copyrights Reserved
        </div>
      )
    }
  

  }

export default App;
