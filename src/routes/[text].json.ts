export async function get({ params }) {
	const { text } = params;

	const synthesize_url = `https://kakaoi-newtone-openapi.kakao.com/v1/synthesize`;
	const headers_synth = {
		'Content-Type': 'application/xml',
		Authorization: `KakaoAK b37f820cbbc5e27de9dd442ac1e6f0b6`
	};
	const synth_in = `<speak> <voice name='WOMAN_DIALOG_BRIGHT'> ${text} </voice> </speak>`;

	console.log('1', text);
	console.log('2', import.meta.env.VITE_TTS_API_KEY);

	const res = await fetch(synthesize_url, {
		method: 'POST',
		headers: headers_synth,
		body: JSON.stringify({
			data: synth_in
		})
	});

	if (!res.ok) {
		const message = await res.text();
		throw new Error(message);
	}

	console.log('3', res.ok);

	return { res }

	// const audioData = await res.arrayBuffer();

	// console.log('4', audioData);

	// return { status: 200, body: { audioData } };
}
