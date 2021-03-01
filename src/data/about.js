import github from '../img/icons/github.svg';
import instagram from '../img/icons/instagram.svg';
import linkedin from '../img/icons/linkedin.svg';
import location from '../img/icons/location.svg';
import { c, cpp, css, docker, electronjs, html, insomnia, intellij, java, javascript, php, python, reactjs, reactnative, scala, vscode } from "./tags";

export const info = {
    fName: 'Lo Chung Tin',
    gName: 'Timothy',
    bio: 'Undergraduate  - BSc Computer Science (Second Year)',
    sideRowInfo: [
        { 
            icon: location, 
            text: 'Hong Kong', 
        },
        { 
            icon: github, 
            text: 'lochungtin', 
        },
        { 
            icon: instagram, 
            text: '@lochungtin',
        },
        { 
            icon: linkedin, 
            text: 'Timothy Lo',
        },
    ]
};

export const about = `

`;

export const education = {
    ibdp: {
        name: "International Baccalaureate Diploma Program",
        score: "36/45",
    },
    kcl: {
        name: 'BSc Computer Science',
        year1: {
            subjects: [
                'computer systems',
                'database systems',
                'data structures',
                'elementary logic with applications',
                'foundations of computing 1',
                'introduction to professional practice',
                'introduction to software engineering',
                'programming practice and applications (Java)',
            ],
            score: '76/100',
        },
        year2: {
            subjects: [
                'foundations of computing 2',
                'internet systems',
                'introduction to artificial intelligence',
                'operating systems and concurrency',
                'practical experiences of programming (c++ & scala)',
                'programming language design paradigms',
                'robotics group project',
            ],
            score: 'pending',
        }
    }
};

export const skills = {
    languages: [
        java, javascript, c, cpp, html, css, scala, python, php,
    ],
    frameworks: [
        reactjs, reactnative, electronjs,
    ],
    tools: [
        vscode, intellij, docker, insomnia,
    ],
}
