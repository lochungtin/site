import React from 'react';
import { connect } from 'react-redux';

import NavBar from '../components/NavBar';
import SocialBtn from '../components/SocialBtn';

import '../css/web/landing.css';
import { landingText, socials, } from '../data/about';
import background from '../img/background.png';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promptOpacity: 0,
        }
    }

    decreaseOpacity = value => {
        if (value > 0) {
            const promptOpacity = value - 0.05;
            this.setState({ promptOpacity });
            setTimeout(() => this.decreaseOpacity(promptOpacity), 50);
        }
    }

    onClick = link => {
        if (link.endsWith('@gmail.com')) {
            navigator.clipboard.writeText('lochungtin@gmail.com');
            this.setState({ promptShow: 1 });
            this.decreaseOpacity(1);
        }
        else
            window.location.href = link;
    }

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `landing-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        const lineWidth = this.props.dim.width - (this.props.dim.height * 995 / 1062);
        return (
            <div className={this.style('root', 'row')}>
                <NavBar />
                <div className={this.style('line')} style={{ opacity: this.props.dim.width > 1350 ? 1 : 0.07, top: '27.9vh', width: `${lineWidth}px` }} />
                <div className={this.style('line')} style={{ opacity: this.props.dim.width > 1350 ? 1 : 0.07, top: '29.8vh', width: `${lineWidth}px` }} />
                <div className={this.style('line')} style={{ opacity: this.props.dim.width > 1350 ? 1 : 0.07, top: '31.9vh', width: `${lineWidth}px` }} />
                <div className={this.style('left-spacer')}>
                    <div className={this.style('left')}>
                        {Object.keys(landingText).map(key => {
                            return (
                                <p className={this.style(`${key}-text`, 'noselect')}>
                                    {landingText[key]}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <img
                    alt='map'
                    className={this.style('bg-img', 'noselect')}
                    src={background}
                    style={{ opacity: this.props.dim.width > 1350 ? 0.3 : 0.07 }}
                />
                <div className={this.style('social-icon-container', 'row')}>
                    {socials.map(obj => <SocialBtn icon={obj.icon} onClick={() => this.onClick(obj.link)} />)}
                    <p className={this.style('social-prompt')} style={{ opacity: this.state.promptOpacity }}>
                        Copied to Clickboard
                    </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dim: state.dim,
    mobile: state.mobile,
});

export default connect(mapStateToProps)(Screen);
