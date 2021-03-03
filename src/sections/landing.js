import React from 'react';
import { connect } from 'react-redux';

import '../css/web/landing.css';
import background from '../img/background.png';

class Screen extends React.Component {

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `landing-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        const lineWidth = this.props.dim.width - (this.props.dim.height * 995 / 1062);

        return (
            <div className={this.style('root', 'row')}>
                <div className={this.style('line')} style={{ top: '27.9vh', width: `${lineWidth}px` }} />
                    <div className={this.style('line')} style={{ top: '29.8vh', width: `${lineWidth}px` }} />
                    <div className={this.style('line')} style={{ top: '31.9vh', width: `${lineWidth}px` }} />
                <div className={this.style('left')}>

                </div>
                <img
                    alt='map'
                    className={this.style('bg-img')}
                    src={background}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dim: state.dim,
    mobile: state.mobile,
});

export default connect(mapStateToProps)(Screen);
