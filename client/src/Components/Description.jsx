import React, { Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="detailsContainer">
                <div class="detailsNav">
                <div class="navSpace"></div>
                <div class="navButtonsContainer">
                    <div class="navButtonDiv">
                        <div class="navButton"> Campaign </div>
                    </div>
                    <div class="navButtonDiv">
                        <div class="navButton"> FAQ </div>
                    </div>
                    <div class="navButtonDiv">
                        <div class="navButton"> Updates </div>
                    </div>
                    <div class="navButtonDiv">
                        <div class="navButton"> Comments </div>
                    </div>
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
                            Remind me
                        </div>
                    </div>
                </div>
                <div class="navSpace"></div>
                </div>
                <div class="informationDiv">
                </div>
            </div>
        );
    }
}

export default App;