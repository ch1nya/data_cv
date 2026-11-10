import {ReactNode, useState} from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import {ChevronDown, Copy, Menu, Moon, Sun, X} from 'lucide-react';
import {Toaster, toast} from 'sonner';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';
import {Separator} from '@/components/ui/separator';
import {content} from './content';

const navLinks = [
    {href: '#research', label: 'Research focus'},
    {href: '#proposal', label: 'Proposal'},
    {href: '#work', label: 'Selected work'},
    {href: '#skills', label: 'Skills'},
    {href: '#background', label: 'Background'},
    {href: '#faq', label: 'FAQ'},
    {href: '#contact', label: 'Contact'},
];

async function copyEmail() {
    try {
        if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(content.email);
        else {
            const field = document.createElement('textarea');
            field.value = content.email;
            field.style.position = 'fixed';
            field.style.opacity = '0';
            document.body.append(field);
            field.select();
            if (!document.execCommand('copy')) throw new Error('Clipboard copy failed');
            field.remove();
        }
        toast.success('Email copied');
    } catch {
        toast.error('Could not copy email');
    }
}

function ThemeToggle() {
    const [dark, setDark] = useState(document.documentElement.dataset.theme === 'dark');
    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.dataset.theme = next ? 'dark' : 'light';
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };
    return <Tooltip.Provider delayDuration={250}><Tooltip.Root><Tooltip.Trigger asChild>
        <Button variant="ghost" className="icon-button" onClick={toggle}
                aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}><span aria-hidden="true">{dark ?
            <Sun size={17}/> : <Moon size={17}/>}</span></Button>
    </Tooltip.Trigger><Tooltip.Portal><Tooltip.Content className="tooltip"
                                                       sideOffset={6}>{dark ? 'Light theme' : 'Dark theme'}<Tooltip.Arrow
        className="tooltip-arrow"/></Tooltip.Content></Tooltip.Portal></Tooltip.Root></Tooltip.Provider>;
}

function Header() {
    return <header className="site-header">
        <div className="container header-inner">
            <a className="wordmark" href="#main">~/ch1nya/data_cv<span className="wordmark-cursor"
                                                                       aria-hidden="true">_</span></a>
            <nav className="desktop-nav" aria-label="Main navigation">{navLinks.map((link) => <a key={link.href}
                                                                                                 href={link.href}>{link.label}</a>)}</nav>
            <div className="header-actions"><ThemeToggle/>
                <Dialog.Root><Dialog.Trigger asChild><Button variant="ghost" className="icon-button mobile-menu-trigger"
                                                             aria-label="Open menu"><Menu
                    size={19}/></Button></Dialog.Trigger>
                    <Dialog.Portal><Dialog.Overlay className="sheet-overlay"/><Dialog.Content className="sheet-content">
                        <div className="sheet-heading"><Dialog.Title>Navigation</Dialog.Title><Dialog.Close
                            asChild><Button variant="ghost" className="icon-button" aria-label="Close menu"><X
                            size={18}/></Button></Dialog.Close></div>
                        <nav aria-label="Mobile navigation" className="mobile-nav">{navLinks.map((link) => <Dialog.Close
                            asChild key={link.href}><a href={link.href}>{link.label}</a></Dialog.Close>)}</nav>
                    </Dialog.Content></Dialog.Portal>
                </Dialog.Root>
            </div>
        </div>
    </header>;
}

function EmailActions() {
    return <div className="hero-actions"><a href={`mailto:${content.email}`} className="button button--primary">Write an
        email</a>
        <Button onClick={copyEmail}><Copy size={15}/> Copy email</Button>
        {content.cv && <a href={content.cv} className="button button--ghost" download>Download CV</a>}
    </div>;
}

