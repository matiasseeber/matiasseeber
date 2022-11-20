import { useEffect } from "react";
import { About } from "./components/About";
import { Header } from "./components/Header"
import { Hero } from "./components/Hero";
// import { init } from "./components/js/typeWritter";

export const App = () => {
    


    // useEffect(() => {
    //     init();
    // }, [])
    

    return (
        <div>
            <Header />
            <Hero />
            <About />
            <div style={{ height: "1000px" }}></div>
        </div>
    )
}
