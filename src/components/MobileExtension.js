import React from 'react';

import col from '../img/triC.png';
import ext from '../img/triE.png';

export default class Section extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            extend: false
        }
    }

    render() {
        return (
            <div>
                <div className="extContainer">
                    <button className="extBtn" onClick={() => this.setState({ extend: !this.state.extend })}>
                        <img src={this.state.extend ? ext : col} className="extImg" alt="" />
                        <p className="extText">{this.props.section}</p>
                    </button>
                </div>
                {this.state.extend && this.props.children}
            </div>
        )
    }
}