import React from 'react';
import { connect } from 'react-redux';

import { tags } from '../data/tags';

class Screen extends React.Component {

    style = styleName => `project-${(this.props.mobile ? 'm-' : '') + styleName}`

    render() {
        return (
            <div className={'row ' + this.style('root')}>
                <div className={this.style('filter')}>
                    {Object.keys(tags).map(category => {
                        return (
                            <div className={this.style('filter-category-container')}>
                                <p className={this.style('filter-category')}>
                                    {category}
                                </p>
                                <div>
                                    {tags[category].map(tag => {
                                        return (
                                            <p className={this.style('filter-tag')}>
                                                {tag.display}
                                            </p>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={this.style('main')}>
                    <div className={this.style('featured')}>

                    </div>
                    <div className={this.style('all')}>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    mobile: state.mobile,
});

export default connect(mapStateToProps)(Screen);