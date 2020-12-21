import React from 'react';

import propic from '../img/propic.jpg';

export default class Section extends React.Component {

    render() {
        return (
            <>
                {this.props.desktop ?
                    <div className="homeContainer">
                        <div className="homeTextContainer">
                            <span className="bigName noselect">LO<span className="accent"> TIMOTHY </span></span>
                            <span className="smolName noselect">CHUNG TIN</span>
                        </div>
                        <div className="subtextContainer">
                            <span className="subtext noselect">Current Student</span>
                            <span className="subtext accent noselect">{"</>"}</span>
                            <span className="subtext noselect">Rising Developer</span>
                        </div>
                    </div> :
                    <div className="homeContainer-m">
                        <img src={propic} className="propic" alt="" />
                        <div className="nameContainer-m">
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