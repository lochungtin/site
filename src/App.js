import React from 'react';

import './App.css';

import SocialBtn from './components/SocialBtn';

import logo from './img/logo/logo.ico';
import FB from './img/socials/facebook.png';
import GH from './img/socials/github.png';
import GM from './img/socials/gmail.png';
import IG from './img/socials/instagram.png';
import LN from './img/socials/linkedin.png';

import About from './sections/About';
import Achievements from './sections/Achievements';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Skills from './sections/Skills';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'home',
        }
    }

    navBtn = name => {
        if (this.state.display === name)
            return 'navBtnSelected';
        return 'navBtn';
    }

    render() {
        return (
            <div className="root">
                <div className="optionBar">
                    <div className="optTopLeftSection">
                        <img className="icon" src={logo} alt="" />
                        <button className={this.navBtn('home')} onClick={() => this.setState({ display: 'home' })}>
                            Home
                        </button>
                    </div>
                    <div className="optTopRightSection">
                        <button className={this.navBtn('about')} onClick={() => this.setState({ display: 'about' })}>
                            About Me
                        </button>
                        <button className={this.navBtn('skills')} onClick={() => this.setState({ display: 'skills' })}>
                            Skills
                        </button>
                        <button className={this.navBtn('achievements')} onClick={() => this.setState({ display: 'achievements' })}>
                            Achievements
                        </button>
                        <button className={this.navBtn('projects')} onClick={() => this.setState({ display: 'projects' })}>
                            Projects
                        </button>
                        <button className={this.navBtn('resume')} onClick={() => this.setState({ display: 'resume' })}>
                            Resume
                        </button>
                    </div>
                </div>
                <div className='topBar' />
                <div className="content">
                    {this.state.display === 'home' && <Home />}
                    {this.state.display === 'about' && <About />}
                    {this.state.display === 'skills' && <Skills />}
                    {this.state.display === 'achievements' && <Achievements />}
                    {this.state.display === 'projects' && <Projects />}
                    {this.state.display === 'resume' && <Resume />}
                </div>
                <div className="optionBar">
                    <div className="optBottomLeftSection" />
                    <div className="optBottomRightSection">
                        <SocialBtn src={FB} text={'Facebook'} redirect={'https://www.facebook.com/timothylo.hk/'}/>
                        <SocialBtn src={IG} text={'Instagram'} redirect={'https://www.instagram.com/lochungtin/'}/>
                        <SocialBtn src={GM} text={'Gmail'} copy={'lochungtin@gmail.com'}/>
                        <SocialBtn src={LN} text={'LinkedIn'} redirect={'https://www.linkedin.com/in/timothy-lo-chung-tin/'}/>
                        <SocialBtn src={GH} text={'Github'} redirect={'https://www.github.com/lochungtin/'}/>
                    </div>
                </div>
            </div>
        );
    }
}
