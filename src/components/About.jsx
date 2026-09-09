import { Link } from "react-scroll";

const workExperience = [
    {
        date: "July 2025 - Present",
        title: "Senior Backend Engineer - Intramed (Roemmers group)",
        text: "Building social network products used by more than one million people, with a focus on event-driven microservices, scalable algorithms and reliable cloud deployments.",
        items: ["Node.js", "NestJS", "TypeScript", "Kafka", "Redis", "PostgreSQL", "MySQL", "AWS", "Jest"],
        logo: "./assets/imgs/companies/intramednet_logo.jfif"
    },
    {
        date: "January 2023 - June 2025",
        title: "Backend Engineer - SiloReal",
        text: "Led the backend platform serving web, internal, Android and iOS products. Delivered geospatial tools, IoT and satellite integrations, machine learning services and blockchain integrations.",
        items: ["Node.js", "Express.js", "NestJS", "TypeScript", "Prisma", "PostGIS", "AWS", "Python", "TensorFlow", "Solidity"],
        logo: "./assets/imgs/companies/siloreal_logo.jfif"
    },
    {
        date: "November 2021 - December 2022",
        title: "Software Developer - Request S.A",
        text: "Developed implementations and ERP integrations for the Esker SaaS platform, while collaborating with major clients such as Siemens, YPF and Cisco in English and Spanish.",
        items: ["JavaScript", "JSON", "CSV", "XML", "Git", "Scrum", "SAP", "Oracle"],
        logo: "./assets/imgs/companies/request.jfif"
    }
]

const companyExperience = [
    {
        name: "Intramed",
        detail: "Roemmers group",
        logo: "./assets/imgs/companies/intramednet_logo.jfif",
        role: "Senior Backend Engineer",
        focus: "Event-driven microservices, social network products and cloud infrastructure."
    },
    {
        name: "SiloReal",
        detail: "Agro technology",
        logo: "./assets/imgs/companies/siloreal_logo.jfif",
        role: "Backend Engineer",
        focus: "Backend platform, geospatial services, IoT, machine learning and blockchain."
    },
    {
        name: "Request S.A",
        detail: "Fintech / SaaS",
        logo: "./assets/imgs/companies/request.jfif",
        role: "Software Developer",
        focus: "Esker implementations, ERP integrations and client-facing delivery."
    },
]

const education = [
    {
        date: "2023 - 2024",
        title: "Bachelor's Degree in IT - Universidad de Palermo",
        text: "Completed a Bachelor's degree in Information Technology, strengthening my foundations in software engineering, systems design and professional development."
    },
    {
        date: "2022",
        title: "Associate Degree in Computer Systems - UTN",
        text: "Completed an associate degree focused on the analysis, design and implementation of information systems."
    },
    {
        date: "2019 - 2021",
        title: "Associate Degree in Programming - UTN",
        text: "Completed an associate degree in programming, building the foundation for more than four years of professional backend and frontend development."
    },
]

const TimelineItem = ({ item, index }) => (
    <article className='relative border-l border-accent/40 pb-8 pl-8 last:pb-0'>
        <span className='absolute -left-[9px] top-0 flex h-4 w-4 items-center justify-center rounded-full border-4 border-secondary bg-accent' aria-hidden='true'></span>
        <div className='mb-4 flex items-center gap-3'>
            {item.logo && (
                <div className='flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-[#e8e6df]'>
                    <img className='h-full w-full object-cover object-left mix-blend-multiply' src={item.logo} alt={`${item.title} logo`} />
                </div>
            )}
            <div>
                <p className='mb-2 text-xs uppercase tracking-[0.18em] text-accent-hover'>{item.date}</p>
                <h3 className='font-inter text-lg text-white lg:text-xl'>{item.title}</h3>
            </div>
        </div>
        <p className='text-sm leading-relaxed tracking-wide text-paragraph'>{item.text}</p>
        {
            item.items && item.items.length > 0 &&
            <ul className='mt-5 flex flex-wrap gap-2 font-inter text-xs text-white'>
                {
                    item.items.map((skill) =>
                        <li key={skill} className='rounded-sm border border-accent/50 px-2 py-1 text-paragraph'>
                            {skill}
                        </li>
                    )
                }
            </ul>
        }
    </article>
)

export const About = () => {
    return (
        <section className='section bg-secondary' id='about'>
            <div className='container mx-auto hiddenAnimation'>
                <div className='flex flex-col xl:flex-row gap-16 xl:gap-24'>
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left xl:w-5/12'>
                        <div className='flex flex-col'>
                            <p className='mb-3 text-xs uppercase tracking-[0.3em] text-accent-hover'>Profile</p>
                            <h2 className='text-3xl lg:text-4xl font-inter lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Matias Seeber
                            </h2>
                            <p className='mb-4 text-accent'>
                                Backend Engineer · Platform & Product Systems
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                Backend engineer with 4+ years of experience designing and delivering scalable systems, event-driven architectures, and product platforms used by large user bases. I work across Node.js, TypeScript, NestJS, PostgreSQL, Kafka, AWS, and cloud-native services, with a strong focus on reliability, performance, clean architecture, and continuous improvement.
                            </p>
                        </div>
                        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className='btn btn-md bg-accent hover:bg-secondary-hover hover:scale-105 transition-all duration-500' href="#contact">
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-20 grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20'>
                <div className='hiddenAnimation'>
                    <p className='mb-3 text-xs uppercase tracking-[0.3em] text-accent-hover'>Experience</p>
                    <h2 className='mb-10 font-inter text-2xl text-white lg:text-3xl'>Work</h2>
                    <div className='space-y-8'>
                        {workExperience.map((item, index) => <TimelineItem item={item} index={index} key={item.title} />)}
                    </div>
                </div>
                <div className='hiddenAnimation'>
                    <p className='mb-3 text-xs uppercase tracking-[0.3em] text-accent-hover'>Learning path</p>
                    <h2 className='mb-10 font-inter text-2xl text-white lg:text-3xl'>Education</h2>
                    <div className='space-y-8'>
                        {education.map((item, index) => <TimelineItem item={item} index={index} key={item.title} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};
