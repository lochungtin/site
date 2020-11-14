import React from 'react';

import '../App.css';
import skills from '../img/skill-graph.png';

export default class Section extends React.Component {
    render() {
        return (
            <div className="skillContainer">
                <img className="skillGraph" src={skills} alt="" />
                <div className="skillLableContainer">
                    <div className="skillContext">
                        <p className="skillTitle">Skill Graph</p>
                        <br />
                        <p>To the left is a graph of all the skills that I know in relationship with one another.</p>
                        <br />
                        <p>The larger the circle is, the more proficient I am at that specific skill.</p>
                    </div>
                    <div className="skillLabel">
                        <div className="skillDot" style={{ backgroundColor: '#a0203c' }} />
                        <p className="skillText">Language</p>
                    </div>
                    <div className="skillLabel">
                        <div className="skillDot" style={{ backgroundColor: '#a95163' }} />
                        <p className="skillText">Framework</p>
                    </div>
                    <div className="skillLabel">
                        <div className="skillDot" style={{ backgroundColor: '#a3757d' }} />
                        <p className="skillText">Platform</p>
                    </div>
                    <div className="skillLabel">
                        <div className="skillDot" style={{ backgroundColor: '#959595' }} />
                        <p className="skillText">Environment</p>
                    </div>
                </div>
            </div>
        );
    }
}