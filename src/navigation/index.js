import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from '../sections/about';
import landing from '../sections/landing';
import Projects from '../sections/projects';

import '../css/web/nav.css';

class AppNav extends React.Component {

    constructor(props) {
        super(props);
    }

    style = styleName => `nav-${(this.props.mobile ? 'm-' : '') + styleName}`

    render() {
        return (
            <Router>
                <div className={this.style('bar')}>

                </div>
                <div className={this.style('container', 'col')}>
                    <Switch >
                        <Route exact path='/' component={landing} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/projects' component={Projects} />
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