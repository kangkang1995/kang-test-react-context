import React, { Component } from 'react';
import './App.css';
import Header from './context/header/header';
import ThemeContext from './context/ThemeContext';
class App extends Component {

  constructor(props) {
    super(props);

    this._changeColor = () =>{
      let {style} = this.state;
      
      this.setState({
        style:Object.assign({},style,{background:"red"})
      })
    }
    
    this.state = {
      style: {
        background: 'green', color: 'white'
      },
      changeColor:this._changeColor,
    }
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider 
          value={this.state}
        >
          <Header />
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
