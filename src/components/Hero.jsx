import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import "/src/styles/typingAnimation.css";

export const Hero = () => {
    return (
        <section
            id='home'
            className='h-screen flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8 block max-w-full'>
                    <div className='flex-1 flex flex-col items-center lg:items-start max-w-full'>
                        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] max-w-full'>
                            {/* I build things <br /> for the web */}
                            <div>
                                <h3 className='text t1 font-inter xl:text-[55px]  md:text-[45px] text-[25px] max-w-full'>C:\mseeber\> Fullstack <span className='text-accent-hover'>Developer</span></h3>
                            </div>
                        </h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                            I build things for the web, i also can design and work with databases.
                        </p>
                        <a href="MatiasSeeberEnglishCV.pdf" download={"MatiasSeeberEnglishCV"} className='btn btn-md bg-accent hover:bg-secondary-hover hover:scale-125 duration-500 md:btn-lg transition-all cursor-pointer'>
                            Download resume
                        </a>
                    </div>
                    <div className='hidden lg:flex flex-1 justify-center items-center h-full text-[200px] text-accent hover:text-accent-hover'>
                        <FontAwesomeIcon icon={faTerminal} />
                    </div>
                </div>
            </div>
        </section>
    )
}
