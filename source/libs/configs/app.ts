const app = {
	debounce_delay: 1000, // milliseconds
	verification_opt_renew: 56, // seconds

	// populate from envs
	website_base_url: process.env.NEXT_PUBLIC_WEBSITE_BASE_URL,
	sentry_url: process.env.NEXT_PUBLIC_SENTRY_URL,
	google_analytics_key: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY,
	google_auth_client_id: process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID,
	google_recaptcha_sitekey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITEKEY,

};

export default app;
