import React from 'react';
import { connect } from 'react-redux';

import Projects from '../sections/projects';

import '../css/web/nav.css';

class AppNav extends React.Component {
    
    style = styleName => `nav-${(this.props.mobile ? 'm-' : '') + styleName}`

    render() {
        console.log(this.props.mobile)
        
        return (
            <div className={this.style('container')}>
                <Projects />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(AppNav);