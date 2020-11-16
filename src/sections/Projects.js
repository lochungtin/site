import React from 'react';

import CarouselItem from '../components/CarouselItem';
import data from '../data/projects';
import L from '../img/carouselLR/left.png';
import R from '../img/carouselLR/right.png';

export default class Section extends React.Component {

    constructor() {
        super();
        this.state = {
            auto: true,
            display: 0,
            order: [data[0], data[1]],
            move: '',
            display0Width: 90,
            display1Width: 0,
        }
    }

    scrollLeft = auto => {
        var nextIndex = (this.state.display + data.length - 1) % data.length;
        this.setState({ auto: auto, display: nextIndex, order: [data[nextIndex], data[this.state.display]], move: 'l' });
        this.slideLeft(90);
    }

    scrollRight = auto => {
        var nextIndex = (this.state.display + 1) % data.length;
        this.setState({ auto: auto, display: nextIndex, order: [data[this.state.display], data[nextIndex]], move: 'r' });
        this.slideRight(90);
    }

    slideLeft = num => {
        if (num >= 0) {
            this.setState({ display0Width: 90 - num, display1Width: num });
            setTimeout(() => this.slideLeft(num - 1), 1);
        }
    }

    slideRight = num => {
        if (num >= 0) {
            this.setState({ display0Width: num, display1Width: 90 - num });
            setTimeout(() => this.slideRight(num - 1), 1);
        }
    }

    focusStyle = num => {
        if (this.state.display !== num)
            return { opacity: 0.5 }
        return {}
    }

    render() {
        return (
            <div className="carousel">
                <div className="carouselMid">
                    <button className="carouselBtn" onClick={() => this.scrollLeft(false)}>
                        <img className="carouselBtnImg" src={L} alt="" />
                    </button>
                    <div className="carouselContent">
                        {this.state.display0Width > 10 && <CarouselItem item={this.state.order[0]} width={this.state.display0Width} opacity={this.state.display0Width / 90}/>}
                        {this.state.display1Width > 10 && <CarouselItem item={this.state.order[1]} width={this.state.display1Width} opacity={this.state.display1Width / 90}/>}
                    </div>
                    <button className="carouselBtn" onClick={() => this.scrollRight(false)}>
                        <img className="carouselBtnImg" src={R} alt="" />
                    </button>
                </div>
                <div className="carouselDisplay">
                    {data.map(item => {
                        return (
                            <div className="carouselIndicator" style={this.focusStyle(item.id)} />
                        )
                    })}
                </div>
            </div>
        );
    }
}