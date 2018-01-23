import React from 'react';
import { connect } from 'react-redux';
import {checkAnswer} from  '../actions'
class Quiz extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state={
      check:this.props.check
    }

  }

  goBack(){
    this.props.history.goBack();
  }
  render(){
    return (
      <div>
        Score for the quiz is {this.state.check.correct}
        </div>

    )
  }
}
const mapStateToProps = store => {
  return store
}


export default connect(mapStateToProps)(Quiz)
