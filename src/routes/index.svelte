<script>
	import anime from 'animejs/lib/anime.es';
	import { onMount } from 'svelte';
	onMount(() => {
		// JS 코드 시작
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
		background-color: grey;
		display: inline-block;
	}
	/* CSS 코드 끝*/
</style>
