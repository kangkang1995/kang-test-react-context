import React from 'react';
import ThemeContext from '../../ThemeContext';
import BtnView from '../../btnView/btnView'
class Title extends React.Component {

  _testClick = (context) => {
    console.log(context)
    context.changeColor();
  }
  render() {

    return (
      <ThemeContext.Consumer>
        {context => {
          return <>
            <h1 style={{ background: context.style.background, color: context.style.color }} onClick={() => { this._testClick(context) }}>
              {this.props.children}
            </h1>
            <BtnView
              testClick={() => { this._testClick(context) }}
            />
          </>
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Title;