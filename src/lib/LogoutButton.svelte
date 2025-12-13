<script lang="ts">
	interface Props {
		className?: string;
	}

	let { className = '' }: Props = $props();

	let isHovered = $state(false);
</script>

<a href="/auth/logout" class={className} style="text-decoration: none; color: inherit;">
	<button
		style="
			padding: 10px 24px;
			border-radius: 8px;
			border: 2px solid #8492a6;
			background-color: {isHovered ? '#6b7a8f' : '#8492a6'};
			color: white;
			font-weight: 500;
			font-size: 1rem;
			cursor: pointer;
			transition: background 0.2s;
			pointer-events: all;
		"
		onmouseenter={() => (isHovered = true)}
		onmouseleave={() => (isHovered = false)}
		onfocus={() => (isHovered = true)}
		onblur={() => (isHovered = false)}
	>
		Log out
	</button>
</a>
