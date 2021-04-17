import React from 'react';
import { NextRouter, withRouter, } from 'next/router';

interface WithRouterProps {
    router: NextRouter
  }
  
interface Props extends WithRouterProps {}

class App extends React.Component<Props> {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <p>
                    test
                </p>
            </div>
        );
    }


    state = {

    };
}

export default withRouter(App);