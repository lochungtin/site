import React from 'react';

export default class Section extends React.Component {
    render() {
        return (
            <div className="homeBackground-">
                <div className="homeContainer">
                    <div className="nameContainer">
                        <span className="bigName">LO<span className="accent"> TIMOTHY </span></span>
                        <span className="smolName">CHUNG TIN</span>
                    </div>
                    <div className="subtextContainer">
                        <span className="subtext">Current Student</span>
                        <span className="subtext accent">{"</>"}</span>
                        <span className="subtext">Rising Developer</span>
                    </div>
                </div>
            </div>
        );
    }
}