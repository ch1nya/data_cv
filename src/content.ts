export type SocialLink = {
    name: 'github' | 'linkedin' | 'orcid' | 'google-scholar';
    url: string;
};

export type Content = {
    // Site identity
    siteTitle: string;
    status: string;
    eyebrow: string;
    h1: string;
    subtitle: string;

    // Research focus
    researchIntro: string;
    researchPoints: Array<{ name: string; description: string }>;
    projectCard: {
        title: string;
        stage: string;
        intake: string;
        scope: string;
    };

    // Stats
    stats: Array<{ number: string; label: string }>;

    // Selected work
    thesisTitle: string;
    thesisMeta: string;
    thesisLimitations: string;
    engineeringSummary: string;
    engineeringPoints: string[];

    // Skills
    skills: Array<{ group: string; items: string[] }>;

    // Background
    education: Array<{
        degree: string;
        university: string | null;
        year: string | null;
    }>;
    industry: Array<{
        role: string;
        years: string;
        stack: string;
        employer: string | null;
    }>;
    priorResearch: string;
    backgroundLine: string;

    // Application / FAQ
    faqs: Array<{ question: string; answer: string }>;

    // Contact
    email: string;
    social: SocialLink[];
    location: string | null;
    availability: string | null;
    fundingNote: string | null;

    // Optional assets
    portrait: string | null;
    cv: string | null;
    proposal: string | null;
};

