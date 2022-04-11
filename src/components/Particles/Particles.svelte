<script>
  import { onMount } from "svelte";
  import { loadFull } from "tsparticles";

  import configPoo from './configPoo.json';
  import configZz from './configZz.json';

  let ParticlesComponent;
  let visible = false;
  onMount(async () => {
    const module = await import("svelte-particles");

    ParticlesComponent = module.default;
    visible = true;
  });

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
    console.log(event)
    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let onParticlesInit = async (event) => {
    const main = event.detail;
    console.log(event)
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
</script>

{#if visible}
<svelte:component
  this="{ParticlesComponent}"
  class="absolute top-0 bottom-0 left-0 right-0 h-full w-full z-0"
  id="tsparticles"
  options="{configPoo}"
  on:particlesLoaded="{onParticlesLoaded}"
  particlesInit="{onParticlesInit}"
/>
yo
<svelte:component
  this="{ParticlesComponent}"
  class="absolute top-0 bottom-0 left-0 right-0 h-full w-full z-0"
  id="tsparticles"
  options="{configZz}"
  on:particlesLoaded="{onParticlesLoaded}"
  particlesInit="{onParticlesInit}"
/>
{/if}
