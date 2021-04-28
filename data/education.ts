interface subjectType {
    name: string,
    score: string,
}

interface formalEducationType {
    label: string,
    institution: string,
    total: string,
    subjects: Array<subjectType>,
}

export const formal: Array<formalEducationType> = [
    {
        label: "Year 2",
        institution: "King's College London",
        total: "Pending",
        subjects: [
            {
                name: "Foundations of Computing 2",
                score: "92 / 100",
            },
            {
                name: "Internet Systems",
                score: "69 / 100",
            },
            {
                name: "Practical Experiences in Programming (C++ and Scala)",
                score: "85 / 100",
            },
            {
                name: "Introduction to Artificial Intelligence",
                score: "Pending",
            },
            {
                name: "Operating Systems and Concurrency",
                score: "Pending",
            },
            {
                name: "Programming Language Design Paradigms",
                score: "Pending",
            },
            {
                name: "Robotics Group Project",
                score: "Pending",
            },
        ],  
    },
    {
        label: "Year 2",
        institution: "King's College London",
        total: "76 / 100",
        subjects: [
            {
                name: "Computer Systems",
                score: "81 / 100",
            },
            {
                name: "Elementary Logic with Applications",
                score: "67 / 100",
            },
            {
                name: "Foundations of Computing 1",
                score: "70 / 100",
            },
            {
                name: "Database Systems",
                score: "84 / 100",
            },
            {
                name: "Data Structures",
                score: "87 / 100",
            },
            {
                name: "Introduction to Software Engineering",
                score: "70 / 100",
            },
            {
                name: "Programming Practice and Applications (Java)",
                score: "74 / 100",
            },
        ],
    },
    {
        label: "International Baccalaureate Diploma Programme",
        institution: "HKCCCU Logos Academy",
        total: "36 / 45",
        subjects: [
            {
                name: "Chinese A SL",
                score: "5",
            },
            {
                name: "English B HL",
                score: "6",
            },
            {
                name: "Information Technology in a Global Society SL",
                score: "5",
            },
            {
                name: "Computer Science SL",
                score: "6",
            },
            {
                name: "Physics HL",
                score: "6",
            },
            {
                name: "Mathematics HL",
                score: "6",
            },
            {
                name: "TOK / EE",
                score: "2",
            }
        ],
    }
];

interface onlineEducationType {
    label: string,
    organisation: string,
    date: string,
    result: string,
    certificate: string,
}

export const online: Array<onlineEducationType> = [
    {
        label: "CS50's Mobile App Development with React Native",
        organisation: "Harvard University",
        date: "Jul 2020",
        result: "Certificate of Completion",
        certificate: "https://certificates.cs50.io/9b94b377-1498-4903-94bd-ee9b1876a14e.pdf?size=letter",
    },
    {
        label: "Neural Networks and Deep Learning",
        organisation: "Coursera",
        date: "16 Jul 2020",
        result: "Certificate of Completion",
        certificate: "https://coursera.org/share/34799e979b1f5a12026c9307fb6cb010",
    },
];
