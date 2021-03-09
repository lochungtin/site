import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
                <div className={this.style('bar', 'row')}>
                    <Link
                        className={this.style('btn', 'noselect')}
                        style={this.opacityControl('site#/')}
                        to='/'
                    >
                        <p>Home</p>
                    </Link>
                    <Link
                        className={this.style('btn', 'noselect')}
                        style={this.opacityControl('projects')}
                        to='/projects'
                    >
                        <p>Projects</p>
                    </Link>
                    <Link
                        className={this.style('btn', 'noselect')}
                        style={this.opacityControl('about')}
                        to='/about'
                    >
                        <p>About</p>
                    </Link>
                    <Link
                        className={this.style('btn', 'noselect')}
                        style={this.opacityControl('achievements')}
                        to='/achievements'
                    >
                        <p>Achievements</p>
                    </Link>
                    <Link
                        className={this.style('btn', 'noselect')}
                        style={this.opacityControl('resume')}
                        to='/resume'
                    >
                        <p>Resume</p>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(NavBar);