import {
    FiGithub
} from 'react-icons/fi';

import {Projects} from "./Projects";

export const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-primary min-h-screen'>
            <div className='container mx-auto flex justify-center items-center flex-col'>
                <div className='flex flex-row items-center justify-center text-center hiddenAnimation flex-wrap mb-20'>
                    <h2 className='w-full section-title font-inter before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My latest work
                    </h2>
                    <p className='subtitle'>
                        Want to see more?, Check my github!
                    </p>
                    <a href="https://github.com/matiasseeber" className='text-accent text-[30px] mx-7 hover:scale-125 transition-all hover:text-accent-hover w-fit' target={"_blank"}><FiGithub /></a>
                </div>
                <Projects />
            </div>
        </section>
    );
}
