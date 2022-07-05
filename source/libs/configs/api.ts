/* eslint-disable key-spacing */

interface EndpointItem {
    /*
		endpoint of the api
	*/
    endpoint: string;

    /*
		http method of the api
	*/
    method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

    /*
		should we add authentication token to the api ?
		value is considered as false if omitted
	*/
    escapeAuthToken?: boolean;
    /*
		some request are not in JSON format and are in form data format
	*/
    isForm?: boolean;
}

interface Endpoints {
    [key: string]: EndpointItem;
}

export const configs = {
    apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    swrConfig: {
        focusThrottleInterval: 20000,
    },
    axiosConfig: {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
        timeout: 8000,
        headers: { "Content-Type": "application/json" },
    },
};

export const endpoints: Endpoints = {
	// -------------- Authentication --------------------------
	login:							{ endpoint: '/login',							method: 'POST',		escapeAuthToken: true	 },
	login_verify: 					{ endpoint: '/login/verify',					method: 'POST',		escapeAuthToken: true	 },
	login_renew_sms: 				{ endpoint: '/login/renew/sms',					method: 'POST',		escapeAuthToken: true	 },
	login_renew_call: 				{ endpoint: '/login/renew/call',				method: 'POST',		escapeAuthToken: true	 },

	register: 						{ endpoint: '/register/renew',					method: 'POST',		escapeAuthToken: true	 },
	register_verify: 				{ endpoint: '/register/verify',					method: 'POST',		escapeAuthToken: true	 },
	register_renew_sms: 			{ endpoint: '/register/renew/sms',				method: 'POST',		escapeAuthToken: true	 },
	register_renew_call: 			{ endpoint: '/register/renew/call',				method: 'POST',		escapeAuthToken: true	 },
	register_complete: 				{ endpoint: '/register/complete',				method: 'POST'								 },
	
	my_balance: 					{ endpoint: '/my/balance',						method: 'GET'								 },

	forgetPassword: 				{ endpoint: '/forget-password',					method: 'POST',		escapeAuthToken: true	 },
	forgetPassword_verify: 			{ endpoint: '/forget-password/verify',			method: 'POST',		escapeAuthToken: true	 },
	forgetPassword_renew_sms: 		{ endpoint: '/forget-password/renew/sms',		method: 'POST',		escapeAuthToken: true	 },
	forgetPassword_renew_call: 		{ endpoint: '/forget-password/renew/call',		method: 'POST',		escapeAuthToken: true	 },
	resetPassword: 					{ endpoint: '/reset-password',					method: 'POST'								 },
	changePassword: 				{ endpoint: '/change-password',					method: 'POST'								 },

	// -------------- User Profile ---------------------------
	profile: 						{ endpoint: '/profile',							method: 'GET'								 },
	profile_edit: 					{ endpoint: '/profile/edit',					method: 'POST'								 },
	profile_verify: 				{ endpoint: '/profile/edit/verify',				method: 'POST'								 },

	// -------------- Security -------------------------------
	googleAuth_request: 			{ endpoint: '/google-auth/request',				method: 'POST'								 },
	googleAuth_verify: 				{ endpoint: '/google-auth/verify',				method: 'POST'								 },
	mobileAuth_request: 			{ endpoint: '/mobile-auth/request',				method: 'POST'								 },
	mobileAuth_verify: 				{ endpoint: '/mobile-auth/verify',				method: 'POST'								 },
	emailAuth_request: 				{ endpoint: '/email-auth/request',				method: 'POST'								 },
	emailAuth_verify: 				{ endpoint: '/email-auth/verify',				method: 'POST'								 },

	// -------------- Accounting -----------------------------

	// -------------- History --------------------------------
	login_list: 					{ endpoint: '/security/login',					method: 'GET'								 },

	// -------------- Tickets ans Notifications --------------
	notification_list: 				{ endpoint: '/notification',					method: 'GET'								 },
	notification_read: 				{ endpoint: '/notification/read',				method: 'POST'								 },

	// -------------- Referral -------------------------------
	referral_code_list: 			{ endpoint: '/referral/code',					method: 'GET'								 },
	referral_code_new: 				{ endpoint: '/referral/code/new',				method: 'POST'								 },

	// -------------- Public apis ---------------------------
	product_view: 					{ endpoint: '/product/[id]',					method: 'GET',		escapeAuthToken: true	 },
	contact_new: 					{ endpoint: '/contact/new',						method: 'POST',		escapeAuthToken: true	 },
};
