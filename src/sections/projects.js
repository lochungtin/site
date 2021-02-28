import React from 'react';
import { connect } from 'react-redux';

import '../css/web/projects.css';
import { tags } from '../data/tags';
import down from '../img/triE.png';
import ribbon from '../img/icons/ribbon.svg'
import { featured, PRJ_CoinControl } from '../data/projects';

class Screen extends React.Component {

    style = styleName => `project-${(this.props.mobile ? 'm-' : '') + styleName}`;

    render() {
        return (
            <div className={'row ' + this.style('root')}>
                <div className={this.style('filter')}>
                    {Object.keys(tags).map(category => {
                        return (
                            <div className={this.style('filter-category-container')} key={category}>
                                <div className={'row noselect ' + this.style('filter-category')}>
                                    <p className={this.style('filter-category-text')}>
                                        {category}
                                    </p>
                                    <img
                                        alt={'down'}
                                        className={this.style('chevron-down-logo')}
                                        src={down}
                                    />
                                </div>
                                <div className={'col ' + this.style('filter-tag-container')}>
                                    {tags[category].map(tag => {
                                        return (
                                            <button className={this.style('filter-tag')} key={tag.name}>
                                                {tag.display}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                    <div className={this.style('filter-category-container')}>
                        <div className={'row noselect ' + this.style('filter-category')}>
                            <p className={this.style('filter-category-text')}>
                                year
                            </p>
                            <img
                                alt={'down'}
                                className={this.style('chevron-down-logo')}
                                src={down}
                            />
                        </div>
                        <div>
                            {[2021, 2020, 2019, 2018, 2017, 2016, 2015].map(year => {
                                return (
                                    <p className={this.style('filter-tag')} key={year}>
                                        {year}
                                    </p>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className={this.style('main')}>
                    <div className={this.style('main-label')}>
                        <p>
                            featured
                        </p>
                    </div>
                    <div className={'col ' + this.style('featured')}>
                        {featured.map(row => {
                            return (
                                <div className={'row ' + this.style('featured-row')}>
                                    {row.map(project => {
                                        return (
                                            <div className={this.style('featured-container')}>
                                                <div className={'row ' + this.style('featured-item-header')}>
                                                    <img
                                                        alt={'ribbon'}
                                                        className={this.style('featured-item-icon')}
                                                        src={ribbon}
                                                    />
                                                    <p className={this.style('featured-item-text')}>
                                                        {project.name}
                                                </p>
                                                </div>
                                                <div className={this.style('featured-item-description-container')}>
                                                    <p className={this.style('featured-item-description')}>
                                                        {project.description_s}
                                                    </p>
                                                </div>
                                                <div className={'row ' + this.style('featured-tag-container')}>
                                                    {project.language.map(lang => {
                                                        return (
                                                            <div className={'row ' + this.style('featured-tag')} style={{ borderColor: lang.color }}>
                                                                <p className={this.style('featured-tag-text')} style={{ color: lang.color }}>
                                                                    {lang.display}
                                                                </p>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <div className={'row ' + this.style('featured-tag-container')}>
                                                    {project.tags.slice(0, 3).map(tag => {
                                                        return (
                                                            <div className={'row ' + this.style('featured-tag')} style={{ borderColor: tag.color }}>
                                                                <p className={this.style('featured-tag-text')} style={{ color: tag.color }}>
                                                                    {tag.display}
                                                                </p>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className={this.style('main-label')}>
                        <p>
                            all projects
                        </p>
                    </div>
                    <div className={'col ' + this.style('all')}>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
                        <div className={this.style('item-container')}>

                        </div>
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