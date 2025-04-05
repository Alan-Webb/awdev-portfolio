import {MARQUEE_TEXT} from "../constants";
import {motion} from "framer-motion";

const Marquee = () => {
	return (
		<div className="w-full bg-pink-300 border border-black-900 text-black lg:py-6">
			<div className="flex overflow-hidden whitespace-nowrap">
				{[...Array(2)].map((_, i) => (
					<motion.h1
						initial={{x: "-100%"}}
						animate={{x: "0"}}
						transition={{repeat: Infinity, duration: 20, ease: "linear"}}
						key={i}
						className="py-2 text-4xl font-semibold leading-none tracking-tight lg:text-5xl">
						{MARQUEE_TEXT}
					</motion.h1>
				))}
			</div>
		</div>
	);
};

export default Marquee;
