import React, { Component} from 'react';
import NavButton from './Utilities/NavButton.jsx';
import Heart from '../Images/Heart.png';

class DescriptionNavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="detailsNav">
                    <div class="navSpace"></div>
                    <div class="navButtonsContainer">
                        <NavButton text="Campaign" 
                                   buttonTask={() => { this.props.changeTab('campaign')}}/>
                        <NavButton text="FAQ" 
                                   buttonTask={() => { this.props.changeTab('faq')}}/>
                        <NavButton text="Updates" 
                                   buttonTask={() => { this.props.changeTab('updates')}}/>
                        <NavButton text="Comments" 
                                   buttonTask={() => { this.props.changeTab('comments')}}/>
                    </div>
                    <div class="backProjectContainer">
                        <div class="backProjectDiv">
                            <div class="buttonDiv">
                                <div class="backProjectButton">
                                    Back this project
                                </div>
                            </div>
                        </div>
                        <div class="remindMeDiv"> 
                            <div class="remindMeButton">
                                <img class="heartImg" src={Heart}></img>
                                <div class="remindMeText"> Remind me </div>
                            </div>
                        </div>
                    </div>
                    <div class="navSpace"></div>
                </div>
            </React.Fragment>
        );
    }
}

export default DescriptionNavBar;