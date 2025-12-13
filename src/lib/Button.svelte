<script lang="ts">
	export let href: string | undefined = undefined;
	export let color: string = '#2196f3';
	export let className: string = '';

	let currentBg = color;
</script>

{#if href}
	<a {href} class={className} style="text-decoration: none; color: inherit;">
		<button
			style="
				padding: 10px 24px;
				border-radius: 8px;
				border: 2px solid #1976d2;
				background-color: {currentBg};
				color: white;
				font-weight: 500;
				font-size: 1rem;
				cursor: pointer;
				transition: background 0.2s, box-shadow 0.2s;
				box-shadow: 0 2px 6px rgba(0,0,0,0.1);
				pointer-events: all;
			"
			on:mouseover={() => (currentBg = '#1976d2')}
			on:mouseout={() => (currentBg = color)}
			on:focus={() => (currentBg = '#1976d2')}
			on:blur={() => (currentBg = color)}
		>
			<slot />
		</button>
	</a>
{:else}
	<button
		class={className}
		style="
			padding: 10px 24px;
			border-radius: 8px;
			border: 2px solid #1976d2;
			background-color: {currentBg};
			color: white;
			font-weight: 500;
			font-size: 1rem;
			cursor: pointer;
			transition: background 0.2s, box-shadow 0.2s;
			box-shadow: 0 2px 6px rgba(0,0,0,0.1);
			pointer-events: all;
		"
		on:click
		on:mouseover={() => (currentBg = '#1976d2')}
		on:mouseout={() => (currentBg = color)}
		on:focus={() => (currentBg = '#1976d2')}
		on:blur={() => (currentBg = color)}
	>
		<slot />
	</button>
{/if}
