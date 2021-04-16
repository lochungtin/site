import { android, ios, filesystem, javascript, raspberrypi, reactjs, reactnative, reactnav, redux, socket, c, java, arduino, javafx, insomnia, mongodb, axios, googlecloud, googlevisionapi, mocap, serial, spi, i2c, electronjs, wifi, http } from "./tags";

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
        reactjs, mongodb, raspberrypi, socket, filesystem, electronjs, axios, insomnia
    ],
};

export const PRJ_Atlas = {
    name: 'Atlas',
    description_s: 'Motion Control - Wearable Mice',
    language: [
        c, java
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

export const PRJ_Pyxelite = {
    name: 'Pyxelite',
    description_s: 'React Native ARGB Controller',
    language: [
        javascript,
        c,
    ],
    tags: [
        reactnative, arduino, http, serial, axios, wifi, insomnia
    ]
}

export const featuredProjects = [[PRJ_CoinControl, PRJ_Orion], [PRJ_Atlas, PRJ_Pyxelite]];

export const allProjects = [PRJ_Pyxelite, PRJ_Orion, PRJ_CoinControl, PRJ_Atlas, PRJ_Unifin];