function Hero() {
    return <section className="hero content-column" aria-labelledby="hero-title">
        <div className="hero-main">
            <Badge><span className="status-dot"/>{content.status}</Badge>
            <h1 id="hero-title">{content.h1}</h1>
            <p className="hero-subtitle">{content.subtitle}</p>
            {content.portrait && <img className="hero-portrait" src={`${import.meta.env.BASE_URL}${content.portrait}`}
                                      alt="Ivan Chiniakin" width="136" height="136"/>}
        </div>
        {content.stats.length > 0 &&
            <div className="hero-stats">{content.stats.map((stat) => <span className="stat-chip"
                                                                           key={stat.label}><strong>{stat.number}</strong>{stat.label}</span>)}</div>}
        <EmailActions/>
    </section>;
}

function SectionHeading({number, title}: { number: string; title: string }) {
    return <div className="section-heading"><span className="section-number">{number}.</span><h2>{title}</h2></div>;
}

function Research() {
    return <section id="research" className="section content-column"><SectionHeading number="01"
                                                                                     title="Research focus"/>
        <p className="lead">{content.researchIntro}</p>
        <ol className="research-list">{content.researchPoints.map((point, index) => <li key={point.name}>
            <span className="research-index">{String(index + 1).padStart(2, '0')}</span>
            <div><h3>{point.name.replace(/\.$/, '')}</h3><p>{point.description}</p></div>
        </li>)}</ol>
        <Card className="metadata-card"><p className="card-kicker">PROJECT NOTES</p>
            <dl>{Object.entries(content.projectCard).map(([key, value]) => <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
            </div>)}</dl>
        </Card>
        {content.proposal && <a href={content.proposal} className="text-link" download>View proposal PDF <span
            aria-hidden="true">↗</span></a>}
    </section>;
}

