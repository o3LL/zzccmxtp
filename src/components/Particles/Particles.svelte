<script>
  import Particles from "svelte-particles";
  import { tsParticles } from "tsparticles";

  import configPoo from './configPoo.json';
  import configZz from './configZz.json';

  tsParticles.load("tsparticlesPoo", configPoo)
  tsParticles.load("tsparticlesZz", configZz)
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
    await tsParticles.load("tsparticlesPoo", main);
  };
</script>

<div class="absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10">
  <Particles
    id="tsparticlesPoo"
    options="{configPoo}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{onParticlesInit}"
  />

  <Particles
    id="tsparticlesZz"
    options="{configZz}"
    on:particlesLoaded="{onParticlesLoaded}"
    particlesInit="{onParticlesInit}"
  />
</div>
