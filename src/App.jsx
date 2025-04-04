import AnimatedBG from "./components/AnimatedBG.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Projects from "./components/Projects.jsx";
import Marquee from "./components/Marquee.jsx";

const App = () => {
	return (
		<>
			<AnimatedBG />
			<Navbar />
			<Hero />
			<Marquee />
			<About />
			<Projects />
			<Testimonials />
		</>
	);
};

export default App;
