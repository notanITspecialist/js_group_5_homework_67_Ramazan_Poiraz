import React, {Component} from 'react';
import {connect} from "react-redux";

import './colcylator.css'

class Colnylator extends Component {
    render() {
        const numbers = [1,2,3,4,5,6,7,8,9,0];
        const operators = ['+','-','*','/'];
        return (
            <div className='calcylator'>
                <input disabled onChange={this.props.addOne} value={this.props.eval} id='inp' />
                <div className='operators'>
                    {operators.map(oper => <button key={oper} onClick={this.props.addSymbol} value={oper}>{oper}</button>)}
                </div>
                <div className='numbers'>
                    {numbers.map(num => <button key={num} onClick={this.props.addSymbol} value={num}>{num}</button>)}
                    <button onClick={this.props.delete} value='Del'>Del</button>
                    <button onClick={this.props.getTotal}>=</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      eval: state.eval
  }
};

const mapDispatchToProps = dispatch => {
  return {
      addOne: e => dispatch({type: 'EVAL', eval: e.target.value}),
      addSymbol: e => dispatch({type: 'ADD-SYMBOL', symbol: e.target.value}),
      delete: () => dispatch({type: 'DELETE-SYMBOL'}),
      getTotal: () => dispatch({type: 'GET-TOTAL'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Colnylator);