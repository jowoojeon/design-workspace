<script>
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';

	const fetchTtsData = async () => {
		const text = '안녕하세요';
		const res = await fetch(`/${text}.json`);
		const result = res.arrayBuffer();
		console.log(result);
		// return await res.arrayBuffer();

		// const { audioData } = await res.arrayBuffer();
		// console.log('======================');
		// console.log(audioData);
		// console.log('======================');
		// return audioData;

		// const proxy = 'https://pacific-shelf-42608.herokuapp.com/';
		// const synthesize_url = `${proxy}https://kakaoi-newtone-openapi.kakao.com/v1/synthesize`;
		// const headers_synth = {
		// 	'Content-Type': 'application/xml',
		// 	Authorization: `KakaoAK b37f820cbbc5e27de9dd442ac1e6f0b6`
		// };
		// const synth_in = `<speak> <voice name='WOMAN_DIALOG_BRIGHT'> 테스트 </voice> </speak>`;

		// const res = await fetch(synthesize_url, {
		// 	method: 'POST',
		// 	headers: headers_synth,
		// 	body: JSON.stringify({
		// 		data: synth_in
		// 	})
		// });

		// if (!res.ok) {
		// 	const message = await res.text();
		// 	throw new Error(`[fetchTtsData] ${message}`);
		// }

		// return await res.arrayBuffer();
	};

	onMount(async () => {
		// JS 코드 시작
		const audioCtx = new AudioContext();
		let audioSource;

		const run = async () => {
			const audioData = await fetchTtsData();

			audioCtx.decodeAudioData(audioData, (buffer) => {
				audioSource = audioCtx.createBufferSource();
				audioSource.buffer = buffer;
				audioSource.connect(audioCtx.destination);
				audioSource.start(0);
			});
		};

		setInterval(() => {
			run();
		}, 2000);

		anime({
			targets: '.el',
			translateX: 250
		});
		// JS 코드 끝
	});
</script>

<!-- HTML 코드 시작 -->
<div class="el" />

<!-- HTML 코드 끝 -->
<style>
	/* CSS 코드 시작 */
	div {
		width: 100px;
		height: 100px;
		background-color: black;
		display: inline-block;
	}
	/* CSS 코드 끝*/
</style>
