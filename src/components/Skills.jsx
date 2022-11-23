import { useEffect } from "react";

export const skills = [
    {
        image: "./assets/imgs/skills/html5.png",
    },
    {
        image: "./assets/imgs/skills/css3.png",
    },
    {
        image: "./assets/imgs/skills/1200px-Sass_Logo_Color.svg.png",
    },
    {
        image: "./assets/imgs/skills/js.png",
    },
    {
        image: "./assets/imgs/skills/Java.png",
    },
    {
        image: "./assets/imgs/skills/nodejs.png",
    },
    {
        image: "./assets/imgs/skills/reactjs.png",
    },
    {
        image: "./assets/imgs/skills/git.png",
    },
    {
        image: "./assets/imgs/skills/tailwindcss.png",
    },
];

export const Skills = () => {
    useEffect(() => {
        const skillsImgs = document.getElementsByClassName("skillImg");
        const transitionDelay = 200;
        for(let i = 0; i < skillsImgs.length; i++){
            let skillImg = skillsImgs[i];
                skillImg.style.transitionDelay = transitionDelay + i * 200 + "ms";
        }
    }, [])
    
    return (
        <section className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div
                    className='flex flex-col items-center justify-between sm:flex-row'
                >
                    {skills.map((skill, index) => {
                        return (
                            <div
                                className='flex items-center justify-center m-5'
                                key={index}
                            >
                                <img className='w-[100px] skillImg hiddenAnimation' src={skill.image} alt='' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
