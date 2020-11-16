import CC from '../img/projects/logo/cc.png';
import DP from '../img/projects/logo/dp.jpg';
import TL from '../img/projects/logo/lg.png';
import RF from '../img/projects/logo/rf.png';

import CCPreview from '../img/projects/preview/cc.png';
import UFPreview from '../img/projects/preview/uf.jpg';
import B2preview from '../img/projects/preview/b2.png';
import RFpreview from '../img/projects/preview/rf.jpg';

const data = [
    {
        id: 0,
        title: "CoinControl",
        slogan: "Your Personal Wallet Supervisor",
        website: "https://lochungtin.github.io/coincontrol.web/",
        websiteLogo: CC,
        github: "",
        section1: [
            "CoinControl is a lightweight money management mobile app that features weekly spending and saving reports, customisable themes and settings. The app supports up to 16 unique income and expense categories, 8 of which are fully customisable.",
            "This project is undergoing continuous and incremental development. The next step of this project is to build an account system for users to backup their records and have a web interface for users to interact and manage their spendings as well."
        ],
        section2: [
            "The CoinControl mobile application has passed alpha testing, and is now ready for the next phase.", 
            "Currently only the android version of the app is released. But CoinControl is aimed to be cross platform and be able to operate on all devices.",
            "The app is currently in its semi-open beta testing phase, and is aimed to be released on Google Play Store by the end of January 2021.",
            "For more information, please visit the official website of CoinControl.",
        ],
        img: CCPreview,
    },
    {
        id: 1,
        title: "Unifin",
        slogan: "Hack Sheffield 6 Project",
        website: "https://devpost.com/software/unifin",
        websiteLogo: DP,
        github: "https://github.com/lochungtin/Unifin",
        section1: [
            "Developed with a team of 3, Unifin is a multi-award winning hackathon project. (Best Financial Hack, Best Google Cloud Hack)", 
            "Utilizing the React Native mobile development framework, Unifin is a cross platform money management mobile app that allows user to scan receipts and record their spendings.",
            "Unifin is powered by Google Cloud's Google Vision AI API and a mock up API from Capital One tailored for this hackathon."
        ],
        section2: [
            
        ],
        img: UFPreview,
    },
    {
        id: 2,
        title: "Personal Portfolio and Website",
        slogan: "Basically what you are looking at now",
        website: "https://lochungtin.github.io/site/",
        websiteLogo: TL,
        github: "https://github.com/lochungtin/site",
        section1: [
            "This is version 2 of my personal website. It is a complete redesign of my first personal website, which is static HTML and CSS.",
            "This website is now powered by React JS, a Web Development framework developed by Facebook."
        ],
        section2: [
            
        ],
        img: TL,
    },
    {
        id: 3,
        title: "Big 2 Server Client Game",
        website: "",
        websiteLogo: "",
        github: "https://github.com/lochungtin/Big2-Server-Client-Game",
        section1: [
            "Big2 (a.k.a deuces, capsa) is a card game originated from Hong Kong. This is a server-client application that models this game and allows users to play across computers. 2 users are allowed per server as this application is only designed for 2 players.",
            "This Application uses java's socket server library to establish connections between the server and the client. ",
        ],
        section2: [
            "The client sends and receives messages using a specially designed protocol to communicate with the server, notifying it which specific task should be invoked. The server will then respond to the sender or both clients that the process has been completed.",
            "Both server and client use multithreading, which enables the server and client to handle different tasks simultaneously.",
        ],
        img: B2preview,
    },
    {
        id: 4,
        title: "Robofest 2017",
        slogan: "GRAF World Championship & People's Choice Award",
        website: "https://logossteampowered.wixsite.com/2017robofest/about-us",
        websiteLogo: RF,
        github: "",
        section1: [
            "Robofest is Lawrence Technological University’s world-wide autonomous robotics program for 4th grade – 12th grade and college students. Student teams design, construct, and program their robots to compete for trophies in a variety of competitions.", 
            "Two fellow classmates and I formed a team and participated in the “Global Robotics Arts Festival” in 2017. We finished as champions in the event.",
            
        ],
        section2: [
            "For this event, my team and I built 3 different digital instruments. A digital violin, named the Modulin. For it operates with two processing units, therefore, modular. Following the theme, we named our digital Gu Zheng (chinese zither) the ModuZheng, and our digital midi drum the ModuDrum.",
            "For more information, please visit the official website of our team - SteamPowered.",
        ],
        img: RFpreview,
    },
    {
        id: 5,
        title: "Atlas",
        slogan: "Holding Up the Skies",
        website: "",
        websiteLogo: "",
        github: "",
        section1: [
            "This project is still at a very under developed stage.",
            "More information will be released when the project is at a more mature stage of development."
        ],
        section2: [

        ],
        img: "",
    },
    {
        id: 6,
        title: "Future Proton Native Project",
        slogan: "Coming Soon",
        website: "",
        websiteLogo: "",
        github: "",
        section1: [],
        section2: [],
        img: "",
    },
];

export default data;