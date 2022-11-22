import { About } from "./components/About";
import { Header } from "./components/Header"
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { useEffect } from "react";
import "./styles/showAnimation.css";
import { Footer } from "./components/Footer";

export const App = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }else{
                    entry.target.classList.remove("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".hiddenAnimation");
        hiddenElements.forEach((el) => observer.observe(el));
    }, [])
    
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}