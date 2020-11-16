import React from 'react';

import '../App.css';

export default class Button extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            extend: false,
            storage: props.text,
            style: {},
            text: props.text,
        }
    }

    action = e => {
        e.preventDefault();
        if (this.props.redirect !== undefined)
            window.location.href = this.props.redirect;
        else {
            navigator.clipboard.writeText(this.props.copy);
            this.setState({ text: 'Copied', style: { color: '#555' } });
            setTimeout(() => this.setState({ text: this.state.storage, style: {} }), 1000);
        }
    }

    style = name => {
        return this.props.desktop ? name : name + "-m";
    }

    render() {
        return (
            <button
                className="contactBtn"
                onClick={this.action}
                onMouseEnter={() => this.setState({ extend: true })}
                onMouseLeave={() => this.setState({ extend: false })}
            >
                <div className={this.style("contactBtnContent")}>
                    <img className={this.style("contactIcon")} src={this.props.src} alt="" />
                    {this.state.extend && this.props.desktop && <p className="contactBtnText" style={this.state.style}>{this.state.text}</p>}
                </div>
            </button>
        )
    }
}