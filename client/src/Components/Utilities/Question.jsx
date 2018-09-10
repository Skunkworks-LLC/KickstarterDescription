import React, { Component} from 'react';
import '../Style/Question.css';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAnswer: false
        }
    }

    toggleAnswer({style}) {
        let shouldShowAnswer = !this.state.showAnswer;
        style.display = (shouldShowAnswer) ? 'block' : 'none';
        this.setState({showAnswer: shouldShowAnswer});
    }

    render() {
        return (
            <div className="questionBox" onClick={() => {this.toggleAnswer(this.refs.answer)}}>
                <div className="questionContent">
                    <p className="questionText"> {this.props.inquiry} </p>
                    <p className="answer" ref="answer"> 
                        {this.props.answer}
                        <p className="answerDate"> March 1 2018 </p> 
                    </p>
                </div>
                <div className="arrowContainer"> > </div>
            </div>
        );
    }
}

export default Question;