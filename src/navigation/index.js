import React from 'react';
import { connect } from 'react-redux';

import Projects from '../sections/projects';
import About from '../sections/about';

import '../css/web/nav.css';

class AppNav extends React.Component {

    style = styleName => `nav-${(this.props.mobile ? 'm-' : '') + styleName}`

    render() {
        return (
            <div className={this.style('container')}>
                <div>
                    
                </div>
                <About />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(AppNav);