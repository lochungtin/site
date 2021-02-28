import { android, ios, filesystem, javascript, raspberrypi, reactjs, reactnative, reactnav, redux, socket, cpp, java, arduino, javafx, projection, insomnia, mongodb, axios, googlecloud, googlevisionapi, mocap, serial, spi, i2c, } from "./tags";

export const PRJ_CoinControl = {
    name: 'CoinControl',
    description_s: 'Personal Finance Management Mobile Application',
    language: [
        javascript
    ],
    tags: [
        reactnative, redux, reactnav, android, ios
    ],
};

export const PRJ_Orion = {
    name: 'Orion',
    description_s: 'Raspberry Pi NAS and Backup System',
    language: [
        javascript
    ],
    tags: [
        reactjs, mongodb, raspberrypi, socket, filesystem, axios, insomnia
    ],
};

export const PRJ_Atlas = {
    name: 'Atlas',
    description_s: 'Motion Control - Wearable Mice',
    language: [
        cpp, java
    ],
    tags: [
        mocap, arduino, javafx, serial, spi, i2c
    ]
}

export const PRJ_Unifin = {
    name: 'Unifin',
    description_s: 'Multi-award-winning Hackathon Project',
    language: [
        javascript
    ],
    tags: [
        reactnative, googlecloud, googlevisionapi, redux, reactnav, android, ios
    ]
}

export const featuredProjects = [[PRJ_CoinControl, PRJ_Orion], [PRJ_Atlas, PRJ_Unifin]];

export const allProjects = [PRJ_Orion, PRJ_Unifin, PRJ_CoinControl, PRJ_Atlas];
