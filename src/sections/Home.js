import React from 'react';

export default class Section extends React.Component {

    render() {
        return (
            <>
                {this.props.desktop ?
                    <div className="homeContainer">
                        <div>
                            <span className="bigName">LO<span className="accent"> TIMOTHY </span></span>
                            <span className="smolName">CHUNG TIN</span>
                        </div>
                        <div className="subtextContainer">
                            <span className="subtext">Current Student</span>
                            <span className="subtext accent">{"</>"}</span>
                            <span className="subtext">Rising Developer</span>
                        </div>
                    </div> :
                    <div className="homeContainer-m">
                        <div>
                            <span className="bigName-m">LO<span className="accent"> TIMOTHY </span></span>
                            <span className="smolName-m">CHUNG TIN</span>
                        </div>
                        <div className="subtextContainer-m">
                            <span className="subtext-m">Current Student</span>
                            <span className="subtext-m accent">{"</>"}</span>
                            <span className="subtext-m">Rising Developer</span>
                        </div>
                    </div>
                }
            </>
        );
    }
}