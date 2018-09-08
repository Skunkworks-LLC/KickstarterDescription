import React, { Component} from 'react';

class CampaignTab extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="campaignTabContainer" ref="container"> 
                <p> Guitar Education is in Trouble... </p>
                <p> ...and only you can help save it! </p>
                <p> Overly dramatic? Nope! The proliferation of online tools - especially YouTube - has brought us to the brink of an extinction event for great guitar instruction. </p>
                <p> If you’re an aspiring Rock & Metal guitarist, you need an Avatar - and fast. You know, like that “Dune” dude, or He-Man. </p>
                <p> Word on the street is, a Six String Savior is about to manifest in book form - a Mighty Tome that harkens back to that guitar-centric era of the 80s and early 90s; before the Internet, before the over-reliance on videos, and before great guitar playing disappeared from the radio and popular culture. In other words, beginning guitarists - </p>
            </div>
        );
    }
}

export default CampaignTab;