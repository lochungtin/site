import React from 'react';

import GH from '../img/socials/github.png';

export default class ProjectItemMobile extends React.Component {
    render() {
        return (
            <div>
                <p className="PIMTitle">{this.props.item.title}</p>
                <p className="PIMSlogan">{this.props.item.slogan}</p>
                <img className="PIMImg" src={this.props.item.img} alt="" />
                {this.props.item.section1.map(para => {
                    return (
                        <p className="PIMSectionPara">{para}</p>
                    )
                })}
                {this.props.item.section2.map(para => {
                    return (
                        <p className="PIMSectionPara">{para}</p>
                    )
                })}
                <div className="PIMBtns">
                    {this.props.item.website !== "" && <div className="PIMBtnItem">
                        <button
                            className="PIMBtn"
                            onClick={e => {
                                e.preventDefault();
                                window.location.href = this.props.item.website;
                            }}
                        >
                            <img src={this.props.item.websiteLogo} className="PIMBtnImg" alt="" />
                        </button>
                        <p>Website</p>
                    </div>}
                    {this.props.item.github !== "" && <div className="PIMBtnItem">
                        <button
                            className="PIMBtn"
                            onClick={e => {
                                e.preventDefault();
                                window.location.href = this.props.item.github;
                            }}
                        >
                            <img src={GH} className="PIMBtnImg" alt="" />
                        </button>
                        <p>Repo</p>
                    </div>}
                </div>
            </div>
        );
    }
}