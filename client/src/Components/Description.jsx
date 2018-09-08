import React, { Component} from 'react';
import $ from 'jquery';
import NavBar from './DescriptionNavBar.jsx';
import CampaignTab from './CampaignTab.jsx';
import FaqTab from './FaqTab.jsx';
import UpdatesTab from './UpdatesTab.jsx';
import CommentsTab from './CommentsTab.jsx';
import Velocity from 'velocity-animate';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'campaign'
        }
        this.inTransition = false;
        this.tabRequest = null;
    }
    
    fadeIn(tab, callback) {
        let fadeIn = {opacity: 100, width: 100, flex: 1};
        Velocity($(tab), fadeIn, {
            display: 'flex',
            duration: 1200,
            complete: callback
        });
    }

    fadeOut(tab, callback) {
        let fadeOut = {opacity: 0, width: '0px', flex: 0}
        Velocity($(tab), fadeOut, {
            display: 'none',
            duration: 500,
            complete: callback
        });
    }

    changeTab(newTabName) {
        if (this.state.currentTab === newTabName) return;

        if (!this.inTransition) {
            this.inTransition = true;
            let currentTab = this.refs[this.state.currentTab].refs.container;
            let newTab = this.refs[newTabName].refs.container;
            this.setState({currentTab: newTabName}, () => {
                this.fadeOut(currentTab, () => {
                    this.fadeIn(newTab, () => {
                        this.inTransition = false;
                        if (this.tabRequest) {
                            let wantedTabName = this.tabRequest;
                            this.tabRequest = null;
                            this.changeTab(wantedTabName);
                        }
                    });
                });
            });
        } else {
            this.tabRequest = newTabName;
        }
    }

    render() {
        return (
            <div class="detailsContainer">
                <NavBar changeTab={this.changeTab.bind(this)}/>
                <div class="informationDiv">
                    <CampaignTab ref="campaign"/>
                    <FaqTab ref="faq"/>
                    <UpdatesTab ref="updates"/>
                    <CommentsTab ref="comments"/>
                </div>
            </div>
        );
    }
}

export default App;