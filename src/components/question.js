import React from 'react';
import { connect } from 'react-redux';
import {checkAnswer} from  '../actions'
class Quiz extends React.Component{
  constructor(props){
    super(props);
    this.state={
      check:this.props.check
    }
    this.props.history.push({
       pathname: '/home/1'
    });
  }
  setinput(e,i){
    let data = {...this.state.check};
      data.question[i].givenAnswer = e.target.value;
      if(data.question[i].answer == e.target.value){
        data.correct++;
      }

      this.setState({check:data});
  }
  submitDispatch(){
    let data = parseInt(this.props.match.params.id)+1;
    this.props.inputSet(this.state.check);
    if(this.state.check.question.length > data-1){
      this.props.history.push({
         pathname: '/home/'+ data
      });
    }
    else{
      this.props.history.push({
         pathname: '/result'
      });
    }

  }
  goBack(){
    this.props.history.goBack();
  }
  render(){
    const index = parseInt(this.props.match.params.id) ? parseInt(this.props.match.params.id):1;
    const question = this.state.check.question;

    return (
      <div><b> Answer in true or false and not capitalized.</b>
        <p>{question[index-1].question}</p>
        <div>
            <input type="text" value={question[index-1].givenAnswer} onInput={(e) => this.setinput(e,index-1)}/>
            </div>
            <a href="javascript:void(0)" onClick={() => this.goBack()}>Previous</a>
            <a href="javascript:void(0)" onClick={() => this.submitDispatch()}>{
            question.length == index-1 &&
            <p>result</p>
            ||
            <p>Next</p>
          }</a>


        </div>

    )
  }
}
const mapStateToProps = store => {
  return store
}
const mapDispatchToProps = (dispatch) => {
    return {
        inputSet: (num) => {
            dispatch(checkAnswer(num));
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz)
