<script>
  export let end;

  let done = false;
  let dayTime, hoursTime, minutesTime, secondsTime;
  let dayTimeCss = '--value:99';
  let hoursTimeCss = '--value:99';
  let minutesTimeCss = '--value:99';
  let secondsTimeCss = '--value:99';
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const endTime = new Date(end).getTime();

  const interval = setInterval(function () {
    let now = new Date().getTime();
    const difference = endTime - now;

    if (difference < 0) {
      clearInterval(interval);
      done = true;
      return;
    }

    dayTime = Math.floor(difference / days);
    dayTimeCss = `--value:${dayTime}`;

    hoursTime = Math.floor((difference % days) / hours);
    hoursTimeCss = `--value:${hoursTime}`;

    minutesTime = Math.floor((difference % hours) / minutes);
    minutesTimeCss = `--value:${minutesTime}`;

    secondsTime = Math.floor((difference % minutes) / seconds);
    secondsTimeCss = `--value:${secondsTime}`;
}, seconds);
</script>

<div>
  {#if !done}
    <h3 class="text-lg">La tape sort dans :</h3>

    <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style={dayTimeCss}></span>
        </span>
        jours
      </div>

      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style={hoursTimeCss}></span>
        </span>
        heurs
      </div>

      <div class="flex flex-col">
        <span class="countdown font-mono text-5xl">
          <span style={minutesTimeCss}></span>
        </span>
        min
      </div>

      <div class="flex flex-col">
         <span class="countdown font-mono text-5xl">
          <span style={secondsTimeCss}></span>
        </span>
        sec
      </div>
    </div>
  {/if}
  {#if done}
    <div class="alert shadow-lg">
      <div>
        <h3 class="text-lg">
          la tape est sorti mon chégé va voir sur <a href="https://zzcc.fr/mxtp" class="link" target="_blank">le vrai site</a> !
        </h3>
      </div>
    </div>
  {/if}
</div>
