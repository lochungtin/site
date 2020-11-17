import React from 'react';

import '../App.css';
import data from '../data/timeline';
import TimelineItem from '../components/TimelineItem';

export default class Section extends React.Component {

    style = name => {
        return this.props.desktop ? name : name + "-m";
    }

    render() {
        return (
            <div className={this.style("timelineContainer")}>
                {this.props.desktop && <p className="timelineWord">Timeline</p>}
                <div className={this.style("timelineBar")} />
                <div className={this.style("timelineItemContainer")}>
                    {data.map(item => {
                        return (
                            <TimelineItem year={item.year} title={item.title} text={item.text} opacity={item.count / data.length} desktop={this.props.desktop} />
                        )
                    })}
                </div>
            </div>
        );
    }
}