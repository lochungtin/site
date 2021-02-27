import React from 'react';
import { connect } from 'react-redux';

import '../css/web/projects.css';
import { tags } from '../data/tags';

class Screen extends React.Component {

    style = styleName => `project-${(this.props.mobile ? 'm-' : '') + styleName}`;

    render() {
        console.log(this.style('filter-category-container'))

        return (
            <div className={'row ' + this.style('root')}>
                <div className={this.style('filter')}>
                    {Object.keys(tags).map(category => {
                        return (
                            <div className={this.style('filter-category-container')} key={category}>
                                <p className={this.style('filter-category')}>
                                    {category}
                                </p>
                                
                                <div>
                                    {tags[category].map(tag => {
                                        return (
                                            <p className={this.style('filter-tag')} key={tag.name}>
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