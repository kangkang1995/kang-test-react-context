import React, { Component } from 'react';

class BtnView extends Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.testClick}>
          点击我变颜色
        </button>
      </React.Fragment>
    );
  }
}

export default BtnView;
