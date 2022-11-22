import React, { useState, useEffect } from 'react';
import { Project } from './Project';

const projects = [
    {
        image: "./src/assets/imgs/projects/SIA.png",
        name: "Servicios Integrales Argentina",
        url: "http://serviciosintegralesarg.com/",
        description: "My first project as a freelance developer. Landing page for cleaning company, developed with HTML, CSS, SCSS and Javascript."
    },
    {
        image: "./src/assets/imgs/projects/Portfolio.png",
        name: "Personal portfolio",
        url: "#",
        description: "Developed with HTML, CSS, React JS, Email JS and Tailwind CSS."
    },
    {
        image: "./src/assets/imgs/projects/AndroidStudio.png",
        name: "Dont waste me",
        source: "https://github.com/matiasseeber/ProyectoFinalTUSI",
        description: "Android application developed in android studio using Java. Clone of applications like Uber Eats or Pedidos ya."
    }
];

export const Projects = () => {
    useEffect(() => {
        const skillsImgs = document.getElementsByClassName("projectDelay");
        const transitionDelay = 200;
        for(let i = 0; i < skillsImgs.length; i++){
            let skillImg = skillsImgs[i];
                skillImg.style.transitionDelay = transitionDelay + i * 900 + "ms";
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