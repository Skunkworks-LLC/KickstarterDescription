import React, { Component} from 'react';
import './Style/CommentsTab.css';

class CommentsTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="commentsTabContainer"
                 ref="container"> 
                COMMENTS TAB
            </div>
        );
    }
}

export default CommentsTab;