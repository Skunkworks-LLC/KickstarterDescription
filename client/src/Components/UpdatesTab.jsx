import React, { Component} from 'react';
import moment from 'moment';
import './Style/UpdatesTab.css';

class UpdatesTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="updatesTabContainer" ref="container"> 
                <div className="updatesGrowDiv">
                    <div className="updatesMainDiv">
                        <div className="projectLaunchDiv">
                            <div className="projectLaunchDate"> {moment(this.props.launchDate).format('LL')}  </div>
                            <div className="projectLaunchText"> Project launched  </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdatesTab;