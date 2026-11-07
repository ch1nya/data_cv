/**
 * ============================================================
 *  МАРКЕРЫ ДОКРУЧЕННОГО. Поиск по файлу: Ctrl+F -> "ДОКРУТИЛ"
 *
 *   🔴 ДОКРУТИЛ-ФАКТ  — конкретный факт о тебе, которого не было в исходнике
 *                        или который я сформулировал как "осваиваю/планирую".
 *                        Сделай правдой или удали.
 *   🟡 ДОКРУТИЛ-ФРЕЙМ — факт реальный, но я переупаковал под новую тему.
 *                        Проверь, что готов отстаивать на собеседовании.
 *   🟢 ДОКРУТИЛ-НОВОЕ — создано с нуля (новый блок, новые FAQ). Доработай руками.
 *
 *  Всё без маркера — из исходного файла.
 *
 *  Сводка:
 *   1. 🟢 Новый блок researchProposal + новое поле в типе Content.
 *         ВАЖНО: компонент сайта сам не отрисует это поле, его нужно добавить в вёрстку.
 *   2. 🟡 Тема сменена: доверие и делегирование ИИ-агентам в потребительских покупках.
 *         Тезис про silver economy подан как "установки -> поведение" (см. backgroundLine).
 *   3. 🔴 Инструменты "в процессе освоения": Python или R, mixed-effects модели,
 *         Prolific/Qualtrics. Это НЕ опыт, это планы; формулировки везде "learning/plan".
 *   4. 🟡 Фронтенд-опыт переупакован как умение строить прототипы-стимулы для экспериментов.
 *   5. 🟢 Новые FAQ: про гибкость темы, про карьерные цели после PhD, про ограничения.
 *   6. 🟡 Блок stats.
 *
 *  Убрано из прошлой DS-версии (выдуманное, под новую тему не нужно):
 *   Python-реанализ тезиса, дашборды, A/B-тесты в Sber, онлайн-курсы,
 *   Cronbach's alpha / Spearman / chi-square.
 *
 *  TODO перед отправкой: прочитать литературу и добавить 3-5 ключевых ссылок;
 *  проверить утверждение про "намерения vs поведение" в блоке gap.
 * ============================================================
 */

export type SocialLink = {
    name: 'github' | 'linkedin' | 'orcid' | 'google-scholar';
    url: string;
};