export const content: Content = {
    // Site identity
    siteTitle:
        'Ivan Chiniakin | PhD applicant, data science for ageing populations',

    status: 'PhD applicant · 2027 intake',

    eyebrow:
        'Ivan Chiniakin · Data science for ageing populations and health technology',

    h1:
        'Data science for ageing populations and health-tech innovation',

    subtitle:
        'I am a prospective PhD student for the 2027 intake. My master’s thesis studied IT healthcare innovation for older adults in Russia, based on a survey of 132 older respondents analysed in SPSS. I am looking for a doctoral programme where I can deepen my quantitative and computational skills and apply data science to questions of ageing, health and technology use.',

    // Research focus
    researchIntro:
        'My research interest is practical and question-driven: how can data about older adults, their health needs and their use of digital health services be turned into evidence that improves the design and delivery of health technology? I come to this from an interdisciplinary background in international relations and management, plus several years of software engineering, which gives me a view of both the institutional context and the systems that produce the data.',

    researchPoints: [
        {
            name: 'Research question',
            description:
                'How do older adults adopt, use and benefit from digital health and IT healthcare innovations, and what barriers shape that adoption? I am interested in the gap between what health technology promises and what older users actually experience.',
        },
        {
            name: 'Data I want to work with',
            description:
                'Survey and questionnaire data from older respondents, administrative and service-usage records where available, and mixed-methods designs that combine quantitative analysis with qualitative context about the user.',
        },
        {
            name: 'Methods I have used',
            description:
                'Descriptive and correlational statistics in SPSS on a sample of 132 older respondents, plus a structured literature review. I am honest that this is an entry point, not an advanced methods portfolio.',
        },
        {
            name: 'What I want to learn next',
            description:
                'Python or R for data analysis, SQL and data engineering, machine learning and predictive modelling, causal inference, and working with longitudinal and panel data. The doctoral training is where I plan to close this gap.',
        },
        {
            name: 'Why this angle',
            description:
                'My thesis already focused on the silver economy and digital healthcare for ageing populations, so this question is a continuation of work I have actually done rather than a new interest adopted for the application.',
        },
    ],

    projectCard: {
        title:
            'Data science for ageing populations and health-tech innovation',
        stage: 'Proposed doctoral research',
        intake: '2027',
        scope: 'Ageing · health technology · data analysis',
    },

    // Selected profile indicators
    stats: [
        { number: '132', label: 'older respondents in my thesis survey' },
        { number: '2', label: 'academic degrees' },
        { number: '3', label: 'languages spoken' },
    ],

    // Selected work
    thesisTitle:
        'Silver Economy in Russia: IT Healthcare Innovation for an Ageing Population',

    thesisMeta:
        'MBA thesis · USTC School of Management · 2023',

    thesisLimitations:
        'Limitations: the study relied on a single cross-sectional questionnaire and descriptive and correlational statistics in SPSS. It did not include predictive modelling, causal identification or replication. These are the gaps I want doctoral training to address.',

    engineeringSummary:
        'Before and during my studies I worked as a frontend developer and, earlier, as a project manager on multi-client software projects. I treat this as evidence of delivery discipline rather than data science: shipping tested code, working with stakeholders, and keeping projects moving.',

    engineeringPoints: [
        'Frontend development with React, TypeScript, Vite and Jest, including component testing.',
        'Project management across multiple clients and cross-functional teams (Agile, Jira, Confluence).',
        'Practical understanding of how digital products, including AI-enabled ones, are designed, built and evaluated.',
    ],

    // Skills
    skills: [
        {
            group: 'Analysis and statistics',
            items: [
                'SPSS (descriptive and correlational statistics)',
                'Survey and questionnaire data',
                'Structured literature review',
            ],
        },
        {
            group: 'Engineering',
            items: ['React', 'TypeScript', 'Vite', 'Jest', 'Testing and delivery'],
        },
        {
            group: 'Languages',
            items: ['Russian (native)', 'English (C2)', 'Chinese (basic)'],
        },
    ],

    // Background
    education: [
        {
            degree: "Master's in Business Management",
            university:
                'University of Science and Technology of China (USTC), School of Management',
            year: '2023',
        },
        {
            degree: "Bachelor's in International Relations",
            university: 'Tomsk State University',
            year: '2019',
        },
    ],

    industry: [
        {
            role: 'Frontend Developer',
            years: '5+ years',
            stack:
                'React, TypeScript, Vite, Jest, component testing and delivery',
            employer: 'Sber',
        },
        {
            role: 'Project Manager',
            years: '4 years',
            stack:
                'Multi-client software projects, cross-functional coordination, Agile',
            employer: null,
        },
    ],

    priorResearch:
        'Master’s thesis, “Silver Economy in Russia: IT Healthcare Innovation for an Ageing Population.” The study examined the potential of digital healthcare solutions to address the needs of an ageing population. Research activities included a structured literature review and a questionnaire administered to 132 older respondents. The collected data were analysed using SPSS, including descriptive and correlational statistical methods.',

    backgroundLine:
        'I am not claiming a standard data-science path. My strength is the bridge: I understand the population and the institutional context from my thesis, and I understand how software and data systems are built from my engineering work. The doctoral training is where I plan to close the gap in advanced statistics and machine learning.',

    // Application / FAQ
    faqs: [
        {
            question: 'What doctoral research are you proposing?',
            answer:
                'I am proposing doctoral research on ageing, health technology and data: how data about older adults and their use of digital health services can be turned into evidence that improves the design and delivery of health technology. The exact research question and design would be refined with a prospective supervisor.',
        },
        {
            question: 'What methods have you actually used?',
            answer:
                'A structured literature review and a questionnaire administered to 132 older respondents, analysed in SPSS with descriptive and correlational statistics. I am transparent that this is foundational. I want doctoral training to take me into Python or R, machine learning, causal inference and longitudinal data.',
        },
        {
            question: 'Why is your background relevant?',
            answer:
                'My thesis already focused on the silver economy and digital healthcare for older adults, so the population and the problem are familiar to me. My engineering and project-management work adds an understanding of how digital products are built and shipped, and how to work with stakeholders. I am applying from an interdisciplinary position rather than a standard statistics or computer-science path.',
        },
        {
            question: 'What is your language background?',
            answer:
                'Russian is my native language, English is around C2, and I have basic Chinese from studying in China. I studied at USTC and did liaison work between USTC and Russian universities.',
        },
        {
            question: 'Are you seeking doctoral funding?',
            answer:
                'Yes. I am looking for fully funded doctoral positions for the 2027 intake, including university scholarships, research studentships, tuition support and assistantships, and I am open to relocation.',
        },
        {
            question: 'What materials are available?',
            answer:
                'My academic CV, the thesis abstract and further details can be shared on request. Please contact me by email for the latest application materials.',
        },
    ],

    // Contact
    email: 'chiniakinivan@gmail.com',

    social: [
        {
            name: 'github',
            url: 'https://github.com/ch1nya',
        },
        {
            name: 'linkedin',
            url: 'https://linkedin.com/in/chiniakinivan',
        },
    ],

    location: 'Saint Petersburg, Russia (open to relocation)',
    availability: 'Available for the 2027 intake; open to relocation',
    fundingNote:
        'Seeking fully funded doctoral positions; open to scholarships, studentships and assistantships.',

    // Optional assets
    portrait: 'portrait.png',
    cv: null,
    proposal: null,
};
CSS