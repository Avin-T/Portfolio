import { InformationType, Theme } from "types";

/**
 * The theme of your portfolio. You can select one from the following. Make sure you and your friend choose a different one.
 * ["light",	"dark",	"cupcake",	"bumblebee",	"emerald",	"corporate",	"synthwave",	"retro",	"cyberpunk",	"valentine",	"halloween",	"garden",	"forest",	"aqua",	"lofi",	"pastel",	"fantasy",	"wireframe",	"black",	"luxury",	"dracula",	"cmyk",	"autumn",	"business",	"acid",	"lemonade",	"night",	"coffee",	"winter"]
 *
 * @type {Theme}
 */
export const theme: Theme = "forest";

export const analyticsId = "G-3C7ZVG616P";
export const deployedURL = "https://abintimilsina.com.np";

export const information: InformationType = {
	email: "avin.timilsina.16@gmail.com",
	firstName: "Avin",
	lastName: "Timilsina",
	description:
		"I am a IT professional and a web developer. I am passionate about building web applications and solving problems.",
	highlightingStats: [
		{
			title: "Projects",
			value: 1,
		},
		{
			title: "Reddit Karma",
			value: 39253,
		},
	],
	socials: {
		github: "http://github.com/Avin-T",
		linkedin: "https://www.linkedin.com/in/avin-timilsina-a28a41216/",
		twitter: "https://twitter.com/Avin_Timilsina",
		instagram: "https://www.instagram.com/avin_timilsina/",
		facebook: "https://www.facebook.com/avin.timilsina.16/",
		medium: null,
		youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		stackoverflow: null,
	},
	whatido:
		"I`ve been learning web design for several years and am presently pursuing a degree as a Computer Science Engineer with an emphasis on database architecture, and machine learning.",
	skills: [
		{
			type: "Languages",
			list: ["English", "Hindi", "Nepali"],
		},
	],
	skillsWithIcons: [
		{
			type: "Frontend Centric",
			list: ["HTML", "CSS", "Javascript", "React", "Nextjs", "Angular"],
		},
		{
			type: "Backend Centric",
			list: ["Typescript", "Graphql", "Nodejs", "Nestjs", "Expressjs"],
		},
		{
			type: "Data Centric",
			list: ["Python", "Scikit Learn", "Tensorflow", "Keras", "Pytorch"],
		},
	],
	projects: [
		{
			name: "Madre-Co.",
			description: "This is restaurant website.",
			link: "https://github.com/Avin-T/Madre-Co./",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "HTML","CSS"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript", "Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Portfolio",
			description: "This is my portfolio website.",
			link: "https://sahrohit.github.io/",
			image: "https://picsum.photos/500/500",
			badges: ["Javascript", "Typescript"],
		},
	],
	workExperince: [],
	cheesyOutro: "Life Goes On.",
};
