import React from 'react';

import { section1, section2 } from '../data/about';

export default class Section extends React.Component {

    style = name => {
        return this.props.desktop ? name : name + "-m";
    }

    render() {
        return (

            <div className={this.style("aboutContainer")}>
                <div className={this.style("aboutSection")}>
                    <p className={this.style("aboutSectionTitle")}>{section1.title}</p>
                    {section1.content.map(item => {
                        return (
                            <p className={this.style("aboutSectionPara")}>{item}</p>
                        );
                    })}
                </div>
                <div className={this.style("aboutSection")}>
                    <p className={this.style("aboutSectionTitle")}>{section2.title}</p>
                    {section2.content.map(item => {
                        return (
                            <p className={this.style("aboutSectionPara")}>{item}</p>
                        );
                    })}
                </div>
            </div>
        );
    }
}