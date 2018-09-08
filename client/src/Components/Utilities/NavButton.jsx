import React, { Component} from 'react';

class NavButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="navButtonDiv" onClick={this.props.buttonTask}>
                <div class="navButton"> {this.props.text} </div>
            </div>
        );
    }
}

export default NavButton;