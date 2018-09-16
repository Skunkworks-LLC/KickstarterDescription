import React, { Component} from 'react';

class NavButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navButtonDiv" onClick={this.props.buttonTask}>
                <a href="javascript:void(0)">
                    <div className="navButton"> {this.props.text} </div>
                </a>
            </div>
        );
    }
}

export default NavButton;