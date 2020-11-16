import React from 'react';

import { section1, section2 } from '../data/about';

export default class Section extends React.Component {
    render() {
        return (
            <> {
                !this.props.mobile ? <>
                    <div className="aboutContainer">
                        <div className="aboutSection">
                            <p className="aboutSectionTitle">{section1.title}</p>
                            {section1.content.map(item => {
                                return (
                                    <p className="aboutSectionPara">{item}</p>
                                );
                            })}
                        </div>
                        <div className="aboutSection">
                            <p className="aboutSectionTitle">{section2.title}</p>
                            {section2.content.map(item => {
                                return (
                                    <p className="aboutSectionPara">{item}</p>
                                );
                            })}
                        </div>
                    </div>
                </> : 
                <>
                    <p>cunt</p>
                </>
            }
            </>
        );
    }
}