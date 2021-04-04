import React from "react";
import { Link } from "react-router-dom";

export default class Btn extends React.Component {
    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `nav-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <Link
                className={this.style('btn', 'noselect')}
                style={this.props.style}
                to={this.props.to}
            >
                <p>{this.props.label}</p>
            </Link>
        );
    }
}