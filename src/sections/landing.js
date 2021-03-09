import React from 'react';
import { connect } from 'react-redux';

import '../css/web/landing.css';
import background from '../img/background.png';
import Github from '../img/icons/github.svg';
import Gmail from '../img/icons/gmail.svg';
import Instagram from '../img/icons/instagram.svg';
import LinkedIn from '../img/icons/linkedin.svg';

class Screen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promptOpacity: 0,
        }
    }

    copy = () => {
        navigator.clipboard.writeText('lochungtin@gmail.com');
        this.setState({ promptShow: 1 });
        this.decreaseOpacity(1);
    }

    decreaseOpacity = value => {
        if (value > 0) {
            const promptOpacity = value - 0.05;
            this.setState({ promptOpacity });
            setTimeout(() => this.decreaseOpacity(promptOpacity), 50);
        }
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
                <div className={this.style('line')} style={{ opacity: this.props.dim.width > 1350 ? 1 : 0.07, top: '27.9vh', width: `${lineWidth}px` }} />
                <div className={this.style('line')} style={{ opacity: this.props.dim.width > 1350 ? 1 : 0.07, top: '29.8vh', width: `${lineWidth}px` }} />
                <div className={this.style('line')} style={{ opacity: this.props.dim.width > 1350 ? 1 : 0.07, top: '31.9vh', width: `${lineWidth}px` }} />
                <div className={this.style('left-spacer')}>
                    <div className={this.style('left')}>
                        <p className={this.style('top-text')}>
                            <span className={this.style('top-text-large')}>
                                {'HI THERE! '}
                            </span>
                            Welcome to my personal website
                        </p>
                        <p className={this.style('middle-text')}>
                            My name is Timothy Lo
                        </p>
                        <p className={this.style('bottom-text')}>
                            I am a second year computer science student studying at King's College London
                        </p>
                    </div>
                </div>
                <img
                    alt='map'
                    className={this.style('bg-img')}
                    src={background}
                    style={{ opacity: this.props.dim.width > 1350 ? 0.3 : 0.07 }}
                />
                <div className={this.style('social-icon-container', 'row')}>
                    <button className={this.style('social-icon-btn', 'landing-github')}>
                        <img
                            alt='icon'
                            className={this.style('social-icon')}
                            src={Github}
                        />
                    </button>
                    <button className={this.style('social-icon-btn', 'landing-instagram')}>
                        <img
                            alt='icon'
                            className={this.style('social-icon')}
                            src={Instagram}
                        />
                    </button>
                    <button className={this.style('social-icon-btn', 'landing-linkedin')}>
                        <img
                            alt='icon'
                            className={this.style('social-icon')}
                            src={LinkedIn}
                        />
                    </button>
                    <button className={this.style('social-icon-btn', 'landing-gmail')} onClick={this.copy}>
                        <img
                            alt='icon'
                            className={this.style('social-icon')}
                            src={Gmail}
                        />
                    </button>
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
