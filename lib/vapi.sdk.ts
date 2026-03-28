import Vapi from '@vapi-ai/web';

const webToken =
	process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN ?? process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;

if (!webToken) {
	throw new Error(
		'Missing Vapi browser token. Set NEXT_PUBLIC_VAPI_WEB_TOKEN in your environment.'
	);
}


export const vapi = new Vapi(webToken);