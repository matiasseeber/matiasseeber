import { Link } from "react-scroll";

const timeline = [
    {
        date: "March 2019 - Universidad Tecnologica Nacional",
        title: "Enrolled to University",
        text: 'After finishing high school I enrolled to do an associete degree in Programming at the Unviersidad Tecnologica Nacional (National Technologic University)'
    },
    {
        date: "August 2019 - Universidad Tecnologica Nacional",
        title: "First line of code",
        text: 'After passing the entry course and examns of University I wrote my first lines of code in C++ in the subject "Computer Lab".'
    },
    {
        date: "July 2021 - Universidad Tecnologica Nacional",
        title: "Graduated as an Associate in Progrmming",
        text: "After two years of study and more than 20 subjects I got my Associate Degree in programming with an avarge of 8,6 out of 10"
    },
    {
        date: "November 2021 - Request S.A",
        title: "My first job as a software developer",
        text: "After many interviews I got my first job as a full time software developer, in which I work with Javascript and Git in a propietary software called Esker.",
        items: [
            "Javascript",
            "Git",
            "Scrum",
            "Integrations with ERPs (SAP, Oracle, etc)",
            "Comunication with clients (Meetings and Emails, English and Spanish)"
        ]
    },
    {
        date: "March 2022 - Universidad Tecnologica Nacional",
        title: "Continued studying",
        text: "After finishing the first associate carrer, a semester off of studying and working after a coulpe of months full-time I started studying again so i could get another assoicate degree in Informatic Systems"
    },
    {
        date: "November 2022 - Universidad Tecnologica Nacional",
        title: "Got another associate degree",
        text: "After stuying the whole year trying to balance personal life, work and univeristy I finishied both semester without failing no subject and passing everything without having to do no final examns for any of them. I passed 15 subjects and got my second associate degree but this time in Informatic Systems."
    },
    {
        title: "To be continued...",
    },
]

export const About = () => {
    return (
        <section className='section bg-secondary' id='about'>
            <div className='container mx-auto hiddenAnimation'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-inter lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Matias Seeber
                            </h2>
                            <p className='mb-4 text-accent'>
                                Full stack developer
                            </p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                I'm a Fullstack developer of 22 years old. I have an associate degree in programming and another one in infromatic sistems. Both of those degrees are in the National Technologic University (UTN).<br />
                                I'm also doing a bachellors in IT (Informatic sistems) at the University of Palermo (Universidad de Palermo) and have yet to do 16 subjects to graduate. <br />
                                I have been coding for more than three years to date and have been working as a full time developer for more than a year.
                                I have experience working with big companies like Siemens, YPF, Cisco and many more.
                            </p>
                        </div>
                        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} offset={-70} className='btn btn-md bg-accent hover:bg-secondary-hover hover:scale-125 transition-all duration-500' href="#contact">
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-accent-hover h-full border" style={{ left: "50%" }}></div>
                    {
                        timeline.map((item, index) =>
                            <div className={`mb-8 flex justify-between items-center w-full ${index % 2 != 0 ? "flex-row-reverse left-timeline" : "right-timeline"} font-inter hiddenAnimation`}>
                                <div className="order-1 w-5/12"></div>
                                <div className="z-9 flex items-center justify-center order-1 bg-accent shadow-xl w-8 h-8 rounded-full">
                                    <h1 className="mx-auto font-inter text-lg text-white">{index + 1}</h1>
                                </div>
                                <div className="order-1 bg-accent rounded-lg shadow-xl w-5/12 px-6 py-4">
                                    <h3 className="mb-3 font-inter text-white text-xl">{item.date}</h3>
                                    <h3 className="mb-3 font-inter text-white text-xl">{item.title}</h3>
                                    <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">{item.text}</p>
                                    {
                                        item.items && item.items.length > 0 &&
                                        <ul className="font-inter text-sm text-white list-disc">
                                            <p className="border-b-2 block w-fit">Skills: </p>
                                            {
                                                item.items.map((skill, index) =>
                                                    <li className="ml-14">
                                                        {skill}
                                                    </li>
                                                )
                                            }
                                        </ul>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};
