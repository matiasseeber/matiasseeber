import React, { useState, useEffect } from 'react';
import { Project } from './Project';

const projects = [
    {
        image: "./src/assets/imgs/projects/2022-11-20_20h18_24.png",
        name: "test"
    },
    {
        image: "./src/assets/imgs/projects/2022-11-20_20h18_24.png",
        name: "test"
    },
    {
        image: "./src/assets/imgs/projects/2022-11-20_20h18_24.png",
        name: "test"
    }
];

export const Projects = () => {
    useEffect(() => {
        const skillsImgs = document.getElementsByClassName("projectDelay");
        const transitionDelay = 200;
        for(let i = 0; i < skillsImgs.length; i++){
            let skillImg = skillsImgs[i];
                skillImg.style.transitionDelay = transitionDelay + i * 600 + "ms";
        }
    }, []);
    return (
        <div>
            <section className='grid gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8'>
                {projects.map((item, index) => {
                    return <div className="hiddenAnimation block projectDelay">
                        <Project item={item} key={index} />
                    </div>;
                })}
            </section>
        </div>
    );
};