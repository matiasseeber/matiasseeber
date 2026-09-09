import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import "/src/styles/typingAnimation.css";

export const Hero = () => {
    const heroRef = useRef(null);
    const gridRef = useRef(null);
    const terminalRef = useRef(null);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduceMotion) return undefined;

        let frameId;
        const updateParallax = () => {
            const hero = heroRef.current;
            if (!hero) return;

            const offset = Math.min(Math.max(window.scrollY - hero.offsetTop, 0), window.innerHeight);
            gridRef.current.style.transform = `translate3d(0, ${offset * 0.12}px, 0)`;
            terminalRef.current.style.transform = `translate3d(0, ${offset * -0.18}px, 0) rotate(${offset * 0.015}deg)`;
            frameId = undefined;
        };

        const handleScroll = () => {
            if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        updateParallax();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (frameId) window.cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <section
            id='home'
            ref={heroRef}
            className='min-h-screen flex items-center bg-primary py-32 lg:py-0 overflow-hidden relative'
        >
            <div ref={gridRef} className='hero-parallax-grid absolute inset-0 opacity-20 pointer-events-none' style={{ backgroundImage: 'linear-gradient(rgba(172,107,52,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(172,107,52,0.12) 1px, transparent 1px)', backgroundSize: '72px 72px' }}></div>
            <div className='container mx-auto h-full relative'>
                <div className='flex items-center h-full pt-8 block max-w-full'>
                    <div className='flex-1 flex flex-col items-center lg:items-start max-w-full'>
                        <p className='mb-5 text-xs uppercase tracking-[0.35em] text-accent-hover'>Available for meaningful challenges</p>
                        <h1 className='text t1 font-inter text-[25px] leading-tight md:text-[45px] xl:text-[55px] max-w-full break-words'>
                            C:\mseeber&gt; Fullstack <span className='text-accent-hover'>Developer</span>
                        </h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
                            Backend-focused engineer crafting resilient products, event-driven systems and thoughtful web experiences.
                        </p>
                        <a href="MatiasSeeberEnglishCV.pdf" download={"MatiasSeeberEnglishCV"} className='btn btn-md bg-accent hover:bg-secondary-hover hover:scale-105 duration-500 md:btn-lg transition-all cursor-pointer'>
                            Download resume
                        </a>
                    </div>
                    <div ref={terminalRef} className='hero-parallax-terminal hidden lg:flex flex-1 justify-center items-center h-full text-[180px] text-accent hover:text-accent-hover transition-colors duration-500'>
                        <FontAwesomeIcon icon={faTerminal} />
                    </div>
                </div>
            </div>
        </section>
    )
}
