import React from 'react';
import { connect } from 'react-redux';

import '../css/web/about.css';
import { info, } from '../data/about';

import propic from '../img/propic.jpg';

class Screen extends React.Component {

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `about-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <div className={this.style('root', 'row')}>
                <div className={this.style('side', 'col')}>
                    <div className={this.style('propic-container', 'row')}>
                        <img
                            alt='propic'
                            className={this.style('propic')}
                            src={propic}
                        />
                    </div>
                    <div className={this.style('side-text', 'col')}>
                        <p className={this.style('fullname')}>
                            {info.fName}
                        </p>
                        <p className={this.style('givenname')}>
                            {info.gName}
                        </p>
                        <p className={this.style('bio')}>
                            {info.bio}
                        </p>
                    </div>
                    <div className={this.style('side-bottom', 'col')}>
                        {info.sideRowInfo.map(obj => {
                            return (
                                <div className={this.style('side-info-row', 'row')}>
                                    <img
                                        alt='icon'
                                        className={this.style('side-info-icon')}
                                        src={obj.icon}
                                    />
                                    <div className={this.style('side-info-text-container')}>
                                        <p className={this.style('side-info-text')}>
                                            {obj.text}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(Screen);