function ResearchProposal() {
    const p = content.researchProposal;
    return <section id="proposal" className="section content-column"><SectionHeading number="02"
                                                                                     title="Research proposal"/>
        <Badge>{p.status}</Badge>
        <br/>
        <br/>
        <h3>{p.title}</h3>
        <p className="lead">{p.summary}</p>
        <Card className="work-card">
            <p className="card-kicker">WHERE THE GAP IS</p>
            <p>{p.gap}</p>
        </Card>
        {p.studies.map((study) => <Card className="work-card" key={study.label}>
            <p className="card-kicker">{study.label.toUpperCase()}</p>
            <h3>{study.question}</h3>
            <p><strong>Design.</strong> {study.design}</p>
            <p><strong>Measures.</strong> {study.measures}</p>
        </Card>)}
        <Card className="work-card">
            <p className="card-kicker">EXPECTED CONTRIBUTION</p>
            <ul>{p.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
        </Card>
        <Card className="work-card">
            <p className="card-kicker">METHODS I PLAN TO LEARN</p>
            <div className="chip-row">{p.methodsToLearn.map((item) => <span className="chip"
                                                                            key={item}>{item}</span>)}</div>
        </Card>
        <Card className="work-card">
            <p className="card-kicker">OPEN TO ADJACENT TOPICS</p>
            <p>{p.flexibility}</p>
        </Card>
        <p className="background-note">{p.practicalNotes}</p>
    </section>;
}

function SelectedWork() {
    return <section id="work" className="section content-column"><SectionHeading number="03" title="Selected work"/>
        <Card className="work-card">
            <p className="card-kicker">THESIS</p>
            <h3>{content.thesisTitle}</h3>
            <p className="work-meta">{content.thesisMeta}</p>
            <p>{content.priorResearch}</p>
            <p className="background-note">{content.thesisLimitations}</p>
        </Card>
        <Card className="work-card">
            <p className="card-kicker">ENGINEERING AND PROJECT WORK</p>
            <h3>Software delivery and project management</h3>
            <p>{content.engineeringSummary}</p>
            <ul>{content.engineeringPoints.map((point) => <li key={point}>{point}</li>)}</ul>
        </Card>
    </section>;
}

function Skills() {
    return <section id="skills" className="section content-column"><SectionHeading number="04" title="Skills"/>
        <div className="skills-groups">{content.skills.map((group) => <div className="skills-group" key={group.group}>
            <h3>{group.group}</h3>
            <div className="chip-row">{group.items.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
        </div>)}</div>
    </section>;
}

function Background() {
    return <section id="background" className="section content-column"><SectionHeading number="05"
                                                                                       title="Education and experience"/>
        <div className="background-group"><h3>Education</h3>
            <ul className="record-list">{content.education.filter((item) => item.degree).map((edu, index) => <li
                key={edu.degree} className="record-item">
                <div className="record-row">
                    <div><strong>{edu.degree}</strong>{edu.university && <span>{edu.university}</span>}</div>
                    {edu.year && <time>{edu.year}</time>}</div>
                {index < content.education.length - 1 && <Separator/>}</li>)}</ul>
        </div>
        <div className="background-group"><h3>Industry</h3>
            <ul className="record-list">{content.industry.map((item, index) => <li key={item.role}
                                                                                   className="record-item">
                <div className="record-row">
                    <div>
                        <strong>{item.role.trim()}{item.years.trim() ? `, ${item.years.trim()}` : ''}</strong>{item.stack &&
                        <span>{item.stack}</span>}</div>
                    {item.employer && <span className="record-meta">{item.employer}</span>}</div>
                {index < content.industry.length - 1 && <Separator/>}</li>)}</ul>
        </div>
        <p className="background-note">{content.backgroundLine}</p>
    </section>;
}

function Faq() {
    return <section id="faq" className="section content-column"><SectionHeading number="06"
                                                                                title="Frequently asked questions"/>
        <Accordion.Root className="accordion" type="single" collapsible
                        defaultValue="item-0">{content.faqs.map((faq, index) => <Accordion.Item value={`item-${index}`}
                                                                                                key={faq.question}
                                                                                                className="accordion-item">
            <Accordion.Header><Accordion.Trigger className="accordion-trigger">{faq.question}<ChevronDown size={17}
                                                                                                          className="accordion-chevron"/></Accordion.Trigger></Accordion.Header>
            <Accordion.Content className="accordion-content"><p>{faq.answer}</p></Accordion.Content>
        </Accordion.Item>)}</Accordion.Root>
    </section>;
}

function Contact() {
    const rows: Array<[string, ReactNode]> = [
        ['email', <a href={`mailto:${content.email}`}>{content.email}</a>],
        ['location', content.location],
        ['availability', content.availability],
        ['funding', content.fundingNote],
    ];
    return <section id="contact" className="section content-column"><SectionHeading number="07" title="Contact"/>
        <p>For questions about supervision, fit, or application materials, please get in touch.</p>
        <EmailActions/>
        <Card className="metadata-card"><p className="card-kicker">CONTACT DETAILS</p>
            <dl>{rows.filter(([, value]) => value).map(([key, value]) => <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
            </div>)}</dl>
        </Card>
        <br/>
        <div className="chip-row">{content.social.map((social) => <a className="chip" key={social.name}
                                                                     href={social.url} target="_blank"
                                                                     rel="noreferrer">{social.name} <span
            aria-hidden="true">↗</span></a>)}</div>
    </section>;
}

function Footer() {
    return <footer className="site-footer">
        <div className="container footer-inner"><span>© {new Date().getFullYear()} Ivan Chiniakin</span><span>Last updated: 10 November 2026</span><a
            href="#main">Back to top ↑</a></div>
    </footer>;
}

export default function App() {
    return <Tooltip.Provider>
        <div className="page"><Header/>
            <main id="main" className="container">
                <Hero/><Research/><ResearchProposal/><SelectedWork/><Skills/><Background/><Faq/><Contact/>
            </main>
            <Footer/><Toaster position="bottom-right" richColors closeButton/></div>
    </Tooltip.Provider>;
}