// 🟢 ДОКРУТИЛ-НОВОЕ: тип для блока research proposal
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

    // 🟢 ДОКРУТИЛ-НОВОЕ: отдельный блок research proposal
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
    // 🟡 ДОКРУТИЛ-ФРЕЙМ: новая тема вместо data science for ageing populations
    siteTitle:
        'Ivan Chiniakin | PhD applicant, trust and delegation in AI agents',

    status: 'PhD applicant · 2027 intake',

    eyebrow:
        'Ivan Chiniakin · Trust, delegation and decision-making with AI agents',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ
    h1:
        'Do people let AI agents act for them? Trust and delegation in consumer decisions',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ: тезис подан как отправная точка "от установок к поведению"
    subtitle:
        'I am a prospective PhD student for the 2027 intake. My master’s thesis surveyed 132 older respondents about IT healthcare innovation in Russia. That work measured attitudes; I now want to study behaviour: when people are given an AI agent that can act on their behalf, what do they actually hand over, and what makes them take control back? I combine a background in management and international relations with five-plus years of frontend engineering, which lets me build the agent interfaces I would study.',

    // Research focus
    // 🟡 ДОКРУТИЛ-ФРЕЙМ
    researchIntro:
        'AI agents that search, compare and increasingly complete purchases on a person’s behalf are moving from demos to products. Industry surveys report enthusiasm and distrust at the same time: people say they like the idea, yet many hesitate when the agent has to spend their money. My interest is in that gap between what people say they will delegate and what they actually delegate, and in the agent design choices that move it. I come to this from management and international relations, plus several years of software engineering, which gives me both the behavioural questions and the means to build the experimental stimuli.',

    researchPoints: [
        {
            name: 'Research question',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ
            description:
                'Do consumers delegate what they say they will delegate? I want to measure the gap between stated willingness and actual behaviour when an AI agent can make purchases, and test which features of the agent (level of autonomy, reversibility, spending limits, transparency) narrow or widen it.',
        },
        {
            name: 'Data I want to work with',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ
            description:
                'Behavioural data from online experiments with a prototype shopping agent, with real financial stakes for participants, combined with survey measures of stated intention, trust and perceived risk. Repeated-task designs for studying how trust changes over time.',
        },
        {
            name: 'Methods I have used',
            description:
                'Survey design and questionnaire administration to 132 older respondents, analysed in SPSS with descriptive and correlational statistics, plus a structured literature review. I am clear that this is an entry point; experimental design is the skill I most want to build.',
        },
        {
            name: 'What I want to learn next',
            // 🔴 ДОКРУТИЛ-ФАКТ (п.3): все пункты это планы, не опыт. Выбери реальный приоритет.
            description:
                'Experimental design and power analysis, pre-registration, regression and mixed-effects models for repeated measures, mediation analysis, and Python or R for reproducible analysis. These are the methods the two studies below need, and doctoral training is where I plan to acquire them properly.',
        },
        {
            name: 'Why this angle',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ
            description:
                'My thesis showed me the limits of attitude surveys: they tell you what people say about technology, not what they do with it. This project is the direct next step, replacing stated intention with observed behaviour, in a domain that is moving fast and where product decisions are being made on weak evidence.',
        },
    ],

    projectCard: {
        title:
            'Trust and delegation in consumer AI agents',
        stage: 'Proposed doctoral research',
        intake: '2027',
        // 🟡 ДОКРУТИЛ-ФРЕЙМ
        scope: 'Trust · delegation · behavioural experiments · AI agents',
    },

    // 🟢 ДОКРУТИЛ-НОВОЕ: весь блок целиком создан с нуля. Доработай формулировки и дизайн.
    researchProposal: {
        title:
            'Do people delegate what they say they will? Intention, behaviour and trust in consumer AI agents',

        status: 'Working draft · open to supervisor input',

        summary:
            'Two linked studies on how consumers delegate purchases to AI agents. Study 1 measures the gap between stated willingness to delegate and actual delegation under real financial stakes. Study 2 follows how trust and delegation change over repeated tasks when the agent makes a mistake, and what helps trust recover.',

        // 🟡 ДОКРУТИЛ-ФРЕЙМ: утверждение про литературу основано на аннотациях, проверь после чтения
        gap:
            'Much of the consumer research I have read so far measures willingness or intention to delegate, often in single-session online settings with hypothetical stakes. Industry surveys show wide swings in how much consumers say they trust agents, which suggests that stated attitudes alone are an unreliable guide to behaviour. I want to treat the intention–behaviour gap itself as the outcome, measure behaviour with real money at stake, and study how trust evolves after the agent fails. I will test this positioning against the literature before submitting any formal proposal.',

        studies: [
            {
                label: 'Study 1 · The say–do gap',
                question:
                    'How large is the gap between stated willingness to delegate purchases to an AI agent and actual delegation under real financial stakes, and which agent design features narrow it?',
                design:
                    'Online experiment. Participants first report what they would delegate (category, amount, level of autonomy), then complete a purchase task with a prototype agent where part of the outcome is paid to them. Between-subjects manipulation of agent autonomy (suggests, asks for approval, acts within a limit), purchase value, and reversibility (undo window).',
                measures:
                    'Delegation rate, override rate, gap between stated and actual delegation, post-task regret and satisfaction, perceived control and risk.',
            },
            {
                label: 'Study 2 · Trust after an error',
                question:
                    'How does delegation change over repeated tasks when the agent makes an error, who is blamed, and what restores trust?',
                design:
                    'Repeated-task experiment with the same prototype. An agent error is introduced midway and fully disclosed in a debrief. Manipulations include explanation of the error, compensation, and availability of an undo option.',
                measures:
                    'Delegation across rounds, attribution of blame (agent, platform, self), trust and perceived accountability, speed and extent of recovery.',
            },
        ],

        contribution: [
            'Behavioural evidence on delegation with real stakes, instead of stated intention alone.',
            'The intention–behaviour gap treated as a measured outcome, with the design features that move it.',
            'Practical guidance for product teams building agentic shopping and payment experiences: what to make reversible, limited or transparent.',
        ],

        // 🔴 ДОКРУТИЛ-ФАКТ (п.3): планы по методам
        methodsToLearn: [
            'Experimental design, power analysis and pre-registration',
            'Regression and mixed-effects models for repeated measures',
            'Mediation and moderation analysis',
            'Reproducible analysis in Python or R',
        ],

        flexibility:
            'I am committed to the broad area of trust in and delegation to AI agents, not to one fixed design. If a prospective supervisor’s group works on adjacent questions, such as trust calibration, human–AI collaboration, accountability for agent errors, or delegation in organisations, I am glad to adapt the specific studies and context. The core approach, building a working agent prototype and testing it on people with real behavioural outcomes, transfers across all of these.',

        // 🟢 ДОКРУТИЛ-НОВОЕ: честный блок про ограничения; убери, если не хочешь показывать
        practicalNotes:
            'Real-stakes experiments need a budget for participant payments, and the error manipulation in Study 2 involves deception with a full debrief, so it needs ethics approval. I would plan for both from the start, and I would build the agent prototype once and reuse it across studies.',
    },

    // Selected profile indicators
    // 🟡 ДОКРУТИЛ-ФРЕЙМ (п.6)
    stats: [
        { number: '132', label: 'older respondents in my thesis survey' },
        { number: '5+', label: 'years building production software' },
        { number: '2', label: 'linked experiments in the proposed research' },
    ],

    // Selected work
    thesisTitle:
        'Silver Economy in Russia: IT Healthcare Innovation for an Ageing Population',

    thesisMeta:
        'MBA thesis · USTC School of Management · 2023',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ: ограничения связаны с мотивацией новой темы
    thesisLimitations:
        'Limitations: the study relied on a single cross-sectional questionnaire and descriptive and correlational statistics in SPSS. It measured attitudes, not behaviour, and did not include experimental manipulation, causal identification or replication. These are exactly the gaps my proposed research is designed to address.',

    // 🟡 ДОКРУТИЛ-ФРЕЙМ (п.4): инженерия как способность строить стимулы
    engineeringSummary:
        'Before and during my studies I worked as a frontend developer and, earlier, as a project manager on multi-client software projects. For behavioural research this has a concrete use: I can build the working agent interfaces that experiments need, instead of relying on mock-ups, and I understand how products like these are designed and shipped.',

    engineeringPoints: [
        'Frontend development with React, TypeScript, Vite and Jest, including component testing and delivery discipline.',
        'Building interactive, stateful web interfaces, the kind of working prototype an agent experiment requires.',
        'Project management across multiple clients and cross-functional teams (Agile, Jira, Confluence).',
        'Practical understanding of how digital products, including AI-enabled ones, are designed, built and evaluated.',
    ],

    // Skills
    skills: [
        {
            // 🔴 ДОКРУТИЛ-ФАКТ (п.3): всё кроме SPSS и опросов помечено как learning
            group: 'Experimental research and statistics',
            items: [
                'SPSS (descriptive and correlational statistics)',
                'Survey and questionnaire design',
                'Structured literature review',
                'Experimental design and regression models (learning)',
                'Python or R for analysis (learning)',
            ],
        },
        {
            // 🟡 ДОКРУТИЛ-ФРЕЙМ (п.4)
            group: 'Prototyping and engineering',
            items: [
                'React',
                'TypeScript',
                'Vite',
                'Jest and testing',
                'Building interactive experimental interfaces',
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

    // 🟡 ДОКРУТИЛ-ФРЕЙМ
    backgroundLine:
        'I am not claiming a standard behavioural-science path. My strength is the bridge: I have run a survey study on technology adoption, I understand how digital products are built and shipped, and I can build the agent interfaces that behavioural experiments need. The doctoral training is where I plan to close the gap in experimental design and statistics.',

    // Application / FAQ
    faqs: [
        {
            question: 'What doctoral research are you proposing?',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ
            answer:
                'Research on trust and delegation in AI agents, specifically whether consumers actually delegate purchases to agents in the way they say they will, and how agent design and agent errors change that behaviour. The details are in the research proposal section, and the exact design would be refined with a prospective supervisor.',
        },
        {
            // 🟢 ДОКРУТИЛ-НОВОЕ
            question: 'How fixed is your topic?',
            answer:
                'The area is fixed, the specifics are not. I am committed to trust in and delegation to AI agents. If a supervisor works on neighbouring questions such as trust calibration, human–AI collaboration, accountability for agent errors or delegation in organisations, I am happy to adapt the studies to fit.',
        },
        {
            question: 'What methods have you actually used?',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ
            answer:
                'A structured literature review and a questionnaire administered to 132 older respondents, analysed in SPSS with descriptive and correlational statistics. I am transparent that this is foundational and that I have not run behavioural experiments yet. That is the main thing I want doctoral training to give me, together with mixed-effects modelling and reproducible analysis.',
        },
        {
            // 🟢 ДОКРУТИЛ-НОВОЕ
            question: 'Why this topic, given your engineering background?',
            answer:
                'Engineering is what makes it feasible. Studying delegation to agents requires working agent interfaces, and I can build them rather than depend on mock-ups. My thesis also left me with a clear methodological question: attitudes toward technology are easy to measure and a weak guide to behaviour.',
        },
        {
            // 🟢 ДОКРУТИЛ-НОВОЕ: цели после PhD; смягчи или убери, если боишься сигнала "не в академию"
            question: 'What do you plan to do after the PhD?',
            answer:
                'I want to apply this research where agents are being designed and deployed: AI product and strategy, research roles in industry, and public writing and speaking on how people actually use AI agents. I see rigorous, publishable research as the foundation for that work.',
        },
        {
            question: 'Why is your background relevant?',
            // 🟡 ДОКРУТИЛ-ФРЕЙМ
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