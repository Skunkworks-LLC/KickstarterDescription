import React, { Component} from 'react';
import './Style/UpdatesTab.css';

class UpdatesTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="updatesTabContainer"
                 ref="container"> 
                UPDATES TAB 
            </div>
        );
    }
}

export default UpdatesTab;