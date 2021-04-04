import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';

import '../css/web/projects.css';
import { featuredProjects, allProjects } from '../data/projects';
import { tags } from '../data/tags';
import down from '../img/icons/chevron-down.svg';
import ribbon from '../img/icons/ribbon.svg'

class Screen extends React.Component {

    style = (styleName, ...args) => {
        let builder = '';
        args.forEach(arg => builder += ` ${arg}`);
        return `project-${(this.props.mobile ? 'm-' : '') + styleName + builder}`;
    }

    render() {
        return (
            <>
                <NavBar center />
                <div className={this.style('root', 'row')}>
                    {this.props.dim.width > 1034 && <div className={this.style('filter')}>
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
                    </div>}
                    <div className={this.style('main')}>
                        <div className={this.style('main-label')}>
                            <p>
                                featured
                        </p>
                        </div>
                        <div className={this.style('featured', 'col')}>
                            {featuredProjects.map(row => {
                                return (
                                    <div className={this.style('featured-row', 'row')}>
                                        {row.map(project => {
                                            return (
                                                <div className={this.style('featured-container')}>
                                                    <div className={this.style('item-header', 'row')}>
                                                        <img
                                                            alt={'ribbon'}
                                                            className={this.style('item-icon')}
                                                            src={ribbon}
                                                        />
                                                        <p className={this.style('item-text')}>
                                                            {project.name}
                                                        </p>
                                                    </div>
                                                    <div className={this.style('item-description-container')}>
                                                        <p className={this.style('item-description')}>
                                                            {project.description_s}
                                                        </p>
                                                    </div>
                                                    <div className={this.style('tag-container', 'row')}>
                                                        {project.tags.slice(0, 3).map(tag => {
                                                            return (
                                                                <div className={this.style('tag', 'row')} style={{ borderColor: tag.color }}>
                                                                    <p className={this.style('tag-text')} style={{ color: tag.color }}>
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
                        <div className={this.style('all', 'col')}>
                            {allProjects.map((project, index) => {
                                return (
                                    <div className={this.style('item-container')} style={{ animationDelay: `${index / 5}s` }}>
                                        <div className={this.style('item-header', 'row')}>
                                            <img
                                                alt={'ribbon'}
                                                className={this.style('item-icon')}
                                                src={ribbon}
                                            />
                                            <p className={this.style('item-text')}>
                                                {project.name}
                                            </p>
                                        </div>
                                        <div className={this.style('item-description-container')}>
                                            <p className={this.style('item-description')}>
                                                {project.description_s}
                                            </p>
                                        </div>
                                        <div className={this.style('tag-container', 'row')}>
                                            {project.language.map(lang => {
                                                return (
                                                    <div className={this.style('tag', 'row')} style={{ borderColor: lang.color }}>
                                                        <p className={this.style('tag-text')} style={{ color: lang.color }}>
                                                            {lang.display}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className={this.style('tag-container', 'row')}>
                                            {project.tags.map(tag => {
                                                return (
                                                    <div className={this.style('tag', 'row')} style={{ borderColor: tag.color }}>
                                                        <p className={this.style('tag-text')} style={{ color: tag.color }}>
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
                    </div>
                </div >
            </>
        );
    }
}

const mapStateToProps = state => ({
    dim: state.dim,
    mobile: state.mobile,
});

export default connect(mapStateToProps)(Screen);
