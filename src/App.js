import React, { Component } from 'react';
import './App.css';
import Header from './context/header/header';
import BtnView from './context/btnView/btnView';
import ThemeContext from './context/ThemeContext';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      style: {
        background: 'green', color: 'white'
      }
    }
  }

  _changeColor = () =>{
    let {style} = this.state;
    
    this.setState({
      style:Object.assign({},style,{background:"red"})
    })
  }

  render() {
    return (
      <React.Fragment>
        <ThemeContext.Provider 
          value={this.state.style}
        >
          <Header />
        </ThemeContext.Provider>
        <BtnView
          changeColor = {this._changeColor}
        />
      </React.Fragment>
    );
  }
}

export default App;
