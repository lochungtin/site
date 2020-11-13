import React from 'react';

import '../App.css';

export default class Button extends React.Component {

    constructor() {
        super();
        this.state = {
            extend: false
        }
    }

    action = e => {
        e.preventDefault();
        if (this.props.redirect !== undefined) 
            window.location.href = this.props.redirect;
        else
            navigator.clipboard.writeText(this.props.copy);
    }

    render() {
        return (
            <button
                className="contactBtn"
                onClick={this.action}
                onMouseEnter={() => this.setState({ extend: true })}
                onMouseLeave={() => this.setState({ extend: false })}
            >
                <div className="contactBtnContent">
                    <img className="contactIcon" src={this.props.src} alt="" />
                    {this.state.extend && <p className="contactBtnText">{this.props.text}</p>}
                </div>
            </button>
        )
    }
}