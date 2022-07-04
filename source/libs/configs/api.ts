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
	debitCard_list: 				{ endpoint: '/debit-card',						method: 'GET'								 },
	debitCard_new: 					{ endpoint: '/debit-card/new',					method: 'POST'								 },
	debitCard_delete: 				{ endpoint: '/debit-card/delete/[id]',			method: 'DELETE'							 },
	withdraw_request: 				{ endpoint: '/withdraw/request',				method: 'POST'								 },
	deposit_request: 				{ endpoint: '/deposit/request',					method: 'POST'								 },
	wallet_list: 					{ endpoint: '/wallet',							method: 'GET'								 },
	wallet_view: 					{ endpoint: '/wallet/[crypto]',					method: 'GET'								 },
	crypto_list: 					{ endpoint: '/crypto',							method: 'GET'								 },
	crypto_view: 					{ endpoint: '/crypto/[symbol]',					method: 'GET'								 },
	crypto_order_request: 			{ endpoint: '/crypto/order/[symbol]',			method: 'POST'								 },

	// -------------- History --------------------------------
	transaction_list: 				{ endpoint: '/transaction',						method: 'GET'								 },
	order_list: 					{ endpoint: '/order',							method: 'GET'								 },
	trade_list: 					{ endpoint: '/trade',							method: 'GET'								 },
	login_list: 					{ endpoint: '/security/login',					method: 'GET'								 },

	// -------------- Tickets ans Notifications --------------
	ticket_list: 					{ endpoint: '/ticket',							method: 'GET'								 },
	ticket_new: 					{ endpoint: '/ticket/new',						method: 'POST'								 },
	ticket_view: 					{ endpoint: '/ticket/[id]',						method: 'GET'								 },
	ticket_reply: 					{ endpoint: '/ticket/[id]',						method: 'POST'								 },
	notification_list: 				{ endpoint: '/notification',					method: 'GET'								 },
	notification_read: 				{ endpoint: '/notification/read',				method: 'POST'								 },

	// -------------- Exchange -------------------------------
	exchange_order: 				{ endpoint: '/exchange/order',					method: 'GET'								 },
	exchange_order_book: 			{ endpoint: '/exchange/order-book',				method: 'GET'								 },
	exchange_last_orders: 			{ endpoint: '/exchange/last/orders',			method: 'GET'								 },

	// -------------- Referral -------------------------------
	referral_code_list: 			{ endpoint: '/referral/code',					method: 'GET'								 },
	referral_code_new: 				{ endpoint: '/referral/code/new',				method: 'POST'								 },

	// -------------- Public apis ---------------------------
	product_view: 					{ endpoint: '/product/[id]',					method: 'GET',		escapeAuthToken: true	 },
	contact_new: 					{ endpoint: '/contact/new',						method: 'POST',		escapeAuthToken: true	 },
};
