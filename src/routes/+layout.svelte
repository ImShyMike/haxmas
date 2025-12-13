<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import LoginButton from '$lib/LoginButton.svelte';
	import ChristmasAnimation from '$lib/ChristmasAnimation.svelte';
	import XmasTree from '$lib/XmasTree.svelte';

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
</svelte:head>

{#if data.user}
	{@render children()}
{:else}
	<div class="landing-wrapper">
		<div class="login-header">
			<LoginButton />
		</div>
		<section class="hero-section">
			<ChristmasAnimation />
			
			<div class="hero-content">
				<img src="/haxmas-logo.png" alt="Haxmas" class="hero-logo" />
			</div>

			<div class="info-box">
				<p>Do workshops, get prizes! Repeat til Christmas!</p>
				<p>December 13-25, 2025</p>
			</div>
		</section>
		</div>

{/if}

<style>
	:global(body) {
		background-color: #000000;
		color: #ffffff;
		font-family: 'Roboto', Helvetica, Calibri, Arial, sans-serif;
		margin: 0;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		font-weight: 500;
	}

	:global(p, li) {
		font-weight: 300;
	}

	:global(strong) {
		font-weight: 500;
	}

	.landing-wrapper {
		position: relative;
	}

	.landing-wrapper :global(#presents) {
		display: none;
	}

	.landing-wrapper :global(#container) {
		position: absolute;
		top: 0;
		left: 0;
	}

	.login-header {
		position: absolute;
		top: 1rem;
		right: 1rem;
		z-index: 200;
	}

	.hero-section {
		min-height: 100vh;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		padding-top: 8rem;
	}

	.hero-content {
		position: relative;
		z-index: 150;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		padding: 2rem;
	}

	.info-box {
		position: relative;
		z-index: 150;
		background-color: rgba(26, 71, 42, 0.9);
		border: 2px solid #4a7c59;
		border-radius: 16px;
		padding: 2rem 3rem;
		max-width: 500px;
		width: 85%;
		text-align: center;
		margin-top: 1rem;
	}



	.info-box p {
		color: #fff;
		font-size: 1.25rem;
		line-height: 1.6;
		margin: 0 0 0.75rem 0;
		font-weight:500;
	}

	.info-box p:last-child {
		margin-bottom: 0;
	}

	.hero-logo {
		max-width: 550px;
		width: 85%;
		height: auto;
		margin-bottom: 1rem;
	}

	.hero-title {
		font-size: 5rem;
		color: #fff;
		font-weight: 700;
		letter-spacing: 4px;
		text-transform: uppercase;
		-webkit-text-stroke: 2px #900f10;
	}


	.hero-dates {
		font-size: 1.2rem;
		color: #f0f7ff;
		margin: 1.5rem 0 2rem 0;
		font-weight: 300;
	}

	.scroll-hint {
		margin-top: 2rem;
		color: #fff;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		opacity: 0.8;
		transition: opacity 0.2s;
	}

	.scroll-hint:hover {
		opacity: 1;
	}

	.scroll-arrow {
		font-size: 1.5rem;
		animation: scrollBounce 1.5s ease-in-out infinite;
	}

	@keyframes scrollBounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(5px); }
	}

	.info-section {
		background-color: #1a472a;
		padding: 5rem 2rem;
	}

	.info-container {
		max-width: 1000px;
		margin: 0 auto;
		text-align: center;
	}

	.section-title {
		font-size: 2.5rem;
		color: #fff;
		margin: 0 0 1.5rem 0;
	}

	.section-text {
		font-size: 1.2rem;
		color: #d4e7d4;
		max-width: 700px;
		margin: 0 auto 3rem auto;
		line-height: 1.7;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.5rem;
	}

	.feature-card {
		background-color: #2d5a3d;
		border: 2px solid #4a7c59;
		border-radius: 12px;
		padding: 1.5rem;
		text-align: center;
	}

	.feature-emoji {
		font-size: 2.5rem;
		display: block;
		margin-bottom: 0.75rem;
	}

	.feature-card h3 {
		color: #fff;
		font-size: 1.2rem;
		margin: 0 0 0.5rem 0;
	}

	.feature-card p {
		color: #b8d4b8;
		font-size: 0.95rem;
		margin: 0;
		line-height: 1.5;
	}

	.cta-section {
		background-color: #900f10;
		padding: 4rem 2rem;
	}

	.cta-container {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
	}

	.cta-title {
		font-size: 2rem;
		color: #fff;
		margin: 0 0 2rem 0;
	}

	.landing-footer {
		background-color: #0a0a0a;
		padding: 2rem;
		text-align: center;
	}

	.landing-footer p {
		margin: 0;
		color: #888;
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 3rem;
		}



		.hero-tree {
			width: 80px;
			height: 140px;
		}

		.hero-tree :global(.xmasTree) {
			transform: translate(-50%, -50%) scale(0.4);
		}

		.section-title {
			font-size: 1.8rem;
		}

		.cta-title {
			font-size: 1.5rem;
		}
	}

	:global(.rainbow-glow-row) {
		position: relative;
		background: linear-gradient(90deg, 
			rgba(255, 0, 0, 0.15),
			rgba(255, 154, 0, 0.15),
			rgba(208, 222, 33, 0.15),
			rgba(79, 220, 74, 0.15),
			rgba(63, 218, 216, 0.15),
			rgba(47, 201, 226, 0.15),
			rgba(28, 127, 238, 0.15),
			rgba(95, 21, 242, 0.15),
			rgba(186, 12, 248, 0.15),
			rgba(251, 7, 217, 0.15),
			rgba(255, 0, 0, 0.15)
		);
		background-size: 200% 100%;
		animation: rainbow-gradient-rotate 4s linear infinite;
	}

	@keyframes rainbow-gradient-rotate {
		0% {
			filter: hue-rotate(0deg);
		}
		100% {
			filter: hue-rotate(360deg);
		}
	}
</style>
