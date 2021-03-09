import React from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';

import About from '../sections/about';
import landing from '../sections/landing';
import Projects from '../sections/projects';

import { store } from '../redux/store';

import '../css/web/nav.css';
import { setDim } from '../redux/action';

class AppNav extends React.Component {

    constructor(props) {
        super(props);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => store.dispatch(setDim({ width: window.innerWidth, height: window.innerHeight }));

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `nav-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <Router>
                <Switch >
                    <div className={this.style('content', 'col')}>
                        <Route exact path='/' component={landing} />
                        <Route exact path='/projects' component={Projects} />
                        <Route exact path='/about' component={About} />
                    </div>
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(AppNav);