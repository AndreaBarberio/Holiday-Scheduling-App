const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
	env: {
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
	},
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.resolve.fallback.fs = false;
			config.resolve.fallback.child_process = false;
			config.resolve.fallback.net = false;
			config.resolve.fallback.tls = false;
		}
		return config;
	},
};

module.exports = nextConfig;
