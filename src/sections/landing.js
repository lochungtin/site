import React from 'react';
import { connect } from 'react-redux';

import '../css/web/landing.css';

class Screen extends React.Component {

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `landing-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <div className={this.style('root', 'row')}>
                
            </div >
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(Screen);
