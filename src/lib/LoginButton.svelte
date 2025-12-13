<script lang="ts">
	interface Props {
		className?: string;
	}

	let { className = '' }: Props = $props();

	let isHovered = $state(false);
</script>

<a href="/auth/login" class={className} style="text-decoration: none; color: inherit;">
	<button
		style="
			padding: 10px 24px;
			border-radius: 8px;
			border: 2px solid #ec3750;
			background-color: {isHovered ? '#c42e44' : '#ec3750'};
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
		Log in with Hack Club
	</button>
</a>
