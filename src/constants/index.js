import projects1 from "../assets/matilda-hex.webp";
import projects2 from "../assets/paragon-studios.webp";
import projects3 from "../assets/coming-soon.webp";

import person1 from "../assets/test-user-1.webp";
import person2 from "../assets/test-user-2.webp";
import person3 from "../assets/test-user-3.webp";
import person4 from "../assets/test-user-4.webp";

export const LINKS = [
	{href: "#about", label: "About"},
	{href: "#projects", label: "projects"},
	{href: "#testimonials", label: "Testimonials"},
	{href: "#contact", label: "Contact"},
];

export const HERO_CONTENT = {
	name: "Alan Webb",
	title: "Frontend Developer",
	introduction:
		"I'm a creative frontend developer, crafting immersive and intuitive web experiences.",
	description:
		"I’m currently helping small businesses bring their visions to life through interactive digital solutions.",
	resumeLinkText: "Download Resume",
	resumeLink: "/resume.pdf",
};

export const MARQUEE_TEXT =
	"| HTML5 || CSS3 || JavaScript || Bootstrap5 || Sass || TailwindCSS || React || Figma || Linux |";

export const ABOUT_CONTENT = {
	paragraphs: [
		"I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects, always ensuring high performance and seamless user experiences.",
		"I specialize in using technologies like React, and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while aiming to deliver projects that meet both business goals and user needs.",
	],
};

export const PROJECTS = [
	{
		name: "Matilda Hex",
		description: "Vendor of hexes and blessings",
		image: projects1,
		link: "https://matilda-hex.vercel.app/",
	},
	{
		name: "Paragon Studios",
		description: "Martial arts training videos",
		image: projects2,
		link: "https://paragon-studio.vercel.app/",
	},
	{
		name: "Coming Soon",
		description: "Watch this space for more content",
		image: projects3,
		link: "#",
	},
];

export const TESTIMONIALS = [
	{
		name: "Ysolde Ripley",
		title: "Engineer, Bachaus LTD",
		feedback:
			"If you want to take your business to the next level, use AW Dev and don't look any further. I would definitely be using their services.",
		image: person1,
	},
	{
		name: "Diana Prince",
		title: "Director of Training, Paragon Studios",
		feedback:
			"I would recommend AW Dev for anyone trying to get the word out about their business. AW Dev seems to instinctively know the right layout for your businesses website.",
		image: person2,
	},
	{
		name: "Bryce Conner",
		title: "Event Manager, Tech Noir",
		feedback:
			"I love AW Dev! This is an amazing service and it has saved me and my small business so much time. I plan to use it for as long as I am running my business.",
		image: person3,
	},
	{
		name: "Mathilda Hex",
		title: "High Priestess, Matilda Hex LTD",
		feedback:
			"I have been using AW Dev for over a year now and I love it! It really boosted my very niche business when I thought it wasn't going to take off.",
		image: person4,
	},
];

export const FOOTER_CONTENT = {
	socialLinks: [
		{
			platform: "GitHub",
			url: "https://github.com/Alan-Webb?tab=overview&from=2025-03-01&to=2025-03-13",
			ariaLabel: "View my GitHub profile",
			icon: "RiGithubFill",
		},
		{
			platform: "LinkedIn",
			url: "https://www.linkedin.com/in/alan-webb-41b1a9296/",
			ariaLabel: "Connect with me on LinkedIn",
			icon: "RiLinkedinFill",
		},
	],
};
