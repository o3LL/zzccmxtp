<script>
  import Media from "./Media.svelte";

  const sounds = [
    { title: "3 Freres Topline", url: "/audio/3freres_topline" },
    { title: "Bagarre Legende ZZCC", url: "/audio/bagarre_legende_zzcc" },
    { title: "Balade de panpan", url: "/audio/balade_de_panpan" },
    { title: "Jazz", url: "/audio/JAZZ_32" },
    { title: "Squeezie - Donde esta la biblioteca", url: "/audio/LV2_53" },
    {
      title: "N64KIDDO - WE ALL FALL DOWN",
      url: "/audio/N64KIDDO_-_WE_ALL_FALL_DOWN",
    },
    { title: "TwitterLand", url: "/audio/TwitterLand" },
    {
      title: "Cacabox - All Night Extreme",
      url: "/audio/cacabox_all_night_extreme",
    },
    {
      title: "GRANDJD Voix (g reverse le son)",
      url: "/audio/grandjd-voix-rereverse",
    },
    { title: "Interlude Clash", url: "/audio/interlude_clash" },
    { title: "Le Rap de Krono", url: "/audio/le_rap_de_krono" },
    { title: "Musique Foret", url: "/audio/musique_foret" },
    {
      title: "Pandrezz - 4basses (142BPM)",
      url: "/audio/pandrezz_-_4basses_142BPM",
    },
    {
      title: "Pandrezz x sadtoi - Plasticine",
      url: "/audio/pandrezz_x_sadtoi_-_Plasticine",
    },
    { title: "PipoLapi", url: "/audio/pipolapi" },
    { title: "PPManga", url: "/audio/ppmanga" },
    { title: "Smokin drogz", url: "/audio/smokin-drogz-_1_" },
  ];

  let volume = 75;
</script>

<div class="mx-auto w-full lg:w-1/2 text-center hidden lg:block">
  <p class="text-sm lg:text-base">Volume (pour pas reveiller maman)</p>
  <p>
    Volume actuel : <span class="text-accent" id="volume"
      >{Math.round(volume)}</span
    >/100
  </p>

  <input
    type="range"
    min="0"
    max="100"
    bind:value={volume}
    class="range range-accent mt-2"
  />
</div>

<div class="flex items-center flex-wrap gap-4 justify-center mt-4 mb-8">
  {#each sounds as sound}
    <Media
      {...sound}
      {volume}
      on:volumechanged={(event) => (volume = event.detail)}
    />
  {/each}
</div>
