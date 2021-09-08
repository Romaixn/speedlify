module.exports = {
	name: "rherault.fr", // optional, falls back to object key
	description: "Rherault website",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://rherault.fr/",
		"https://rherault.fr/a-propos",
		"https://rherault.fr/projets",
		"https://rherault.fr/contact",
		"https://rherault.fr/projets/rherault",
		"https://blog.rherault.fr",
		"https://blog.rherault.fr/ci-cd-symfony-5-heroku/",
	]
};
