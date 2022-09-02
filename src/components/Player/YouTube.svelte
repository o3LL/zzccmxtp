<script>
  export let id;
  export let description;
</script>

<div class="flex flex-wrap w-1/2 md:w-1/3">
  <div class="w-full p-2 md:p-4 tooltip" data-tip={description}>
    <div class="block object-cover object-center w-full h-full aspect-w-16 aspect-h-9 ring-1 ring-accent ring-offset-2 ring-offset-accent-focus">
      <lite-youtube videoid={id}>
        <!-- Bug fix, astro add undefined if nothing is defined inside an HTML Component -->
      </lite-youtube>
    </div>
  </div>
</div>

<style>
  lite-youtube::before {
    background-image: none;
  }
</style>
