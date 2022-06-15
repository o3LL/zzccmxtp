<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();

export let title;
export let url;
export let volume;
$: computedVolume = volume / 100;

const cardStyle = "card w-96 bg-base-200 shadow-xl ring-accent overflow-visible";
let isPlaying = false;

function playSound(event) {
  event.currentTarget.getElementsByTagName('audio')[0].play();
}

function handlePause(event) {
  isPlaying = false;
}

function handlePlay(event, isSound) {
  isPlaying = true;

  const media = document.body.querySelectorAll('audio')
  for (var i = 0; i < media.length; i++) {
    if(media[i] !== event.target) {
      media[i].pause();
    }
  };
}
</script>

<div class={isPlaying ? cardStyle + ' ring-1 playing' : cardStyle} on:click={(event) => playSound(event)}>
  <div class="card-body">
    <h2 class="card-title h-8 mb-2">{title}</h2>
    <figure class="mt-1">
      <audio
        onclick="event.stopPropagation();"
        controls
        preload="none"
        bind:volume={computedVolume}
        on:play={(event) => handlePlay(event)}
        on:pause={(event) => handlePause(event)}
        on:volumechange={() => dispatch('volumechanged', computedVolume * 100)}
      >
        <source src={`${url}.mp3`} type="audio/mpeg">
        <source src={`${url}.ogg`} type="audio/ogg">
      </audio>
    <a class="tooltip tooltip-primary ml-2 justify-end z-10" href={`${url}.mp3`} download data-tip={`Télécharger ${title}`} onclick="event.stopPropagation();">
      <button class="btn btn-square btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </button>
    </a>
    </figure>
    <slot/>
  </div>
</div>

<style>
</style>

