import { useRef } from "react";
import NavBar from "../../components/NavBar/NavBar"
import AboutMe from "./sections/AboutMe/AboutMe"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects";


const Home = () => {

    // Cria referências para as seções para utilizar o HandleScrollToSection
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);

    // Funções para rolar até as seções
    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <NavBar
                onClickAbout={() => handleScrollToSection(aboutMeRef)}
                onClickSkills={() => handleScrollToSection(aboutMeRef)}
                onClickProjects={() => handleScrollToSection(projectsRef)}
            />

            <Hero />
            <div ref={aboutMeRef}>
                <AboutMe />
            </div>
            {/* Supondo que você tenha componentes para Skills e Projects */}
            <div ref={projectsRef}> 
                <Projects/> 
             </div> 
        </>
    )
}

export default Home
