import Hero from "./components/Hero.jsx";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Highlights from "./components/Highlights.jsx";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
    return (
        <main>
            <Hero />
            <Highlights />
        </main>
    )
}

export default App
