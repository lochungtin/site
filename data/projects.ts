interface repoType {
    name: string,
    owner: string,
};

interface projectType {
    name: string,
    repos: Array<repoType>,
    links: Array<string>,
    shortDescription: string,
    longDescription: string,
};


