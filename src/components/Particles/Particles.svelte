<script lang="ts">
  import Particles from "svelte-particles";
  import config from "./config";
  import { loadFull } from "tsparticles";

  let particlesConfig = config;
  let particlesInit = (engine) => {
    loadFull(engine)
  }
</script>

<div class="absolute top-0 bottom-0 left-0 right-0 h-full w-full -z-10">
  <Particles
    id="tsparticles"
    options="{particlesConfig}"
    particlesInit="{particlesInit}"
  />
</div>
