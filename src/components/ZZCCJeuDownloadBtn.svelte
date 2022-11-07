<script>
  export let className;

  let instruction
  function handleCheckbox() {
    instruction.checked = !instruction.checked;
  }
</script>

<a class="link link-accent"  on:click={() => handleCheckbox()} download href="https://s3.eu-west-1.amazonaws.com/zzccmxtp.fr/zzcclalegendre.rar" >
    <button class={`btn btn-accent text-black block w-fit justify-center ${className}`}>Télécharge le jeu!</button>
</a>

<input bind:this={instruction} type="checkbox" id="instruction" class="modal-toggle" />
<div class="modal">
  <div class="modal-box text-center">
    <h3 class="font-bold text-lg">Bravo tu a téléchargé le jeu!</h3>
    <br>
    <h1 class="text-xl text-red-600">🚨 Urgentissime 🚨</h1>
    <h1 class="text-xl">Quelques petites instructions nonobstant</h1>
    <ul>
      <li>- Dezipper le fichier <span class="text-slate-600">zzcclalegendre.rar</span> et l'extraire dans un petit dossier</li>
      <li>- Lancer l'executable susnommé du meme nom</li>
      <li>- Sauvegarder regulièrement pck sinon la vie de ma mere tu vas regretter</li>
      <li>- Jouer au meilleur jeu de ta vie</li>
    </ul>
    <br>
    <p class="text-xs">
      Maintenir la touche shift permet de sprinter mais ça panpan il a oublié de le dire (sinon faut bidouiller dans les options ça marche aussi)
    </p>
    <div class="modal-action">
      <button on:click={() => handleCheckbox()} class="btn btn-accent">D'acc</button>
    </div>
  </div>
</div>
