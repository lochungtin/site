import React from 'react';

import '../App.css';

export default class TimelineItem extends React.Component {
    render() {
        return (
            <div className="timelineItem">
                <p><span className="timelineLine" style={{opacity: this.props.opacity}}>|</span> {this.props.year}</p>
                <div className="timelineTitleBox">
                    <p className="timelineTitle">{this.props.title}</p>
                </div>
                <p className="timelineText">{this.props.text}</p>
            </div>
        );
    }
}