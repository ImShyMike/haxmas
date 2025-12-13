<style>
  @import url("https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css");

  .presents {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 50;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  .present {
    font-family: FontAwesome;
    content: "\f06b";
    color: #eb0000;
    font-size: 3rem;
    animation: float 3s ease-in-out infinite;
  }

  .present:nth-child(2) {
    animation-delay: 0.5s;
    color: #f1c40f;
  }

  .present:nth-child(3) {
    animation-delay: 1s;
    color: #33d6a6;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
</style>

<script>
  function comingSoon() {
    alert("Coming very soon!");
  }
</script>

<div class="presents">
  <i class="present fa fa-gift" on:click={comingSoon} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && comingSoon()}></i>
  <i class="present fa fa-gift" on:click={comingSoon} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && comingSoon()}></i>
  <i class="present fa fa-gift" on:click={comingSoon} role="button" tabindex="0" on:keydown={(e) => e.key === 'Enter' && comingSoon()}></i>
</div>
