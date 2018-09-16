import React, { Component} from 'react';
import NavButton from './Utilities/NavButton.jsx';
import Heart from '../Images/Heart.png';
import './Style/DescriptionNavBar.css';

class DescriptionNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="detailsNav">
                    <div className="navSpace"></div>
                    <div className="navButtonsContainer">
                        <NavButton text="Campaign" 
                                   buttonTask={() => { this.props.changeTab('campaign')}}/>
                        <NavButton text="FAQ" 
                                   buttonTask={() => { this.props.changeTab('faq')}}/>
                        <NavButton text="Updates" 
                                   buttonTask={() => { this.props.changeTab('updates')}}/>
                        <NavButton text="Comments" 
                                   buttonTask={() => { this.props.changeTab('comments')}}/>
                    </div>
                    <div className="backProjectContainer">
                        <div className="backProjectDiv">
                            <div className="buttonDiv">
                                    <div className="backProjectButton">
                                        <a href="javascript:void(0)">
                                            Back this project
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="remindMeDiv"> 
                            <div className="remindMeButton">
                                <img className="heartImg" src={Heart}></img>
                                <div className="remindMeText"> 
                                    <a href="javascript:void(0)">
                                        Remind me
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navSpace"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default DescriptionNavBar;