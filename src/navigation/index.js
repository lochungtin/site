import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

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

    style = styleName => `nav-${(this.props.mobile ? 'm-' : '') + styleName}`

    //<div className={this.style('bar')} />

    render() {
        return (
            <Router>
                <div className={this.style('container', 'col')}>
                    <Switch >
                        <Route exact path='/site/' component={landing} />
                        <Route exact path='/site/about' component={About} />
                        <Route exact path='/site/projects' component={Projects} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(AppNav);