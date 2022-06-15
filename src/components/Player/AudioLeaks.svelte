<script>
  import Media from './Media.svelte';

  const sounds = [
    { title: "2. Captain (Ft. Juice (FRA) & Mister V)", url: "/audio/leaks/Captain.mp3" },
    { title: "3. Big Buckets (Ft. Di-Meh, Flem & Sheldon)", url: "/audio/leaks/Big_Buckets.mp3" },
    { title: "4. Maman (Ft. Dawn Beats & PLEEG)", url: "/audio/leaks/Maman-concat.mp3" },
    { title: "6. CDI Freestyle", url: "/audio/leaks/CDI_Freestyle.mp3" },
    { title: "7. Rudeboy", url: "/audio/leaks/Rudeboy.mp3" },
    { title: "8. La Vériter (Ft. Antoine Daniel & Baghera Jones)", url: "/audio/leaks/La_Vériter.mp3" },
    { title: "12. La Bagarre (Ft. Xavier Dang)", url: "/audio/leaks/La_Bagarre.mp3" },
    { title: "16. Interlude Mafieux (Ft. Patrick Baud & Roy Markson)", url: "/audio/leaks/Interlude_Mafieux.mp3" },
    { title: "17. Zen (Ft. Dawn Beats & Junkid)", url: "/audio/leaks/Zen-concat.mp3" },
    { title: "18. FTG (Ft. Luther)", url: "/audio/leaks/FTG.mp3" },
    { title: "20. Drake (Ft. Mehdi Maïzi)", url: "/audio/leaks/Drake.mp3" },
    { title: "21. Nous sommes les Daft Punk", url: "/audio/leaks/Daft_Punk.mp3" },
    { title: "23. Dig Dig Deep Deep (Ft. Horty & Pélerine) ", url: "/audio/leaks/Dig_Dig_Deep_Deep.mp3" },
    { title: "22. Zinédine Zidane (Ft. Epektase & Zinée)", url: "/audio/leaks/Zinédine_Zidane.mp3" },
    { title: "24. Lezgongue (Ft. Charly Kid, Epektase & SEB (FRA))", url: "/audio/leaks/Lesgongue.mp3" },
    { title: "25. Glow Up (Ft. Madj)", url: "/audio/leaks/Glow_Up.mp3" },
    { title: "26. Light You Up (Ft. Pélerine & PV Nova)", url: "/audio/leaks/Light_You_Up-concat.mp3" },
    { title: "27. Adieu les filles by Squeezie", url: "/audio/leaks/Adieu_les_filles.mp3" },
    { title: "29. Délirium Café", url: "/audio/leaks/Délirium_Café.mp3" },
    { title: "40. 3 Zèbres (Ft. Ysos)", url: "/audio/leaks/3_Zebres.mp3" },
    { title: "?. J'ai rien à leur dire.mp3", url: "/audio/leaks/J'ai_rien_à_leur_dire.mp3" },
    { title: "?. Jc pas.mp3", url: "/audio/leaks/Jc_pas.mp3" },
    { title: "?. Panpan", url: "/audio/leaks/Panpan-construct.mp3" },
    { title: "?. Un peu de cash.mp3", url: "/audio/leaks/Un_peu_de_cash.mp3" },
    { title: "?. Jc pas.mp3", url: "/audio/leaks/Jc_pas.mp3" },
    { title: "?. Interlude Deums.mp3", url: "/audio/leaks/Interlude_Deums.mp3" },
    { title: "?. Connais po", url: "/audio/leaks/Connais_tjr_pas.mp3" },
  ];

  let volume = 75;
</script>

<div class="mx-auto w-full lg:w-1/2 text-center hidden lg:block">
  <p class="text-sm lg:text-base">Volume (pour pas reveiller maman)</p>
  <p>Volume actuel : <span class="text-accent" id="volume">{Math.round(volume)}</span>/100</p>

  <input type="range" min="0" max="100" bind:value={volume} class="range range-accent mt-2">
</div>

<div class="flex items-center flex-wrap gap-4 justify-center mt-4 mb-8">
  {#each sounds as sound}
    <Media {...sound} volume={volume} on:volumechanged={(event) => volume = event.detail}></Media>
  {/each}
</div>
