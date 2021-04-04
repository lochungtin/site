import React from 'react';
import { connect } from 'react-redux';
import Btn from './Btn';

class NavBar extends React.Component {

    opacityControl = route => window.location.href.endsWith(route) ? { opacity: 1 } : undefined;

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `nav-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <div className={this.style('bar-root')}>
                <div className={this.style(this.props.center ? 'bar-center' : 'bar', 'row')}>
                    <Btn
                        label='Home'
                        style={this.opacityControl('site#/')}
                        to='/'
                    />
                    <Btn
                        label='About'
                        style={this.opacityControl('about')}
                        to='/about'
                    />
                    <Btn
                        label='Projects'
                        style={this.opacityControl('projects')}
                        to='/projects'
                    />
                    <Btn
                        label='Achievements'
                        style={this.opacityControl('achievements')}
                        to='/achievements'
                    />
                    <Btn
                        label='Resume'
                        style={this.opacityControl('resume')}
                        to='/resume'
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(NavBar);