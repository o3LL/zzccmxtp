

<script>
  import twitterLogo from '../img/twitter.svg';

  let macrongueWrapperClassDisplay = "fixed bottom-0 left-0 z-50";
  let macrongueWrapperClassHidden = macrongueWrapperClassDisplay + " translate-y-full";

  let macrongueClass = "transition-transform ease-out duration-300";
  let macrongueDying = macrongueClass + " shake explode";
  let macrongueDead = macrongueClass + " hidden";

  let macrongueCurrentClass = macrongueClass;
  let isHidden = true;

  function killMacrongue() {
    macrongueCurrentClass = macrongueDying;

    setTimeout(() => {
      macrongueCurrentClass = macrongueDead;

      const modalInput = document.getElementById('modal-winner');
      modalInput.checked = true;
    }, 2000)
  }

  const timeout = Math.floor(
    Math.random() // 1.0 to 2.0
    * 10000 // 1 to 20sec
    * 100 // 1 to 20min
  );

  setTimeout(() => {
    isHidden = false;
  }, timeout);
</script>

<div>
  <div class={isHidden ? macrongueWrapperClassHidden : macrongueWrapperClassDisplay}>
    <div id="macrongue" class={macrongueCurrentClass} on:click={() => killMacrongue()}>
      <img width="300px" height="300px" src="/macrongue.webp" alt="Le méchan macerongue">
    </div>
  </div>
</div>

<input type="checkbox" id="modal-winner" class="modal-toggle">
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Bravo tu as turer macrongue le grand méchant!</h3>
    <p class="pt-4">Tu recoivre desrormais le badge du vaincreure! Tu peux annoncer a tous le mondre que toi aussi tu à vaincru le méchan macergonge!</p>
    <p class="py-4">Le monde va desormrais vraimen meiux !</p>
    <img width="100%" height="100%" src="/lequip.webp" alt="">

    <div class="modal-action flex mt-4 items-center justify-center">
      <a target="_blank" href="https://twitter.com/intent/tweet?related=alpr4zz&text=Superbre%20j%27ai%20vaincu%20le%20mechan%20macrongue%20sur%20le%20site%20internert%20vraiment%20pas%20officielle%20de%20la%20%23zzccmxtp%20!%20C%20comme%20un%20mini%20jeu%20video%20en%20moin%20bien%20que%20le%20vrai%20jeu%20zzcc%20enfaitre&url=https%3A%2F%2Fzzccmxtp.fr%2F">
        <div class="btn btn-sm rounded-full bg-[#1da1f2] text-white normal-case items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-4 w-4 mr-2 fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
            </path>
          </svg>
          Le partager sur Twitteur
        </div>
      </a>
      <label for="modal-winner" class="btn btn-error btn-sm">Ne rien dire</label>
    </div>
  </div>
</div>

<style>
@keyframes shake {
  from {transform: translate(2px, 1px) rotate(0deg) scale(1) ;}
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(0px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(2px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(2px, 2px) rotate(0deg); }
  to { transform: translate(-222px, -1522px) scale(5) rotate(30deg); }

}
.shake {
  animation-name: shake;
  animation-duration: 2s;
  transform-origin:50% 50%;
  animation-iteration-count: 1;
}

</style>
