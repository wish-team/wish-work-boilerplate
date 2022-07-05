import useSWR from 'swr';
import { endpoints, configs } from './configs/api';
import replaceUrlMatchingParams from '../utils/replaceUrlMatchingParams';

export const useFetcher = (endpoint: string, params?: Object, isPrivate?: Boolean, revalidate?: Boolean) => {
    let withAuth = true
	let data, loading, err
	if(!endpoint) return {data: null}
	if(!isPrivate) {withAuth = false}

    const conf = endpoints[endpoint];
	
    // for redux implementation
    // const auth = useSelector(state => state.auth);

	const { url, remainingParams } = replaceUrlMatchingParams(conf.endpoint, params);

	if(withAuth) {

	/* for redux implementation */
    // const auth = useSelector(state => state.auth);	

	/* for context implementation */
	// const auth = useAuthContext()
		const { data: response, error } = useSWR({
			url,
			params: remainingParams,
			accessToken: 'auth.accessToken',
			refreshToken: 'auth.refreshToken',
		});
		data = response && response.data.ok ? response.data.data : {};
		loading = !response;
		err = error
	}
	else if(revalidate) {
		const {data: response, error} = useSWR({
			url,
			params: remainingParams,
			},
			{
				onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
					// Never retry on 404.
					if (error.status === 404) return
				
					// Never retry for a specific key.
					if (key === '/api/user') return
				
					// Only retry up to 10 times.
					if (retryCount >= 10) return
				
					// Retry after 5 seconds.
					setTimeout(() => revalidate({ retryCount }), 5000)
				  }			
			}			
		)

		data = response && response.data.ok ? response.data.data : {};
		loading = !response;
		err = error
	}

	else {
		const { data: response, error } = useSWR({
			url,
			params: remainingParams,
			accessToken: 'auth.accessToken',
			refreshToken: 'auth.refreshToken',
		});
		data = response && response.data.ok ? response.data.data : {};
		loading = !response;
		err = error
	}

    return { loading, data, err };

}

