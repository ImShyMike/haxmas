<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	function goBack() {
		window.location.href = '/';
	}
</script>

<div class="container">
	<h1>Shop</h1>

	<div class="items-grid">
		{#each data.items as item}
			<div class="item-card">
				{#if item.image}
					<img src={item.image} alt={item.name} class="item-image" />
				{:else}
					<div class="item-image placeholder">Image Coming Soon</div>
				{/if}
				<div class="item-info">
					<h3>{item.name}</h3>
					<p class="cost">{item.cost} snowflakes</p>
				</div>
			</div>
		{/each}
	</div>

	{#if data.items.length === 0}
		<p class="empty-message">No items available in the shop right now.</p>
	{/if}

	<button class="back-btn" on:click={goBack}>← Back</button>
</div>

<style>
	.container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		padding-bottom: 100px;
		overflow-y: auto;
		background-color: #4285f4;
	}

	h1 {
		color: #fff;
		font-size: 3rem;
		margin-bottom: 2.5rem;
		text-align: center;
		padding: 0 1rem;
	}

	.items-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		max-width: 1000px;
		width: 100%;
	}

	@media (max-width: 900px) {
		.items-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 550px) {
		.items-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		h1 {
			font-size: 1.75rem;
			margin-bottom: 1.5rem;
		}
	}

	.item-card {
		background: rgba(255, 255, 255, 0.1);
		border: 3px solid #fff;
		border-radius: 8px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		transition: transform 0.2s, background 0.2s;
	}

	.item-card:hover {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.15);
	}

	.item-image {
		width: 100%;
		height: 180px;
		object-fit: cover;
		border-radius: 6px;
	}

	.item-image.placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.2);
		color: rgba(255, 255, 255, 0.7);
		font-size: 1rem;
	}

	.item-info {
		text-align: center;
		width: 100%;
	}

	.item-card h3 {
		color: #fff;
		margin: 0;
		font-size: 1.3rem;
		margin-bottom: 0.5rem;
	}

	.item-card .cost {
		color: #f1c40f;
		margin: 0;
		font-size: 1.1rem;
		font-weight: bold;
	}

	.empty-message {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.2rem;
		text-align: center;
		margin-top: 2rem;
	}

	.back-btn {
		position: fixed;
		bottom: 2rem;
		left: 2rem;
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid #fff;
		border-radius: 5px;
		color: #fff;
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		cursor: pointer;
		font-family: inherit;
		transition: background 0.2s;
	}

	.back-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}
</style>
