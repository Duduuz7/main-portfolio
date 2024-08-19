import { useRef, useState } from "react";
import NavBar from "../../components/NavBar/NavBar"
import AboutMe from "./sections/AboutMe/AboutMe"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects";
import Footer from "../../components/Footer/Footer";
import StyledMenuBar from "../../components/StyledMenuBar/StyledMenuBar";


const Home = () => {

    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const [showMenubar, setShowMenubar] = useState(false);

    const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
            setShowMenubar(false);
        }
    };

    return (
        <>
            <NavBar
                onClickAbout={() => handleScrollToSection(aboutMeRef)}
                onClickMenu={() => {
                    setShowMenubar(true)
                }}
                onClickSkills={() => handleScrollToSection(aboutMeRef)}
                onClickProjects={() => handleScrollToSection(projectsRef)}
            />

            <StyledMenuBar
                onClickShow={() => setShowMenubar(false)}
                onClickAbout={() => handleScrollToSection(aboutMeRef)}
                showMenubar={showMenubar}
                onClickSkills={() => handleScrollToSection(aboutMeRef)}
                onClickProjects={() => handleScrollToSection(projectsRef)} />

            <Hero />

            <div ref={aboutMeRef}>
                <AboutMe />
            </div>

            <div ref={projectsRef}>
                <Projects />
            </div>

            <Footer />
        </>
    )
}

export default Home
