import React from 'react';

import './App.css';
import './Mobile.css'

import SocialBtn from './components/SocialBtn';
import MobileExt from './components/MobileExtension';

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
import Skills from './sections/Skills';

import pdf from './data/Resume_Timothy.pdf'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'home',
            height: 0,
            width: 0,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    navBtn = name => {
        if (this.state.display === name)
            return 'navBtnSelected';
        return 'navBtn';
    }

    rootStyle = () => {
        if (this.state.display === 'home')
            return 'rootHome';
        return 'root';
    }

    topbarStyle = () => {
        if (this.state.display === 'home')
            return 'topBarE';
        return 'topBar';
    }

    render() {
        return (
            <>
                {this.state.width > this.state.height ?
                    <div className={this.rootStyle()}>
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
                                <a href={pdf} without rel="noopener noreferrer" target="_blank">
                                    <button className={this.navBtn('resume')}>
                                        Resume
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className={this.topbarStyle()} />
                        <div className="content">
                            {this.state.display === 'home' && <Home desktop={true} />}
                            {this.state.display === 'about' && <About desktop={true} />}
                            {this.state.display === 'skills' && <Skills desktop={true} />}
                            {this.state.display === 'achievements' && <Achievements desktop={true} />}
                            {this.state.display === 'projects' && <Projects desktop={true} />}
                        </div>
                        <div className="optionBar">
                            <div className="optBottomLeftSection" />
                            <div className="optBottomRightSection">
                                <SocialBtn src={FB} text={'Facebook'} redirect={'https://www.facebook.com/timothylo.hk/'} desktop={true} />
                                <SocialBtn src={IG} text={'Instagram'} redirect={'https://www.instagram.com/lochungtin/'} desktop={true} />
                                <SocialBtn src={GM} text={'Gmail'} copy={'lochungtin@gmail.com'} desktop={true} />
                                <SocialBtn src={LN} text={'LinkedIn'} redirect={'https://www.linkedin.com/in/timothy-lo-chung-tin/'} desktop={true} />
                                <SocialBtn src={GH} text={'Github'} redirect={'https://www.github.com/lochungtin/'} desktop={true} />
                            </div>
                        </div>
                    </div>
                    :
                    <div>
                        <Home desktop={false} />
                        <MobileExt section="About Me">
                            <About desktop={false} />
                        </MobileExt>
                        <MobileExt section="Skills">
                            <Skills desktop={false} />
                        </MobileExt>
                        <MobileExt section="Achievements">
                            <Achievements desktop={false} />
                        </MobileExt>
                        <MobileExt section="Projects">
                            <Projects desktop={false} />
                        </MobileExt>
                        <div className="socialButtons">
                            <SocialBtn src={FB} text={'Facebook'} redirect={'https://www.facebook.com/timothylo.hk/'} desktop={false} />
                            <SocialBtn src={IG} text={'Instagram'} redirect={'https://www.instagram.com/lochungtin/'} desktop={false} />
                            <SocialBtn src={LN} text={'LinkedIn'} redirect={'https://www.linkedin.com/in/timothy-lo-chung-tin/'} desktop={false} />
                            <SocialBtn src={GH} text={'Github'} redirect={'https://www.github.com/lochungtin/'} desktop={false} />
                        </div>
                    </div>
                }
            </>
        );
    }
}
