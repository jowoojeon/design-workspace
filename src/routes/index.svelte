<script>
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';
	onMount(() => {
		// JS 코드 시작
		const time = 5000;
		const timeline1 = anime.timeline({
			duration: time,
			easing: 'easeOutExpo'
		});
		timeline1.add({
			targets: '.eye_r',
			d: [
				{
					value:
						'M531.218 122C525.698 126.86 510.238 135.55 510.238 167.45L510.308 204.71L510.388 247.79C510.388 247.79 509.368 265.37 520.018 276.51C541.658 264.71 573.788 264.87 596.178 277.29C598.878 273.5 604.078 265.2 605.288 256.08C607.518 239.32 605.498 174.22 605.498 174.22C605.498 174.22 559.878 167.02 531.208 122.01'
				}
			]
		});

		// JS 코드 끝
	});
</script>

<!-- HTML 코드 시작 -->
<div>
	<svg
		width="800"
		height="480"
		viewBox="0 0 800 480"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			class="eye_r"
			d="M577.52 106C577.52 106 529.5 106.1 529.5 160.42L529.57 197.68L529.65 240.76C529.65 240.76 533.81 289.36 577.43 289.36C621.05 289.36 625.38 240.76 625.38 240.76V160.86C625.38 160.86 627.6 106 577.52 106Z"
			fill="black"
		/>
	</svg>
</div>

<!-- HTML 코드 끝 -->
<style>
	/* CSS 코드 시작 */

	/* CSS 코드 끝*/
</style>
