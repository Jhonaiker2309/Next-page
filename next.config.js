/*const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
	images: {
		domains: ["http://localhost:3000"],
	},
};

module.exports = withPlugins([[withImages]], nextConfig);*/

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ["newsapi.org", "cdn.vox-cdn.com"],
	},
};


