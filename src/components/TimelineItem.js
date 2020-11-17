import React from 'react';

import '../App.css';

export default class TimelineItem extends React.Component {

    style = name => {
        return this.props.desktop ? name : name + "-m";
    }

    render() {
        return (
            <div className={this.style("timelineItem")}>
                {this.props.desktop && <p><span className="timelineLine" style={{opacity: this.props.opacity}}>|</span> {this.props.year}</p>}
                <div className={this.style("timelineTitleBox")}>
                    <p className={this.style("timelineTitle")}>
                        {!this.props.desktop && 
                            <span className="timelineYear-m">{this.props.year}</span>
                        }
                        {" " + this.props.title}
                    </p>
                </div>
                <p className={this.style("timelineText")}>{this.props.text}</p>
            </div>
        );
    }
}