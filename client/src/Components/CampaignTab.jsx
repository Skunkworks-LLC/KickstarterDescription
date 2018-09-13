import React, { Component} from 'react';
import './Style/CampaignTab.css';

class CampaignTab extends Component {
    constructor(props) {
        super(props);
    }

    displayContent({content}) {
        let sections = [];
        if (content) {
            sections.push(this.createSection(content.aboutSection));
            content.otherSections.forEach((section, index) => {
                sections.push(this.createSection(section, index));
            });
        }
        return sections;
    }

    createSection(section, index) {
        return (
            <div className="sectionContainer" key={index + Math.random()}>
                <p className="sectionTitle"> <b> {section.title} </b>  </p> 
                <img src={section.image} className="sectionImage"></img>
                <p className="sectionParagraph"> 
                    {section.paragraph}
                </p>
            </div>
        );
    }

    render() {
        return (
            <div className="campaignTabContainer" ref="container"> 
                {this.displayContent(this.props)}
            </div>
        );
    }
}

export default CampaignTab;