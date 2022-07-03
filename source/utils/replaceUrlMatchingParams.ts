export default function replaceUrlMatchingParams(url: string, params?: Object) {
    if (!params && typeof params !== 'object') return { url };

    let remainingParams = { ...params };
    let finalUrl = url;
    
    Object.keys(remainingParams).forEach(p => {
        const { [p]: value, ...rest } = remainingParams;

        if (finalUrl.includes(`[${p}]`)) {
            finalUrl = finalUrl.split(`[${p}]`).join(value);
            remainingParams = rest;
        }
    });

    return { url: finalUrl, remainingParams };
},