export type SocialLink = {
    name: 'github' | 'linkedin' | 'orcid' | 'google-scholar';
    url: string;
};

export type ResearchProposal = {
    title: string;
    status: string;
    summary: string;
    gap: string;
    studies: Array<{
        label: string;
        question: string;
        design: string;
        measures: string;
    }>;
    contribution: string[];
    methodsToLearn: string[];
    flexibility: string;
    practicalNotes: string;
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

    researchProposal: ResearchProposal;

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
        'Ivan Chiniakin | PhD applicant, consumer delegation to AI agents',

    status: 'PhD applicant | 2027 intake',

    eyebrow:
        'Ivan Chiniakin | Data-driven analysis of consumer delegation to AI agents',

    h1:
        'Do people let AI agents act for them? Trust and delegation in consumer decisions',

    subtitle:
        'I am a prospective PhD student for the 2027 intake. My master’s thesis surveyed 132 older respondents about IT healthcare innovation in Russia and showed me the limits of attitude measures. My proposed research studies behaviour instead: when an AI agent can search, compare and buy on a consumer’s behalf, what people actually hand over, and how design rules and agent errors change that over time. I combine a background in management and international relations with five-plus years of frontend engineering, including work with LLM APIs, so I can build the agent interfaces I would study.',

    // Research focus
    researchIntro:
        'AI agents are beginning to take actions in payment and retail settings rather than simply returning information. For data science, the problem is how to measure reliance from observed choices, distinguish the effects of interface rules from individual differences, and identify which features predict whether a person will accept, modify or reject an agent’s recommendation. Stated attitudes alone are unlikely to provide enough information for these decisions. I come to this from management and international relations, plus several years of software engineering, which gives me both the behavioural questions and the means to build the experimental stimuli.',

    researchPoints: [
        {
            name: 'Research question',
            description:
                'Do consumers delegate what they say they will delegate? I want to measure the gap between stated willingness and actual behaviour when an AI agent can make purchases, and test how authorisation and reversibility rules affect it (Study 1), how delegation changes after an agent error and what restores it (Study 2), and how product attributes and platform cues affect LLM agent choices and human delegation under disclosure (optional Study 3).',
        },
        {
            name: 'Data I want to work with',
            description:
                'Repeated task-level observations of stated choices, agent recommendations, completed purchases, overrides and post-task assessments, from online experiments with a prototype shopping agent under real financial stakes, combined with survey measures of stated intention, trust and perceived risk. Participants recruited through online panels in mainland China, Hong Kong and an international panel.',
        },
        {
            name: 'Methods I have used',
            description:
                'Survey design and questionnaire administration to 132 older respondents, analysed in SPSS with descriptive and correlational statistics, plus a structured literature review. Five or more years of frontend engineering, including work with LLM APIs and AI-enabled products. I am clear that this is an entry point; experimental design is the skill I most want to build.',
        },
        {
            name: 'What I want to learn next',
            description:
                'Experimental design and simulation-based power analysis, pre-registration, mixed-effects models for repeated measures, interpretable predictive modelling with participant-level validation, and reproducible analysis in Python or R.',
        },
        {
            name: 'Why this angle',
            description:
                'My thesis showed me the limits of attitude surveys: they tell you what people say about technology, not what they do with it. This project is the direct next step, replacing stated intention with observed behaviour, in a domain where product decisions are being made on weak evidence.',
        },
    ],

    projectCard: {
        title:
            'Data-Driven Analysis of Consumer Delegation to AI Agents',
        stage: 'Proposed doctoral research',
        intake: '2027',
        scope: 'Consumer delegation | AI agents | behavioural experiments | predictive analysis',
    },

    researchProposal: {
        title:
            'Data-Driven Analysis of Consumer Delegation to AI Agents: Behaviour, Prediction and Trust Recovery',

        status: 'Working draft | open to supervisor input',

        summary:
            'AI shopping agents increasingly search, compare and select products on a consumer’s behalf. Yet stated willingness to delegate may not predict what consumers actually allow an agent to do. This project measures that gap through repeated behavioural choices and examines how design rules and agent errors affect delegation over time. Two pre-registered experiments form the core of the project. Study 1 tests authorisation and reversibility; Study 2 examines changes in delegation after an agent error and whether compensation and explanation affect recovery. An optional third study audits LLM shopping agents in a mock marketplace and tests whether disclosure changes human choices. The project combines experimental design, statistical modelling and predictive analysis to study decisions made jointly by consumers and AI agents.',

        gap:
            'Much of the consumer research I have read so far measures willingness or intention to delegate, often in single-session settings with hypothetical stakes. Existing studies often examine stated intentions, hypothetical consumer choices or agent outputs separately. This project links these forms of evidence: it estimates how experimental conditions affect observed delegation, examines variation across participants and tasks, and tests whether models fitted to one set of tasks predict behaviour on held-out tasks. The aim is to use transparent statistical models to explain and predict decisions, not to propose a new machine-learning architecture.',

        studies: [
            {
                label: 'Study 1: Say versus do',
                question:
                    'How well do stated intentions predict completed delegation, and how do authorisation and reversibility rules affect this relationship? Which participant and task features explain variation?',
                design:
                    'Online experiment with a 2 x 2 between-subjects design: authorisation (per-transaction approval vs standing spending limit) by reversibility (no undo vs undo window). Participants are randomly assigned to one of the four conditions and are told the applicable rules before the study begins. The statement phase always comes first, followed by the action phase, so experience with the agent does not affect initial stated choices. Participants first state what they would delegate in hypothetical scenarios matched to later purchase tasks, then complete the corresponding tasks with a scripted agent; part of their performance bonus depends on the product selected. Actual delegation is recorded when a participant accepts the agent’s selected product and allows the purchase to be completed within the assigned authorisation rules. An approval click required by the condition is not an override; an override occurs when the participant changes the product, rejects the agent’s choice or cancels the purchase. The initial target is about 640 participants, roughly 160 per cell.',
                measures:
                    'Completed delegation on each eligible task; override; the stated-actual gap; regret; perceived control and risk. Logistic and mixed-effects models estimate experimental effects, with repeated tasks nested within participants; interpretable predictive models are compared on held-out participants and tasks using discrimination and calibration.',
            },
            {
                label: 'Study 2: After an error',
                question:
                    'How does delegation change across repeated tasks after an agent error? Do compensation guarantees and explanations affect the level and pace of trust recovery?',
                design:
                    'The same prototype is used for eight sequential tasks. Participants are assigned to one of five conditions: (1) no-error control; (2) an agent error without a compensation guarantee or explanation; (3) an error with a compensation guarantee but no explanation; (4) an error with an explanation but no compensation guarantee; or (5) an error with both. In the compensation conditions, the guarantee is explained before the tasks begin. In the four error conditions, the agent makes the same clear mistake in round 4 by selecting a product that fails an explicit task requirement and reduces the performance bonus. The explanation, where assigned, is provided after the error; compensation offsets the bonus loss. Participants receive a fixed participation payment and do not risk their own money. The preliminary target is about 600 participants, or 120 per condition.',
                measures:
                    'Delegation for each round; blame attribution (agent, platform or self); trust; decision time; extent of recovery. Mixed-effects models estimate changes across rounds and differences between conditions, examining the immediate drop after the error and the subsequent recovery trajectory.',
            },
            {
                label: 'Study 3 (optional): Agent audit and disclosure',
                question:
                    'How do product position, price, rating and platform affiliation affect LLM agent choices, and does disclosure change human delegation?',
                design:
                    'LLM agents are tested in a controlled mock marketplace with randomised product position, price, rating and platform-affiliation labels, adapting open frameworks such as ACES. A conditional logit model estimates how far an affiliation cue shifts choice, expressed in price-equivalent terms. Model and version, prompts, available settings and timestamps are recorded, and tests are repeated to assess stability. Audit results inform an experiment on disclosure with conditions of no disclosure, disclosure, and disclosure with an option to switch to neutral ranking.',
                measures:
                    'Agent choice as a function of product attributes and platform cues; human delegation, overpayment relative to the best option, and detection of the bias under disclosure.',
            },
        ],

        contribution: [
            'Behavioural evidence on delegation with real stakes, instead of stated intention alone.',
            'The intention–behaviour gap treated as a measured outcome, with the design features that move it.',
            'A structured dataset linking stated intentions, repeated delegation choices, agent recommendations and post-error responses.',
            'Findings that may be useful to researchers and firms developing consumer-facing AI systems, and to regulators considering safeguards for agentic commerce.',
        ],

        methodsToLearn: [
            'Experimental design, simulation-based power analysis and pre-registration',
            'Mixed-effects models for repeated measures',
            'Interpretable predictive modelling and validation on held-out participants and tasks',
            'Reproducible analysis in Python or R',
        ],

        flexibility:
            'I want to continue working on data-driven analysis of decisions involving AI agents, while remaining open to changes in the study design and analytical approach. If a supervisor’s work points towards a related question in statistical learning, business analytics or human–AI decision systems, I would be willing to adapt the project. The central interest would remain how to measure and explain decisions made by people and AI agents.',

        practicalNotes:
            'Real-stakes experiments need a budget for participant payments, and the error manipulation in Study 2 involves deception with a full debrief, so it needs ethics approval. Hypotheses, designs and analysis plans will be pre-registered; data collection, coding decisions and exclusions will be documented. Materials and anonymised data will be released where ethics approval and agreements allow.',
    },

    stats: [
        { number: '132', label: 'older respondents in my thesis survey' },
        { number: '5+', label: 'years building production software' },
        { number: '~640', label: 'target participants in Study 1' },
        { number: '~600', label: 'target participants in Study 2' },
    ],

    thesisTitle:
        'Silver Economy in Russia: IT Healthcare Innovation for an Ageing Population',

    thesisMeta:
        'MBA thesis | USTC School of Management | 2023',

    thesisLimitations:
        'Limitations: the study relied on a single cross-sectional questionnaire and descriptive and correlational statistics in SPSS. It measured attitudes, not behaviour, and did not include experimental manipulation, causal identification or replication. These are exactly the gaps my proposed research is designed to address.',

    engineeringSummary:
        'Before and during my studies I worked as a frontend developer and, earlier, as a project manager on multi-client software projects. For behavioural research this has a concrete use: I can build the working agent interfaces that experiments need, instead of relying on mock-ups, and I understand how products like these are designed and shipped.',

    engineeringPoints: [
        'Frontend development with React, TypeScript, Vite and Jest, including component testing and delivery discipline.',
        'Building interactive, stateful web interfaces, the kind of working prototype an agent experiment requires.',
        'Work with LLM APIs and AI-enabled products.',
        'Project management across multiple clients and cross-functional teams (Agile, Jira, Confluence).',
        'Practical understanding of how digital products, including AI-enabled ones, are designed, built and evaluated.',
    ],

    // Skills
    skills: [
        {
            group: 'Experimental research and statistics',
            items: [
                'SPSS (descriptive and correlational statistics)',
                'Survey and questionnaire design',
                'Structured literature review',
                'Experimental design and regression models',
                'Python analysis',
            ],
        },
        {
            group: 'Prototyping and engineering',
            items: [
                'React',
                'TypeScript',
                'Vite',
                'Jest and testing',
                'Building interactive experimental interfaces',
                'LLM APIs and AI-enabled products',
            ],
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
        'I am not claiming a standard behavioural-science path. My strength is the bridge: I have run a survey study on technology adoption, I understand how digital products are built and shipped, and I can build the agent interfaces that behavioural experiments need. The doctoral training is where I plan to close the gap in experimental design and statistics.',

    // Application / FAQ
    faqs: [
        {
            question: 'What doctoral research are you proposing?',
            answer:
                'Research on trust and delegation in AI agents, specifically whether consumers actually delegate purchases to agents in the way they say they will, and how agent design and agent errors change that behaviour. The details are in the research proposal section, and the exact design would be refined with a prospective supervisor.',
        },
        {
            question: 'How fixed is your topic?',
            answer:
                'The area is fixed, the specifics are not. I am committed to trust in and delegation to AI agents. If a supervisor works on neighbouring questions such as trust calibration, human–AI collaboration, accountability for agent errors or delegation in organisations, I am happy to adapt the studies to fit.',
        },
        {
            question: 'What methods have you actually used?',
            answer:
                'A structured literature review and a questionnaire administered to 132 older respondents, analysed in SPSS with descriptive and correlational statistics. I am transparent that this is foundational and that I have not run behavioural experiments yet. That is the main thing I want doctoral training to give me, together with mixed-effects modelling and reproducible analysis.',
        },
        {
            question: 'Why this topic, given your engineering background?',
            answer:
                'Engineering is what makes it feasible. Studying delegation to agents requires working agent interfaces, and I can build them rather than depend on mock-ups. My thesis also left me with a clear methodological question: attitudes toward technology are easy to measure and a weak guide to behaviour.',
        },
        {
            question: 'What do you plan to do after the PhD?',
            answer:
                'I want to apply this research where agents are being designed and deployed: AI product and strategy, research roles in industry, and public writing and speaking on how people actually use AI agents. I see rigorous, publishable research as the foundation for that work.',
        },
        {
            question: 'Why is your background relevant?',
            answer:
                'My thesis was a survey study on technology adoption, so I know the questions and the limits of that approach. My engineering and project-management work adds an understanding of how digital products are built, shipped and evaluated, and how to work with stakeholders. I am applying from an interdisciplinary position rather than a standard psychology or computer-science path.',
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
    availability: 'Available for the 2027 intake',
    fundingNote:
        'Seeking fully funded doctoral positions; open to scholarships, studentships and assistantships.',

    // Optional assets
    portrait: 'portrait.png',
    cv: null,
    proposal: null,
};
