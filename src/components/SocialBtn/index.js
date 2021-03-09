import React from 'react';
import { connect } from 'react-redux';

class SocialBtn extends React.Component {

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `landing-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <button className={this.style('social-icon-btn')} onClick={this.props.onClick}>
                <img
                    alt='icon'
                    className={this.style('social-icon', 'noselect')}
                    src={this.props.icon}
                />
            </button>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(SocialBtn);