<script>
  import Media, { defaultVolume } from "./Media.svelte";

  const sounds = [
    {
      title: "2. Captain (Ft. Juice (FRA) & Mister V)",
      url: "/audio/leaks/Captain",
    },
    {
      title: "3. Big Buckets (Ft. Di-Meh, Flem & Sheldon)",
      url: "/audio/leaks/Big_Buckets",
    },
    {
      title: "4. Maman (Ft. Dawn Beats & PLEEG)",
      url: "/audio/leaks/Maman-concat",
    },
    { title: "6. CDI Freestyle", url: "/audio/leaks/So_moi_meme" },
    { title: "7. Rudeboy", url: "/audio/leaks/Rudeboy" },
    {
      title: "8. La Vériter (Ft. Antoine Daniel & Baghera Jones)",
      url: "/audio/leaks/La_Veriter",
    },
    {
      title: "12. La Bagarre (Ft. Xavier Dang)",
      url: "/audio/leaks/La_Bagarre",
    },
    {
      title: "16. Interlude Mafieux (Ft. Patrick Baud & Roy Markson)",
      url: "/audio/leaks/Interlude_Mafieux",
    },
    {
      title: "17. Light You Up (Ft. Pélerine & PV Nova)",
      url: "/audio/leaks/Light_You_Up-concat",
    },
    { title: "18. FTG (Ft. Luther)", url: "/audio/leaks/FTG" },
    { title: "20. Drake (Ft. Mehdi Maïzi)", url: "/audio/leaks/Drake" },
    { title: "21. Nous sommes les Daft Punk", url: "/audio/leaks/Daft_Punk" },
    {
      title: "23. Dig Dig Deep Deep (Ft. Horty & Pélerine) ",
      url: "/audio/leaks/Dig_Dig_Deep_Deep",
    },
    {
      title: "22. Zinédine Zidane (Ft. Epektase & Zinée)",
      url: "/audio/leaks/Zinedine_Zidane",
    },
    {
      title: "24. Lezgongue (Ft. Charly Kid, Epektase & SEB (FRA))",
      url: "/audio/leaks/Lesgongue",
    },
    { title: "25. Glow Up (Ft. Madj)", url: "/audio/leaks/Glow_Up" },
    {
      title: "26. Zen (Ft. Dawn Beats & Junkid)",
      url: "/audio/leaks/Zen-concat",
    },
    { title: "26. Zen (juste un ptit bout)", url: "/audio/leaks/g_rien_a_leur_dire" },
    { title: "26. Zen (encor un ptit bout)", url: "/audio/leaks/Vibe" },
    {
      title: "27. Adieu les filles by Squeezie",
      url: "/audio/leaks/Adieu_les_filles",
    },
    { title: "29. Délirium Café", url: "/audio/leaks/Delirium_Cafe" },
    { title: "37. JRPG (Ft. Baek, Epektase & LE GRAND JD)", url: "/audio/leaks/JRPG" },
    { title: "38. Le milli (je crois)", url: "/audio/leaks/Panpan-construct" },
    { title: "40. 3 Zèbres (Ft. Ysos)", url: "/audio/leaks/3_Zebres" },
    { title: "bizarre. Eva Elfie (bah c sulfitman)", url: "/audio/leaks/sulfi-eva_elfi", sulfi: true },
    { title: "?. Interlude Deums", url: "/audio/leaks/Interlude_Deums" },
    { title: "?. Connais po", url: "/audio/leaks/Connais_tjr_pas" },
    { title: "QUE DES BARZ - DISS TRACTION (prod pas fini)", url: "/audio/leaks/Plugg" },
    { title: "QUE DES BARZ - DISS TRACTION (encore)", url: "/audio/leaks/CDI_Freestyle" },
  ];

  let volume = defaultVolume;
  let shoudPlayNext = true;

  function handleEnded(id) {
    if (!shoudPlayNext) return

    const nextId = id + 1;
    const mediaElement = document.getElementById('audioId-' + nextId);
    if (!mediaElement) return handleEnded(-1) // Retourne au debut si y'a pu d'son
    mediaElement.play();
  }
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

  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">Tou écouter a la suit (en gros c autoplaay genre c spotify ici un peu lol)</span> 
      <input
        type="checkbox"
        bind:checked={shoudPlayNext}
        class="checkbox checkbox-primary"
      />
    </label>
  </div>
</div>

<div class="flex items-center flex-wrap gap-4 justify-center mt-4 mb-8">
  {#each sounds as sound, id}
    <Media
      audioId={'audioId-' + id}
      glitch={true}
      {...sound}
      {volume}
      on:volumechanged={(event) => (volume = event.detail)}
      on:ended={() => handleEnded(id)}
    />
  {/each}
</div>
