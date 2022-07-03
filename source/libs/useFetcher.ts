import useSWR from 'swr';
import { endpoints, configs } from './configs/api';
import replaceUrlMatchingParams from '../utils/replaceUrlMatchingParams';

const useFetcher = (endpoint: string, params?: Object) => {
    if(!endpoint) return {data: null}
    const conf = endpoints[endpoint];

    // for redux implementation
    // const auth = useSelector(state => state.auth);

	const { url, remainingParams } = replaceUrlMatchingParams(conf.endpoint, params);

	const { data: response, error } = useSWR({
		url,
		params: remainingParams,
		accessToken: 'auth.accessToken',
		refreshToken: 'auth.refreshToken',
	});

    const data = response && response.data.ok ? response.data.data : {};
	const loading = !response;

    return { loading, data, error };

}

export default useFetcher