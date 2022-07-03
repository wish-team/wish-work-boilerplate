export const STATUS = {
	CODE: (number: number) => {
		if (number == 200) return {CODE: 200,ABR: 'ok',MESSAGE: 'submitted'};
		else if (number == 201) return {CODE: 201, ABR:'CREATED', MESSAGE:'item is created'};
		else if (number==202) return {CODE:202, ABR: 'ACCEPTED', MESSAGE: 'the request has been accepted'}
		else if (number==307) return {CODE: 307, ABR:'TEMP_REDIRECT', MESSAGE:'temporary redirect'}
		else if (number==308) return {CODE: 308, ABR:'PERM_REDIRECT', MESSAGE:'permanently redirect'}
		else if (number==400) return {CODE: 400, ABR:'BAD_REQUEST', MESSAGE:'bad request'}
		else if (number==401) return {CODE: 401, ABR:'UNAUTHORIZED', MESSAGE:'unauthorized request'}
		else if (number==403) return {CODE: 403, ABR:'FORBIDDEN', MESSAGE:'the request is forbidden'}
		else if (number==415) return {CODE: 415, ABR:'UNSUPPORTED_MEDIA_TYPE', MESSAGE:'unsupported media type'}
		else if (number==424) return {CODE: 424, ABR:'USER_ALREADY_EXIST', MESSAGE:'user already exist'}
		else if (number==425) return {CODE: 425, ABR:'USER_IS_NOT_VERIFIED', MESSAGE:'user is not verified'}
		else if (number==426) return {CODE: 426, ABR:'INVOICE_ALREADY_PAID', MESSAGE:'invoice is already paid'}
		else if (number==1009) return {CODE: 1009, ABR:'TOKEN_IS_NOT_VALID', MESSAGE:'token is not valid'}
		else return {CODE: 0, ABR:'undefined', MESSAGE:'undefined status code'}
	},
}
// example of usage 

// let a = STATUS.CODE(200).MESSAGE
// return res.json({status: 200, message: a})