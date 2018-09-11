import React, { Component} from 'react';

class NavButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navButtonDiv" onClick={this.props.buttonTask}>
                <div className="navButton"> {this.props.text} </div>
            </div>
        );
    }
}

export default NavButton;