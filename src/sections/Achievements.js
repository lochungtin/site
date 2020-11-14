import React from 'react';

import '../App.css';
import data from '../data/timeline';
import TimelineItem from '../components/TimelineItem';

export default class Section extends React.Component {
    render() {
        return (
            <div className="contactContainer">
                <p className="timelineWord">Timeline</p>
                <div className="timelineBar" />
                <div className="timelineCol">
                    {data.map(item => {
                        return (
                            <TimelineItem year={item.year} title={item.title} text={item.text} opacity={item.count / data.length}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}