// const strings
const ghUsername: string = "lochungtin";
const gh: string = "Github";
const npm: string = "NPM";
const docs: string = "DOCS";

interface repoType {
    name: string,
    owner: string,
};

interface linkType {
    label: string,
    url: string,
}

interface packageType {
    name: string,
    repo: repoType,
    links: Array<linkType>,
    description: string,
};

export const packages: Array<packageType> = [
    {
        name: "Github Fetch",
        repo: {
            name: "github-fetch",
            owner: ghUsername,
        },
        links: [
            {
                label: gh,
                url: "https://github.com/lochungtin/github-fetch",
            },
            {
                label: npm,
                url: "https://www.npmjs.com/package/@enigmaoffline/github-fetch",
            },
            {
                label: docs,
                url: "nav:github-fetch",
            }
        ],
        description: "Fetch any raw file from any public github repository",
    },
    {
        name: "K-Menas Clustering",
        repo: {
            name: "kmeans-clustering",
            owner: ghUsername,
        },
        links: [
            {
                label: gh,
                url: "https://github.com/lochungtin/kmeans-clustering",
            },
            {
                label: npm,
                url: "https://www.npmjs.com/package/@enigmaoffline/kmeans-clustering",
            },
            {
                label: docs,
                url: "nav:kmeans-clustering",
            }
        ],
        description: "K-Means Clustering algorithm for NodeJS"
    }
];

interface sectionType {
    label: string,
    useReadme: boolean,
    readmeLink?: string,
    content?: string,
}

interface projectType {
    name: string,
    slogan? :string,
    shortDescription: string,
    description: string,
    hasLogo: boolean,
    logoURL? : string,
    repos?: Array<repoType>,
    links?: Array<linkType>,
    addtionalSections?: Array<sectionType>,
}

export const projects: Array<projectType> = [
    {
        name: "Pyxelite",
        shortDescription: "ARGB Controller with React Native and ESP32",
        description: "",
        hasLogo: true,
        logoURL: "",
        repos: [
            {
                name: "Pyxelite",
                owner: ghUsername,
            },
            {
                name: "ESPyxelite",
                owner: ghUsername,
            }
        ],
        addtionalSections: [
            {
                label: "Build Guide",
                useReadme: true,
                readmeLink: "",
            }
        ],
    },
    {
        name: "CoinControl",
        slogan: "Your Personal Wallet Supervisor",
        shortDescription: "Personal Finance Management Mobile Application",
        description: "",
        hasLogo: true,
        logoURL: "",
        links: [
            {
                label: "Offical Website",
                url: "https://lochungtin.github.io/coincontrol.web/",
            }
        ],
    },
    {
        name: "Orion",
        shortDescription: "Raspberry Pi NAS and Backup System",
        description: "",
        hasLogo: false,
        repos: [
            {
                name: "orion",
                owner: ghUsername,
            },
            {
                name: "orion-electron",
                owner: ghUsername,
            },
            {
                name: "orion-server",
                owner: ghUsername,
            },
        ],
    },
    {
        name: "Atlas",
        slogan: "Holding Up the Skies",
        shortDescription: "Wearable Mice / Motion Capture Device",
        description: "",
        hasLogo: false,
        repos: [
            {
                name: "Atlas-Software",
                owner: ghUsername,
            },
            {
                name: "Atlas-Hardware",
                owner: ghUsername,
            },
        ],
    }
];
