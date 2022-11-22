import {Projects} from "./Projects";

export const Portfolio = () => {
    return (
        <section id='portfolio' className='section bg-primary min-h-screen'>
            <div className='container mx-auto flex justify-center items-center flex-col'>
                <div className='flex flex-col items-center text-center'>
                    <h2 className='hiddenAnimation section-title font-inter before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
                        My latest work
                    </h2>
                    <p className='subtitle hiddenAnimation'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
                        labore nisium illum cupiditate reiciendis a numquam
                    </p>
                </div>
                <Projects />
            </div>
        </section>
    );
}
