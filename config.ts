import { InformationType, Theme } from "types";

/**
 * The theme of your portfolio. You can select one from the following. Make sure you and your friend choose a different one.
 * ["light",	"dark",	"cupcake",	"bumblebee",	"emerald",	"corporate",	"synthwave",	"retro",	"cyberpunk",	"valentine",	"halloween",	"garden",	"forest",	"aqua",	"lofi",	"pastel",	"fantasy",	"wireframe",	"black",	"luxury",	"dracula",	"cmyk",	"autumn",	"business",	"acid",	"lemonade",	"night",	"coffee",	"winter"]
 *
 * @type {Theme}
 */
export const theme: Theme = "dracula";

export const analyticsId = "G-3C7ZVG616P";
export const deployedURL = "https://abintimilsina.com.np";

export const information: InformationType = {
	email: "abintimilsina@gmail.com",
	firstName: "Abin",
	lastName: "Timilsina",
	description:
		"I am Abin Timilsina, a versatile web developer and software enthusiast skilled in creating innovative digital solutions, with a strong foundation in web technologies and a passion for effective communication.",
	highlightingStats: [
		{
			title: "Projects",
			value: 8,
		},
		{
			title: "Reddit Karma",
			value: 39253,
		},
	],
	socials: {
		github: "http://github.com/avintimilsina",
		linkedin: "https://www.linkedin.com/in/avintimilsina/",
		twitter: "https://twitter.com/avin_timilsina",
		instagram: "https://www.instagram.com/avin_timilsina/",
		facebook: "https://www.facebook.com/avin.timilsina.16/",
		medium: "https://medium.com/@abintimilsina16",
		youtube: null,
		stackoverflow: null,
	},
	whatido:
		"I've been learning web design for several years and am presently pursuing a degree as a Computer Science and Information Technology Student with an emphasis on web optimization and user experience.",
	skills: [
		{
			type: "Languages",
			list: ["English", "Nepali", "Hindi"],
		},
	],
	skillsWithIcons: [
		{
			type: "Frontend Centric",
			list: [ "TypeScript","Javascript", "Nextjs", "React", "HTML", "CSS",  "Tailwind", "Bootstrap", "Chakraui",],
		},
		{
			type: "Backend Centric",
			list: ["Nodejs", "Laravel", "PHP", "Python", "Firebase","MySQL", "Postgres","Datagrip"],
		},
		{
			type: "Data Centric",
			list: ["Python", "Scikit", "Pandas", "Numpy"],
		},
	],
	projects: [
		{
			name: "Hulak",
			description: "Hulak is a progressive logistics company in Nepal, leveraging modern technology and the trust of Nepal Post to transform the delivery industry.",
			link: "https://github.com/avintimilsina/hulak/",
			image: "/assets/hulak-mockup.png",
			badges: ["TypeScript", "Next.js","Chakra UI","Firebase"],
		},
		{
			name: "Chirp",
			description: "Chirp is a social media platform where you can share your thoughts with the world.",
			link: "https://github.com/avintimilsina/chirp/",
			image: "/assets/chirp-mockup.png",
			badges: ["TypeScript", "Next.js","Chakra UI","Firebase"],
		},
		{
			name: "Madre Co.",
			description: "Madre is restaurant website where you can order food online.",
			link: "https://github.com/avintimilsina/better-madre",
			image: "/assets/madre-mockup.png",
			badges: ["Javascript", "Typescript"],
		},
		{
			name: "Engrave",
			description: "Engrave is note taking app with clean UI and easy to use features. It is built using Nextjs, Tailwind, Firebase and JavaScript.",
			link: "https://github.com/avintimilsina/note-app",
			image: "/assets/engrave-mockup.png",
			badges: ["Javascript","TypeScript", "Next.js","Tailwind","Firebase"],
		},
	],
	workExperince: [],
	cheesyOutro: "",
};
