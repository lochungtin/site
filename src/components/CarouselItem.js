import React from 'react';

import GH from '../img/socials/github.png';

export default class CarouselItem extends React.Component {
    render() {
        return (
            <div className="carouselItem" style={{ maxWidth: this.props.width + 'vw', opacity: this.props.opacity }}>
                <div className="carouselItemLeft">
                    <div className="carouselItemTop">
                        <div className="carouselItemTopLeft">
                            <p className="carouselItemTitle">{this.props.item.title}</p>
                            <p className="carouselItemSlogan">{this.props.item.slogan}</p>
                        </div>
                        <div className="carouselItemTopRight">
                            {this.props.item.website !== "" && <div className="carouselItemRedirect">
                                <button
                                    className="carouselItemRedirectBtn"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.location.href = this.props.item.website;
                                    }}
                                >
                                    <img src={this.props.item.websiteLogo} className="carouselItemRedirectImg" alt=""/>
                                </button>
                                <p>Website</p>
                            </div>}
                            {this.props.item.github !== "" && <div className="carouselItemRedirect">
                                <button
                                    className="carouselItemRedirectBtn"
                                    onClick={e => {
                                        e.preventDefault();
                                        window.location.href = this.props.item.github;
                                    }}
                                >
                                    <img src={GH} className="carouselItemRedirectImg" alt=""/>   
                                </button>
                                <p>Repo</p>
                            </div>}
                        </div>
                    </div>
                    <div className="carouselItemParaContainer">
                        <div className="carouselItemPara">
                            {this.props.item.section1.map(item => {
                                return (
                                    <p className="carouselItemSent">{item}</p>
                                );
                            })}
                        </div>
                        <div className="carouselItemPara">
                            {this.props.item.section2.map(item => {
                                return (
                                    <p className="carouselItemSent">{item}</p>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="carouselItemRight">
                    <img src={this.props.item.img} className="carouselItemImg" alt=""/>
                </div>
            </div>
        )
    }
}