import { useEffect } from "react";

export const skills = [
    { name: "JavaScript", image: "./assets/imgs/skills/js.png" },
    { name: "TypeScript", image: "./assets/imgs/skills/Typescript.svg.webp" },
    { name: "Node.js", image: "./assets/imgs/skills/nodejs.png" },
    { name: "React", image: "./assets/imgs/skills/reactjs.png" },
    { name: "PostgreSQL", image: "./assets/imgs/skills/postgresql.png" },
    { name: "AWS", image: "./assets/imgs/skills/Amazon-Web-Services-Logo.png" },
    { name: "Git", image: "./assets/imgs/skills/git.png" },
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
        <section className='bg-tertiary py-14 border-y border-white/5'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center mb-8 text-center'>
                    <p className='text-xs uppercase tracking-[0.3em] text-accent-hover'>Core toolkit</p>
                    <h2 className='mt-2 text-2xl font-inter text-white'>Tools I use to ship</h2>
                </div>
                <div className='mx-auto flex max-w-[820px] flex-wrap justify-center gap-4'>
                    {skills.map((skill, index) => {
                        return (
                            <div
                                className={`flex h-[90px] w-[100px] items-center justify-center rounded-sm border border-white/5 p-3 hover:border-accent/60 transition-colors duration-300 bg-[#FFFCFC]`}
                                key={index}
                            >
                                <img className={`h-16 w-20 object-contain skillImg hiddenAnimation ${skill.name === "JavaScript" ? "scale-150" : ""} ${skill.blend ? "mix-blend-multiply" : ""}`} src={skill.image} alt={`${skill.name} logo`} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
