import React from 'react';

import '../App.css';

export default class CarouselItem extends React.Component {
    render() {
        return (
            <div className="carouselItem" style={{ width: this.props.width + 'vw' }}>
                <p>{this.props.title}</p>
            </div>
        )
    }
}